using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using PokemonShopping.Application.DTOs;
using PokemonShopping.Domain.Interfaces;
using PokemonShopping.Domain.Models;
using Stripe;
using Stripe.Issuing;
using Product = PokemonShopping.Domain.Models.Product;

namespace PokemonShopping.Application.Services.Interfaces
{
    public class ShoppingCartApplication : ApplicationBase, IShoppingCartApplication
    {
        private readonly Guid UserId;

        public ShoppingCartApplication(IUnitOfWork uow, IMapper mapper, IConfiguration configuration, IHttpContextAccessor httpContextAccessor) : base(uow, mapper, configuration)
        {
            UserId = Guid.Parse(httpContextAccessor.HttpContext?.User.Claims.FirstOrDefault(c => c.Type == "UserId").Value);
        }

        public async Task<ApiResult<ShoppingCartDTO>> AddToCartAsync(AddToCartDTO dto)
        {
            var cart = await _uow.GetRepository<ShoppingCart>().SingleOrDefaultAsync(x => x.UserId == UserId && x.State == Domain.Enums.ShoppingCartStateEnum.pending);

            var productInCart = await _uow.GetRepository<ProductInCart>().SingleOrDefaultAsync(x => x.ProductId == dto.ProductId && x.ShoppingCartId == cart.Id);

            if (productInCart == null)
            {

                productInCart = new ProductInCart()
                {
                    ProductId = dto.ProductId,
                    ShoppingCartId = cart.Id,
                    Quantity = dto.Quantity
                };

                await _uow.GetRepository<ProductInCart>().AddAsync(productInCart);
            }
            else
            {

                productInCart.Quantity += dto.Quantity;

                if (productInCart.Quantity == 0)
                {
                    await _uow.GetRepository<ProductInCart>().DeleteAsync(productInCart.ProductId, productInCart.ShoppingCartId);
                }
                else
                {
                    await _uow.GetRepository<ProductInCart>().UpdateAsync(productInCart, productInCart.ProductId, productInCart.ShoppingCartId);
                }
            }


            await _uow.CommitAsync();

            return await this.GetShoppingCart();
        }

        private async Task<ShoppingCart> CreateCart(ShoppingCart? cart)
        {
            if (cart == null)
            {
                cart = new ShoppingCart()
                {
                    Id = Guid.NewGuid(),
                    UserId = UserId,
                    Date = DateTime.Now,
                    State = Domain.Enums.ShoppingCartStateEnum.pending,
                    Products = new List<ProductInCart>()
                };

                await _uow.GetRepository<ShoppingCart>().AddAsync(cart);
            }

            return cart;
        }

        public async Task<ApiResult<ShoppingCartDTO>> GetShoppingCart()
        {
            var cart = await _uow.GetRepository<ShoppingCart>().SingleOrDefaultAsync(x => x.UserId == UserId && x.State == Domain.Enums.ShoppingCartStateEnum.pending, i => i.Products);

            if (cart == null)
            {
                cart = await CreateCart(cart);

                await _uow.CommitAsync();
            }
            else
            {
                cart.Products.ForEach(async x =>
                   x.Product = await _uow.GetRepository<Product>().SingleOrDefaultAsync(y => y.Id == x.ProductId)
               );
            }

            return new ApiResult<ShoppingCartDTO>()
            {
                Success = true,
                Payload = _mapper.Map<ShoppingCartDTO>(cart)
            };
        }

        public async Task<ApiResult<PaymentResponseDTO>> PurchaseAsync(PaymentRequestDTO request)
        {
            var cart = await _uow.GetRepository<ShoppingCart>().SingleOrDefaultAsync(x => x.UserId == UserId && x.State == Domain.Enums.ShoppingCartStateEnum.pending, i => i.Products);
            cart.Products.ForEach(async x =>
                  x.Product = await _uow.GetRepository<Product>().SingleOrDefaultAsync(y => y.Id == x.ProductId)
              );

            var amount = cart.Products.Sum(x => x.Quantity * x.Product.Price)*100;

            var chargeOptions = new ChargeCreateOptions
            {
                Amount = (long)amount,
                Currency = "usd",
                Description = $"Compra del carrito {cart.UserId} del usuario {UserId}",
                Source = request.Token
            };

            var chargeService = new ChargeService();
            try
            {
                var charge = chargeService.Create(chargeOptions);

                cart.State = Domain.Enums.ShoppingCartStateEnum.purchase;

                cart.PurchaseDate = DateTime.Now;

                cart.TransferId = charge.TransferId;

                await _uow.GetRepository<ShoppingCart>().UpdateAsync(cart, cart.Id);

                await _uow.CommitAsync();

                return new ApiResult<PaymentResponseDTO>()
                {
                    Success = true,
                    Payload = new PaymentResponseDTO() { 
                        TrnsferId = cart.TransferId
                    }
                };
            }
            catch (StripeException ex)
            {
                return new ApiResult<PaymentResponseDTO>()
                {
                    Success = false,
                    Message = ex.Message
                };
            }
        }

        public async Task<ApiResult<IEnumerable<ShoppingCartDTO>>> GetPurchasedCartsAsync()
        {
            var carts = await _uow.GetRepository<ShoppingCart>().ListAsync(x => x.UserId == UserId && x.State == Domain.Enums.ShoppingCartStateEnum.purchase, i => i.Products);

            if (carts == null) return null;

            return new ApiResult<IEnumerable<ShoppingCartDTO>>()
            {
                Success = true,
                Payload = _mapper.Map<IEnumerable<ShoppingCartDTO>>(carts)
            };
        }


    }
}
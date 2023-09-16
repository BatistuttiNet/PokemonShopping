using PokemonShopping.Application.DTOs;
using PokemonShopping.Domain.Interfaces;

namespace PokemonShopping.Application.Services.Interfaces
{
    public class ShoppingCartApplication : IShoppingCartApplication
    {
        private readonly IUnitOfWork _uow;

        public ShoppingCartApplication(IUnitOfWork uow)
        {
            _uow = uow;
        }

        public Task<ApiResult<bool>> AddToCartAsync(AddToCartDTO dto)
        {
            throw new NotImplementedException();
        }

        public Task<ApiResult<bool>> PurchaseAsync()
        {
            throw new NotImplementedException();
        }
    }
}
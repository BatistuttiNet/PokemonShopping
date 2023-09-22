using PokemonShopping.Application.DTOs;
using PokemonShopping.Domain.Models;

namespace PokemonShopping.Application.Services.Interfaces
{
    public interface IShoppingCartApplication
    {
        Task<ApiResult<ShoppingCartDTO>> GetShoppingCart();
        Task<ApiResult<ShoppingCartDTO>> AddToCartAsync(AddToCartDTO dto);
        Task<ApiResult<PaymentResponseDTO>> PurchaseAsync(PaymentRequestDTO token);
        Task<ApiResult<IEnumerable<ShoppingCartDTO>>> GetPurchasedCartsAsync();
    }
}
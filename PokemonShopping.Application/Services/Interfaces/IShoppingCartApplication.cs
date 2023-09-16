using PokemonShopping.Application.DTOs;

namespace PokemonShopping.Application.Services.Interfaces
{
    public interface IShoppingCartApplication
    {
        Task<ApiResult<bool>> AddToCartAsync(AddToCartDTO dto);
        Task<ApiResult<bool>> PurchaseAsync();
    }
}
using PokemonShopping.Application.DTOs;

namespace PokemonShopping.Application.Services
{
    public interface IProductService
    {
        Task<ApiResult<IEnumerable<UserDto>>> GetProductsByFilterAsync(ProductFilter filter);

        Task<ApiResult<UserDto>> CreateUser();
    }
}

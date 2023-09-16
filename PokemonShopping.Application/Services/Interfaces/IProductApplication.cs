using PokemonShopping.Application.DTOs;
using PokemonShopping.Domain.Models;

namespace PokemonShopping.Application.Services.Interfaces
{
    public interface IProductApplication
    {
        Task<ApiResult<IEnumerable<ProductDTO>>> GetProductsByFilterAsync(ProductFilter filter);
    }
}

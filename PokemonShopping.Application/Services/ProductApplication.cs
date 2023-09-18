using AutoMapper;
using Microsoft.Extensions.Configuration;
using PokemonShopping.Application.DTOs;
using PokemonShopping.Application.Services.Interfaces;
using PokemonShopping.Domain.Interfaces;
using PokemonShopping.Domain.Models;

namespace PokemonShopping.Application.Services
{
    public class ProductApplication: ApplicationBase, IProductApplication
    {
        public ProductApplication(IUnitOfWork uow, IMapper mapper, IConfiguration configuration) : base(uow, mapper, configuration)
        {
        }

        public async Task<ApiResult<IEnumerable<ProductDTO>>> GetProductsByFilterAsync(ProductFilter filter)
        {
            var result = await _uow.GetRepository<Product>().ListAsync(
                p =>
                     (string.IsNullOrEmpty(filter.Name) || p.Name.Contains(filter.Name, StringComparison.OrdinalIgnoreCase))
                  && (string.IsNullOrEmpty(filter.Description) || p.Description.Contains(filter.Description, StringComparison.OrdinalIgnoreCase))
                  && (string.IsNullOrEmpty(filter.Category) || p.Category.Contains(filter.Category, StringComparison.OrdinalIgnoreCase))
                  && (!filter.PriceFrom.HasValue || p.Price <= filter.PriceFrom.Value)
                  && (!filter.PriceTo.HasValue || p.Price >= filter.PriceTo.Value)
                , p => p.Price , "desc");

            return new ApiResult<IEnumerable<ProductDTO>>()
            {
                Success = true,
                Payload = _mapper.Map<IEnumerable<ProductDTO>>(result),
                Message = string.Empty
            };
        }

    }
}

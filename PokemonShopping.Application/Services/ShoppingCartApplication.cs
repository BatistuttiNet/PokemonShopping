using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using PokemonShopping.Application.DTOs;
using PokemonShopping.Domain.Interfaces;

namespace PokemonShopping.Application.Services.Interfaces
{
    public class ShoppingCartApplication : ApplicationBase, IShoppingCartApplication
    {
        private readonly IHttpContextAccessor _httpContextAccessor;

        public ShoppingCartApplication(IUnitOfWork uow, IMapper mapper, IConfiguration configuration, IHttpContextAccessor httpContextAccessor) : base(uow, mapper, configuration)
        {
            _httpContextAccessor = httpContextAccessor;
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
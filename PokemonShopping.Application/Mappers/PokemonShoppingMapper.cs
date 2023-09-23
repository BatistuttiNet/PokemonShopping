using PokemonShopping.Application.DTOs;
using PokemonShopping.Domain.Models;

namespace PokemonShopping.Application.Mappers
{
    public class PokemonShoppingMapping : AutoMapper.Profile
    {
        public PokemonShoppingMapping()
        {

            CreateMap<Product, ProductDTO>();
            CreateMap<CreateUserDto, User>();
            CreateMap<User, UserDto>();
            CreateMap<UserDto, User>();
            CreateMap<ShoppingCart, ShoppingCartDTO>();
            CreateMap<ProductInCart, ProductInCartDTO>();
        }
    }

}
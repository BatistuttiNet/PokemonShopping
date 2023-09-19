using PokemonShopping.Application.DTOs;
using PokemonShopping.Domain.Models;

namespace PokemonShopping.Application.Mappers
{
    public class PokemonShoppingMapping : AutoMapper.Profile
    {
        public PokemonShoppingMapping()
        {

            CreateMap<Product, ProductDTO>()
                .ForMember(dest => dest.Img, src => src.MapFrom(s => Convert.ToBase64String(s.Img)));
            CreateMap<CreateUserDto, User>();
            CreateMap<User, UserDto>();
            CreateMap<ShoppingCart, ShoppingCartDTO>();
            CreateMap<ProductInCart, ProductInCartDTO>();
        }
    }

}
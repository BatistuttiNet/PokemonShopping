using PokemonShopping.Application.DTOs;
using PokemonShopping.Domain.Models;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PokemonShopping.Application.Mappers
{
    public class PokemonShoppingMapping : AutoMapper.Profile
    {
        public PokemonShoppingMapping()
        {

            CreateMap<Product, ProductDTO>()
                .ForMember(dest => dest.Img, src => src.MapFrom(s => Convert.ToBase64String(s.Img)));
        }
    }

}
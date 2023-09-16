using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PokemonShopping.Application.DTOs
{
    public class ProductFilter
    {
        public string? Name { get; set; }
        public string? Description { get; set; }
        public decimal? PriceFrom { get; set; }
        public decimal? PriceTo { get; set; }
        public string? Category { get; set; }
    }
}

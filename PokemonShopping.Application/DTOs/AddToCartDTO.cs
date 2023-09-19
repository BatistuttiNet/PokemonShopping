using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PokemonShopping.Application.DTOs
{
    public class AddToCartDTO
    {
        public Guid ProductId { get; set; }
        public int Quantity { get; set; }
    }
}

namespace PokemonShopping.Domain.Models
{
    public class ProductInCartDTO
    {
        public int? Quantity { get; set; }
        public ProductDTO Product { get; set; }
    }
}
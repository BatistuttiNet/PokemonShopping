namespace PokemonShopping.Domain.Models
{
    public class ProductInCartDTO
    {
        public int? Quantity { get; set; }
        public Product Product { get; set; }
    }
}
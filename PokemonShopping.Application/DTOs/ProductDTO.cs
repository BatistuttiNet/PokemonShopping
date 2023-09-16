namespace PokemonShopping.Domain.Models
{
    public class ProductDTO
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public string Img { get; set; }
        public string Category { get; set; }
    }
}
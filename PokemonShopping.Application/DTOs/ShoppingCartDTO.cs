namespace PokemonShopping.Domain.Models
{
    public class ShoppingCartDTO
    {
        public Guid Id { get; set; }
        public List<ProductInCartDTO> Products { get; set; }
    }
}
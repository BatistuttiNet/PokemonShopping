namespace PokemonShopping.Domain.Models
{
    public class ShoppingCart
    {
        public Guid Id { get; set; }
        public User User { get; set; }
        public ShoppingCartStateEnum State { get; set; }
        public List<Product> Products { get; set; }
        public DateTime Date { get; set; }
    }
}
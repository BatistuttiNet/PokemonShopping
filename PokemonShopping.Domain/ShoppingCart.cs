namespace PokemonShopping.Domain
{
    public class ShoppingCart
    {
        public Guid Id { get; set; }
        public User User { get; set; }
        public List<Product> Products { get; set; }
        public DateTime CreationDate { get; set; }
    }
}
namespace PokemonShopping.Domain
{
    public class PurchaseHistory
    {
        public Guid Id { get; set; }
        public User User { get; set; }
        public List<Product> Products { get; set; }
        public decimal Total { get; set; }
        public DateTime PurchaseDate { get; set; }
    }
}
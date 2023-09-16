namespace PokemonShopping.Domain.Models
{
    public class ProductInCart
    {
        public Guid ProductId { get; set; }
        public Guid ShoppingCartId { get; set; }
        public int? Quantity { get; set; }

        public Product Product { get; set; }
        public ShoppingCart ShoppingCart { get; set; }
    }
}
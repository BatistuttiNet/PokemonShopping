namespace PokemonShopping.Domain.Models
{
    public class ShoppingCartDTO
    {
        public Guid Id { get; set; }
        public string TransferId { get; set; }
        public DateTime? PurchaseDate { get; set; }
        public decimal? Amount { get; set; }
        public List<ProductInCartDTO> Products { get; set; }
    }
}
namespace PokemonShopping.Domain.Models
{
    public class PaymentRequestDTO
    {
        public string Token { get; set; }
    }

    public class PaymentResponseDTO
    {
        public string TrnsferId { get; set; }
    }
    
}
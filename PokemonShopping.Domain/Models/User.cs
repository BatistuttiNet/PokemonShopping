using PokemonShopping.Domain.Enums;

namespace PokemonShopping.Domain.Models
{
    public class User
    {
        public Guid Id { get; set; }
        public UserStatusEnum UserStatus { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string Rol { get; set; }
        public List<ShoppingCart> ShoppingCarts { get; set; }
    }
}
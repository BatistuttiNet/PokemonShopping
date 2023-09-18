using PokemonShopping.Domain.Models;

namespace PokemonShopping.Application.DTOs
{
    public class UserDto
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Rol { get; set; }
        public List<ShoppingCartDTO> ShoppingCarts { get; set; }
    }
}

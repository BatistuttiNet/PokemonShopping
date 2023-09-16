using PokemonShopping.Domain.Models;

namespace PokemonShopping.Application.DTOs
{
    public class AuthResponse
    {
        public string Token { get; set; }
        public UserDto User { get; set; }
    }
}

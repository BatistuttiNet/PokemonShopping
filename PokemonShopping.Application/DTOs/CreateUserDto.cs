using PokemonShopping.Domain.Models;

namespace PokemonShopping.Application.DTOs
{
    public class CreateUserDto
    {
        public string Name { get; set; }
        public string Email { get; set; }
        public string Rol { get; set; }
        public string Password { get; set; }
    }
}

﻿using PokemonShopping.Domain.Models;

namespace PokemonShopping.Application.DTOs
{
    public class LoginDTO
    {
        public string Email { get; set; }
        public string Password { get; set; }
    }
}

﻿namespace PokemonShopping.Domain.Models
{
    public class ShoppingCart
    {
        public Guid Id { get; set; }
        public Guid UserId { get; set; }
        public ShoppingCartStateEnum State { get; set; }
        public DateTime Date { get; set; }
        public User User { get; set; }
        public List<ProductInCart> Products { get; set; }
    }
}
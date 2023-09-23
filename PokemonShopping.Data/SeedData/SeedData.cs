using PokemonShopping.Data.Context;
using PokemonShopping.Domain.Models;

namespace PokemonShopping.Data.SeedData
{
    public class SeedData
    {
        public static void Initialize(PokemonShoppingContext context)
        {
            context.Database.EnsureCreated();

            if (context.Products.Any())
            {
                return;
            }

            var products = new Product[]
            {
            new Product
            {
                Id = Guid.NewGuid(),
                Name = "Pikachu",
                Description = "Carta TCG Pikachu",
                Price = 10m,
                Img = "https://i.ebayimg.com/images/g/ixAAAOSwXBllA25x/s-l1600.jpg",
                Category = "Base set"
            },
             new Product
            {
                Id = Guid.NewGuid(),
                Name = "Charizard",
                Description = "Carta TCG Charizard",
                Price = 50m,
                Img = "https://i.ebayimg.com/images/g/ixAAAOSwXBllA25x/s-l1600.jpg",
                Category = "Base set"
            },
              new Product
            {
                Id = Guid.NewGuid(),
                Name = "Lugia",
                Description = "Carta TCG Lugia",
                Price = 100m,
                Img = "https://i.ebayimg.com/images/g/ixAAAOSwXBllA25x/s-l1600.jpg",
                Category = "Neo"
            }
              ,
              new Product
            {
                Id = Guid.NewGuid(),
                Name = "Charmander",
                Description = "Carta TCG Charmander",
                Price = 1m,
                Img = "https://i.ebayimg.com/images/g/ixAAAOSwXBllA25x/s-l1600.jpg",
                Category = "Neo"
            }
            };

            context.Products.AddRange(products);
            context.SaveChanges();
        }
    }
}
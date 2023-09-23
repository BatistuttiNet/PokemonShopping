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
                Img = "https://i.ebayimg.com/images/g/qDEAAOSwn-NkfTM7/s-l1600.jpg",
                Category = "Base set"
            },
             new Product
            {
                Id = Guid.NewGuid(),
                Name = "Charizard",
                Description = "Carta TCG Charizard",
                Price = 50m,
                Img = "https://i.ebayimg.com/images/g/UK8AAOSwc6VkfThx/s-l1600.jpg",
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
                Img = "https://i.ebayimg.com/images/g/OYoAAOSwX3dkfS3O/s-l1600.jpg",
                Category = "Neo"
            },
              new Product
              {
                Id = Guid.NewGuid(),
                Name = "Charmeleon",
                Description = "Carta TCG Charmeleon",
                Price = 5m,
                Img = "https://i.ebayimg.com/images/g/0vMAAOSwwetkfThj/s-l1600.jpg",
                Category = "Base set"
            },
              new Product
              {
                Id = Guid.NewGuid(),
                Name = "Squirtle",
                Description = "Carta TCG Squirtle",
                Price = 15m,
                Img = "https://i.ebayimg.com/images/g/NKQAAOSwhotkfTAZ/s-l1600.jpg",
                Category = "Neo"
            },
              new Product
              {
                Id = Guid.NewGuid(),
                Name = "Blastoise",
                Description = "Carta TCG Blastoise",
                Price = 80m,
                Img = "https://i.ebayimg.com/images/g/m-EAAOSwZKhkfTh4/s-l1600.jpg",
                Category = "Neo"
            },
              new Product
              {
                Id = Guid.NewGuid(),
                Name = "Pidgey",
                Description = "Carta TCG Pidgey",
                Price = 5m,
                Img = "https://i.ebayimg.com/images/g/G2UAAOSwdl1kfTNO/s-l1600.jpg",
                Category = "Base set"
            },
              new Product
              {
                Id = Guid.NewGuid(),
                Name = "Rattata",
                Description = "Carta TCG Rattata",
                Price = 2m,
                Img = "https://i.ebayimg.com/images/g/ypEAAOSw9-9kfTFE/s-l1600.jpg",
                Category = "Base set"
            },
            new Product
            {
                Id = Guid.NewGuid(),
                Name = "Mew",
                Description = "Carta TCG Mew",
                Price = 299m,
                Img = "https://i.ebayimg.com/images/g/ZNcAAOSw4atj07CT/s-l1600.jpg",
                Category = "Neo"
            },
            new Product
            {
                Id = Guid.NewGuid(),
                Name = "Mewtwo",
                Description = "Carta TCG Mewtwo",
                Price = 300m,
                Img = "https://i.ebayimg.com/images/g/zK8AAOSwDx9kfTR5/s-l1600.jpg",
                Category = "Base set"
            } 
            };




            context.Products.AddRange(products);
            context.SaveChanges();
        }
    }
}
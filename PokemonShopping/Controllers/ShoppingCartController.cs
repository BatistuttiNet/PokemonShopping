using Microsoft.AspNetCore.Mvc;
using PokemonShopping.Application.DTOs;
using PokemonShopping.Application.Services.Interfaces;

namespace PokemonShopping.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ShoppingCartController : ControllerBase
    {
        private readonly IShoppingCartApplication _shoppingCartApplication;

        public ShoppingCartController(IShoppingCartApplication shoppingCartApplication)
        {
            _shoppingCartApplication = shoppingCartApplication;
        }

        [HttpPost("add", Name = "AddToCart")]
        public async Task<ActionResult<ApiResult<bool>>> AddToCart([FromBody] AddToCartDTO dto)
        {
            var result = await _shoppingCartApplication.AddToCartAsync(dto);

            if (result.Success)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }

        [HttpPost("purchase", Name = "Purchase")]
        public async Task<ActionResult<ApiResult<bool>>> Purchase()
        {
            var result = await _shoppingCartApplication.PurchaseAsync();

            if (result.Success)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }
    }

}

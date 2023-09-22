using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using PokemonShopping.Application.DTOs;
using PokemonShopping.Application.Services.Interfaces;
using PokemonShopping.Domain.Models;

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


        [HttpGet]
        [Authorize]
        public async Task<ActionResult<ApiResult<ShoppingCartDTO>>> GetShoppingCart()
        {
            var result = await _shoppingCartApplication.GetShoppingCart();

            if (result.Success)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }

        [HttpPost("add", Name = "AddToCart")]
        [Authorize]
        public async Task<ActionResult<ApiResult<ShoppingCartDTO>>> AddToCart([FromBody] AddToCartDTO dto)
        {
            var result = await _shoppingCartApplication.AddToCartAsync(dto);

            if (result.Success)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }

        [HttpPost("purchase", Name = "Purchase")]
        [Authorize]
        public async Task<ActionResult<ApiResult<PaymentResponseDTO>>> Purchase([FromBody]PaymentRequestDTO request)
        {
            var result = await _shoppingCartApplication.PurchaseAsync(request);

            if (result.Success)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }

        [HttpGet("purchaseHistory", Name = "PurchaseHistory")]
        [Authorize]
        public async Task<ActionResult<ApiResult<IEnumerable<ShoppingCartDTO>>>> PurchaseHistory()
        {
            var result = await _shoppingCartApplication.GetPurchasedCartsAsync();

            if (result.Success)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }
    }

}

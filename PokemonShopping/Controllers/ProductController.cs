using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PokemonShopping.Application.DTOs;
using PokemonShopping.Application.Services.Interfaces;
using PokemonShopping.Domain.Models;

namespace PokemonShopping.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly IProductApplication _productApplication;

        public ProductController(IProductApplication productApplication)
        {
            _productApplication = productApplication;
        }

        [HttpGet("GetProductsByFilter")]
        public async Task<ActionResult<ApiResult<IEnumerable<ProductDTO>>>> GetProductsByFilter([FromQuery] ProductFilter filter)
        {
            var result = await _productApplication.GetProductsByFilterAsync(filter);
            if (result.Success)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }
    }
}

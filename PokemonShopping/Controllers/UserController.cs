using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PokemonShopping.Application.DTOs;
using PokemonShopping.Application.Services.Interfaces;

namespace PokemonShopping.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserApplication _userApplication;

        public UserController(IUserApplication userApplication)
        {
            _userApplication = userApplication;
        }

        [HttpPost("CreateUser")]
        public async Task<ActionResult<ApiResult<UserDto>>> CreateUser([FromBody] CreateUserDto dto)
        {
            var result = await _userApplication.CreateUserAsync(dto);
            if (result.Success)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }

        [HttpPost("Login")]
        public async Task<ActionResult<ApiResult<UserDto>>> Login([FromBody] LoginDTO dto)
        {
            var result = await _userApplication.AuthUserAsync(dto);
            if (result.Success)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }

        [HttpPost("RecoveryPassword")]
        public async Task<ActionResult<ApiResult<bool>>> RecoveryPassword([FromBody] RecoveryPasswordDTO dto)
        {
            var result = await _userApplication.RecoveryPasswordAsync(dto);
            if (result.Success)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }
    }
}

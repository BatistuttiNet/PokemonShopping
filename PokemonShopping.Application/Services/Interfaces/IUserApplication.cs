using PokemonShopping.Application.DTOs;

namespace PokemonShopping.Application.Services.Interfaces
{
    public interface IUserApplication
    {
        Task<ApiResult<AuthResponse>> AuthUserAsync(LoginDTO dto);
        Task<ApiResult<UserDto>> CreateUserAsync(CreateUserDto dto);
        Task<ApiResult<AuthResponse>> GetAuthResponseByEmailAsync(string email, string name);
        Task<ApiResult<bool>> RecoveryPasswordAsync(RecoveryPasswordDTO dto);
    }
}

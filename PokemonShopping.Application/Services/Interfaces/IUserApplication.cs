using PokemonShopping.Application.DTOs;

namespace PokemonShopping.Application.Services.Interfaces
{
    public interface IUserApplication
    {
        Task<ApiResult<AuthResponse>> AuthUserAsync(LoginDTO dto);

        Task<ApiResult<UserDto>> CreateUserAsync(CreateUserDto dto);

        Task<ApiResult<bool>> RecoveryPasswordAsync(RecoveryPasswordDTO dto);
    }
}

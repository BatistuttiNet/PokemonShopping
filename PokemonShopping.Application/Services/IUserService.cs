using PokemonShopping.Application.DTOs;

namespace PokemonShopping.Application.Services
{
    public interface IUserService
    {
        Task<ApiResult<UserDto>> GetUserByUserNameAndPasswordAsync(string userName, string password);

        Task<ApiResult<UserDto>> CreateUser();
    }
}

using PokemonShopping.Application.DTOs;
using PokemonShopping.Application.Services.Interfaces;
using PokemonShopping.Data.Uow;
using PokemonShopping.Domain.Interfaces;

namespace PokemonShopping.Application.Services
{
    public class UserApplication: IUserApplication
    {
        private readonly IUnitOfWork _uow;

        public UserApplication(IUnitOfWork uow)
        {
            _uow = uow;
        }

        public Task<ApiResult<UserDto>> CreateUserAsync(CreateUserDto dto)
        {
            throw new NotImplementedException();
        }

        public Task<ApiResult<AuthResponse>> AuthUserAsync(LoginDTO dto)
        {
            throw new NotImplementedException();
        }

        public Task<ApiResult<bool>> RecoveryPasswordAsync(RecoveryPasswordDTO dto)
        {
            throw new NotImplementedException();
        }
    }
}

using AutoMapper;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using PokemonShopping.Application.DTOs;
using PokemonShopping.Application.Services.Interfaces;
using PokemonShopping.Domain.Interfaces;
using PokemonShopping.Domain.Models;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace PokemonShopping.Application.Services
{
    public class UserApplication: ApplicationBase, IUserApplication
    {
        public UserApplication(IUnitOfWork uow, IMapper mapper, IConfiguration configuration) : base(uow, mapper, configuration)
        {
          
        }

        public async Task<ApiResult<UserDto>> CreateUserAsync(CreateUserDto dto)
        {
            var user  = _mapper.Map<User>(dto);

            if (GetRepository().SingleOrDefault(x => x.Email.ToLower().Equals(dto.Email.ToLower())) != null)
            {
                return new ApiResult<UserDto>()
                {
                    Success = false,
                    Message = $"User {dto.Email} exists"
                };
            }

            user.Id = Guid.NewGuid();
            //Todo validate email format
            user.Email = dto.Email.ToLower();
            //Todo validate password format
            user.Password = BCrypt.Net.BCrypt.HashPassword(dto.Password);
            //Todo send email validation
            user.UserStatus = Domain.Enums.UserStatusEnum.activeUser; 

            await GetRepository().AddAsync(user);

            await _uow.CommitAsync();

            return new ApiResult<UserDto>()
            {
                Success = true,
                Payload = _mapper.Map<UserDto>(user)
            };
        }

        public async Task<ApiResult<AuthResponse>> AuthUserAsync(LoginDTO dto)
        {
            // Buscar al usuario por su correo electrónico
            var user = await GetRepository()
                .SingleOrDefaultAsync(u => u.Email.ToLower().Equals(dto.Email.ToLower()));

            if (user == null || !VerifyPassword(dto.Password, user.Password))
            {
                return new ApiResult<AuthResponse>()
                {
                    Success = false,
                    Message = $"Invalid credentials"
                };
            }

            // Generar un token de autenticación (debes implementar esta lógica)
            var token = GenerateAuthToken(user);

            var authResponse = new AuthResponse
            {
                Token = token,
                User = _mapper.Map<UserDto>(user)
            };

            return ApiResult<AuthResponse>.GetSuccess(authResponse);
        }

        //get authresponse by email
        public async Task<ApiResult<AuthResponse>> GetAuthResponseByEmailAsync(string email, string name)
        {
            var user = await GetRepository()
                .SingleOrDefaultAsync(u => u.Email.ToLower().Equals(email.ToLower()));

            //if user not found crete user
            if (user == null)
            {
                var createUserDto = new CreateUserDto
                {
                    Email = email,
                    Password = Guid.NewGuid().ToString(),
                    Rol = "user",
                    Name = name
                };

                var result = await CreateUserAsync(createUserDto);

                if (!result.Success)
                {
                    return new ApiResult<AuthResponse>()
                    {
                        Success = false,
                        Message = $"Invalid credentials"
                    };
                }

                user = _mapper.Map<User>(result.Payload);
            }

            var token = GenerateAuthToken(user);

            var authResponse = new AuthResponse
            {
                Token = token,
                User = _mapper.Map<UserDto>(user)
            };

            return ApiResult<AuthResponse>.GetSuccess(authResponse);
        }

        private string GenerateAuthToken(User user)
        {
            var claims = new List<Claim>();

            claims.AddRange(new[] {
               new Claim("UserId", user.Id.ToString()),
               new Claim("UserName", user.Email),
               new Claim("Rol", user.Rol),
               new Claim("Name", user.Name)
            });

            var secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["JwtSettings:SecretKey"]));
            var signinCredentials = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256Signature);
            var tokeOptions = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                SigningCredentials = signinCredentials
            };

            var jwtSecurityTokenHandler = new JwtSecurityTokenHandler();
            var securityToken = jwtSecurityTokenHandler.CreateToken(tokeOptions);
            return jwtSecurityTokenHandler.WriteToken(securityToken);
        }

        private bool VerifyPassword(string password, string hash)
        {
            return BCrypt.Net.BCrypt.Verify(password, hash);
        }

        public Task<ApiResult<bool>> RecoveryPasswordAsync(RecoveryPasswordDTO dto)
        {
            throw new NotImplementedException();
        }

        private IRelationalRepository<User> GetRepository() { 
        
            return _uow.GetRepository<User>();
        }
    }
}

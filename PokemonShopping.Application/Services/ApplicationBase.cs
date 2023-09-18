using AutoMapper;
using Microsoft.Extensions.Configuration;
using PokemonShopping.Domain.Interfaces;

namespace PokemonShopping.Application.Services
{
    public class ApplicationBase
    {
        protected readonly IUnitOfWork _uow;
        protected readonly IMapper _mapper;
        protected readonly IConfiguration _configuration;

        public ApplicationBase(IUnitOfWork uow, IMapper mapper, IConfiguration configuration)
        {
            _uow = uow;
            _mapper = mapper;
            _configuration = configuration;
        }
    }
}
using System;
using System.Threading.Tasks;

namespace PokemonShopping.Domain.Interfaces
{
    public interface IUnitOfWork : IDisposable
    {
        IRelationalRepository<TEntity> GetRepository<TEntity>() where TEntity : class;
        Task<bool> CommitAsync(bool dispatchEvents = true);
    }
}

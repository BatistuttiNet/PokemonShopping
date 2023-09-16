using Microsoft.EntityFrameworkCore;
using PokemonShopping.Data.Context;
using PokemonShopping.Domain.Interfaces;
using PokemonShopping.EntityFramework;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PokemonShopping.Data.Uow
{
    public class UnitOfWork : IUnitOfWork
    {
        protected readonly PokemonShoppingContext _context;
        protected Hashtable _repositories;

        public UnitOfWork(PokemonShoppingContext context)
        {
            _context = context;
        }

        public async Task<bool> CommitAsync(bool dispatchEvents = true)
        {
            var result = await _context.SaveChangesAsync() > 0;

            return result;
        }

        public void Dispose()
        {
            _context.Dispose();
            GC.SuppressFinalize(this);
        }

        public IRelationalRepository<TEntity> GetRepository<TEntity>() where TEntity : class
        {
            if (_repositories == null)
                _repositories = new Hashtable();

            var type = typeof(TEntity).Name;

            if (!_repositories.ContainsKey(type))
            {
                var repositoryType = typeof(EntityFrameworkCoreRepository<>);

                var repositoryInstance =
                    Activator.CreateInstance(repositoryType
                        .MakeGenericType(typeof(TEntity)), _context);

                _repositories.Add(type, repositoryInstance);
            }

            return (IRelationalRepository<TEntity>)_repositories[type];
        }
    }
}

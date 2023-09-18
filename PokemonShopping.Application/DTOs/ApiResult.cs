using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PokemonShopping.Application.DTOs
{
    public class ApiResult<T>
    {
        public bool Success { get; set; }
        public string? Message { get; set; }
        public T Payload { get; set; }

        internal static ApiResult<T> GetSuccess(T result)
        {
            return new ApiResult<T>()
            {
                Success = true,
                Payload = result
            };
        }
    }



}

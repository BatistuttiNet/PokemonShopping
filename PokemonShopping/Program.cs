using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Diagnostics.HealthChecks;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using PokemonShopping.Data.Context;
using PokemonShopping.Data.Uow;
using PokemonShopping.Domain.Interfaces;
using System;
using System.Text;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.TokenValidationParameters = new Microsoft.IdentityModel.Tokens.TokenValidationParameters
        {
            ValidateIssuer = false, // Set to true if you want to validate the issuer of the token
            ValidateAudience = false, // Set to true if you want to validate the audience of the token
            ValidateLifetime = false, // Set to true if you want to validate the token's lifetime
            ValidateIssuerSigningKey = true, // Set to true if you want to validate the signing key

            // Configure the parameters as per your JWT configuration
            //ValidIssuer = "your-issuer", // Change to your JWT issuer
            //ValidAudience = "your-audience", // Change to your JWT audience
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("your-secret-key")), // Change to your JWT secret key
        };
    });

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<PokemonShoppingContext>(options =>
{
    options.UseInMemoryDatabase("PokemonShoppingDb");
});

builder.Services.AddScoped<IUnitOfWork, UnitOfWork>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseEndpoints(endpoints =>
{
    endpoints.MapControllers();
});

app.Run();

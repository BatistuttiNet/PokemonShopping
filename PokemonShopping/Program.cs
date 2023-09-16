using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Diagnostics.HealthChecks;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using PokemonShopping.Application.Mappers;
using PokemonShopping.Application.Services;
using PokemonShopping.Application.Services.Interfaces;
using PokemonShopping.Data.Context;
using PokemonShopping.Data.SeedData;
using PokemonShopping.Data.Uow;
using PokemonShopping.Domain.Interfaces;
using System;
using System.Text;

var builder = WebApplication.CreateBuilder(args);

builder.Configuration.AddJsonFile("appsettings.json");
var configuration = builder.Configuration;

builder.Services.AddControllers();

builder.Services.AddAutoMapper(typeof(PokemonShoppingMapping));

builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        var jwtSettings = configuration.GetSection("JwtSettings");

        options.TokenValidationParameters = new Microsoft.IdentityModel.Tokens.TokenValidationParameters
        {
            ValidateIssuer = false,
            ValidateAudience = false, 
            ValidateLifetime = false, 
            ValidateIssuerSigningKey = true, 
            //ValidIssuer = "your-issuer", 
            //ValidAudience = "your-audience",
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtSettings["SecretKey"])), 
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
builder.Services.AddScoped<IProductApplication, ProductApplication>();
builder.Services.AddScoped<IUserApplication, UserApplication>();
builder.Services.AddScoped<IShoppingCartApplication, ShoppingCartApplication>();

var app = builder.Build();

using (var scope = app.Services.CreateScope())
{
    var context = scope.ServiceProvider.GetRequiredService<PokemonShoppingContext>();
    SeedData.Initialize(context);
}

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseRouting();

app.UseEndpoints(endpoints =>
{
    endpoints.MapControllers();
});

app.Run();

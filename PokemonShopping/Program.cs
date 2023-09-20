using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Diagnostics.HealthChecks;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using PokemonShopping.Application.Mappers;
using PokemonShopping.Application.Services;
using PokemonShopping.Application.Services.Interfaces;
using PokemonShopping.Data.Context;
using PokemonShopping.Data.SeedData;
using PokemonShopping.Data.Uow;
using PokemonShopping.Domain.Interfaces;
using Stripe;
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

        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuerSigningKey = true,
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtSettings["SecretKey"])),
            ValidateIssuer = false,
            ValidateAudience = false
        };

    });

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c => {
    c.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
    {
        Description = "JWT Authorization header using the Bearer scheme",
        Name = "Authorization",
        In = ParameterLocation.Header,
        Type = SecuritySchemeType.ApiKey,
        Scheme = "Bearer"
    });
});

StripeConfiguration.ApiKey = "sk_test_51Ns8sKI6MN1a9sO1GN2Q4yFoUIJszAU0t8BgAZ4JUb3AL6MC1x5hLZbtN05hfbfPawse9g4FzTpls0B4DGzv5UxU00Tt9hcxIx";

builder.Services.AddDbContext<PokemonShoppingContext>(options =>
{
    options.UseInMemoryDatabase("PokemonShoppingDb");
});

builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(builder =>
    {
        builder.AllowAnyOrigin()
               .AllowAnyMethod()
               .AllowAnyHeader();
    });
});

builder.Services.AddHttpContextAccessor();

builder.Services.AddScoped<IUnitOfWork, UnitOfWork>();
builder.Services.AddScoped<IProductApplication, ProductApplication>();
builder.Services.AddScoped<IUserApplication, UserApplication>();
builder.Services.AddScoped<IShoppingCartApplication, ShoppingCartApplication>();

var app = builder.Build();

using (var scope = app.Services.CreateScope())
{
    var context = scope.ServiceProvider.GetRequiredService<PokemonShoppingContext>();
    SeedData.Initialize(context);

    var userapp = scope.ServiceProvider.GetRequiredService<IUserApplication>();

    await userapp.CreateUserAsync(new PokemonShopping.Application.DTOs.CreateUserDto()
    {
        Email = "admin",
        Password = "admin",
        Rol = "admin",
        Name = "admin",
    });
}

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseDefaultFiles();

app.UseRouting();

app.UseCors();

app.UseAuthentication();
app.UseAuthorization();

app.UseEndpoints(endpoints =>
{
    endpoints.MapControllers();
});

app.Use(async (context, next) =>
{
    await next();

    if (context.Response.StatusCode == 404 && !Path.HasExtension(context.Request.Path.Value))
    {
        context.Request.Path = "/index.html";
        await next();
    }
});

app.Run();

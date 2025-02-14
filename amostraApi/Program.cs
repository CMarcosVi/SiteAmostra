using amostraApi.Connect;
using Microsoft.EntityFrameworkCore;
using amostraApi.Data;

var builder = WebApplication.CreateBuilder(args);

// Configura o banco de dados usando a classe DatabaseConfig
DatabaseConfig.ConfigureDatabase(builder.Services, builder.Configuration);

// Adiciona o Swagger para documentar a API
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configura o pipeline de requisições HTTP.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

// Mapeia o endpoint de login
app.MapGet("/login", () =>
{
    return Results.Ok("Login endpoint");
})
.WithName("Login")
.WithOpenApi();

app.Run();

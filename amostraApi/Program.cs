using amostraApi.Connect;
using Microsoft.EntityFrameworkCore;
using amostraApi.Data;
using amostraApi.Services; // Importa a classe de configuração do JWT

var builder = WebApplication.CreateBuilder(args);

// Configura o banco de dados usando a classe DatabaseConfig
DatabaseConfig.ConfigureDatabase(builder.Services, builder.Configuration);

// Configuração do JWT
builder.Services.AddJwtAuthentication(builder.Configuration);

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
//app.MapGet("/login", () => { return Results.Ok("Login endpoint"); }).WithName("Login").WithOpenApi();

app.MapGet("/createAccount", () => { return Results.Ok("createAccount endpoint"); }).WithName("createAccount").WithOpenApi();

//app.MapGet("/editInfos", () => { return Results.Ok("editInfos endpoint"); }).WithName("editInfos").WithOpenApi();

// app.MapPost("/deleteInfosUser", () => { return Results.Ok("deleteInfosUser endpoint"); }).WithName("deleteInfosUser").WithOpenApi();

app.Run();

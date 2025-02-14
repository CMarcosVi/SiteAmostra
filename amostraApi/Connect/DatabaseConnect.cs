using amostraApi.Data;
using Microsoft.EntityFrameworkCore;

namespace amostraApi.Connect

{
    public static class DatabaseConfig
    {
        public static void ConfigureDatabase(IServiceCollection services, IConfiguration configuration)
        {
            string connectionString = configuration.GetConnectionString("DefaultConnection");

            // Configura o DbContext para usar MySQL
            services.AddDbContext<AppDbContext>(options =>
                options.UseMySQL(connectionString)
            );
        }
    }
}

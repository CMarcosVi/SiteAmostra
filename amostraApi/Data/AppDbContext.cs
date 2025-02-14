using Microsoft.EntityFrameworkCore;

namespace amostraApi.Data
{
    public class AppDbContext(DbContextOptions<AppDbContext> options) : DbContext(options)
    {

        // Aqui você pode adicionar as DbSets (tabelas) que deseja manipular
        // Por exemplo, uma tabela "Produtos":
        // public DbSet<Produto> Produtos { get; set; }
    }
}

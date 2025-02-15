using Microsoft.EntityFrameworkCore;
//using amostraApi.Models;

namespace amostraApi.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }
        //public DbSet<User> Users {get; set;}
    }
}

using Microsoft.EntityFrameworkCore;

namespace back
{
    public class ApplicationContext : DbContext
    {
        public DbSet<Income> Incomes { set; get; } = null!;
        
        public ApplicationContext()
        {
            Database.EnsureCreated();
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseMySql(
                "server=localhost;user=root;password=root;database=hackaton_db",
                new MySqlServerVersion(new Version(8, 0, 31)));
        }
    }
}

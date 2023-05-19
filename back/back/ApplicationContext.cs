using Microsoft.EntityFrameworkCore;

namespace back
{
    public class ApplicationContext : DbContext
    {
        public DbSet<Balance> Balance { set; get; } = null;
        public DbSet<Income> Incomes { set; get; } = null!;
        public DbSet<Expense> Expenses { set; get; } = null!;
        public DbSet<Deposit> Deposits { set; get; } = null!;
        public DbSet<Credit> Credits { set; get; } = null!;
        
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

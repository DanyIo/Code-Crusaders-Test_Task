namespace back
{
    record ExpenseId(int id);
    record ExpenseJson(int id, string name, double amount);

    public class Expense
    {
        private int id;
        private string name;
        private double amount;

        public int Id
        {
            set { }
            get { return id; }
        }
        public string Name
        {
            set { }
            get { return name; }
        }
        public double Amount
        {
            set { }
            get { return amount; }
        }

        public Expense(int id, string name, double amount)
        {
            this.id = id;
            this.name = name;
            this.amount = amount;
        }
    }
}

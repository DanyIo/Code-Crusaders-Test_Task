namespace back
{
    record IncomeJson(int id, string date, string name,
        string payMethod, double amount);

    record IncomeResponseJson(int id, string date, string name, 
        string paymentMethod, double amount);

    record IncomeBalanceJson(
        List<IncomeResponseJson> income, BalanceJson balance);
    record IncomeId(int id);

    public class Income
    {
        private int id;
        private string date;
        private string name;
        private string paymentMethod;
        private double amount;

        public int Id
        {
            set { }
            get { return id; }
        }
        public string Date
        {
            set { }
            get { return date; }
        }
        public string Name
        {
            set { }
            get { return name; }
        }
        public string PaymentMethod
        {
            set { }
            get { return paymentMethod; }
        }
        public double Amount
        {
            set { }
            get { return amount; }
        }

        public Income(string date, string name, 
            string paymentMethod, double amount)
        {
            this.date = date;
            this.name = name;
            this.paymentMethod = paymentMethod;
            this.amount = amount;
        }
    }
}

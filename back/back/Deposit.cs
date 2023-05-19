namespace back
{
    record DepositId(int id);
    record DepositJson(int id, double amount);

    public class Deposit
    {
        private int id;
        private double amount;

        public int Id
        {
            set { }
            get { return id; }
        }
        public double Amount
        {
            set { }
            get { return amount; }
        }

        public Deposit(int id, double amount)
        {
            this.id = id;
            this.amount = amount;
        }
    }
}

namespace back
{
    public class Balance
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
            set { amount = value; }
            get { return amount; }
        }

        public Balance(double amount)
        {
            this.amount = amount;
        }
    }
}

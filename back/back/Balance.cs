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
            set { }
            get { return amount; }
        }

        public Balance(int id, double amount)
        {
            this.id = id;
            this.amount = amount;
        }
    }
}

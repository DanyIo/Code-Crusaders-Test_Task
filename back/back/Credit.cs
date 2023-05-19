﻿namespace back
{
    record CreditId(int id);
    record CreditJson(int id, double amount);

    public class Credit
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

        public Credit(double amount)
        {
            this.amount = amount;
        }
    }
}

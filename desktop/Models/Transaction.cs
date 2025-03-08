using System;

namespace BudgetLense
{
    public class Transaction
    {
        public string Description { get; set; }
        public string Category { get; set; }
        public decimal Amount { get; set; }
        public DateTime Date { get; set; }
    }
}

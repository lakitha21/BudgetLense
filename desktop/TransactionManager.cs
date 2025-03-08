using System;
using System.Collections.ObjectModel;
using System.Linq;

namespace BudgetLense
{
    public class TransactionManager
    {
        private static TransactionManager _instance;
        private ObservableCollection<Transaction> _transactions;

        public event EventHandler TransactionAdded;
        public event EventHandler TransactionDeleted;
        public event EventHandler TransactionUpdated;

        private TransactionManager()
        {
            _transactions = new ObservableCollection<Transaction>();
        }

        public static TransactionManager Instance
        {
            get
            {
                if (_instance == null)
                {
                    _instance = new TransactionManager();
                }
                return _instance;
            }
        }

        public ObservableCollection<Transaction> GetTransactions()
        {
            return _transactions;
        }

        public void AddTransaction(Transaction transaction)
        {
            _transactions.Add(transaction);
            TransactionAdded?.Invoke(this, EventArgs.Empty);
        }

        public void UpdateTransaction(Transaction oldTransaction, Transaction newTransaction)
        {
            var index = _transactions.IndexOf(oldTransaction);
            if (index != -1)
            {
                _transactions[index] = newTransaction;
                TransactionUpdated?.Invoke(this, EventArgs.Empty);
            }
        }

        public void DeleteTransaction(Transaction transaction)
        {
            if (_transactions.Remove(transaction))
            {
                TransactionDeleted?.Invoke(this, EventArgs.Empty);
            }
        }

        public decimal GetTotalIncome()
        {
            return _transactions.Where(t => t.Amount > 0).Sum(t => t.Amount);
        }

        public decimal GetTotalExpenses()
        {
            return Math.Abs(_transactions.Where(t => t.Amount < 0).Sum(t => t.Amount));
        }

        public decimal GetBalance()
        {
            var totalIncome = GetTotalIncome();
            var totalExpenses = GetTotalExpenses();
            return totalIncome - totalExpenses;
        }
    }
}

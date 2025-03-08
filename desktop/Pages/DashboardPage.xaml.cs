using System;
using System.Linq;
using System.Windows.Controls;
using System.Windows.Media;

namespace BudgetLense
{
    public partial class DashboardPage : Page
    {
        private TransactionManager _transactionManager;
        private readonly SolidColorBrush _positiveBalanceColor = new SolidColorBrush((Color)ColorConverter.ConvertFromString("#2980b9"));
        private readonly SolidColorBrush _negativeBalanceColor = new SolidColorBrush((Color)ColorConverter.ConvertFromString("#c0392b"));

        public DashboardPage()
        {
            InitializeComponent();
            _transactionManager = TransactionManager.Instance;
            _transactionManager.TransactionAdded += OnTransactionChanged;
            _transactionManager.TransactionDeleted += OnTransactionChanged;
            _transactionManager.TransactionUpdated += OnTransactionChanged;
            UpdateGreeting();
            LoadTransactions();
        }

        private void OnTransactionChanged(object sender, EventArgs e)
        {
            LoadTransactions();
        }

        private void UpdateGreeting()
        {
            var hour = DateTime.Now.Hour;
            string greeting = hour switch
            {
                >= 5 and < 12 => "Good Morning",
                >= 12 and < 17 => "Good Afternoon",
                _ => "Good Evening"
            };
            GreetingText.Text = $"{greeting}, User!";
        }

        private void LoadTransactions()
        {
            var transactions = _transactionManager.GetTransactions();
            TransactionsList.ItemsSource = transactions;

            // Get values from TransactionManager
            var totalIncome = _transactionManager.GetTotalIncome();
            var totalExpenses = _transactionManager.GetTotalExpenses();
            var balance = _transactionManager.GetBalance();

            // Update summary cards
            TotalIncomeText.Text = totalIncome.ToString("C");
            TotalExpensesText.Text = totalExpenses.ToString("C");
            BalanceText.Text = balance.ToString("C");

            // Update balance card color based on value
            BalanceCard.Background = balance >= 0 ? _positiveBalanceColor : _negativeBalanceColor;
        }
    }
}

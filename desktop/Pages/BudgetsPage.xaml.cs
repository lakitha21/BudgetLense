using System;
using System.Collections.ObjectModel;
using System.Windows;
using System.Windows.Controls;

namespace BudgetLense
{
    public partial class BudgetsPage : Page
    {
        private TransactionManager _transactionManager;
        private Transaction _editingTransaction;

        public BudgetsPage()
        {
            InitializeComponent();
            _transactionManager = TransactionManager.Instance;
            InitializeCategories();
            LoadTransactions();
            SetupAddMode();
        }

        private void InitializeCategories()
        {
            var categories = new[]
            {
                "Salary",
                "Food",
                "Transportation",
                "Bills",
                "Entertainment",
                "Shopping",
                "Healthcare",
                "Other"
            };

            CategoryInput.ItemsSource = categories;
            DateInput.SelectedDate = DateTime.Today;
        }

        private void LoadTransactions()
        {
            TransactionsGrid.ItemsSource = _transactionManager.GetTransactions();
        }

        private void AddTransaction_Click(object sender, RoutedEventArgs e)
        {
            if (!ValidateInputs()) return;

            var amount = decimal.Parse(AmountInput.Text);
            if (TransactionType.SelectedIndex == 1) // Expense
                amount = -amount;

            var transaction = new Transaction
            {
                Description = DescriptionInput.Text,
                Category = CategoryInput.SelectedItem.ToString(),
                Amount = amount,
                Date = DateInput.SelectedDate.Value
            };

            if (_editingTransaction != null)
            {
                _transactionManager.UpdateTransaction(_editingTransaction, transaction);
                SetupAddMode();
            }
            else
            {
                _transactionManager.AddTransaction(transaction);
            }
            ClearInputs();
        }

        private void EditTransaction_Click(object sender, RoutedEventArgs e)
        {
            var transaction = (sender as Button)?.DataContext as Transaction;
            if (transaction != null)
            {
                _editingTransaction = transaction;
                PopulateFormForEdit(transaction);
                AddTransactionButton.Content = "Update Transaction";
                CancelEditButton.Visibility = Visibility.Visible;
            }
        }

        private void CancelEdit_Click(object sender, RoutedEventArgs e)
        {
            SetupAddMode();
            ClearInputs();
        }

        private void PopulateFormForEdit(Transaction transaction)
        {
            DescriptionInput.Text = transaction.Description;
            CategoryInput.SelectedItem = transaction.Category;
            AmountInput.Text = Math.Abs(transaction.Amount).ToString();
            DateInput.SelectedDate = transaction.Date;
            TransactionType.SelectedIndex = transaction.Amount > 0 ? 0 : 1;
        }

        private void SetupAddMode()
        {
            _editingTransaction = null;
            AddTransactionButton.Content = "Add Transaction";
            CancelEditButton.Visibility = Visibility.Collapsed;
        }

        private void DeleteTransaction_Click(object sender, RoutedEventArgs e)
        {
            var transaction = (sender as Button)?.DataContext as Transaction;
            if (transaction != null)
            {
                _transactionManager.DeleteTransaction(transaction);
            }
        }

        private bool ValidateInputs()
        {
            if (string.IsNullOrWhiteSpace(DescriptionInput.Text) ||
                CategoryInput.SelectedItem == null ||
                !decimal.TryParse(AmountInput.Text, out _) ||
                DateInput.SelectedDate == null ||
                TransactionType.SelectedIndex == -1)
            {
                MessageBox.Show("Please fill in all fields correctly.", "Validation Error");
                return false;
            }
            return true;
        }

        private void ClearInputs()
        {
            DescriptionInput.Text = string.Empty;
            AmountInput.Text = string.Empty;
            CategoryInput.SelectedIndex = -1;
            DateInput.SelectedDate = DateTime.Today;
            TransactionType.SelectedIndex = -1;
        }
    }
}

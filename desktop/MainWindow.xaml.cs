using System.Windows;
using System.Windows.Controls;

namespace BudgetLense
{
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
            MainFrame.Navigate(new LandingPage());
            NavigationPanel.Visibility = Visibility.Collapsed;
        }

        private void NavigationButton_Click(object sender, RoutedEventArgs e)
        {
            var button = sender as RadioButton;
            if (button == null) return;

            switch (button.Name)
            {
                case "DashboardBtn":
                    MainFrame.Navigate(new DashboardPage());
                    break;
                case "BudgetsBtn":
                    MainFrame.Navigate(new BudgetsPage());
                    break;
                case "ProfileBtn":
                    MainFrame.Navigate(new ProfilePage());
                    break;
            }
        }

        public void ShowNavigation()
        {
            NavigationPanel.Visibility = Visibility.Visible;
        }
    }
}

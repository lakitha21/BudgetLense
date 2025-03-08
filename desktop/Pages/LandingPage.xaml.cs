using System.Windows;
using System.Windows.Controls;

namespace BudgetLense
{
    public partial class LandingPage : Page
    {
        public LandingPage()
        {
            InitializeComponent();
        }

        private void GetStartedButton_Click(object sender, RoutedEventArgs e)
        {
            var mainWindow = Window.GetWindow(this) as MainWindow;
            mainWindow?.ShowNavigation();
            NavigationService.Navigate(new DashboardPage());
        }
    }
}

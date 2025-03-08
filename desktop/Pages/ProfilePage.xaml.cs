using Microsoft.Win32;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Media.Imaging;

namespace BudgetLense
{
    public partial class ProfilePage : Page
    {
        public ProfilePage()
        {
            InitializeComponent();
            LoadUserProfile();
        }

        private void LoadUserProfile()
        {
            // This will be replaced with actual user data loading later
            NameInput.Text = "User1";
            EmailInput.Text = "User1@example.com";
        }

        private void ChangeProfilePicture_Click(object sender, RoutedEventArgs e)
        {
            var openFileDialog = new OpenFileDialog
            {
                Filter = "Image files (*.jpg, *.jpeg, *.png) | *.jpg; *.jpeg; *.png",
                Title = "Select a profile picture"
            };

            if (openFileDialog.ShowDialog() == true)
            {
                var image = new BitmapImage(new System.Uri(openFileDialog.FileName));
                ProfileImage.Source = image;
            }
        }

        private void SaveChanges_Click(object sender, RoutedEventArgs e)
        {
            if (ValidateInputs())
            {
                // This will be replaced with actual save functionality later
                MessageBox.Show("Profile updated successfully!", "Success");
            }
        }

        private bool ValidateInputs()
        {
            if (string.IsNullOrWhiteSpace(NameInput.Text) ||
                string.IsNullOrWhiteSpace(EmailInput.Text))
            {
                MessageBox.Show("Please fill in all required fields.", "Validation Error");
                return false;
            }
            return true;
        }
    }
}

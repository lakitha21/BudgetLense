   M S B A M L   `   `   `  ����  BudgetLense    BudgetLense.DashboardPage   5      W SPresentationCore, Version=7.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35\ XPresentationFramework, Version=7.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35e aSystem.Windows.Controls.Ribbon, Version=7.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089R NWindowsBase, Version=7.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35F 9http://schemas.microsoft.com/winfx/2006/xaml/presentation     5      R NSystem.Xaml, Version=7.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089:x,http://schemas.microsoft.com/winfx/2006/xaml     5        N� Title$  	Dashboard��5      .��5      �� .��5   
   �� $��30q�6   .+�5	      �� -   5         ��Name$ GreetingText��5	      $��24(�5
      $��SemiBold"�5      $��0,0,0,30q�5      � 5      $��0,0,0,30q�6    � ColumnDefinitions 5      �� 5      $��* �6'   �� 5      $��* �6'   �� 5      $��* �6'   .+�5      �� $��0��6   $��0,0,15,0q�5      ���#27ae60 �� CornerRadius$ 10��5       �� Padding$ 20q�5      ._�5      �� .+�5      �� $��Total Income��6$   
�������$��16(�5   "   �� 5       -   5        $ TotalIncomeText��5    $   $��$0.00��5!   "   
�������$��24(�5#   "   $
��Bold"�5$   "   $��0,10,0,0q�5%   "   5&      5'      �� 5*      $��1��6   $
��15,0q�5+      ���#c0392b$ 10��5-      $ 20q�5.      ._�5/      �� .+�50      �� $��Total Expenses��6$   
�������$��16(�52   "   �� 53      -   5        $ TotalExpensesText��53   $   $��$0.00��54   "   
�������$��24(�56   "   $
��Bold"�57   "   $��0,10,0,0q�58   "   59      5:      �� 5=      -   5         ��Name$ BalanceCard��5=      $��2��5>      $��15,0,0,0q�5?      ���#2980b9$ 10��5A      $ 20q�5B      ._�5C      �� .+�5D      �� $��Balance��6$   
�������$��16(�5F   "   �� 5G      -   5        $ BalanceText��5G   $   $��$0.00��5H   "   
�������$��24(�5J   "   $
��Bold"�5K   "   $��0,10,0,0q�5L   "   5M      5N      5O      �� 5R      $��Recent Transactions��6   $��20(�5S      $��SemiBold"�5T      $��0,0,0,15q�5U      �� 5W      -   5         ��Name$ TransactionsList��5W      
������ $��0q�5Y      $	��400��5Z      ��5[      �� 5\      .R�5]      � $	��0,5q�6    5^      �� 5_   "   $��* �63   �� 5`   "   $
��Auto �63   �� 5a   "   $	��150 �63   .+�5d      �� $��0��6)   .+�5e   "   �� $��SemiBold"�5f   *   ��5e   ,   �� *Description+5f   *   �� 5g   "    J� Opacity$	 0.6Q�5h   *   ��5g   ,   �� *
Category+5h   *   5i      �� 5k      $��1��6(   $��SemiBold"�5m   &   $
��15,0q�5n   &   ��5l   &   �� *Amount+ �� StringFormat$ C��5n   &   �� 5p      $��2��6(   $	 0.6Q�5r   &   ��5q   &   �� *Date+$ d��5r   &   5s      5t      5v      5w      5x      5y      
   M S B A M L   `   `   `  ����   BudgetLense    BudgetLense.DashboardPage   W SPresentationCore, Version=7.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35\ XPresentationFramework, Version=7.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35e aSystem.Windows.Controls.Ribbon, Version=7.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089R NWindowsBase, Version=7.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35F 9http://schemas.microsoft.com/winfx/2006/xaml/presentation     R NSystem.Xaml, Version=7.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089:x,http://schemas.microsoft.com/winfx/2006/xaml       N� Title$  	Dashboard��.���� .���� $��30q�.+��� -    ��Name$ GreetingText��$��24(�$��SemiBold"�$��0,0,0,30q�� $��0,0,0,30q� � ColumnDefinitions �� $��* ��� $��* ��� $��* �.+��� $��0��$��0,0,15,0q����#27ae60 �� CornerRadius$ 10�� �� Padding$ 20q�._��� .+��� $��Total Income��
�������$��16(��� -   $ TotalIncomeText��$��$0.00��
�������$��24(�$
��Bold"�$��0,10,0,0q��� $��1��$
��15,0q����#c0392b$ 10��$ 20q�._��� .+��� $��Total Expenses��
�������$��16(��� -   $ TotalExpensesText��$��$0.00��
�������$��24(�$
��Bold"�$��0,10,0,0q��� -    ��Name$ BalanceCard��$��2��$��15,0,0,0q����#2980b9$ 10��$ 20q�._��� .+��� $��Balance��
�������$��16(��� -   $ BalanceText��$��$0.00��
�������$��24(�$
��Bold"�$��0,10,0,0q��� $��Recent Transactions��$��20(�$��SemiBold"�$��0,0,0,15q��� -    ��Name$ TransactionsList��
������ $��0q�$	��400������ .R�� $	��0,5q� �� $��* ��� $
��Auto ��� $	��150 �.+��� $��0��.+��� $��SemiBold"����� *Description+��  J� Opacity$	 0.6Q����� *
Category+�� $��1��$��SemiBold"�$
��15,0q����� *Amount+ �� StringFormat$ C���� $��2��$	 0.6Q����� *Date+$ d��
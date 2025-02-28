import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { ArrowUpRight, ArrowDownRight, DollarSign } from 'lucide-react';
import { useTransactions, Transaction } from '../context/TransactionContext';

// Register ChartJS components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard: React.FC = () => {
  const { transactions } = useTransactions();
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [balance, setBalance] = useState(0);
  const [recentTransactions, setRecentTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    // Calculate totals
    const income = transactions
      .filter(t => t.type === 'income')
      .reduce((sum, transaction) => sum + transaction.amount, 0);
    
    const expenses = transactions
      .filter(t => t.type === 'expense')
      .reduce((sum, transaction) => sum + transaction.amount, 0);
    
    setTotalIncome(income);
    setTotalExpenses(expenses);
    setBalance(income - expenses);

    // Get recent transactions
    const sorted = [...transactions].sort((a, b) => 
      new Date(b.date).getTime() - new Date(a.date).getTime()
    );
    setRecentTransactions(sorted.slice(0, 5));
  }, [transactions]);

  // Prepare chart data
  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Income',
        data: [1500, 2000, 1800, 2500, 2200, 2700],
        backgroundColor: 'rgba(56, 176, 0, 0.7)',
      },
      {
        label: 'Expenses',
        data: [1200, 1300, 1400, 1800, 1600, 1900],
        backgroundColor: 'rgba(230, 57, 70, 0.7)',
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Monthly Financial Overview',
      },
    },
  };

  // Get current date for greeting
  const getCurrentGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 18) return 'Good Afternoon';
    return 'Good Evening';
  };

  return (
    <div>
      <h1 className="greeting">{getCurrentGreeting()}, User!</h1>
      
      <div className="stats-container">
        <div className="stat-card income">
          <ArrowUpRight size={24} />
          <h3 className="stat-label">Total Income</h3>
          <div className="stat-value">${totalIncome.toFixed(2)}</div>
        </div>
        
        <div className="stat-card expense">
          <ArrowDownRight size={24} />
          <h3 className="stat-label">Total Expenses</h3>
          <div className="stat-value">${totalExpenses.toFixed(2)}</div>
        </div>
        
        <div className="stat-card balance">
          <DollarSign size={24} />
          <h3 className="stat-label">Balance</h3>
          <div className="stat-value">${balance.toFixed(2)}</div>
        </div>
      </div>
      
      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Financial Overview</h2>
        </div>
        <div className="chart-container">
          <Bar data={chartData} options={chartOptions} />
        </div>
      </div>
      
      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Recent Transactions</h2>
        </div>
        <ul className="transaction-list">
          {recentTransactions.map(transaction => (
            <li key={transaction.id} className="transaction-item">
              <div className="transaction-info">
                <div className={`transaction-icon ${transaction.type}`}>
                  {transaction.type === 'income' ? <ArrowUpRight size={18} /> : <ArrowDownRight size={18} />}
                </div>
                <div className="transaction-details">
                  <h4>{transaction.category}</h4>
                  <p>{transaction.description}</p>
                </div>
              </div>
              <div className={`transaction-amount ${transaction.type}`}>
                {transaction.type === 'income' ? '+' : '-'}${transaction.amount.toFixed(2)}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
import React, { createContext, useState, useContext, ReactNode } from 'react';

export interface Transaction {
  id: string;
  amount: number;
  category: string;
  description: string;
  date: string;
  type: 'income' | 'expense';
}

interface TransactionContextType {
  transactions: Transaction[];
  addTransaction: (transaction: Omit<Transaction, 'id'>) => void;
  deleteTransaction: (id: string) => void;
  editTransaction: (id: string, transaction: Omit<Transaction, 'id'>) => void;
}

const TransactionContext = createContext<TransactionContextType | undefined>(undefined);

export const useTransactions = () => {
  const context = useContext(TransactionContext);
  if (!context) {
    throw new Error('useTransactions must be used within a TransactionProvider');
  }
  return context;
};

interface TransactionProviderProps {
  children: ReactNode;
}

export const TransactionProvider: React.FC<TransactionProviderProps> = ({ children }) => {
  const [transactions, setTransactions] = useState<Transaction[]>([
    {
      id: '1',
      amount: 2500,
      category: 'Salary',
      description: 'Monthly salary',
      date: '2023-05-01',
      type: 'income',
    },
    {
      id: '2',
      amount: 800,
      category: 'Rent',
      description: 'Monthly rent',
      date: '2023-05-03',
      type: 'expense',
    },
    {
      id: '3',
      amount: 120,
      category: 'Groceries',
      description: 'Weekly groceries',
      date: '2023-05-05',
      type: 'expense',
    },
    {
      id: '4',
      amount: 500,
      category: 'Freelance',
      description: 'Website design project',
      date: '2023-05-10',
      type: 'income',
    },
    {
      id: '5',
      amount: 50,
      category: 'Dining',
      description: 'Dinner with friends',
      date: '2023-05-15',
      type: 'expense',
    },
  ]);

  const addTransaction = (transaction: Omit<Transaction, 'id'>) => {
    const newTransaction = {
      ...transaction,
      id: Date.now().toString(),
    };
    setTransactions([...transactions, newTransaction]);
  };

  const deleteTransaction = (id: string) => {
    setTransactions(transactions.filter(transaction => transaction.id !== id));
  };

  const editTransaction = (id: string, updatedTransaction: Omit<Transaction, 'id'>) => {
    setTransactions(
      transactions.map(transaction =>
        transaction.id === id
          ? { ...updatedTransaction, id }
          : transaction
      )
    );
  };

  return (
    <TransactionContext.Provider
      value={{
        transactions,
        addTransaction,
        deleteTransaction,
        editTransaction,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
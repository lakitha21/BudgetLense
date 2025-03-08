import React, { useState } from 'react';
import { Plus, Filter, ArrowUpRight, ArrowDownRight, Edit, Trash2 } from 'lucide-react';
import { useTransactions, Transaction } from '../context/TransactionContext';

interface TransactionFormData {
  amount: string;
  category: string;
  description: string;
  date: string;
  type: 'income' | 'expense';
}

const Budgets: React.FC = () => {
  const { transactions, addTransaction, deleteTransaction, editTransaction } = useTransactions();
  const [showModal, setShowModal] = useState(false);
  const [filter, setFilter] = useState<'all' | 'income' | 'expense'>('all');
  const [editingTransaction, setEditingTransaction] = useState<Transaction | null>(null);
  const [formData, setFormData] = useState<TransactionFormData>({
    amount: '',
    category: '',
    description: '',
    date: new Date().toISOString().split('T')[0],
    type: 'expense',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const transactionData = {
      amount: parseFloat(formData.amount),
      category: formData.category,
      description: formData.description,
      date: formData.date,
      type: formData.type,
    };

    if (editingTransaction) {
      editTransaction(editingTransaction.id, transactionData);
    } else {
      addTransaction(transactionData);
    }

    
    setFormData({
      amount: '',
      category: '',
      description: '',
      date: new Date().toISOString().split('T')[0],
      type: 'expense',
    });
    setEditingTransaction(null);
    setShowModal(false);
  };

  const openEditModal = (transaction: Transaction) => {
    setEditingTransaction(transaction);
    setFormData({
      amount: transaction.amount.toString(),
      category: transaction.category,
      description: transaction.description,
      date: transaction.date,
      type: transaction.type,
    });
    setShowModal(true);
  };

  const filteredTransactions = transactions.filter(transaction => {
    if (filter === 'all') return true;
    return transaction.type === filter;
  });

  return (
    <div>
      <h1 className="greeting">Manage Your Budget</h1>
      
      <div className="budget-actions">
        <button className="btn btn-primary" onClick={() => setShowModal(true)}>
          <Plus size={18} /> Add Transaction
        </button>
      </div>
      
      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Transaction History</h2>
          <div className="transaction-filters">
            <button 
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              <Filter size={16} /> All
            </button>
            <button 
              className={`filter-btn ${filter === 'income' ? 'active' : ''}`}
              onClick={() => setFilter('income')}
            >
              <ArrowUpRight size={16} /> Income
            </button>
            <button 
              className={`filter-btn ${filter === 'expense' ? 'active' : ''}`}
              onClick={() => setFilter('expense')}
            >
              <ArrowDownRight size={16} /> Expenses
            </button>
          </div>
        </div>
        
        <ul className="transaction-list">
          {filteredTransactions.length === 0 ? (
            <p style={{ padding: '20px 0', textAlign: 'center' }}>No transactions found.</p>
          ) : (
            filteredTransactions.map(transaction => (
              <li key={transaction.id} className="transaction-item">
                <div className="transaction-info">
                  <div className={`transaction-icon ${transaction.type}`}>
                    {transaction.type === 'income' ? <ArrowUpRight size={18} /> : <ArrowDownRight size={18} />}
                  </div>
                  <div className="transaction-details">
                    <h4>{transaction.category}</h4>
                    <p>{transaction.description}</p>
                    <small>{new Date(transaction.date).toLocaleDateString()}</small>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <div className={`transaction-amount ${transaction.type}`}>
                    {transaction.type === 'income' ? '+' : '-'}${transaction.amount.toFixed(2)}
                  </div>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <button 
                      style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#6c757d' }}
                      onClick={() => openEditModal(transaction)}
                    >
                      <Edit size={18} />
                    </button>
                    <button 
                      style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#e63946' }}
                      onClick={() => deleteTransaction(transaction.id)}
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              </li>
            ))
          )}
        </ul>
      </div>
      
      {showModal && (
        <div className="modal-backdrop" onClick={() => setShowModal(false)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h3 className="modal-title">
                {editingTransaction ? 'Edit Transaction' : 'Add New Transaction'}
              </h3>
              <button className="modal-close" onClick={() => setShowModal(false)}>×</button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="modal-body">
                <div className="form-group">
                  <label className="form-label">Transaction Type</label>
                  <select 
                    name="type" 
                    className="form-control"
                    value={formData.type}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="income">Income</option>
                    <option value="expense">Expense</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label className="form-label">Amount</label>
                  <input 
                    type="number" 
                    name="amount" 
                    className="form-control"
                    value={formData.amount}
                    onChange={handleInputChange}
                    placeholder="Enter amount"
                    min="0.01"
                    step="0.01"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label className="form-label">Category</label>
                  <input 
                    type="text" 
                    name="category" 
                    className="form-control"
                    value={formData.category}
                    onChange={handleInputChange}
                    placeholder="E.g., Salary, Groceries, Rent"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label className="form-label">Description</label>
                  <textarea 
                    name="description" 
                    className="form-control"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Add a description"
                    rows={3}
                    required
                  ></textarea>
                </div>
                
                <div className="form-group">
                  <label className="form-label">Date</label>
                  <input 
                    type="date" 
                    name="date" 
                    className="form-control"
                    value={formData.date}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              
              <div className="modal-footer">
                <button type="button" className="btn" onClick={() => setShowModal(false)}>Cancel</button>
                <button type="submit" className="btn btn-primary">
                  {editingTransaction ? 'Update' : 'Add'} Transaction
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Budgets;
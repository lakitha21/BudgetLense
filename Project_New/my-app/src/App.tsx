//import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Budgets from './pages/Budgets';
import Profile from './pages/Profile';
import Onboarding from './pages/Onboarding';
import { TransactionProvider } from './context/TransactionContext';

function App() {
  return (
    <TransactionProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Onboarding />} />
          <Route
            path="/dashboard"
            element={
              <div className="app-container">
                <Sidebar />
                <div className="main-content">
                  <Dashboard />
                </div>
              </div>
            }
          />
          <Route
            path="/budgets"
            element={
              <div className="app-container">
                <Sidebar />
                <div className="main-content">
                  <Budgets />
                </div>
              </div>
            }
          />
          <Route
            path="/profile"
            element={
              <div className="app-container">
                <Sidebar />
                <div className="main-content">
                  <Profile />
                </div>
              </div>
            }
          />
        </Routes>
      </Router>
    </TransactionProvider>
  );
}

export default App;
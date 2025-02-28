import React from 'react';
import { useNavigate } from 'react-router-dom';

const Onboarding: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="onboarding">
      <h1>Welcome to BudgetLense</h1>
      <p>
        Take control of your finances with our intuitive personal finance tracker.
        Track expenses, manage budgets, and achieve your financial goals with ease!
      </p>
      <button className="btn btn-accent" onClick={() => navigate('/dashboard')}>
        Get Started
      </button>
      <img 
        src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
        alt="Dashboard Preview" 
        className="preview-image" 
      />
    </div>
  );
};

export default Onboarding;
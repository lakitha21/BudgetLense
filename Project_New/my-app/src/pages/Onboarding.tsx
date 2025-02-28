import React from 'react';
import { useNavigate } from 'react-router-dom';
import Image1 from '../assets/Image1.png';

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
        src={Image1}
        alt="Dashboard Preview" 
        className="preview-image" 
      />
    </div>
  );
};

export default Onboarding;
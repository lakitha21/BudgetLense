import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, PieChart, User, DollarSign } from 'lucide-react';

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <div className="app-logo">
        <DollarSign size={24} />
        <span>BudgetLense</span>
      </div>
      <nav className="nav-links">
        <NavLink to="/dashboard" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
          <LayoutDashboard size={20} />
          <span>Dashboard</span>
        </NavLink>
        <NavLink to="/budgets" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
          <PieChart size={20} />
          <span>Budgets</span>
        </NavLink>
        <NavLink to="/profile" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
          <User size={20} />
          <span>Profile</span>
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
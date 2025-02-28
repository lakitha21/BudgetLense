import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/90 to-primary flex flex-col items-center justify-center text-white p-4">
      <div className="max-w-3xl text-center">
        <h1 className="text-5xl font-bold mb-6">Welcome to BudgetLense</h1>
        <p className="text-xl mb-8">
          Take control of your finances with our intuitive personal finance tracker.
          Monitor your spending, set budgets, and achieve your financial goals.
        </p>
        <Link
          to="/dashboard"
          className="inline-flex items-center px-6 py-3 text-lg font-medium rounded-lg bg-white text-primary hover:bg-gray-100 transition-colors"
        >
          Get Started
        </Link>
      </div>
      <div className="mt-16 w-full max-w-4xl bg-white/10 rounded-lg p-4 backdrop-blur-sm">
        <div className="aspect-video rounded-lg bg-white/20 flex items-center justify-center">
          <p className="text-lg">Dashboard Preview</p>
        </div>
      </div>
    </div>
  );
}
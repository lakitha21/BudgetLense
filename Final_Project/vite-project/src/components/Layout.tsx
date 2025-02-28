import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar.tsx';

export default function Layout() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 overflow-y-auto p-8">
        <Outlet />
      </main>
    </div>
  );
}
import { Outlet } from 'react-router-dom';
import Navbar from '../navbar/NavigationBar';
import ScrollToTop from '../components/ScrollToTop';

function RootLayout() {

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <header className="sticky w-full py-4 top-0 z-50 shadow-md shadow-slate-300">
        <Navbar />
      </header>
      <ScrollToTop/>
      {/* Page Content */}
      <main className="relative bg-white">
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;

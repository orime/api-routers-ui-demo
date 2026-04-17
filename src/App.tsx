import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import PlatformMgmt from './pages/PlatformMgmt';
import History from './pages/History';
import TestCenter from './pages/TestCenter';
import { Page } from './lib/types';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('dashboard');

  return (
    <div className="flex h-screen bg-[#040814] text-slate-200 overflow-hidden font-sans selection:bg-indigo-500/30">
      <Sidebar currentPage={currentPage} onNavigate={setCurrentPage} />
      
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
        {/* Global background ambient glow */}
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-900/15 blur-[120px] pointer-events-none z-0" />
        
        <Header currentPage={currentPage} onNavigate={setCurrentPage} />
        
        <main className="flex-1 overflow-auto custom-scrollbar p-6 z-10 relative">
          {currentPage === 'dashboard' && <Dashboard />}
          {currentPage === 'test-center' && <TestCenter />}
          {currentPage === 'platform-mgmt' && <PlatformMgmt />}
          {currentPage === 'history' && <History />}
        </main>
      </div>
    </div>
  );
}

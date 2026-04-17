import { Sun, Moon, Download, ChevronLeft } from 'lucide-react';
import { Page } from '../lib/types';
import { cn } from '../lib/utils';

interface HeaderProps {
  currentPage: Page;
  onNavigate?: (page: Page) => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const StatColumn = ({ value, label, subtext, dotColor }: any) => (
    <div className="flex flex-col items-center px-6 border-r border-[#1e293b] last:border-0 relative">
      <div className="flex items-center gap-2">
        <span className="text-xl font-bold tracking-tight text-white">{value}</span>
        {dotColor && <div className={cn("w-2 h-2 rounded-full", dotColor)} />}
      </div>
      <span className="text-xs text-slate-400 mt-0.5">{label}</span>
      {subtext && <span className="text-[10px] text-slate-500 absolute -bottom-4">{subtext}</span>}
    </div>
  );

  return (
    <header className="h-20 border-b border-[#1e293b] bg-[#0b1121]/80 backdrop-blur-md flex items-center justify-between px-6 shrink-0 z-10 sticky top-0">
      <div className="flex items-center">
        <h2 className="text-xl font-semibold text-white mr-8 hidden lg:block tracking-tight text-gradient">
          Quantum Observer
        </h2>
        <div className="flex items-center h-10">
           {currentPage === 'dashboard' ? (
             <>
                <StatColumn value="19" label="平台数量" />
                <StatColumn value="182" label="模型总数" />
                <StatColumn value="145" label="成功" dotColor="bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                <StatColumn value="18" label="异常" dotColor="bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.5)]" />
                <StatColumn value="19" label="失败" dotColor="bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.5)]" />
             </>
           ) : currentPage === 'platform-mgmt' ? (
             <>
                <StatColumn value="19" label="平台数量" />
                <StatColumn value="182" label="模型总数" />
                <StatColumn value="145" label="可用模型" dotColor="bg-emerald-500" />
                <StatColumn value="37" label="需关注" dotColor="bg-amber-500" />
             </>
           ) : currentPage === 'test-center' ? (
              <>
                <StatColumn value="19" label="平台数量" />
                <StatColumn value="182" label="模型总数" />
                <StatColumn value="68" label="运行中" dotColor="bg-indigo-500" />
                <StatColumn value="7" label="已完成" dotColor="bg-emerald-500" />
                <StatColumn value="3" label="失败" dotColor="bg-red-500" />
              </>
           ) : currentPage === 'history' ? (
             <>
                <StatColumn value="19" label="平台数量" />
                <StatColumn value="182" label="模型总数" />
                <StatColumn value="247" label="测试总数" dotColor="bg-indigo-500" />
                <StatColumn value="92.3%" label="平均成功率" />
             </>
           ) : null}
        </div>
      </div>

      <div className="flex items-center gap-4">
         {/* Theme Toggle placeholder */}
        <div className="flex items-center bg-slate-800/80 rounded-full p-1 border border-slate-700">
          <button className="p-1.5 rounded-full hover:bg-slate-700 text-slate-400 transition-colors">
            <Sun size={16} />
          </button>
          <button className="p-1.5 rounded-full bg-slate-900 text-indigo-400 shadow-sm border border-slate-700 transition-colors">
            <Moon size={16} />
          </button>
        </div>

        {/* Action Button depending on page */}
        {currentPage === 'platform-mgmt' ? (
          <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium rounded-lg transition-colors shadow-[0_0_15px_rgba(79,70,229,0.3)]">
            <Download size={16} className="rotate-180" /> {/* Simulate Add icon roughly if no plus imported, but let's just pretend */}
            <span>导入配置</span>
          </button>
        ) : currentPage === 'test-center' || currentPage === 'history' ? (
           <button 
             onClick={() => onNavigate && onNavigate('dashboard')}
             className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-medium rounded-lg border border-slate-700 transition-colors"
            >
            <ChevronLeft size={16} />
            <span>返回仪表盘</span>
          </button>
        ) : (
          <button className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-medium rounded-lg border border-slate-700 transition-colors">
            <Download size={16} />
            <span>导出报告</span>
          </button>
        )}

        {/* User Profile */}
        <div className="h-10 pl-2 pr-3 bg-slate-800/50 border border-slate-700 rounded-full flex items-center gap-3 ml-2 hover:bg-slate-800 transition-colors cursor-pointer">
           <img src="https://picsum.photos/seed/user/32/32" referrerPolicy="no-referrer" alt="User" className="w-8 h-8 rounded-full border border-slate-600" />
           <div className="flex flex-col">
             <span className="text-sm font-medium text-slate-200 leading-tight">开发者</span>
             <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded leading-none w-fit border border-emerald-500/20">PRO</span>
           </div>
        </div>
      </div>
    </header>
  );
}

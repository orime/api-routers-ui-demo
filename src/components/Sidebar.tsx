import { LayoutDashboard, Activity, HardDrive, History, FileText, Hexagon } from 'lucide-react';
import { Page } from '../lib/types';
import { cn } from '../lib/utils';
import { motion } from 'motion/react';

interface SidebarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export default function Sidebar({ currentPage, onNavigate }: SidebarProps) {
  const navItems: { id: Page; label: string; desc: string; icon: any }[] = [
    { id: 'dashboard', label: '仪表盘', desc: '全局测试概览', icon: LayoutDashboard },
    { id: 'test-center', label: '测试中心', desc: '批量测试与控制', icon: Activity },
    { id: 'platform-mgmt', label: '平台管理', desc: '配置与模型管理', icon: HardDrive },
    { id: 'history', label: '历史记录', desc: '测试记录与对比', icon: History },
  ];

  return (
    <div className="w-64 h-full border-r border-[#1e293b] bg-[#0b1121]/50 backdrop-blur-xl flex flex-col pt-6 pb-6 px-4 z-20 shrink-0">
      {/* Logo Area */}
      <div className="flex items-center gap-3 px-2 mb-10">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-[0_0_15px_rgba(99,102,241,0.5)]">
          <Hexagon className="text-white fill-white/20" size={24} />
        </div>
        <div>
          <h1 className="text-lg font-bold text-white tracking-tight">Quantum Observer</h1>
          <p className="text-[10px] text-slate-400 font-medium">API 聚合测试平台</p>
        </div>
      </div>

      {/* Nav Menu */}
      <nav className="flex-1 space-y-2">
        {navItems.map((item) => {
          const isActive = currentPage === item.id;
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={cn(
                "w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 relative group",
                isActive 
                  ? "bg-indigo-500/10 border border-indigo-500/20" 
                  : "hover:bg-slate-800/50 border border-transparent"
              )}
            >
              {isActive && (
                <motion.div 
                  layoutId="active-nav"
                  className="absolute left-0 top-0 bottom-0 w-1 bg-indigo-500 rounded-r-full shadow-[0_0_10px_rgba(99,102,241,0.8)]"
                />
              )}
              <div className={cn(
                "p-2 rounded-lg transition-colors",
                isActive ? "text-indigo-400 bg-indigo-500/10" : "text-slate-400 group-hover:text-slate-300 bg-slate-800/50 group-hover:bg-slate-700/50"
              )}>
                <Icon size={20} />
              </div>
              <div className="text-left">
                <div className={cn("text-sm font-medium transition-colors", isActive ? "text-white" : "text-slate-300 group-hover:text-white")}>{item.label}</div>
                <div className="text-[11px] text-slate-500 mt-0.5">{item.desc}</div>
              </div>
            </button>
          );
        })}
      </nav>

      {/* Help Widget */}
      <div className="mt-auto relative overflow-hidden rounded-2xl border border-[#1e293b] bg-gradient-to-b from-[#0f172a] to-[#040814] p-5 text-center">
        {/* Decorative Grid/Glow */}
        <div className="absolute top-[-50px] left-1/2 -translate-x-1/2 w-32 h-32 bg-indigo-500/20 blur-[40px]" />
        
        <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-slate-800/80 border border-slate-700/50 flex items-center justify-center relative">
          <Hexagon className="text-indigo-400" size={24} />
          <div className="absolute inset-0 bg-indigo-400/20 blur-md rounded-xl" />
        </div>
        
        <h4 className="text-sm font-medium text-white mb-1">需要帮助？</h4>
        <p className="text-[11px] text-slate-400 mb-4">查看使用文档与 API 指南</p>
        
        <button className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700 transition-colors text-xs text-slate-200">
          <FileText size={14} />
          <span>打开文档</span>
        </button>
      </div>
      <div className="text-center text-[10px] text-slate-600 mt-4">v1.0.0</div>
    </div>
  );
}

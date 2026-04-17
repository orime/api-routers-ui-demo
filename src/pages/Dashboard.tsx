import { RefreshCw, Search, ChevronDown, CheckCircle2, AlertCircle, XCircle } from 'lucide-react';
import { platforms, models, matrixData, activityLogs } from '../lib/data';
import { StatusIcon } from '../components/StatusIcon';
import { ShieldCheck, ThunderboltTimer, CosmicClock, NeuralFlask, PlatformIcon } from '../components/ColorfulIcons';
import { cn } from '../lib/utils';
import { motion } from 'motion/react';

export default function Dashboard() {
  const StatCard = ({ title, value, icon, subValue, type }: any) => (
    <div className="glass-panel rounded-xl p-5 relative overflow-hidden group hover:border-indigo-500/50 transition-colors">
      <div className={cn("absolute top-0 right-0 w-32 h-32 blur-[40px] opacity-20 pointer-events-none rounded-full transition-opacity group-hover:opacity-40", 
        type === 'success' ? "bg-emerald-500" : type === 'primary' ? "bg-indigo-500" : "bg-slate-500")} />
      
      <div className="flex items-center gap-3 mb-4 text-slate-400">
        <div className="shrink-0 drop-shadow-md">{icon}</div>
        <h3 className="font-medium tracking-tight text-slate-300">{title}</h3>
      </div>
      <div className="flex items-end gap-3 z-10 relative">
        {type === 'success' ? (
          <div className="flex items-center justify-center w-14 h-14 rounded-full border-[4px] border-emerald-500/20 relative">
            <svg className="absolute inset-0 w-full h-full transform -rotate-90">
              <circle cx="28" cy="28" r="26" stroke="currentColor" fill="transparent" strokeWidth="4" className="text-slate-800" />
              <circle cx="28" cy="28" r="26" stroke="currentColor" fill="transparent" strokeWidth="4" strokeDasharray="163" strokeDashoffset="33" className="text-emerald-500" strokeLinecap="round" />
            </svg>
            <span className="text-sm font-bold text-white relative z-10">{value}</span>
          </div>
        ) : (
          <span className="text-3xl font-bold text-white tracking-tight">{value}</span>
        )}
        {subValue && <span className="text-sm text-indigo-400 font-medium mb-1">{subValue}</span>}
      </div>
    </div>
  );

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="h-full flex flex-col gap-6">
      {/* Header section */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white mb-2 tracking-tight">测试仪表盘</h1>
          <p className="text-sm text-slate-400">实时掌握所有平台与模型的可用性状态</p>
        </div>
        <div className="flex items-center gap-4 text-sm text-slate-400">
          <span>最后更新: 2026-04-13 14:30:45</span>
          <button className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg border border-slate-700 transition-colors">
            <RefreshCw size={14} />
            <span>刷新</span>
          </button>
        </div>
      </div>

      {/* Top Stats Cards */}
      <div className="grid grid-cols-4 gap-6">
        <StatCard title="成功率" value="79.7%" subValue="145 / 182" type="success" icon={<ShieldCheck size={26} />} />
        <StatCard title="平均响应时间" value="2.34s" type="primary" icon={<ThunderboltTimer size={26} />} />
        <StatCard title="本轮耗时" value="00:04:32" type="primary" icon={<CosmicClock size={26} />} />
        <StatCard title="测试模型" value="182 / 182" type="primary" icon={<NeuralFlask size={26} />} />
      </div>

      {/* Main Content Area */}
      <div className="flex gap-6 flex-1 min-h-0">
        
        {/* Matrix Container */}
        <div className="flex-1 glass-panel rounded-xl flex flex-col overflow-hidden relative">
           
           {/* Filters Bar */}
          <div className="p-4 border-b border-[#1e293b] flex items-center justify-between z-10 bg-[#0b1121]/50 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <button className="flex items-center justify-between w-32 px-3 py-1.5 bg-slate-800/50 border border-slate-700 rounded-md text-sm text-slate-300 hover:bg-slate-800 transition-colors">
                <span>全部平台</span>
                <ChevronDown size={14} />
              </button>
              <button className="flex items-center justify-between w-32 px-3 py-1.5 bg-slate-800/50 border border-slate-700 rounded-md text-sm text-slate-300 hover:bg-slate-800 transition-colors">
                <span>全部类型</span>
                <ChevronDown size={14} />
              </button>
              <div className="relative">
                <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                <input type="text" placeholder="搜索模型名称..." className="pl-9 pr-4 py-1.5 bg-[#040814] border border-slate-700 rounded-md text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500 w-48 transition-colors" />
              </div>
            </div>
            <div className="flex items-center gap-4 text-xs font-medium">
              <div className="flex items-center gap-1.5 text-slate-300"><div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_5px_rgba(16,185,129,0.8)]" /> 成功</div>
              <div className="flex items-center gap-1.5 text-slate-300"><div className="w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_5px_rgba(245,158,11,0.8)]" /> 异常</div>
              <div className="flex items-center gap-1.5 text-slate-300"><div className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_5px_rgba(239,68,68,0.8)]" /> 失败</div>
              <div className="flex items-center gap-1.5 text-slate-500"><div className="w-2 h-2 rounded-full bg-slate-500" /> 未测试</div>
            </div>
          </div>

          {/* Matrix Scroll Area */}
          <div className="flex-1 overflow-auto custom-scrollbar p-4 relative z-0">
             {/* Decorative glow behind matrix */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-indigo-500/5 blur-[100px] pointer-events-none rounded-full" />
             
             <div className="min-w-fit pr-4 pb-12">
               {/* Header Row */}
               <div className="flex mb-4 sticky top-0 z-20 bg-[#0b1121]/90 backdrop-blur-sm pt-2 -mt-2 pb-2">
                 <div className="w-48 shrink-0 text-sm font-medium text-slate-400 pl-4">平台 / 模型</div>
                 {models.map(model => (
                   <div key={model.id} className="w-[84px] shrink-0 text-center text-sm font-medium text-slate-300 bg-slate-800/40 py-1.5 mx-1 rounded-md border border-slate-700/50">
                     {model.name}
                   </div>
                 ))}
               </div>

               {/* Data Rows */}
               <div className="space-y-4">
                 {platforms.map(platform => (
                   <div key={platform.id} className="flex items-center group relative z-10 hover:z-20 mb-1.5">
                     {/* Platform Info */}
                     <div className="w-48 shrink-0 flex items-center gap-3 pl-4">
                       <div className="shrink-0 drop-shadow-lg transform transition-transform group-hover:scale-105 group-hover:-rotate-3">
                         <PlatformIcon name={platform.name} size={34} />
                       </div>
                       <div>
                         <div className="text-sm font-bold text-slate-200 group-hover:text-indigo-200 transition-colors">{platform.name}</div>
                         <div className="text-[11px] text-slate-500 mt-0.5">{platform.modelsCount} 个模型</div>
                       </div>
                     </div>
                     {/* Status Cells */}
                     {matrixData[platform.id].map((status, index) => (
                       <StatusIcon key={`${platform.id}-${index}`} status={status} className="mx-1 hover:-translate-y-0.5 transition-transform" />
                     ))}
                   </div>
                 ))}
               </div>
             </div>
          </div>
          
          <div className="absolute bottom-4 left-6 text-xs text-slate-500 flex items-center gap-1.5 opacity-80 z-10 bg-[#0b1121] px-2 py-1 rounded-md border border-slate-800">
             <span className="text-amber-500">💡</span> 提示：悬停在单元格上可查看响应时间与错误详情，点击可跳转到平台配置
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-80 shrink-0 glass-panel rounded-xl flex flex-col overflow-hidden relative">
          <div className="absolute top-0 right-0 w-full h-40 bg-gradient-to-b from-indigo-500/10 to-transparent pointer-events-none" />
          
          <div className="flex border-b border-[#1e293b] mt-4 mx-4">
             <button className="flex-1 pb-3 text-sm font-medium text-white border-b-2 border-indigo-500 tracking-tight">实时活动</button>
             <button className="flex-1 pb-3 text-sm font-medium text-slate-400 hover:text-slate-300 tracking-tight">系统通知</button>
          </div>

          <div className="flex-1 overflow-y-auto custom-scrollbar p-6">
             <div className="relative pl-4 border-l border-slate-800/80 space-y-8">
               {activityLogs.map((log, i) => {
                 const isSuccess = log.type === 'success';
                 const isWarning = log.type === 'warning';
                 const isError = log.type === 'error';
                 const Icon = isSuccess ? CheckCircle2 : isWarning ? AlertCircle : XCircle;
                 const colorClass = isSuccess ? 'text-emerald-500' : isWarning ? 'text-amber-500' : 'text-red-500';
                 const bgClass = isSuccess ? 'bg-emerald-500' : isWarning ? 'bg-amber-500' : 'bg-red-500';

                 return (
                   <div key={i} className="relative group">
                     {/* Timeline Dot */}
                     <div className={cn("absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full ring-4 ring-[#0b1121]", bgClass, isSuccess ? 'shadow-[0_0_8px_rgba(16,185,129,0.8)]' : isError ? 'shadow-[0_0_8px_rgba(239,68,68,0.8)]' : 'shadow-[0_0_8px_rgba(245,158,11,0.8)]')} />
                     
                     <div className="flex items-baseline justify-between mb-1 text-xs">
                        <span className="text-slate-500 font-mono tracking-tighter">{log.time}</span>
                        <span className={cn("px-1.5 py-0.5 rounded text-[10px] font-medium opacity-80", 
                          log.status === '刚刚' ? 'bg-indigo-500/20 text-indigo-400' : 'bg-slate-800 text-slate-400',
                          isWarning ? 'bg-amber-500/20 text-amber-400' : '',
                          isError ? 'bg-red-500/20 text-red-500' : '',
                          isSuccess && log.status !== '刚刚' ? 'bg-emerald-500/20 text-emerald-400' : ''
                        )}>{log.status}</span>
                     </div>
                     <div className="text-sm font-semibold text-slate-200 mb-0.5 group-hover:text-white transition-colors">{log.platform}</div>
                     <div className={cn("text-xs", colorClass, !isSuccess && 'opacity-90')}>{log.event}</div>
                   </div>
                 )
               })}
             </div>
          </div>

          <div className="p-4 border-t border-[#1e293b] text-center bg-slate-900/30">
            <button className="text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors tracking-tight">查看全部活动日志 →</button>
          </div>
        </div>
      </div>
      <div className="text-center text-xs text-slate-600 mt-2">© 2026 Quantum Observer. All rights reserved.</div>
    </motion.div>
  );
}

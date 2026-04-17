import { useState } from 'react';
import { Play, Square, Trash2, ChevronDown, CheckCircle2, AlertCircle, Search } from 'lucide-react';
import { platforms } from '../lib/data';
import { cn } from '../lib/utils';
import { motion } from 'motion/react';

export default function TestCenter() {
  const [isRunning, setIsRunning] = useState(true);

  // Reusable ring component
  const ProgressRing = ({ title, activeModel, modelsCount, success, warning, error, waiting, isError, timeStr }: any) => {
    const total = modelsCount;
    const completed = success + warning + error;
    const progress = completed / total;
    const size = 110;
    const strokeWidth = 8;
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const dashoffset = circumference - progress * circumference;

    const ringColor = isError ? 'text-red-500' : progress === 1 ? 'text-emerald-500' : 'text-indigo-500';
    const bgColor = isError ? 'border-red-500/30 bg-red-500/5' : progress === 1 ? 'border-emerald-500/30 bg-emerald-500/5' : 'border-indigo-500/30 bg-indigo-500/5';
    const statusLabel = isError ? '2 个失败' : progress === 1 ? '已完成' : progress === 0 ? '等待中' : '运行中';
    const statusBg = isError ? 'bg-amber-500' : progress === 1 ? 'bg-slate-500' : progress === 0 ? 'bg-slate-700' : 'bg-emerald-500';

    return (
      <div className={cn("glass-panel rounded-xl p-5 border flex flex-col relative overflow-hidden group transition-all", bgColor)}>
        <div className="flex justify-between items-start mb-4">
           <div className="flex items-center gap-2">
             <div className="w-6 h-6 rounded bg-slate-800 flex items-center justify-center shadow-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
             </div>
             <h3 className="font-bold text-slate-200 text-lg">{title}</h3>
           </div>
           <span className={cn("px-2 py-0.5 rounded-full text-[11px] font-medium text-white shadow-sm flex items-center gap-1", statusBg)}>
             {statusLabel}
           </span>
        </div>

        <div className="flex gap-4 items-center mb-4">
           {/* Ring */}
           <div className="relative flex flex-col items-center justify-center shrink-0 drop-shadow-lg" style={{ width: size, height: size }}>
             <svg width={size} height={size} className="transform -rotate-90">
               <circle cx={size/2} cy={size/2} r={radius} stroke="currentColor" fill="transparent" strokeWidth={strokeWidth} className="text-slate-800/80" />
               <circle cx={size/2} cy={size/2} r={radius} stroke="currentColor" fill="transparent" strokeWidth={strokeWidth}
                 strokeDasharray={circumference} strokeDashoffset={dashoffset} className={cn("transition-all duration-1000 ease-out", ringColor)}
                 style={{ strokeLinecap: 'round' }} />
             </svg>
             <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
               <span className="text-2xl font-bold tracking-tighter text-white">{completed}/{total}</span>
             </div>
           </div>

           {/* Stats list */}
           <div className="flex-1 space-y-2 text-xs font-medium">
             <div className="flex justify-between items-center"><div className="flex items-center gap-1.5 text-emerald-400"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> 成功</div><span className="text-slate-300 text-sm font-bold">{success}</span></div>
             <div className="flex justify-between items-center"><div className="flex items-center gap-1.5 text-amber-400"><div className="w-1.5 h-1.5 rounded-full bg-amber-500" /> 异常</div><span className="text-slate-300 text-sm font-bold">{warning}</span></div>
             <div className="flex justify-between items-center"><div className="flex items-center gap-1.5 text-red-400"><div className="w-1.5 h-1.5 rounded-full bg-red-500" /> 失败</div><span className="text-slate-300 text-sm font-bold">{error}</span></div>
             <div className="flex justify-between items-center"><div className="flex items-center gap-1.5 text-slate-500"><div className="w-1.5 h-1.5 rounded-full bg-slate-600" /> 等待</div><span className="text-slate-400 text-sm">{waiting}</span></div>
           </div>
        </div>

        <div className="mt-auto pt-4 border-t border-slate-700/50 text-[11px] flex justify-between items-center">
           <span className="text-slate-400 truncate w-32">{progress > 0 && progress < 1 ? `正在测试: ${activeModel}` : isError ? 'HTTP 429: Rate Limit' : progress === 0 ? '队列中...' : '测试完成'}</span>
           <span className="text-slate-500 font-mono font-medium">{timeStr}</span>
        </div>
        
        {/* Detail overlay on hover */}
        <div className="absolute inset-x-0 bottom-0 py-2 bg-gradient-to-t from-black/80 to-transparent flex justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="text-xs text-indigo-300 cursor-pointer hover:text-indigo-200">查看详情</span>
        </div>
      </div>
    );
  };

  return (
    <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="h-full flex flex-col gap-6">
      
      {/* Page Header */}
      <div className="flex items-center justify-between z-10 shrink-0">
        <div>
          <h1 className="text-2xl font-bold text-white mb-2 tracking-tight">测试中心</h1>
          <p className="text-sm text-slate-400">选择平台和模型，发起批量测试，实时监控测试进度</p>
        </div>
      </div>

      {/* Top Config Bar */}
      <div className="glass-panel p-4 rounded-xl flex items-end justify-between z-10 shrink-0">
         <div className="flex gap-8">
            <div className="space-y-2">
               <label className="text-xs font-bold text-slate-400">选择范围 :</label>
               <div className="flex gap-4">
                  <label className="flex items-center gap-2 text-sm text-indigo-300 cursor-pointer">
                    <input type="checkbox" checked readOnly className="accent-indigo-500 w-4 h-4 rounded ring-2 ring-indigo-500/20" />
                    全选平台
                  </label>
                  <label className="flex items-center gap-2 text-sm text-slate-300 cursor-pointer">
                    <input type="checkbox" className="accent-indigo-500 w-4 h-4 rounded border-slate-600 bg-slate-800" />
                    全选模型
                  </label>
               </div>
            </div>
            
            <div className="flex items-end gap-3">
               <button className="flex items-center justify-between w-32 px-3 py-2 bg-slate-900/50 border border-slate-700 rounded-lg text-sm text-slate-300">
                  <span>全部平台</span><ChevronDown size={14} />
               </button>
               <button className="flex items-center justify-between w-32 px-3 py-2 bg-slate-900/50 border border-slate-700 rounded-lg text-sm text-slate-300">
                  <span>全部类型</span><ChevronDown size={14} />
               </button>
               <div className="relative">
                  <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                  <input type="text" placeholder="搜索模型名称..." className="pl-9 pr-4 py-2 bg-slate-900/50 border border-slate-700 rounded-lg text-sm text-slate-200 w-48" />
               </div>
            </div>
            
            <div className="w-px h-8 bg-slate-800 self-center hidden lg:block" />

            <div className="flex items-end gap-4">
               <div>
                 <label className="block text-xs font-bold text-slate-400 mb-1">并发数</label>
                 <button className="flex items-center justify-between w-20 px-3 py-1.5 bg-slate-900/50 border border-slate-700 rounded-lg text-sm text-slate-300">
                    <span>5</span><ChevronDown size={14} />
                 </button>
               </div>
               <div>
                 <label className="block text-xs font-bold text-slate-400 mb-1">超时时间</label>
                 <button className="flex items-center justify-between w-24 px-3 py-1.5 bg-slate-900/50 border border-slate-700 rounded-lg text-sm text-slate-300">
                    <span>7 分钟</span><ChevronDown size={14} />
                 </button>
               </div>
            </div>
         </div>

         <div className="flex items-center gap-3">
           <button className="flex items-center gap-2 px-6 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg font-bold shadow-[0_0_15px_rgba(79,70,229,0.3)] transition-all">
              <Play size={16} className="fill-current" />
              全部测试 (182)
           </button>
           <button className="flex items-center gap-2 px-4 py-2.5 bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20 rounded-lg text-sm font-medium transition-colors">
              <Square size={14} className="fill-current" />
              停止测试
           </button>
           <button className="flex items-center gap-2 px-3 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-400 rounded-lg text-sm border border-slate-700 transition-colors">
              <Trash2 size={14} /> 清空日志
           </button>
         </div>
      </div>

      {/* Grid of Platform Cards */}
      <div className="grid grid-cols-4 gap-6 z-10 shrink-0">
          <ProgressRing title="T8 Star" activeModel="gpt-4o" modelsCount={12} success={6} warning={1} error={1} waiting={4} timeStr="2.34s" />
          <ProgressRing title="ApiMart" activeModel="flux.1-dev" modelsCount={8} success={4} warning={1} error={0} waiting={3} timeStr="1m 12s" />
          <ProgressRing title="ModelScope" activeModel="ideogram-v2" modelsCount={15} success={8} warning={2} error={2} waiting={3} isError={true} />
          <ProgressRing title="GRSAI" modelsCount={10} success={0} warning={0} error={0} waiting={10} />
      </div>

      {/* Console Output */}
      <div className="glass-panel flex-1 rounded-xl flex flex-col overflow-hidden min-h-[250px] relative">
         <div className="p-3 border-b border-[#1e293b] flex items-center justify-between bg-black/40">
            <h4 className="text-sm font-bold text-slate-300">实时控制台 <span className="font-normal text-slate-500 ml-2">测试日志实时输出</span></h4>
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-1.5 text-xs text-indigo-300 cursor-pointer">
                <input type="checkbox" defaultChecked className="accent-indigo-500" />
                自动滚动
              </label>
              <button className="text-xs text-slate-400 hover:text-white flex items-center gap-1 border border-slate-700 px-2 py-1 rounded"><Trash2 size={12}/> 清空</button>
            </div>
         </div>
         
         <div className="flex-1 overflow-y-auto custom-scrollbar p-4 bg-black/60 font-mono text-[13px] leading-relaxed space-y-1">
             <div className="text-slate-400 flex gap-4"><span className="w-20 shrink-0 opacity-50">14:30:21</span><span className="text-indigo-400">[系统]</span> 测试批次 #202504131430 已创建，包含 4 个平台，182 个模型</div>
             <div className="text-slate-400 flex gap-4"><span className="w-20 shrink-0 opacity-50">14:30:22</span><span className="text-slate-300">[T8 Star]</span> [1/12] 正在测试 gpt-4o ...</div>
             <div className="text-slate-400 flex gap-4"><span className="w-20 shrink-0 opacity-50">14:30:25</span><span className="text-slate-300">[T8 Star]</span> [1/12] <span className="text-emerald-400 flex items-center gap-1"><CheckCircle2 size={12}/> 成功</span> - 响应时间: <span className="text-emerald-300">1.23s</span> (tokens: 158)</div>
             <div className="text-slate-400 flex gap-4"><span className="w-20 shrink-0 opacity-50">14:30:25</span><span className="text-slate-300">[T8 Star]</span> [2/12] 正在测试 claude-3.5 ...</div>
             <div className="text-slate-400 flex gap-4"><span className="w-20 shrink-0 opacity-50">14:30:28</span><span className="text-slate-300">[ApiMart]</span> [1/8] 正在测试 flux.1-dev ...</div>
             <div className="text-slate-400 flex gap-4"><span className="w-20 shrink-0 opacity-50">14:30:31</span><span className="text-slate-300">[ApiMart]</span> [1/8] <span className="text-amber-400 flex items-center gap-1"><AlertCircle size={12}/> 异常</span> - HTTP 503: Service Unavailable</div>
             <div className="text-slate-400 flex gap-4"><span className="w-20 shrink-0 opacity-50">14:30:33</span><span className="text-slate-300">[ModelScope]</span> [1/15] 正在测试 ideogram-v2 ...</div>
             <div className="text-slate-400 flex gap-4"><span className="w-20 shrink-0 opacity-50">14:30:37</span><span className="text-slate-300">[ModelScope]</span> [1/15] <span className="text-red-500 flex items-center gap-1"><Square size={12}/> 失败</span> - HTTP 429: Rate Limit</div>
             <div className="text-slate-400 flex gap-4"><span className="w-20 shrink-0 opacity-50">14:30:40</span><span className="text-slate-300">[GRSAI]</span> 已加入队列，等待前方任务完成...</div>
             <div className="text-slate-400 flex gap-4"><span className="w-20 shrink-0 opacity-50">14:30:45</span><span className="text-indigo-400">[系统]</span> 当前进度: 13/182 (7.1%), 预计剩余时间: 00:03:42</div>
             {/* Cursor blink effect */}
             <div className="w-2 h-4 bg-slate-500 animate-pulse mt-2" />
         </div>

         {/* Mini find bar */}
         <div className="absolute bottom-4 right-4 relative w-64">
           <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
           <input type="text" placeholder="日志过滤..." className="w-full pl-9 pr-3 py-1.5 bg-slate-800/80 border border-slate-700/80 rounded border shadow-lg text-sm text-slate-200 focus:outline-none focus:border-indigo-500/50 backdrop-blur-md" />
         </div>
      </div>

    </motion.div>
  );
}

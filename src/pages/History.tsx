import { Search, ChevronDown, Calendar, Trash2, Eye, Download, Play, ArrowUpDown } from 'lucide-react';
import { historyRecords, matrixData, platforms, models } from '../lib/data';
import { StatusIcon } from '../components/StatusIcon';
import { PlatformIcon } from '../components/ColorfulIcons';
import { cn } from '../lib/utils';
import { motion } from 'motion/react';

export default function History() {
  const selectedRecord = historyRecords[0];

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="h-full flex flex-col gap-6">
      <div className="flex items-center justify-between z-10 shrink-0">
        <div>
          <h1 className="text-2xl font-bold text-white mb-2 tracking-tight">历史记录</h1>
          <p className="text-sm text-slate-400">查看过往测试记录，支持结果对比与数据导出</p>
        </div>
      </div>

      <div className="flex flex-col gap-6 flex-1 min-h-0 z-10">
         <div className="glass-panel rounded-xl flex flex-col shrink-0 min-h-[250px]">
            <div className="p-4 border-b border-[#1e293b] flex items-center justify-between bg-[#0b1121]/50 backdrop-blur-md rounded-t-xl">
               <div className="flex items-center gap-3">
                  <div className="relative">
                     <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                     <input type="text" placeholder="搜索测试批次号或备注..." className="pl-9 pr-4 py-1.5 bg-slate-900/50 border border-slate-700/80 rounded-lg text-sm text-slate-200" />
                  </div>
                  <button className="flex items-center justify-between w-32 px-3 py-1.5 bg-slate-900/50 border border-slate-700/80 rounded-lg text-sm text-slate-300">
                     <span>全部平台</span><ChevronDown size={14} />
                  </button>
                  <button className="flex items-center justify-between w-56 px-3 py-1.5 bg-slate-900/50 border border-slate-700/80 rounded-lg text-sm text-slate-300">
                     <Calendar size={14} className="text-slate-400 mr-2" />
                     <span>2026-04-01 ~ 2026-04-13</span>
                  </button>
               </div>
               <button className="flex items-center gap-1.5 px-3 py-1.5 text-sm text-slate-400 hover:text-slate-200"><Trash2 size={14}/>清空筛选</button>
            </div>
            <div className="flex-1 overflow-x-auto relative">
               <table className="w-full text-left text-sm whitespace-nowrap">
                  <thead className="text-xs text-slate-400 bg-slate-900/30">
                     <tr>
                        <th className="px-6 py-4 font-medium border-b border-slate-700/50">测试批次</th>
                        <th className="px-6 py-4 font-medium border-b border-slate-700/50">开始时间</th>
                        <th className="px-6 py-4 font-medium border-b border-slate-700/50">测试范围</th>
                        <th className="px-6 py-4 font-medium border-b border-slate-700/50">成功率</th>
                        <th className="px-6 py-4 font-medium border-b border-slate-700/50">状态</th>
                     </tr>
                  </thead>
                  <tbody className="divide-y divide-[#1e293b]/50">
                     {historyRecords.map((record, i) => (
                        <tr key={record.id} className={cn("hover:bg-indigo-500/5 cursor-pointer", i === 0 && "bg-indigo-500/10")}>
                           <td className="px-6 py-3">
                              <div className="font-mono text-indigo-300">{record.id}</div>
                              <div className="text-xs text-slate-500">{record.type}</div>
                           </td>
                           <td className="px-6 py-3 text-slate-300 font-mono">{record.startTime}</td>
                           <td className="px-6 py-3 text-slate-300">{record.scope}</td>
                           <td className="px-6 py-3">
                              <div className="font-medium text-emerald-400">{record.successRate}</div>
                              <div className="text-xs text-slate-500">{record.successCount}/{record.totalCount}</div>
                           </td>
                           <td className="px-6 py-3">
                              <span className="px-2 py-1 rounded-full text-[11px] bg-emerald-500/10 text-emerald-400">{record.status}</span>
                           </td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
         </div>

         <div className="glass-panel rounded-xl flex flex-col flex-1 min-h-0">
            <div className="p-4 border-b border-[#1e293b] flex items-center justify-between">
               <h3 className="text-base font-bold text-white">批次详情: {selectedRecord.id}</h3>
               <button className="flex items-center gap-2 px-4 py-1 bg-indigo-600 text-white rounded"><Play size={14}/>重新测试</button>
            </div>
            <div className="flex-1 overflow-y-auto p-4 flex gap-4">
                <div className="w-64 bg-slate-900/60 rounded p-4 border border-slate-700/50">
                    <h4 className="text-sm font-bold text-slate-200 mb-2">测试摘要</h4>
                    <p className="text-sm text-slate-400 mb-1">总数: <span className="text-white">{selectedRecord.totalCount}</span></p>
                    <p className="text-sm text-slate-400 mb-1">成功: <span className="text-emerald-400">{selectedRecord.successCount}</span></p>
                    <p className="text-sm text-slate-400 mb-1">成功率: <span className="text-indigo-400">{selectedRecord.successRate}</span></p>
                </div>
                <div className="flex-1 bg-slate-900/60 rounded p-4 border border-slate-700/50 overflow-x-auto">
                    <h4 className="text-sm font-bold text-slate-200 mb-2">结果快照</h4>
                    <div className="min-w-fit">
                       <div className="flex mb-2">
                         <div className="w-24 shrink-0" />
                         {models.map(m => (<div key={m.id} className="w-16 shrink-0 text-center text-xs text-slate-400">{m.name}</div>))}
                       </div>
                       {platforms.map(p => (
                         <div key={p.id} className="flex items-center space-y-2 mb-1">
                           <div className="w-24 shrink-0 flex items-center gap-2">
                              <PlatformIcon name={p.name} size={20} />
                              <div className="text-xs font-bold text-slate-300">{p.name}</div>
                           </div>
                           {matrixData[p.id].map((s, i) => (
                             <StatusIcon key={i} status={s} className="[&>div]:w-14 [&>div]:h-6 [&>div>svg]:w-3" />
                           ))}
                         </div>
                       ))}
                    </div>
                </div>
            </div>
         </div>
      </div>
    </motion.div>
  );
}

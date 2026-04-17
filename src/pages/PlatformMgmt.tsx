import { useState } from 'react';
import { Search, ChevronDown, Edit2, Trash2, Eye, Plus, GripVertical } from 'lucide-react';
import { platforms } from '../lib/data';
import { PlatformIcon } from '../components/ColorfulIcons';
import { cn } from '../lib/utils';
import { motion } from 'motion/react';

export default function PlatformMgmt() {
  const [activePlatform, setActivePlatform] = useState(platforms[0].id);

  return (
    <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="h-full flex flex-col relative">
      {/* Background ambient glow specific to this page */}
      <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-purple-900/10 blur-[150px] pointer-events-none rounded-full" />
      
      <div className="mb-6 z-10">
        <h1 className="text-2xl font-bold text-white mb-2 tracking-tight">平台管理</h1>
        <p className="text-sm text-slate-400">管理 API 平台配置与模型列表，支持 OpenAI 兼容与 Gemini 原生</p>
      </div>

      <div className="flex gap-6 flex-1 min-h-0 z-10">
        {/* Left Column: Platform List */}
        <div className="w-[380px] shrink-0 flex flex-col gap-4">
           {/* List Search & Filter */}
           <div className="flex gap-2">
              <div className="relative flex-1">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                <input type="text" placeholder="搜索平台名称..." className="w-full pl-9 pr-4 py-2 bg-slate-900/80 border border-slate-700/80 rounded-lg text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors" />
              </div>
              <button className="flex items-center justify-between w-28 px-3 py-2 bg-slate-900/80 border border-slate-700/80 rounded-lg text-sm text-slate-300 hover:bg-slate-800 transition-colors">
                <span>全部平台</span>
                <ChevronDown size={14} />
              </button>
           </div>

           {/* List */}
           <div className="flex-1 overflow-y-auto custom-scrollbar space-y-3 pb-4 pr-2">
              {platforms.map(p => {
                const isActive = p.id === activePlatform;
                return (
                  <div 
                    key={p.id} 
                    onClick={() => setActivePlatform(p.id)}
                    className={cn(
                      "group p-4 rounded-xl border flex flex-col gap-3 cursor-pointer transition-all duration-300",
                      isActive 
                        ? "bg-indigo-900/20 border-indigo-500/50 shadow-[0_0_20px_rgba(79,70,229,0.15)]" 
                        : "bg-slate-900/40 border-slate-700/50 hover:border-slate-600 hover:bg-slate-900/60"
                    )}
                  >
                    <div className="flex items-start justify-between">
                       <div className="flex items-center gap-3">
                          <div className="shrink-0 drop-shadow-lg transform transition-transform group-hover:scale-105 group-hover:-rotate-3">
                             <PlatformIcon name={p.name} size={42} />
                          </div>
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                               <h3 className={cn("font-bold text-lg leading-none transition-colors", isActive ? "text-indigo-100" : "text-slate-200 group-hover:text-white")}>{p.name}</h3>
                               {p.active ? (
                                 <span className="flex items-center gap-1 text-[10px] text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded leading-none border border-emerald-500/20">
                                   <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> 已启用
                                 </span>
                               ) : (
                                  <span className="flex items-center gap-1 text-[10px] text-amber-400 bg-amber-500/10 px-1.5 py-0.5 rounded leading-none border border-amber-500/20">
                                   <div className="w-1.5 h-1.5 rounded-full bg-amber-500" /> 需更新
                                 </span>
                               )}
                            </div>
                            <div className="text-xs text-slate-400">
                              {p.modelsCount} 个模型 · {p.isNative ? 'Gemini 原生' : 'OpenAI 兼容'}
                            </div>
                          </div>
                       </div>
                       <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button className="p-1.5 text-slate-400 hover:text-indigo-400 hover:bg-indigo-500/10 rounded-md transition-colors"><Edit2 size={14}/></button>
                          <button className="p-1.5 text-slate-400 hover:text-red-400 hover:bg-red-500/10 rounded-md transition-colors"><Trash2 size={14}/></button>
                       </div>
                    </div>
                    
                    <div className="flex items-center justify-between mt-1">
                      <div className="text-xs text-slate-500 font-mono select-all truncate">{p.url}</div>
                    </div>

                    <div className="flex items-center gap-2 mt-1">
                       <span className="text-[11px] px-2 py-0.5 rounded-md bg-indigo-500/10 text-indigo-300 border border-indigo-500/10">对话 {p.chatCount}</span>
                       <span className="text-[11px] px-2 py-0.5 rounded-md bg-purple-500/10 text-purple-300 border border-purple-500/10">生图 {p.imageCount}</span>
                    </div>
                  </div>
                )
              })}
           </div>

           <button className="w-full py-3 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 rounded-xl text-sm font-medium text-slate-200 flex items-center justify-center gap-2 transition-colors">
              <Plus size={16} /> 新增平台
           </button>
        </div>

        {/* Right Column: Edit Form */}
        <div className="flex-1 glass-panel rounded-xl flex flex-col overflow-hidden relative border-t-0 sm:border-t">
           <div className="h-14 border-b border-[#1e293b] flex items-center justify-between px-6 bg-[#0b1121]/80 backdrop-blur-md shrink-0">
              <div className="flex items-center gap-3">
                 <h2 className="text-lg font-bold text-white tracking-tight">编辑平台</h2>
                 <span className="text-xs text-slate-500 bg-slate-800 px-2 py-0.5 rounded-md border border-slate-700 font-mono">ID: platform_001</span>
              </div>
              <div className="flex items-center gap-2">
                 <span className="text-sm font-medium text-slate-300">启用</span>
                 <div className="w-10 h-5 bg-indigo-600 rounded-full cursor-pointer relative shadow-[0_0_10px_rgba(79,70,229,0.4)]">
                    <div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full shadow-sm" />
                 </div>
              </div>
           </div>

           <div className="flex-1 overflow-y-auto custom-scrollbar p-8 space-y-8">
              
              {/* Basic Config */}
              <section className="space-y-5">
                 <h3 className="text-sm font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-2">基础配置</h3>
                 
                 <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                       <label className="text-sm font-medium text-slate-300">平台名称 <span className="text-red-500">*</span></label>
                       <div className="relative">
                         <input type="text" defaultValue="T8 Star" className="w-full px-4 py-2 bg-slate-900/50 border border-slate-700 rounded-lg text-sm text-slate-200 focus:outline-none focus:border-indigo-500 transition-colors" />
                         <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-500">7/20</span>
                       </div>
                    </div>
                    <div className="space-y-2">
                       <label className="text-sm font-medium text-slate-300">API 密钥 <span className="text-red-500">*</span></label>
                       <div className="relative">
                         <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"><LockIcon /></div>
                         <input type="password" defaultValue="sk-***************************1234" className="w-full pl-10 pr-10 py-2 bg-slate-900/50 border border-slate-700 rounded-lg text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors font-mono tracking-widest" />
                         <button className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200"><Eye size={16}/></button>
                       </div>
                       <p className="text-[11px] text-slate-500 mt-1">密钥已加密存储，仅在发送请求时使用</p>
                    </div>
                 </div>

                 <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">接口根地址 <span className="text-red-500">*</span></label>
                    <input type="text" defaultValue="https://ai.t8star.cn" className="w-full px-4 py-2 bg-slate-900/50 border border-slate-700 rounded-lg text-sm text-slate-200 font-mono focus:outline-none focus:border-indigo-500 transition-colors" />
                    <p className="text-[11px] text-slate-500">不要包含 /v1 或其他路径，系统会自动拼接</p>
                 </div>

                 <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">兼容模式</label>
                    <div className="grid grid-cols-2 gap-4">
                       <div className="p-4 rounded-xl border-2 border-indigo-500 bg-indigo-500/5 flex items-start gap-3 cursor-pointer inset-shadow">
                          <div className="w-4 h-4 rounded-full border-[4px] border-indigo-500 bg-black mt-0.5 shrink-0" />
                          <div>
                            <div className="text-sm font-bold text-slate-200">OpenAI 兼容</div>
                            <div className="text-xs text-slate-400 mt-1">使用 OpenAI 接口格式</div>
                          </div>
                       </div>
                       <div className="p-4 rounded-xl border border-slate-700 bg-slate-900/30 flex items-start gap-3 cursor-pointer hover:border-slate-600 transition-colors opacity-60 hover:opacity-100">
                          <div className="w-4 h-4 rounded-full border-2 border-slate-600 bg-transparent mt-0.5 shrink-0" />
                          <div>
                            <div className="text-sm font-bold text-slate-200">Gemini 原生</div>
                            <div className="text-xs text-slate-400 mt-1">使用 Gemini 原生格式</div>
                          </div>
                       </div>
                    </div>
                 </div>

                 <div className="space-y-2 pt-2">
                    <label className="text-sm font-medium text-slate-300">自定义路由 <span className="text-[11px] text-slate-500 font-normal ml-1">(可选)</span></label>
                    <div className="grid grid-cols-3 gap-4">
                       <div className="space-y-1">
                          <div className="text-xs text-slate-400 mb-1">Chat 路径</div>
                           <input type="text" defaultValue="/v1/chat/completions" className="w-full px-3 py-1.5 bg-slate-900/50 border border-slate-700 rounded-lg text-sm text-slate-400 font-mono focus:outline-none focus:border-slate-500 transition-colors opacity-70" />
                       </div>
                       <div className="space-y-1">
                          <div className="text-xs text-slate-400 mb-1">Image 路径</div>
                           <input type="text" defaultValue="/v1/images/generations" className="w-full px-3 py-1.5 bg-slate-900/50 border border-slate-700 rounded-lg text-sm text-slate-400 font-mono focus:outline-none focus:border-slate-500 transition-colors opacity-70" />
                       </div>
                       <div className="space-y-1">
                          <div className="text-xs text-slate-400 mb-1">任务状态路径</div>
                           <input type="text" defaultValue="/v1/tasks/{taskId}" className="w-full px-3 py-1.5 bg-slate-900/50 border border-slate-700 rounded-lg text-sm text-slate-400 font-mono focus:outline-none focus:border-slate-500 transition-colors opacity-70" />
                       </div>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-2">留空将使用默认路径</p>
                 </div>
              </section>

              {/* Model Management */}
              <section className="space-y-4">
                 <h3 className="text-sm font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-2">模型管理</h3>
                 
                 <div className="flex items-center gap-2 mb-4">
                    <button className="px-4 py-1.5 rounded-full bg-indigo-600 text-white text-xs font-medium shadow-[0_0_10px_rgba(79,70,229,0.3)]">对话模型 (8)</button>
                    <button className="px-4 py-1.5 rounded-full bg-slate-800 text-slate-400 text-xs font-medium hover:bg-slate-700 transition-colors">生图模型 (4)</button>
                 </div>

                 <div className="relative mb-6">
                    <input type="text" placeholder="输入模型名称，按回车添加" className="w-full pl-4 pr-32 py-2.5 bg-slate-900/80 border border-slate-700 rounded-xl text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors shadow-inner" />
                    <button className="absolute right-2 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium rounded-lg transition-colors border border-slate-700 flex items-center gap-1">
                      <Plus size={14} /> 添加模型
                    </button>
                    <span className="absolute right-0 -top-6 text-[11px] text-slate-500 flex items-center gap-1"><GripVertical size={12}/>拖拽排序</span>
                 </div>

                 <div className="p-5 bg-slate-900/30 border border-slate-700/50 rounded-xl min-h-[160px] flex flex-wrap gap-3 items-start content-start relative">
                    <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-slate-900/50 to-transparent pointer-events-none rounded-b-xl" />
                    
                    {['gpt-4o', 'gpt-4-turbo', 'claude-3-5-sonnet', 'gemini-2.0-flash', 'qwen-max', 'glm-4', 'deepseek-chat', 'moonshot-v1-32k'].map(m => (
                      <div key={m} className="group flex items-center gap-1.5 px-3 py-1.5 bg-[#0b1121] border border-slate-700 hover:border-indigo-500/50 rounded-lg text-[13px] font-medium text-slate-300 w-fit shrink-0 cursor-grab transition-colors shadow-sm">
                        <GripVertical size={14} className="text-slate-500 group-hover:text-slate-400" />
                        <span className="font-mono">{m}</span>
                        <button className="text-slate-500 hover:text-red-400 ml-1 transition-colors"><XCircle size={14}/></button>
                      </div>
                    ))}
                    <div className="w-full mt-auto pt-2 text-[11px] text-slate-500 flex justify-between items-end relative z-10">
                      <span>8 / 50</span>
                    </div>
                 </div>

              </section>

           </div>

           <div className="h-16 border-t border-[#1e293b] flex items-center justify-end px-6 bg-[#0b1121]/90 backdrop-blur-md shrink-0 gap-3">
              <button className="px-5 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800 transition-colors">取消</button>
              <button className="px-6 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-bold shadow-[0_0_15px_rgba(79,70,229,0.4)] transition-all">保存配置</button>
           </div>
        </div>
      </div>
    </motion.div>
  );
}

// Inline minor icon components
function LockIcon() { return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>; }
function XCircle(props:any) { return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>; }

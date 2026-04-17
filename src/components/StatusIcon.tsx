import React from 'react';
import { Check, AlertCircle, X, Minus } from 'lucide-react';
import { cn } from '../lib/utils';
import { Status } from '../lib/types';

export const StatusIcon: React.FC<{ status: Status; className?: string }> = ({ status, className }) => {
  const styles = {
    success: 'bg-emerald-500/15 border-emerald-500/30 text-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.15)] group-hover:bg-emerald-500/25 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] group-hover:border-emerald-500/50',
    warning: 'bg-amber-500/15 border-amber-500/30 text-amber-400 shadow-[0_0_10px_rgba(245,158,11,0.15)] group-hover:bg-amber-500/25 group-hover:shadow-[0_0_15px_rgba(245,158,11,0.3)] group-hover:border-amber-500/50',
    error:   'bg-red-500/15 border-red-500/30 text-red-500 shadow-[0_0_10px_rgba(239,68,68,0.15)] group-hover:bg-red-500/25 group-hover:shadow-[0_0_15px_rgba(239,68,68,0.3)] group-hover:border-red-500/50',
    untested:'bg-slate-800 border-slate-700/50 text-slate-500 group-hover:bg-slate-700/50'
  };
  
  const Icon = {
    success: Check,
    warning: AlertCircle,
    error: X,
    untested: Minus
  }[status];

  return (
    <div className={cn("group cursor-pointer", className)}>
      <div className={cn("w-[68px] h-9 rounded-md border flex items-center justify-center transition-all duration-300", styles[status])}>
        <Icon size={16} strokeWidth={status === 'untested' ? 2 : 3} />
      </div>
    </div>
  );
};

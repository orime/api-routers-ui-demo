import { Platform, Model, HistoryRecord, Status } from './types';

export const platforms: Platform[] = [
  { id: 'p1', name: 'T8 Star', modelsCount: 12, iconBg: 'bg-rose-500', active: true, url: 'https://ai.t8star.cn', chatCount: 8, imageCount: 4 },
  { id: 'p2', name: 'ApiMart', modelsCount: 8, iconBg: 'bg-blue-500', isNative: true, active: true, url: 'https://open.apimart.com', chatCount: 5, imageCount: 3 },
  { id: 'p3', name: 'ModelScope', modelsCount: 15, iconBg: 'bg-indigo-500', active: true, url: 'https://api-inference.modelscope.cn', chatCount: 10, imageCount: 5 },
  { id: 'p4', name: 'GRSAI', modelsCount: 10, iconBg: 'bg-emerald-500', isNative: true, active: true, url: 'https://api.grs.ai', chatCount: 6, imageCount: 4 },
  { id: 'p5', name: '硅基流动', modelsCount: 7, iconBg: 'bg-purple-500', active: true, url: 'https://api.siliconflow.cn', chatCount: 4, imageCount: 3 },
  { id: 'p6', name: '火山引擎', modelsCount: 9, iconBg: 'bg-blue-600', active: true, url: 'https://ark.volces.com', chatCount: 7, imageCount: 2 },
];

export const models: Model[] = [
  { id: 'm1', name: 'gpt-4o' },
  { id: 'm2', name: 'claude-3.5' },
  { id: 'm3', name: 'gemini-2.0' },
  { id: 'm4', name: 'glm-4' },
  { id: 'm5', name: 'dall-e-3' },
  { id: 'm6', name: 'flux.1-dev' },
  { id: 'm7', name: 'ideogram-v2' },
];

// Map of Platform ID to an array of statuses matching the models array order
export const matrixData: Record<string, Status[]> = {
  'p1': ['success', 'success', 'success', 'warning', 'error', 'success', 'untested'],
  'p2': ['success', 'error', 'success', 'success', 'success', 'warning', 'success'],
  'p3': ['success', 'success', 'warning', 'success', 'success', 'success', 'error'],
  'p4': ['warning', 'success', 'success', 'untested', 'success', 'success', 'success'],
  'p5': ['success', 'success', 'error', 'success', 'success', 'untested', 'warning'],
  'p6': ['success', 'success', 'success', 'warning', 'success', 'success', 'success'],
};

export const activityLogs = [
  { time: '14:30:45', status: 'just now', platform: 'T8 Star - gpt-4o', event: '测试成功 • 1.23s', type: 'success' },
  { time: '14:30:42', status: '3秒前', platform: 'ApiMart - flux.1-dev', event: '请求超时 • 7m00s', type: 'warning' },
  { time: '14:30:39', status: '6秒前', platform: 'ModelScope - glm-4', event: '测试成功 • 2.05s', type: 'success' },
  { time: '14:30:37', status: '8秒前', platform: 'ModelScope - ideogram-v2', event: 'API 返回 429: Rate Limit', type: 'error' },
  { time: '14:30:34', status: '11秒前', platform: 'GRSAI - claude-3.5', event: '测试成功 • 3.18s', type: 'success' },
];

export const historyRecords: HistoryRecord[] = [
  { id: '#202504131430', type: '日常全量测试', startTime: '2026-04-13 14:30:45', scope: '6 平台 • 182 模型', platforms: 6, models: 182, successRate: '79.7%', successCount: 145, totalCount: 182, duration: '4分32秒', status: '已完成' },
  { id: '#202504121015', type: '新增平台验证', startTime: '2026-04-12 10:15:22', scope: '2 平台 • 12 模型', platforms: 2, models: 12, successRate: '91.7%', successCount: 11, totalCount: 12, duration: '1分18秒', status: '已完成' },
  { id: '#202504111830', type: '模型更新后回归', startTime: '2026-04-11 18:30:10', scope: '6 平台 • 182 模型', platforms: 6, models: 182, successRate: '76.4%', successCount: 139, totalCount: 182, duration: '5分01秒', status: '已完成' },
  { id: '#202504101200', type: '快速验证', startTime: '2026-04-10 12:00:00', scope: '1 平台 • 5 模型', platforms: 1, models: 5, successRate: '100%', successCount: 5, totalCount: 5, duration: '32秒', status: '已完成' },
  { id: '#202504091445', type: '兼容性测试', startTime: '2026-04-09 14:45:33', scope: '4 平台 • 28 模型', platforms: 4, models: 28, successRate: '64.3%', successCount: 18, totalCount: 28, duration: '2分15秒', status: '已完成' },
];

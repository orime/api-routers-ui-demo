export type Page = 'dashboard' | 'test-center' | 'platform-mgmt' | 'history';

export type Status = 'success' | 'warning' | 'error' | 'untested';

export interface Platform {
  id: string;
  name: string;
  modelsCount: number;
  iconBg: string;
  isNative?: boolean;
  active?: boolean;
  url?: string;
  chatCount?: number;
  imageCount?: number;
}

export interface Model {
  id: string;
  name: string;
}

export interface HistoryRecord {
  id: string;
  type: string;
  startTime: string;
  scope: string;
  platforms: number;
  models: number;
  successRate: string;
  successCount: number;
  totalCount: number;
  duration: string;
  status: string;
}

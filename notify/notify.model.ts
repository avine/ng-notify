export type NotifyType = 'info' | 'success' | 'warning' | 'error';

export interface Notify {
  id: number;
  type: NotifyType;
  content: string;
  title?: string;
}

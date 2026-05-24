export type TaskStatus = 'locked' | 'available' | 'completed';
export type TaskType = 'reading' | 'learning' | 'practice';

export interface DailyTask {
  id: string;
  type: TaskType;
  title: string;
  description: string;
  status: TaskStatus;
  reward: number;
}

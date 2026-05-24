export type TaskStatus = 'locked' | 'available' | 'completed';
export type TaskType = 'reading' | 'learning' | 'practice';

export interface DailyTask {
  id: string;          // Ex: '2026-05-24-task-1'
  type: TaskType;      // O tipo da tarefa (leitura, estudo, prática)
  title: string;       // Ex: 'Leitura Diária'
  description: string; // Ex: 'Josué 1:1-9'
  status: TaskStatus;  // Estado atual da tarefa
  reward: number;      // Quantidade de XP/Sementes
  contentRef?: string; // ID do Quiz ou ID do Vídeo atrelado
}

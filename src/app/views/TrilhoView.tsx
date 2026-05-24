import React from 'react';
import { Gift } from 'lucide-react';
import { DailyTask } from '../../types';
import TaskCard from '../../components/TaskCard';

// Adicionamos o onTaskClick na lista de propriedades que o TrilhoView precisa receber
export const TrilhoView = ({ tasks, onTaskClick }: { tasks: DailyTask[], onTaskClick: (taskId: string) => void }) => {
  return (
    <div className="p-4 flex flex-col py-6 min-h-full">
      <div className="mb-6">
        <h1 className="text-2xl font-black text-gray-800 tracking-tight">Jornada de Hoje</h1>
        <p className="text-gray-500 font-medium text-sm">Passo a passo rumo ao teu crescimento.</p>
      </div>

      <div className="flex flex-col gap-4">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} onTaskClick={onTaskClick} />
        ))}
      </div>

      <div className="mt-8 opacity-60 flex flex-col items-center justify-center bg-yellow-50 border-2 border-dashed border-yellow-200 p-6 rounded-3xl">
        <Gift size={32} className="text-yellow-400 mb-2" />
        <p className="font-bold text-yellow-600 text-sm text-center">Conclui a jornada para abrires o Baú Diário</p>
      </div>
    </div>
  );
};

"use client";

import React, { useState, useEffect } from 'react';
import { Shield } from 'lucide-react';
// Importamos as ferramentas do Firestore
import { collection, getDocs, doc, updateDoc } from 'firebase/firestore';

// Importações dos teus componentes
import Header from '../src/components/Header';
import BottomNav from '../src/components/BottomNav';
import { TrilhoView } from '../src/app/views/TrilhoView';
import { MissoesView } from '../src/app/views/MissoesView';
import { DivisaoView } from '../src/app/views/DivisaoView';
import { FeedView } from '../src/app/views/FeedView';
import { PerfilView } from '../src/app/views/PerfilView';
import { DailyTask } from '../src/types';
import { db } from '../src/lib/firebase'; // A nossa conexão ao banco de dados!

export default function EleveApp() {
  const [activeTab, setActiveTab] = useState('trilho');
  const [streak, setStreak] = useState(12);
  const [seeds, setSeeds] = useState(150);
  const [level] = useState(3);
  
  // O estado das tarefas começa vazio até carregarmos da internet
  const [dailyTasks, setDailyTasks] = useState<DailyTask[]>([]);
  const [loading, setLoading] = useState(true);

  // O nosso ID falso para o MVP
  const USER_ID = "usuario_teste"; 

  // Passo 1: Carregar os dados quando o aplicativo abrir
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        // Dizemos o caminho exato de onde estão as tarefas: users -> usuario_teste -> tasks
        const tasksRef = collection(db, "users", USER_ID, "tasks");
        const querySnapshot = await getDocs(tasksRef);
        
        const loadedTasks: DailyTask[] = [];
        querySnapshot.forEach((doc) => {
          // Juntamos o ID do documento com os dados que estão lá dentro
          loadedTasks.push({ id: doc.id, ...doc.data() } as DailyTask);
        });

        // Ordenamos para ter a certeza que a task-1 vem antes da task-2 (opcional, dependendo do ID)
        loadedTasks.sort((a, b) => a.id.localeCompare(b.id));
        
        setDailyTasks(loadedTasks);
      } catch (error) {
        console.error("Erro ao buscar tarefas do Firebase:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []); // O array vazio significa que isto só corre 1 vez quando o app abre

  // Passo 2: Atualizar os dados reais quando o utilizador clica
  const handleTaskAction = async (taskId: string) => {
    const taskIndex = dailyTasks.findIndex(t => t.id === taskId);
    if (taskIndex === -1) return;

    const task = dailyTasks[taskIndex];

    if (task.status === 'available') {
      const newTasks = [...dailyTasks];
      
      // 1. Atualizamos a memória local (para a tela piscar rápido)
      newTasks[taskIndex].status = 'completed';
      setSeeds(prev => prev + task.reward);

      let nextTaskId = null;

      // 2. Desbloqueia a próxima
      if (taskIndex + 1 < newTasks.length) {
        newTasks[taskIndex + 1].status = 'available';
        nextTaskId = newTasks[taskIndex + 1].id;
      } else {
        setStreak(prev => prev + 1);
        alert("Parabéns! Concluíste o Trilho de hoje!");
      }

      setDailyTasks(newTasks);
      
      // 3. O GRANDE MOMENTO: Guardar a alteração no Firebase!
      try {
        // Atualiza a tarefa clicada para 'completed' no banco de dados
        const taskRef = doc(db, "users", USER_ID, "tasks", taskId);
        await updateDoc(taskRef, { status: 'completed' });

        // Se havia uma próxima tarefa, atualizamos ela para 'available'
        if (nextTaskId) {
          const nextTaskRef = doc(db, "users", USER_ID, "tasks", nextTaskId);
          await updateDoc(nextTaskRef, { status: 'available' });
        }
      } catch (error) {
        console.error("Erro ao guardar no Firebase:", error);
      }
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-100 flex justify-center font-sans">
      <div className="w-full max-w-md bg-gray-50 h-full relative flex flex-col shadow-2xl overflow-hidden">
        
        <Header level={level} streak={streak} seeds={seeds} />
        
        <main className="flex-1 overflow-y-auto scroll-smooth bg-[#F9FAFB]">
          {/* Mostramos um aviso de carregamento enquanto o Firebase não responde */}
          {activeTab === 'trilho' && (
            loading ? (
              <div className="flex justify-center items-center h-full text-gray-500 font-bold">
                A carregar o teu trilho...
              </div>
            ) : (
              <TrilhoView tasks={dailyTasks} onTaskClick={handleTaskAction} />
            )
          )}
          {activeTab === 'missoes' && <MissoesView />}
          {activeTab === 'divisao' && <DivisaoView />}
          {activeTab === 'novidades' && <FeedView />}
          {activeTab === 'perfil' && <PerfilView />}
        </main>

        <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { 
  Flame, Leaf, Target, Shield, Bell, User, 
  BookOpen, PlayCircle, HeartHandshake, Check,
  Lock, ChevronRight, Gift, Users, CalendarDays, Award
} from 'lucide-react';

const BottomNav = ({ activeTab, setActiveTab }: { activeTab: string, setActiveTab: (tab: string) => void }) => {
  const tabs = [
    { id: 'trilho', icon: Target, label: 'Trilho' },
    { id: 'missoes', icon: BookOpen, label: 'Missões' },
    { id: 'divisao', icon: Shield, label: 'Divisão' },
    { id: 'novidades', icon: Bell, label: 'Feed' },
    { id: 'perfil', icon: User, label: 'Perfil' }
  ];

  return (
    <nav className="bg-white border-t border-gray-200 flex justify-around px-2 py-2 pb-safe z-30 shadow-[0_-4px_10px_rgba(0,0,0,0.02)] shrink-0">
      {tabs.map((tab) => (
        <button 
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className="flex flex-col items-center p-2 w-16 relative"
        >
          {tab.id === 'missoes' && activeTab !== 'missoes' && (
            <span className="absolute top-1 right-3 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white" />
          )}
          <tab.icon 
            size={26} 
            strokeWidth={activeTab === tab.id ? 2.5 : 2}
            className={`transition-colors duration-200 mb-1 ${activeTab === tab.id ? 'text-blue-500' : 'text-gray-400'}`} 
          />
          <span className={`text-[10px] font-bold tracking-tight ${activeTab === tab.id ? 'text-blue-600' : 'text-gray-400'}`}>
            {tab.label}
          </span>
        </button>
      ))}
    </nav>
  );
};


export default function EleveApp() {
  const [activeTab, setActiveTab] = useState('trilho');
  const [streak] = useState(12);
  const [seeds] = useState(150);
  const [level] = useState(3);

  const [dailyTasks] = useState<DailyTask[]>([
    { id: 'task-1', type: 'reading', title: 'Leitura Diária', description: 'Josué 1:1-9', status: 'completed', reward: 15 },
    { id: 'task-2', type: 'learning', title: 'Estudo Expositivo', description: 'Vídeo: O chamado', status: 'available', reward: 20 },
    { id: 'task-3', type: 'practice', title: 'Ação Prática', description: 'Oração de encorajamento', status: 'locked', reward: 30 }
  ]);

  return (
    <div className="fixed inset-0 bg-gray-100 flex justify-center font-sans">
      <div className="w-full max-w-md bg-gray-50 h-full relative flex flex-col shadow-2xl overflow-hidden">
        
        <Header level={level} streak={streak} seeds={seeds} />
        
        <main className="flex-1 overflow-y-auto scroll-smooth bg-[#F9FAFB]">
          {activeTab === 'trilho' && <TrilhoView tasks={dailyTasks} />}
          {activeTab === 'missoes' && <MissoesView />}
          
          {/* Placeholders para as outras abas */}
          {['divisao', 'novidades', 'perfil'].includes(activeTab) && (
            <div className="flex flex-col items-center justify-center h-full p-6 text-center text-gray-500">
              <Shield size={64} className="text-gray-300 mb-4 stroke-1" />
              <h2 className="text-xl font-bold text-gray-700 mb-2 capitalize">{activeTab}</h2>
              <p className="text-sm">Em desenvolvimento.</p>
            </div>
          )}
        </main>

        <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />

      </div>
    </div>
  );
}

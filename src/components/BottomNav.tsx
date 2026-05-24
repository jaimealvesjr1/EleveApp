import React from 'react';
import { Target, BookOpen, Shield, Bell, User } from 'lucide-react';

interface BottomNavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function BottomNav({ activeTab, setActiveTab }: BottomNavProps) {
  // Lista de abas definidas na Arquitetura da Informação (Seção 3.1)
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
}

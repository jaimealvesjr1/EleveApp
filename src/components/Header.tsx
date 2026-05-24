import React from 'react';
import { Flame, Leaf, Award } from 'lucide-react';

interface HeaderProps {
  level: number;
  streak: number;
  seeds: number;
}

export default function Header({ level, streak, seeds }: HeaderProps) {
  return (
    <header className="bg-white px-4 py-3 border-b border-gray-200 flex justify-between items-center z-10 shrink-0">
      {/* Nível do Usuário */}
      <div className="flex items-center gap-1.5 bg-gray-100 px-3 py-1.5 rounded-full">
        <Award size={16} className="text-purple-500" />
        <span className="text-sm font-bold text-gray-700">Nvl {level}</span>
      </div>

      <div className="flex items-center gap-3">
        {/* Ofensiva (Dias seguidos) */}
        <div className="flex items-center gap-1">
          <Flame size={18} className="text-orange-500 fill-orange-500" />
          <span className="text-sm font-bold text-gray-700">{streak}</span>
        </div>
        {/* Sementes (Moedas do App) */}
        <div className="flex items-center gap-1">
          <Leaf size={18} className="text-green-500 fill-green-500" />
          <span className="text-sm font-bold text-gray-700">{seeds}</span>
        </div>
      </div>
    </header>
  );
}

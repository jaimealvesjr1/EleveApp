import React from 'react';
import { Shield, Trophy, Medal } from 'lucide-react';

// Dados simulados (Mock) para o ranking da Fase 1 (MVP)
const LEADERBOARD = [
  { id: '1', name: 'Marcos Silva', xp: 2450, isCurrent: false },
  { id: '2', name: 'Ana Costa', xp: 2300, isCurrent: false },
  { id: '3', name: 'Você', xp: 2150, isCurrent: true }, // Representa o usuário logado
  { id: '4', name: 'João Paulo', xp: 1900, isCurrent: false },
  { id: '5', name: 'Maria Rita', xp: 1850, isCurrent: false },
  { id: '6', name: 'Pedro Alves', xp: 1600, isCurrent: false },
];

export const DivisaoView = () => {
  return (
    <div className="flex flex-col min-h-full pb-8">
      {/* Cabeçalho da Liga */}
      <div className="bg-white px-4 pt-8 pb-6 border-b border-gray-200 sticky top-0 z-10 flex flex-col items-center">
        <Shield size={56} className="text-amber-500 mb-2 fill-amber-100" />
        <h1 className="text-2xl font-black text-gray-800 tracking-tight">Liga de Ouro</h1>
        <p className="text-gray-500 text-sm font-medium mt-1 text-center">
          Os 3 melhores avançam para a próxima liga.
        </p>
      </div>

      {/* Lista de Ranking */}
      <div className="p-4">
        <div className="bg-white rounded-3xl border-2 border-gray-100 overflow-hidden shadow-sm">
          {LEADERBOARD.map((user, index) => {
            const rank = index + 1;
            let rankStyle = "text-gray-400 font-bold";
            let containerStyle = "border-b-2 border-gray-50 last:border-0";
            
            // Destaca a linha se for o usuário atual
            if (user.isCurrent) {
              containerStyle += " bg-blue-50 border-l-[6px] border-l-blue-500";
            }
            
            return (
              <div key={user.id} className={`flex items-center p-4 gap-4 ${containerStyle}`}>
                
                {/* Posição / Ícone */}
                <div className="w-8 flex justify-center shrink-0">
                  {rank === 1 ? <Trophy size={24} className="text-yellow-500 fill-yellow-100" /> : 
                   rank === 2 ? <Medal size={24} className="text-gray-400 fill-gray-100" /> : 
                   rank === 3 ? <Medal size={24} className="text-amber-700 fill-amber-100" /> : 
                   <span className={rankStyle}>{rank}</span>}
                </div>
                
                {/* Avatar Genérico */}
                <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${user.isCurrent ? 'bg-blue-200 text-blue-700' : 'bg-gray-100 text-gray-500'}`}>
                  <span className="font-bold text-lg">{user.name.charAt(0)}</span>
                </div>
                
                {/* Nome do Usuário */}
                <div className="flex-1">
                  <h3 className={`font-bold ${user.isCurrent ? 'text-blue-700' : 'text-gray-800'}`}>
                    {user.name}
                  </h3>
                </div>
                
                {/* Pontuação (XP) */}
                <div className="shrink-0 text-right">
                  <span className={`font-black ${user.isCurrent ? 'text-blue-700' : 'text-gray-700'}`}>{user.xp}</span>
                  <span className={`text-[10px] font-bold ml-1 uppercase ${user.isCurrent ? 'text-blue-500' : 'text-gray-400'}`}>XP</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { Settings, Award, Flame, ShoppingBag, LogOut, ChevronRight } from 'lucide-react';

export const PerfilView = () => {
  return (
    <div className="flex flex-col min-h-full pb-8">
      {/* Cabeçalho do Perfil */}
      <div className="bg-white px-4 pt-8 pb-6 border-b border-gray-200 sticky top-0 z-10 flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-black text-gray-800 tracking-tight">Meu Perfil</h1>
          <p className="text-gray-500 text-sm font-medium mt-1">
            Estatísticas e conquistas.
          </p>
        </div>
        {/* Botão de Configurações no canto superior */}
        <button className="p-2 bg-gray-50 rounded-full text-gray-500 hover:bg-gray-200 transition-colors">
          <Settings size={24} />
        </button>
      </div>

      <div className="p-4 space-y-6">
        {/* Cartão de Identificação (Avatar e Nome) */}
        <div className="bg-white rounded-3xl border-2 border-gray-100 p-6 flex flex-col items-center shadow-sm">
          <div className="w-24 h-24 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-4xl font-black mb-4">
            V
          </div>
          <h2 className="text-2xl font-bold text-gray-800">Visitante</h2>
          <p className="text-sm font-medium text-gray-500 mt-1">Membro desde Hoje</p>
        </div>

        {/* Estatísticas em Grid (Lado a Lado) */}
        <div>
          <h3 className="font-bold text-gray-800 mb-3 ml-1">Meu Desempenho</h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white p-4 rounded-3xl border-2 border-gray-100 flex flex-col items-center text-center shadow-sm">
              <Flame size={32} className="text-orange-500 fill-orange-100 mb-2" />
              <span className="text-2xl font-black text-gray-800 leading-tight">12</span>
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mt-1">Dias Seguidos</span>
            </div>
            <div className="bg-white p-4 rounded-3xl border-2 border-gray-100 flex flex-col items-center text-center shadow-sm">
              <Award size={32} className="text-purple-500 fill-purple-100 mb-2" />
              <span className="text-2xl font-black text-gray-800 leading-tight">Nvl 3</span>
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mt-1">Progresso Total</span>
            </div>
          </div>
        </div>

        {/* Menu de Opções Extras (Loja e Logout) */}
        <div className="space-y-3">
          <button className="w-full bg-white border-2 border-gray-100 rounded-2xl p-4 flex items-center gap-4 hover:bg-gray-50 transition-colors shadow-sm">
            <div className="bg-green-50 p-3 rounded-xl text-green-500 shrink-0">
              <ShoppingBag size={24} />
            </div>
            <div className="flex-1 text-left">
              <h4 className="font-bold text-gray-800">Loja de Sementes</h4>
              <p className="text-xs font-medium text-gray-500 mt-0.5">Troque moedas por itens</p>
            </div>
            <ChevronRight size={20} className="text-gray-400" />
          </button>

          <button className="w-full bg-white border-2 border-gray-100 rounded-2xl p-4 flex items-center gap-4 hover:bg-red-50 transition-colors shadow-sm group">
            <div className="bg-red-50 p-3 rounded-xl text-red-500 shrink-0 group-hover:bg-red-100 transition-colors">
              <LogOut size={24} />
            </div>
            <div className="flex-1 text-left">
              <h4 className="font-bold text-red-500">Sair da Conta</h4>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

const MissoesView = () => {
  const [subTab, setSubTab] = useState<'pessoais' | 'grupo'>('pessoais');

  return (
    <div className="flex flex-col min-h-full pb-8">
      <div className="bg-white px-4 pt-6 pb-4 border-b border-gray-200 sticky top-0 z-10">
        <h1 className="text-2xl font-black text-gray-800 mb-4 tracking-tight text-center">Missões</h1>
        <div className="flex bg-gray-100 p-1 rounded-2xl relative">
          <button 
            onClick={() => setSubTab('pessoais')}
            className={`flex-1 py-2 text-sm font-bold rounded-xl transition-all z-10 flex items-center justify-center gap-2 ${subTab === 'pessoais' ? 'text-gray-800 shadow-sm bg-white' : 'text-gray-500'}`}
          >
            <User size={16} /> Pessoais
          </button>
          <button 
            onClick={() => setSubTab('grupo')}
            className={`flex-1 py-2 text-sm font-bold rounded-xl transition-all z-10 flex items-center justify-center gap-2 ${subTab === 'grupo' ? 'text-gray-800 shadow-sm bg-white' : 'text-gray-500'}`}
          >
            <Users size={16} /> Em Dupla
          </button>
        </div>
      </div>

      <div className="p-4 space-y-6">
        {subTab === 'pessoais' && (
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-300 space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <CalendarDays className="text-blue-500" size={20} />
                <h2 className="font-bold text-gray-800 text-lg">Esta Semana</h2>
              </div>
              <div className="space-y-3">
                <div className="bg-white border-2 border-gray-100 rounded-2xl p-4 shadow-sm flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                    <Target className="text-blue-500" size={28} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-800 leading-tight">5 Trilhos Diários</h3>
                    <div className="mt-3 flex items-center gap-3">
                      <div className="flex-1 h-3 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500 rounded-full w-3/5"></div>
                      </div>
                      <span className="text-sm font-bold text-gray-500">3/5</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {subTab === 'grupo' && (
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
            <div className="bg-indigo-50 border-2 border-indigo-100 rounded-3xl p-5 flex flex-col items-center text-center">
               <h3 className="font-black text-xl text-gray-800">Em desenvolvimento...</h3>
               <p className="text-sm text-gray-500 mt-2">A funcionalidade de duplas chega na Fase 2.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

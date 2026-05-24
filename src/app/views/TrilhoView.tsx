const TrilhoView = ({ tasks }: { tasks: DailyTask[] }) => {
  
  const getTaskIcon = (type: TaskType) => {
    switch(type) {
      case 'reading': return BookOpen;
      case 'learning': return PlayCircle;
      case 'practice': return HeartHandshake;
      default: return Target;
    }
  };

  return (
    <div className="p-4 flex flex-col py-6 min-h-full">
      <div className="mb-6">
        <h1 className="text-2xl font-black text-gray-800 tracking-tight">Jornada de Hoje</h1>
        <p className="text-gray-500 font-medium text-sm">Passo a passo rumo ao teu crescimento.</p>
      </div>

      <div className="flex flex-col gap-4">
        {tasks.map((task) => {
          const Icon = getTaskIcon(task.type);
          
          // Estilos Dinâmicos baseados no estado
          let cardStyle = "";
          let iconStyle = "";
          
          if (task.status === 'completed') {
            cardStyle = "bg-gray-50 border-gray-200 opacity-70";
            iconStyle = "bg-green-100 text-green-500";
          } else if (task.status === 'available') {
            cardStyle = "bg-white border-blue-200 shadow-[0_4px_15px_rgba(59,130,246,0.1)] border-l-[6px] border-l-blue-500 transform transition-transform active:scale-[0.98]";
            iconStyle = "bg-blue-50 text-blue-600";
          } else {
            cardStyle = "bg-gray-50 border-gray-200 opacity-60";
            iconStyle = "bg-gray-200 text-gray-400";
          }

          return (
            <button 
              key={task.id}
              disabled={task.status === 'locked'}
              className={`w-full flex items-center p-4 rounded-2xl border-2 text-left ${cardStyle}`}
            >
              <div className={`p-3 rounded-xl shrink-0 ${iconStyle}`}>
                {task.status === 'completed' ? <Check size={24} strokeWidth={3} /> : <Icon size={24} />}
              </div>
              
              <div className="flex-1 px-4">
                <span className={`text-[10px] font-black uppercase tracking-wider ${task.status === 'available' ? 'text-blue-500' : 'text-gray-400'}`}>
                  {task.type === 'reading' ? 'Leitura' : task.type === 'learning' ? 'Estudo' : 'Prática'}
                </span>
                <h3 className={`font-bold text-lg leading-tight ${task.status === 'locked' ? 'text-gray-500' : 'text-gray-800'}`}>
                  {task.title}
                </h3>
                <p className={`text-xs font-medium mt-0.5 ${task.status === 'available' ? 'text-gray-500' : 'text-gray-400'}`}>
                  {task.description}
                </p>
              </div>

              <div className="shrink-0 flex flex-col items-center justify-center">
                {task.status === 'locked' ? (
                  <Lock size={20} className="text-gray-300" />
                ) : task.status === 'available' ? (
                  <div className="bg-blue-50 p-2 rounded-full text-blue-500">
                    <ChevronRight size={20} />
                  </div>
                ) : (
                  <div className="text-sm font-bold text-green-500 flex items-center gap-1">
                    +{task.reward}
                  </div>
                )}
              </div>
            </button>
          );
        })}
      </div>

      <div className="mt-8 opacity-60 flex flex-col items-center justify-center bg-yellow-50 border-2 border-dashed border-yellow-200 p-6 rounded-3xl">
        <Gift size={32} className="text-yellow-400 mb-2" />
        <p className="font-bold text-yellow-600 text-sm text-center">Conclui a jornada para abrires o Baú Diário</p>
      </div>
    </div>
  );
};

import React from 'react';
import { Heart, MessageCircle, Flame, Target, Trophy } from 'lucide-react';

// Dados simulados para o nosso Feed Social
const FEED_POSTS = [
  { 
    id: '1', 
    userName: 'Ana Costa', 
    userInitial: 'A', 
    action: 'concluiu o Trilho Diário', 
    time: 'Há 2 horas', 
    type: 'trilho', 
    likes: 12 
  },
  { 
    id: '2', 
    userName: 'Marcos Silva', 
    userInitial: 'M', 
    action: 'atingiu uma ofensiva de 7 dias!', 
    time: 'Há 4 horas', 
    type: 'streak', 
    likes: 24 
  },
  { 
    id: '3', 
    userName: 'João Paulo', 
    userInitial: 'J', 
    action: 'avançou para a Liga de Ouro', 
    time: 'Há 5 horas', 
    type: 'liga', 
    likes: 18 
  },
];

export const FeedView = () => {
  // Função para retornar o ícone correto dependendo do tipo da postagem
  const getPostIcon = (type: string) => {
    switch(type) {
      case 'trilho': return <Target size={20} className="text-blue-500" />;
      case 'streak': return <Flame size={20} className="text-orange-500 fill-orange-100" />;
      case 'liga': return <Trophy size={20} className="text-yellow-500 fill-yellow-100" />;
      default: return <Target size={20} />;
    }
  };

  return (
    <div className="flex flex-col min-h-full pb-8">
      {/* Cabeçalho do Feed */}
      <div className="bg-white px-4 pt-6 pb-4 border-b border-gray-200 sticky top-0 z-10">
        <h1 className="text-2xl font-black text-gray-800 tracking-tight text-center">Comunidade</h1>
        <p className="text-gray-500 text-sm font-medium mt-1 text-center">
          Encoraje os seus amigos na jornada.
        </p>
      </div>

      {/* Lista de Postagens */}
      <div className="p-4 flex flex-col gap-4">
        {FEED_POSTS.map((post) => (
          <div key={post.id} className="bg-white border-2 border-gray-100 rounded-3xl p-4 shadow-sm">
            
            {/* Cabeçalho do Post */}
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-lg shrink-0">
                {post.userInitial}
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-800 leading-tight">{post.userName}</h3>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{post.time}</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center shrink-0">
                {getPostIcon(post.type)}
              </div>
            </div>

            {/* Conteúdo do Post */}
            <div className="mb-4">
              <p className="text-gray-600 text-sm font-medium">
                {post.userName.split(' ')[0]} <span className="font-bold text-gray-800">{post.action}</span>. Mande um encorajamento!
              </p>
            </div>

            {/* Botões de Ação */}
            <div className="flex items-center gap-4 pt-3 border-t border-gray-50">
              <button className="flex items-center gap-1.5 text-gray-400 hover:text-red-500 transition-colors">
                <Heart size={18} />
                <span className="text-xs font-bold">{post.likes}</span>
              </button>
              <button className="flex items-center gap-1.5 text-gray-400 hover:text-blue-500 transition-colors">
                <MessageCircle size={18} />
                <span className="text-xs font-bold">Comentar</span>
              </button>
            </div>

          </div>
        ))}

        {/* Mensagem de Fim do Feed */}
        <div className="mt-4 text-center">
           <p className="text-sm font-bold text-gray-400">Você viu todas as atualizações de hoje!</p>
        </div>
      </div>
    </div>
  );
};

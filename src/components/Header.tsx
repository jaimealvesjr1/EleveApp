const Header = ({ level, streak, seeds }: { level: number, streak: number, seeds: number }) => (
  <header className="bg-white/95 backdrop-blur-md z-20 border-b border-gray-100 px-4 py-3 flex justify-between items-center sticky top-0 shadow-sm shrink-0">
    <div className="flex items-center gap-2">
      <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-blue-200 bg-blue-50 font-black text-blue-600 text-lg shadow-sm">
        {level}
      </div>
    </div>
    <div className="flex gap-2">
      <div className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-orange-50 border border-orange-100 text-orange-500 font-bold">
        <Flame fill="currentColor" size={18} />
        <span>{streak}</span>
      </div>
      <div className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-green-50 border border-green-100 text-green-600 font-bold">
        <Leaf fill="currentColor" size={18} />
        <span>{seeds}</span>
      </div>
    </div>
  </header>
);

'use client';

import { useState } from 'react';

export default function ServicosSearch() {
  const [query, setQuery] = useState('');

  return (
    <div className="relative max-w-lg mx-auto">
      <input 
        type="text" 
        className="w-full py-3 pl-10 pr-4 bg-gray-700/80 border-none rounded-lg text-white" 
        placeholder="Pesquisar serviços..." 
        aria-label="Campo de pesquisa"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <svg 
        className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor"
      >
        <path 
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

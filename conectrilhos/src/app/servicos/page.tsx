import React from 'react';
import SearchBar from '@/components/servicos/ServicosSearch';
import Cabecalho from '@/components/Cabecalho/Cabecalho';
import Image from 'next/image';

export default function ServicosPage() {
  return (
    <>
      <main 
        className="min-h-screen bg-cover bg-center px-6 py-6" 
        style={{ backgroundImage: 'url("/background-img-02.jpg")' }}
      >
        <div className="max-w-7xl mx-auto">
          <h1 className="sr-only">Serviços do Conectrilhos</h1>
          
          {/* Barra de Pesquisa */}
          <section aria-labelledby="search-heading" className="mb-6">
            <h2 id="search-heading" className="sr-only">Pesquisar serviços</h2>
            <SearchBar />
          </section>

          {/* Seções */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Mapas */}
            <section aria-labelledby="mapas-heading" className="bg-red-900/30 rounded-lg p-4">
              <h2 id="mapas-heading" className="text-xl font-bold mb-4 text-white">Mapas</h2>
              <div className="grid grid-cols-1 gap-4">
                <div className="relative w-full h-48 bg-gray-800/80 rounded-lg">
                  <Image 
                    src="/mapa-01.png" 
                    alt="Mapa 1" 
                    layout="fill" 
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
                <div className="relative w-full h-48 bg-gray-800/80 rounded-lg">
                  <Image 
                    src="/mapa-02.png" 
                    alt="Mapa 2" 
                    layout="fill" 
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
              </div>
            </section>

            {/* Status do Sistema */}
            <section aria-labelledby="status-heading" className="bg-red-900/30 rounded-lg p-4">
              <h2 id="status-heading" className="text-xl font-bold mb-4 text-white">Status do Sistema</h2>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2.5 h-2.5 bg-green-500 rounded-full" aria-hidden="true"></span>
                <span className="text-white">Sistema em Operação</span>
              </div>
              <ul className="bg-red-900/50 rounded-lg p-4 space-y-2">
                <li className="bg-gray-900/30 p-2 rounded-lg">Linha 1: Operando Normalmente</li>
                <li className="bg-gray-900/30 p-2 rounded-lg">Linha 2: Operando Normalmente</li>
              </ul>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}

import React from 'react';
import SearchBar from '@/components/servicos/ServicosSearch';
import Cabecalho from '@/components/Cabecalho/Cabecalho';

export default function ServicosPage() {
  return (
    <>
      <main className="min-h-screen bg-cover bg-center px-6 py-6" style={{ backgroundImage: 'url("/background-img-02.jpg")' }}>
        <div className="max-w-7xl mx-auto">
          <h1 className="sr-only">Serviços do Conectrilhos</h1>
          
          <section aria-labelledby="search-heading" className="mb-6">
            <h2 id="search-heading" className="sr-only">Pesquisar serviços</h2>
            <SearchBar />
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Mapas */}
            <section aria-labelledby="mapas-heading" className="bg-red-900/30 rounded-lg p-4">
              <h2 id="mapas-heading" className="text-xl font-bold mb-4 text-white">Mapas</h2>
              <div className="flex flex-col gap-4">
                <figure className="w-full aspect-video bg-gray-800/80 rounded-lg" aria-label="Mapa do Google"></figure>
                <figure className="w-full aspect-video bg-gray-800/80 rounded-lg" aria-label="Mapa do Transporte Metropolitano"></figure>
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

            {/* Mensagens do Sistema */}
            <section aria-labelledby="mensagens-heading" className="bg-red-900/30 rounded-lg p-4">
              <h2 id="mensagens-heading" className="text-xl font-bold mb-4 text-white">Mensagens do Sistema</h2>
              <article className="bg-gray-900/50 p-4 rounded-lg">
                <header className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-gray-700/80 rounded-full" aria-hidden="true"></div>
                  <h3 className="text-white font-medium">Admin</h3>
                </header>
                <p className="text-white">Última atualização do sistema</p>
              </article>
            </section>

            {/* Informações */}
            <section aria-labelledby="info-heading" className="bg-red-900/30 rounded-lg p-4">
              <h2 id="info-heading" className="text-xl font-bold mb-4 text-white">Informações</h2>
              <div className="space-y-4">
                <article className="bg-red-900/50 rounded-lg p-4">
                  <h3 className="text-white font-medium">Tarifa e Integrações</h3>
                  <p className="bg-gray-900/30 p-2 rounded-lg mt-2">Bilhete único R$4,40</p>
                </article>
                <article className="bg-red-900/50 rounded-lg p-4">
                  <h3 className="text-white font-medium">Horário de Funcionamento</h3>
                  <p className="bg-gray-900/30 p-2 rounded-lg mt-2">Segunda a Domingo: 04:30h às 00:00h</p>
                </article>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
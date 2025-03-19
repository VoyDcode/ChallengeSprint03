import React from 'react';
import SearchBar from '@/components/servicos/ServicosSearch';
import Cabecalho from '@/components/Cabecalho/Cabecalho';

export default function ServicosPage() {
  return (
    <>

      {/* Conteúdo principal */}
      <main 
        className="min-h-screen px-6 py-6" 
        style={{ backgroundImage: 'url("/background-img-02.jpg")', backgroundSize: 'cover' }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Título invisível para acessibilidade */}
          <h1 className="sr-only">Serviços do Conectrilhos</h1>
          
          {/* Barra de pesquisa */}
          <section className="mb-6">
            <SearchBar />
          </section>

          {/* Grade de blocos de serviços */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Bloco de Mapas */}
            <section className="bg-red-900/30 rounded-lg p-4">
              <h2 className="text-xl font-bold mb-4 text-white">Mapas</h2>
              <div className="flex flex-col gap-4">
                <div className="w-full aspect-video bg-gray-800/80 rounded-lg"></div>
                <div className="w-full aspect-video bg-gray-800/80 rounded-lg"></div>
              </div>
            </section>

            {/* Bloco de Status do Sistema */}
            <section className="bg-red-900/30 rounded-lg p-4">
              <h2 className="text-xl font-bold mb-4 text-white">Status do Sistema</h2>
              
              {/* Indicador de status do sistema */}
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2.5 h-2.5 bg-green-500 rounded-full"></span>
                <span className="text-white">Sistema em Operação</span>
              </div>
              
              {/* Lista de status das linhas */}
              <div className="bg-red-900/50 rounded-lg p-4">
                <div className="bg-gray-900/30 p-2 rounded-lg mb-2">Linha 1: Operando Normalmente</div>
                <div className="bg-gray-900/30 p-2 rounded-lg">Linha 2: Operando Normalmente</div>
              </div>
            </section>

            {/* Bloco de Mensagens do Sistema */}
            <section className="bg-red-900/30 rounded-lg p-4">
              <h2 className="text-xl font-bold mb-4 text-white">Mensagens do Sistema</h2>
              
              {/* Mensagem */}
              <div className="bg-gray-900/50 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-gray-700/80 rounded-full"></div>
                  <h3 className="text-white font-medium">Admin</h3>
                </div>
                <p className="text-white">Última atualização do sistema</p>
              </div>
            </section>

            {/* Bloco de Informações */}
            <section className="bg-red-900/30 rounded-lg p-4">
              <h2 className="text-xl font-bold mb-4 text-white">Informações</h2>
              
              {/* Card de Tarifas */}
              <div className="bg-red-900/50 rounded-lg p-4 mb-4">
                <h3 className="text-white font-medium">Tarifa e Integrações</h3>
                <div className="bg-gray-900/30 p-2 rounded-lg mt-2">Bilhete único R$4,40</div>
              </div>
              
              {/* Card de Horários */}
              <div className="bg-red-900/50 rounded-lg p-4">
                <h3 className="text-white font-medium">Horário de Funcionamento</h3>
                <div className="bg-gray-900/30 p-2 rounded-lg mt-2">Segunda a Domingo: 04:30h às 00:00h</div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
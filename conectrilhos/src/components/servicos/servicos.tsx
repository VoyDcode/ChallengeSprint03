import ServicosSearch from '@/components/servicos/ServicosSearch';

export default function Servicos() {
  return (
    <main className="bg-black text-white min-h-screen max-w-5xl mx-auto p-4">
      {/* Barra de pesquisa */}
      <section className="mb-6">
        <ServicosSearch />
      </section>

      {/* Grid com as seções */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Mapas */}
        <section className="bg-red-900 bg-opacity-30 p-4 rounded-lg">
          <h2 className="text-xl mb-4">Mapas</h2>
          <div className="flex flex-col gap-4">
            <div className="bg-gray-700 w-full h-40 rounded-lg" role="img" aria-label="Mapa do Google"></div>
            <div className="bg-gray-700 w-full h-40 rounded-lg" role="img" aria-label="Mapa do Transporte Metropolitano"></div>
          </div>
        </section>

        {/* Status do Sistema */}
        <section className="bg-red-900 bg-opacity-30 p-4 rounded-lg">
          <h2 className="text-xl mb-4">Status do Sistema</h2>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            <span>Sistema em Operação</span>
          </div>
          <div className="bg-red-800 bg-opacity-50 p-3 rounded-lg">
            <p>Linha 1: Operando Normalmente</p>
            <p>Linha 2: Operando Normalmente</p>
          </div>
        </section>
      </div>
    </main>
  );
}

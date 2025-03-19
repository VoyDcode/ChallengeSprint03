import React from 'react';
import Cabecalho from '@/components/Cabecalho/Cabecalho';
import FaqComponent from '@/components/FaqComp/faq';
 
export default function FaqPage() {
  return (
    <>
      {/* Conteúdo principal */}
      <main
        className="min-h-screen px-6 py-6"
        style={{ backgroundImage: 'url("/background-img-02.jpg")', backgroundSize: 'cover' }}
      >
        <div className="max-w-3xl mx-auto">
          {/* Título invisível para acessibilidade */}
          <h1 className="sr-only">Perguntas Frequentes - ConecTrilho</h1>
         
          {/* Componente FAQ */}
          <FaqComponent />
        </div>
      </main>
    </>
  );
}
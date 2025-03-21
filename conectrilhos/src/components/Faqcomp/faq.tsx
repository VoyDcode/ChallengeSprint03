import React from 'react';
import styles from './faq.module.css';
 
export default function FaqComponent() {
  return (
    <>
      {/* Barra de pesquisa */}
      <div className="relative max-w-lg mx-auto mb-8">
        <input
          type="text"
          className="w-full py-3 pl-10 pr-4 bg-gray-700/80 border-none rounded-lg text-white"
          placeholder="Pesquisar"
        />
       
        {/* Ícone de lupa */}
        <svg
          className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      </div>
 
      {/* Acordeão de perguntas */}
      <div className={styles.accordion}>
        {/* Acordeão 1 */}
        <div className={styles.accordionItem}>
          <input type="checkbox" id="accordion-1" className={styles.accordionClass} />
          <label htmlFor="accordion-1" className={styles.accordionHeader}>Cupons</label>
          <div className={styles.accordionContent}>
            <div className={styles.accordionContentInner}>
              <p>As recompensas de cupons são realizadas após a validação visual, da foto da localidade solicitada.</p>
            </div>
          </div>
        </div>
 
        {/* Acordeão 2 */}
        <div className={styles.accordionItem}>
          <input type="checkbox" id="accordion-2" className={styles.accordionClass} />
          <label htmlFor="accordion-2" className={styles.accordionHeader}>Status da via</label>
          <div className={styles.accordionContent}>
            <div className={styles.accordionContentInner}>
              <p>As atualizações sobre as condições das vias são atribuidas tanto com profissionais quanto usuarios da plataforma, após as confirmações necessárias seram atualizados no aplicativo!</p>
            </div>
          </div>
        </div>
 
        {/* Acordeão 3 */}
        <div className={styles.accordionItem}>
          <input type="checkbox" id="accordion-3" className={styles.accordionClass} />
          <label htmlFor="accordion-3" className={styles.accordionHeader}>Carteira digital</label>
          <div className={styles.accordionContent}>
            <div className={styles.accordionContentInner}>
              <p>Caso haja alguma instabilidade nos pagamentos ou validação dos cupons, será necessário entrar em contato conosco!</p>
            </div>
          </div>
        </div>
 
        {/* Acordeão 4 */}
        <div className={styles.accordionItem}>
          <input type="checkbox" id="accordion-4" className={styles.accordionClass} />
          <label htmlFor="accordion-4" className={styles.accordionHeader}>Contate-nos</label>
          <div className={styles.accordionContent}>
            <div className={styles.accordionContentInner}>
              <p>Caso queira realizar repasses de feedbacks, denuncias ou solicite informações, contate-nos 0800 770 7106.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
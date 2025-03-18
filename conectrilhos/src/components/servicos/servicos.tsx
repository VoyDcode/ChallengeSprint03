export default function SearchBar() {
    return (
      <section className="senha-section">
        <div className="senha-container">
          <input 
            type="text" 
            className="senha-input" 
            placeholder="Pesquisar" 
            aria-label="Campo de pesquisa"
          />
          <svg 
            className="senha-icon" 
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
      </section>
    );
  }
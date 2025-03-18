
export const metadata ={
    title: 'Servicos | Conectrilhos',
    description: 'Servicos oferecidos pelo sistema Conectrilhos',
}

export default function ServicosPage() {
    return (
        <main className="main-content">
          <SearchBar />
          
          <div className="dashboard-grid">
            <MapSection />
            <StatusSection />
            <MessagesSection />
            <InfoSection />
          </div>
        </main>
      );
}
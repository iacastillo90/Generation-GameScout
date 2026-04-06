function Buscador ({ searchTerm, onSearch }) {

    return (
        <div className="buscador-component">
            <i className="bi bi-search me-3 fs-4 text-info"></i>
            <input 
                type="text" 
                className="buscador-input" 
                placeholder="Buscar juegos por nombre..." 
                value={searchTerm}
                onChange={(e) => onSearch(e.target.value)}
            />
        </div>
    )
};

export default Buscador;
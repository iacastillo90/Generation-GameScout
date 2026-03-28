// src/components/Card.jsx

const Card = ({ game }) => {
    return (
        <div className="card h-100 bg-dark text-light shadow-sm border-secondary">
            <img 
                src={game.thumbnail} 
                className="card-img-top" 
                alt={`Imagen de ${game.title}`} 
            />
            <div className="card-body d-flex flex-column">
                <h5 className="card-title">{game.title}</h5>
                <p className="card-text text-muted small">{game.short_description}</p>
                
                {/* Empujamos el badge hacia abajo para que las cards queden alineadas */}
                <div className="mt-auto">
                    <span className="badge text-bg-primary">{game.genre}</span>
                    <span className="badge text-bg-secondary ms-2">{game.platform}</span>
                </div>
            </div>
        </div>
    );
};

export default Card;
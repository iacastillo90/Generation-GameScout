import './Cards.css';

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Cards = ({ game }) => { 
    return (
        <article className="flip-card-container">
            <div className="flip-card-inner">
                
                {/* --- CARA FRONTAL --- */}
                <div className="flip-card-front">
                    <Card className="h-100 bg-dark text-light border-5">
                        <Card.Img variant="top" src={game.thumbnail} alt={game.title} />
                        <Card.Body className="d-flex flex-column">
                            
                            <Card.Title className="text-white fw-bold title-uniform">
                                {game.title}
                            </Card.Title>
                            
                            <div className="mt-2 mb-3">
                                <span className="badge text-bg-primary">{game.genre}</span>
                                <span className="badge text-bg-secondary ms-2">{game.platform}</span>
                            </div>
                            
                            <p className="card-text small">
                                {game.short_description}
                            </p>
                            
                        </Card.Body>
                    </Card>
                </div>

                {/* --- CARA TRASERA --- */}
                <div className="flip-card-back text-light rounded shadow-lg">
                    <h5 className="text-info fw-bold mb-4">{game.title}</h5>
                    
                    <div className="text-start mb-4 small">
                        <p><strong>🏢 Desarrollador:</strong> <br/> {game.developer}</p>
                        <p><strong>📅 Lanzamiento:</strong> <br/> {game.release_date}</p>
                        <p><strong>🌐 Distribuidor:</strong> <br/> {game.publisher}</p>
                    </div>

                    <Button 
                        variant="outline-info" 
                        className="mt-auto"
                        href={game.game_url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        Jugar Ahora
                    </Button>
                </div>

            </div>
        </article>
    );
};

export default Cards;
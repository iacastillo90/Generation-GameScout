import { useEffect, useState } from 'react';

import Cards from './Cards';
import axios from 'axios';

function MyApi() {
    const [data, setData] = useState([]);
    
    const [paginaActual, setPaginaActual] = useState(1);
    const juegosPorPagina = 16;

    // Math.ceil asegura que si sobran 3 juegos al final, tengan su propia página
    const totalPaginas = Math.ceil(data.length / juegosPorPagina);

    const indiceUltimoJuego = paginaActual * juegosPorPagina;
    const indicePrimerJuego = indiceUltimoJuego - juegosPorPagina;
    const juegosActuales = data.slice(indicePrimerJuego, indiceUltimoJuego);

    const cambiarPagina = (nuevaPagina) => {
        setPaginaActual(nuevaPagina);
        
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        const getGames = async () => {
            try {
                const apiUrl = 'https://corsproxy.io/?https://www.freetogame.com/api/games';
                const response = await axios.get(apiUrl);
                setData(response.data); 
            } catch (error) {
                console.error("Error consumiendo la API:", error);
            }
        };
        getGames();
    }, []);

    return (
        <div className="container mt-4 mb-5">
            <h2 className="text-center mb-4">Catálogo de Juegos Gratuitos</h2>

            <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4 mb-5">
                {juegosActuales.map(game => (
                    <div className="col" key={game.id}>
                        <Cards game={game} />
                    </div>
                ))}
            </div>

            {/* Paginación  */}
            {data.length > 0 && (
                <div className="d-flex flex-wrap justify-content-center align-items-center gap-3">
                    
                    {/* Botón para saltar a la Primera Página */}
                    <button 
                        className="btn btn-sm btn-outline-secondary" 
                        onClick={() => cambiarPagina(1)}
                        disabled={paginaActual === 1}
                        title="Ir a la primera página"
                    >
                        <i className="bi bi-chevron-double-left"></i>
                    </button>

                    {/* Botón para saltar a la Página Anterior */}
                    <button 
                        className="btn btn-outline-info" 
                        onClick={() => cambiarPagina(paginaActual - 1)}
                        disabled={paginaActual === 1}
                    >
                        <i className="bi bi-arrow-left me-2"></i>Anterior
                    </button>
                    
                    {/* Selector de paginas */}
                    <div className="d-flex align-items-center gap-2">
                        <span className="text-back d-none d-sm-inline">Página</span>
                        
                        <select 
                            className="form-select bg-dark text-info border-info fw-bold text-center"
                            style={{ width: "auto", cursor: "pointer" }}
                            value={paginaActual}
                            onChange={(e) => cambiarPagina(Number(e.target.value))}
                        >
                            {[...Array(totalPaginas)].map((_, index) => (
                                <option key={index + 1} value={index + 1}>
                                    {index + 1}
                                </option>
                            ))}
                        </select>
                        
                        <span className="text-back">de {totalPaginas}</span>
                    </div>

                    {/* Botón para saltar a la Siguiente Página */}
                    <button 
                        className="btn btn-outline-info" 
                        onClick={() => cambiarPagina(paginaActual + 1)}
                        disabled={paginaActual === totalPaginas} 
                    >
                        Siguiente<i className="bi bi-arrow-right ms-2"></i>
                    </button>

                    {/* Botón para saltar a la Última Página */}
                    <button 
                        className="btn btn-sm btn-outline-secondary" 
                        onClick={() => cambiarPagina(totalPaginas)}
                        disabled={paginaActual === totalPaginas}
                        title="Ir a la última página"
                    >
                        <i className="bi bi-chevron-double-right"></i>
                    </button>

                </div>
            )}
        </div>
    );
};

export default MyApi;
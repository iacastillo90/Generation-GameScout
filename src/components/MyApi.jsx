// src/components/MyApi.jsx

import { useEffect, useState } from 'react';

import Card from './Card'; // Importamos tu nuevo componente

function MyApi() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const apiUrl = 'https://corsproxy.io/?https://www.freetogame.com/api/games';

        fetch(apiUrl)
        .then(response => {
            if (!response.ok) throw new Error('Network response was not ok');
            return response.json();
        })
        .then(data => setData(data))
        .catch(error => console.error("Error consumiendo la API:", error));
    }, []);

    return (
        <div className="container mt-4">
            <h2 className="text-center mb-4">Catálogo de Juegos Gratuitos</h2>
            
            {/* Grilla responsiva de Bootstrap */}
            <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
                {data.map(game => (
                    <div className="col" key={game.id}>
                        {/* Renderizamos tu componente Card pasándole los datos del juego */}
                        <Card game={game} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyApi;
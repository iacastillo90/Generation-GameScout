import { useEffect, useState } from 'react';

import Cards from './Cards';
import axios from 'axios';

function MyApi() {
    const [data, setData] = useState([]);

    useEffect(() => {

        const getGames = async () => {
            try {
                const apiUrl = 'https://corsproxy.io/?https://www.freetogame.com/api/games';
                
                const response = await axios.get(apiUrl);

                setData(response.data); 

                console.log("Datos obtenidos de la API:", response.data);

            } catch (error) {
                console.error("Error consumiendo la API:", error);
            }
        };

        getGames();
        
    }, []);

    return (
        <div className="container mt-4">
            <h2 className="text-center mb-4">Catálogo de Juegos Gratuitos</h2>

            <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
                {data.map(game => (
                    <div className="col" key={game.id}>
                        <Cards game={game} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyApi;
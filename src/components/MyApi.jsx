import { useEffect, useState } from 'react';

import Card from './Card';
import axios from 'axios';

function MyApi() {
    const [data, setData] = useState([]);

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
        <div className="container mt-4">
            <h2 className="text-center mb-4">Catálogo de Juegos Gratuitos</h2>

            <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
                {data.map(game => (
                    <div className="col" key={game.id}>
                        <Card game={game} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyApi;
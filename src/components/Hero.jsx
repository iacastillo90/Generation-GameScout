import { useState, useEffect } from 'react';

const images = [
    {
        url: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=2070&auto=format&fit=crop",
        title: "Descubre Nuevos Universos"
    },
    {
        url: "https://images.unsplash.com/photo-1552820728-8b83bb6b7738?q=80&w=2070&auto=format&fit=crop",
        title: "La Mejor Colección"
    },
    {
        url: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop",
        title: "Aventuras Épicas"
    }
];

function Hero () {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="hero-component" style={{
            backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.9)), url(${images[currentIndex].url})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transition: 'background-image 1s ease-in-out'
        }}>
            <h1>{images[currentIndex].title}</h1>
            <div className="carousel-indicators-custom">
                {images.map((_, index) => (
                    <span 
                        key={index} 
                        className={`indicator-dot ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => setCurrentIndex(index)}
                    ></span>
                ))}
            </div>
        </div>
    )
};

export default Hero;
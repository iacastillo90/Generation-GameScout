import "./Footer.css";

function Footer () {
    return (
        <footer id="footers" className="bg-dark text-light py-4 mt-auto border-top border-secondary text-center">
            <div className="container">
                
                <div className="footer-info mb-3">
                    <p className="mb-1"><i className="bi bi-envelope-fill me-2"></i> iacastillo.ili2@gmail.com</p>
                    <p className="mb-0"><i className="bi bi-geo-alt-fill me-2"></i> Santiago, Chile</p>
                </div>

                <div className="footer-social mb-3 fs-4">
                    <a href="#" aria-label="Síguenos en Instagram" className="text-light me-3"><i className="bi bi-instagram"></i></a>
                    <a href="#" aria-label="Síguenos en Github" className="text-light me-3"><i className="bi bi-github"></i></a>
                    <a href="#" aria-label="Síguenos en LinkedIn" className="text-light"><i className="bi bi-linkedin"></i></a>
                </div>

                <div className="footer-bottom small">
                    <a href="#" className="text-decoration-none">Política de Privacidad</a>
                    <p className="mt-2 mb-0">&copy; 2026 GameScout | Desarrollado con 💻 y ☕</p>
                </div>

            </div>
        </footer>
    )
};

export default Footer;
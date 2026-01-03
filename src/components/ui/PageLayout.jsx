/**
 * Layout base para todas las vistas
 * Incluye efectos de fondo y contenedor principal
 */
const PageLayout = ({ children }) => {
    return (
        <div className="academia-container">
            <div className="bg-effects">
                <div className="bg-orb bg-orb-1"></div>
                <div className="bg-orb bg-orb-2"></div>
                <div className="bg-orb bg-orb-3"></div>
            </div>
            {children}
        </div>
    );
};

export default PageLayout;

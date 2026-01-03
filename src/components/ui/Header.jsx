import { useNavigate } from 'react-router-dom';
import { Rocket, ArrowLeft, Star, Trophy } from 'lucide-react';
import { useProgress } from '../../context/ProgressContext';

/**
 * Header de la academia con navegación y estadísticas
 */
const Header = ({ showBack = false, backTo = '/', backLabel = 'Volver' }) => {
    const navigate = useNavigate();
    const { puntos, obtenerNivel } = useProgress();

    return (
        <header className="academia-header compact">
            <div className="header-brand" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
                <div className="brand-icon">
                    <Rocket size={24} />
                </div>
                <div className="brand-text">
                    <h1>Academia Frontend</h1>
                    <p>Dominando la Web Moderna</p>
                </div>
            </div>

            <div className="header-stats">
                {showBack && (
                    <button className="back-button" onClick={() => navigate(backTo)}>
                        <ArrowLeft size={18} />
                        <span>{backLabel}</span>
                    </button>
                )}
                <div className="stat-badge nivel-badge" style={{ borderColor: 'var(--accent-purple)' }}>
                    <Trophy size={18} style={{ color: '#facc15' }} />
                    <span>{obtenerNivel()}</span>
                </div>
                <div className="stat-badge puntos-badge">
                    <Star size={18} className="star-icon" />
                    <span>{puntos} pts</span>
                </div>
            </div>
        </header>
    );
};

export default Header;

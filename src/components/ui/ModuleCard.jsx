import { Clock, Zap, Award } from 'lucide-react';
import { useProgress } from '../../context/ProgressContext';

/**
 * Card de módulo individual
 * @param {Object} props
 * @param {Object} props.modulo - Datos del módulo
 * @param {number} props.index - Índice para animación
 * @param {function} props.onClick - Callback al hacer click
 */
const ModuleCard = ({ modulo, index, onClick }) => {
    const { progreso, obtenerProgresoModulo, quizCompletados } = useProgress();

    const IconComponent = modulo.icono;
    const progresoModulo = obtenerProgresoModulo(modulo.id);
    const completadas = modulo.lecciones.filter(l => progreso[`${modulo.id}-${l.id}`]).length;
    const quizAprobado = quizCompletados[modulo.id];

    return (
        <div
            className="modulo-card"
            onClick={onClick}
            style={{ animationDelay: `${index * 0.1}s`, '--card-bg': modulo.bgColor }}
        >
            {quizAprobado && (
                <div className="modulo-badge-quiz">
                    <Award size={14} /> Quiz {quizAprobado}%
                </div>
            )}

            <div className="modulo-header">
                <div className="modulo-icon" style={{ background: `linear-gradient(135deg, var(--accent-purple), var(--accent-pink))` }}>
                    <IconComponent size={24} />
                </div>
                <div className="modulo-meta">
                    <span className="modulo-nivel">{modulo.nivel}</span>
                    <span className="modulo-duracion">
                        <Clock size={12} /> {modulo.duracion}
                    </span>
                </div>
            </div>

            <h3 className="modulo-titulo">{modulo.titulo}</h3>
            <p className="modulo-descripcion">{modulo.descripcion}</p>

            <div className="modulo-progreso">
                <div className="progress-bar">
                    <div className="progress-bar-fill" style={{ width: `${progresoModulo}%` }}></div>
                </div>
                <div className="progreso-stats">
                    <span>{completadas}/{modulo.lecciones.length} lecciones</span>
                    <span className="progreso-percent">{progresoModulo}%</span>
                </div>
            </div>

            <div className="modulo-arrow">
                <Zap size={20} />
            </div>
        </div>
    );
};

export default ModuleCard;

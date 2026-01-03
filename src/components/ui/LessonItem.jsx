import { CheckCircle } from 'lucide-react';

/**
 * Item de lección individual
 * @param {Object} props
 * @param {Object} props.leccion - Datos de la lección
 * @param {boolean} props.completada - Si está completada
 * @param {number} props.index - Índice para animación
 * @param {function} props.onClick - Callback al hacer click
 */
const LessonItem = ({ leccion, completada, index, onClick }) => {
    return (
        <div
            className={`leccion-item ${completada ? 'completada' : ''}`}
            onClick={onClick}
            style={{ animationDelay: `${index * 0.05}s` }}
        >
            <div className={`leccion-numero ${completada ? 'done' : ''}`}>
                {completada ? <CheckCircle size={20} /> : index + 1}
            </div>
            <div className="leccion-info">
                <h3>{leccion.titulo}</h3>
                <span className="leccion-estado">
                    {completada ? '✓ Completada' : 'Pendiente'}
                </span>
            </div>
            <div className="leccion-puntos">
                {!completada && <span>+15 pts</span>}
            </div>
        </div>
    );
};

export default LessonItem;

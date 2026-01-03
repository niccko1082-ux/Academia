import { BarChart3 } from 'lucide-react';
import { useProgress } from '../../context/ProgressContext';

/**
 * Sección de progreso global con barra animada
 */
const ProgressSection = () => {
    const { obtenerProgresoTotal, leccionesCompletadas, totalLecciones } = useProgress();
    const progresoTotal = obtenerProgresoTotal();

    return (
        <section className="progreso-global">
            <div className="progreso-info">
                <div className="progreso-texto">
                    <BarChart3 size={20} />
                    <span>Progreso Total</span>
                </div>
                <span className="progreso-porcentaje">{progresoTotal}%</span>
            </div>
            <div className="progress-bar-global">
                <div className="progress-bar-fill-global" style={{ width: `${progresoTotal}%` }}></div>
            </div>
            <p className="progreso-detalle">
                {leccionesCompletadas} de {totalLecciones} lecciones completadas
            </p>
        </section>
    );
};

export default ProgressSection;

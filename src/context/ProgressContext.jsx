import { createContext, useContext, useCallback } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { modulos, totalLecciones } from '../data/modulos';

const ProgressContext = createContext(null);

/**
 * Provider de progreso para la academia
 * Gestiona: progreso de lecciones, quizzes completados, y puntos
 */
export function ProgressProvider({ children }) {
    const [progreso, setProgreso] = useLocalStorage('academia-progreso', {});
    const [quizCompletados, setQuizCompletados] = useLocalStorage('academia-quizzes', {});
    const [puntos, setPuntos] = useLocalStorage('academia-puntos', 0);

    const completarLeccion = useCallback((moduloId, leccionId) => {
        const key = `${moduloId}-${leccionId}`;
        if (!progreso[key]) {
            setProgreso(prev => ({ ...prev, [key]: true }));
            setPuntos(prev => prev + 15);
        }
    }, [progreso, setProgreso, setPuntos]);

    const onQuizComplete = useCallback((moduloId, porcentaje) => {
        if (!quizCompletados[moduloId] || porcentaje > quizCompletados[moduloId]) {
            setQuizCompletados(prev => ({ ...prev, [moduloId]: porcentaje }));
            if (porcentaje >= 80) setPuntos(prev => prev + 50);
        }
    }, [quizCompletados, setQuizCompletados, setPuntos]);

    const obtenerProgresoModulo = useCallback((moduloId) => {
        const modulo = modulos.find(m => m.id === moduloId);
        if (!modulo) return 0;
        const total = modulo.lecciones.length;
        const completadas = modulo.lecciones.filter(l => progreso[`${moduloId}-${l.id}`]).length;
        return Math.round((completadas / total) * 100);
    }, [progreso]);

    const obtenerProgresoTotal = useCallback(() => {
        const totalCompletadas = Object.values(progreso).filter(Boolean).length;
        return Math.round((totalCompletadas / totalLecciones) * 100);
    }, [progreso]);

    const obtenerNivel = useCallback(() => {
        if (puntos >= 500) return '🏅 Senior';
        if (puntos >= 200) return '🥈 Fullstack';
        if (puntos >= 50) return '🥉 Junior';
        return '🌱 Beginner';
    }, [puntos]);

    const value = {
        // Estado
        progreso,
        quizCompletados,
        puntos,
        // Funciones
        completarLeccion,
        onQuizComplete,
        obtenerProgresoModulo,
        obtenerProgresoTotal,
        obtenerNivel,
        // Datos derivados
        totalLecciones,
        leccionesCompletadas: Object.keys(progreso).filter(k => progreso[k]).length
    };

    return (
        <ProgressContext.Provider value={value}>
            {children}
        </ProgressContext.Provider>
    );
}

/**
 * Hook para acceder al contexto de progreso
 */
export function useProgress() {
    const context = useContext(ProgressContext);
    if (!context) {
        throw new Error('useProgress debe usarse dentro de un ProgressProvider');
    }
    return context;
}

export default ProgressContext;

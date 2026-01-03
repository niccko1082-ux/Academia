import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Brain, Target, ClipboardList } from 'lucide-react';
import { modulos } from '../data/modulos';
import { useProgress } from '../context/ProgressContext';
import { Header, LessonItem, AIFab, PageLayout } from '../components/ui';
import AIAssistant from '../components/AIAssistant';

/**
 * Vista de lecciones de un módulo
 */
const LessonsView = () => {
    const { moduloId } = useParams();
    const navigate = useNavigate();
    const { progreso, obtenerProgresoModulo, quizCompletados } = useProgress();
    const [isAIChatOpen, setIsAIChatOpen] = useState(false);
    const [aiContext, setAiContext] = useState('');

    const modulo = modulos.find(m => m.id === moduloId);

    if (!modulo) {
        return (
            <PageLayout>
                <Header showBack backTo="/" backLabel="Volver a módulos" />
                <div style={{ textAlign: 'center', padding: '5rem' }}>
                    <h2>Módulo no encontrado</h2>
                </div>
            </PageLayout>
        );
    }

    const progresoModulo = obtenerProgresoModulo(modulo.id);

    const toggleAIChat = (context = '') => {
        setAiContext(context);
        setIsAIChatOpen(prev => !prev);
    };

    return (
        <PageLayout>
            <Header showBack backTo="/" backLabel="Volver a módulos" />

            <main className="lecciones-view">
                <div className="modulo-hero" style={{ '--hero-bg': modulo.bgColor }}>
                    <div className="modulo-icon-large">
                        <modulo.icono size={40} />
                    </div>
                    <h1>{modulo.titulo}</h1>
                    <p>{modulo.descripcion}</p>
                    <div className="hero-progress">
                        <div className="progress-bar">
                            <div className="progress-bar-fill" style={{ width: `${progresoModulo}%` }}></div>
                        </div>
                        <span>{progresoModulo}% completado</span>
                    </div>
                </div>

                {/* Recursos del módulo */}
                <div className="modulo-recursos">
                    <button className="recurso-btn" onClick={() => navigate(`/modulo/${modulo.id}/quiz`)}>
                        <Brain size={20} />
                        <span>Quiz de Evaluación</span>
                        {quizCompletados[modulo.id] && <span className="recurso-check">✓ {quizCompletados[modulo.id]}%</span>}
                    </button>
                    <button className="recurso-btn" onClick={() => navigate(`/modulo/${modulo.id}/proyecto`)}>
                        <Target size={20} />
                        <span>Proyecto Práctico</span>
                    </button>
                    <button className="recurso-btn" onClick={() => navigate(`/modulo/${modulo.id}/cheatsheet`)}>
                        <ClipboardList size={20} />
                        <span>Cheatsheet</span>
                    </button>
                </div>

                <h3 className="lecciones-titulo">📚 Lecciones</h3>

                <div className="lecciones-lista">
                    {modulo.lecciones.map((leccion, index) => (
                        <LessonItem
                            key={leccion.id}
                            leccion={leccion}
                            completada={progreso[`${moduloId}-${leccion.id}`]}
                            index={index}
                            onClick={() => navigate(`/modulo/${moduloId}/leccion/${leccion.id}`)}
                        />
                    ))}
                </div>
            </main>

            <AIAssistant
                isOpen={isAIChatOpen}
                onClose={toggleAIChat}
                contexto={aiContext}
                modulo={modulo.titulo}
            />
            <AIFab onClick={() => toggleAIChat(modulo.titulo)} />
        </PageLayout>
    );
};

export default LessonsView;

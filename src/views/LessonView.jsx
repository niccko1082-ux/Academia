import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { BookOpen, Code, Lightbulb, Zap, Target, Eye, EyeOff, Trophy, CheckCircle, Sparkles, ArrowRight, ChevronRight } from 'lucide-react';
import { modulos, contenidoModulos } from '../data/modulos';
import { useProgress } from '../context/ProgressContext';
import { Header, CodeSection, FormattedText, AIFab, PageLayout } from '../components/ui';
import AIAssistant from '../components/AIAssistant';

/**
 * Vista detallada de una lección con mejoras de UX
 */
const LessonView = () => {
    const { moduloId, leccionId } = useParams();
    const navigate = useNavigate();
    const { progreso, completarLeccion } = useProgress();
    const [activeTab, setActiveTab] = useState('guia');
    const [mostrarSolucion, setMostrarSolucion] = useState(false);
    const [isAIChatOpen, setIsAIChatOpen] = useState(false);
    const [aiContext, setAiContext] = useState('');

    const modulo = modulos.find(m => m.id === moduloId);
    const leccionIdNum = parseInt(leccionId);
    const contenidoActual = contenidoModulos[moduloId]?.[leccionIdNum];
    const leccionInfo = modulo?.lecciones.find(l => l.id === leccionIdNum);
    const estaCompletada = progreso[`${moduloId}-${leccionIdNum}`];

    // Calcular progreso y siguiente lección
    const leccionesModulo = modulo?.lecciones || [];
    const indiceActual = leccionesModulo.findIndex(l => l.id === leccionIdNum);
    const siguienteLeccion = leccionesModulo[indiceActual + 1];
    const esUltimaLeccion = indiceActual === leccionesModulo.length - 1;
    const leccionesCompletadas = leccionesModulo.filter(l => progreso[`${moduloId}-${l.id}`]).length;
    const progresoModulo = Math.round((leccionesCompletadas / leccionesModulo.length) * 100);

    if (!modulo || !contenidoActual) {
        return (
            <PageLayout>
                <Header showBack backTo={`/modulo/${moduloId}`} backLabel="Volver a lecciones" />
                <div style={{ textAlign: 'center', padding: '5rem' }}>
                    <h2>Lección no encontrada</h2>
                </div>
            </PageLayout>
        );
    }

    const toggleAIChat = (context = '') => {
        setAiContext(context);
        setIsAIChatOpen(prev => !prev);
    };

    const irSiguienteLeccion = () => {
        if (siguienteLeccion) {
            navigate(`/modulo/${moduloId}/leccion/${siguienteLeccion.id}`);
        } else {
            navigate(`/modulo/${moduloId}`);
        }
    };

    const handleCompletar = () => {
        if (!estaCompletada) {
            completarLeccion(moduloId, leccionIdNum);
        }
    };

    return (
        <PageLayout>
            <Header showBack backTo={`/modulo/${moduloId}`} backLabel="Volver a lecciones" />

            <main className="leccion-view">
                {/* Progress indicator */}
                <div className="lesson-progress-indicator">
                    <div className="lesson-progress-bar">
                        <div
                            className="lesson-progress-fill"
                            style={{ width: `${progresoModulo}%` }}
                        />
                    </div>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginTop: '0.5rem',
                        fontSize: '0.85rem',
                        color: '#71717a'
                    }}>
                        <span>Lección {indiceActual + 1} de {leccionesModulo.length}</span>
                        <span style={{ color: '#a78bfa' }}>{progresoModulo}% completado</span>
                    </div>
                </div>

                <div className="leccion-header-card">
                    <span className="leccion-badge">{modulo.titulo}</span>
                    <h1>{leccionInfo?.titulo || contenidoActual?.titulo}</h1>
                    {estaCompletada && (
                        <div style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            marginTop: '0.75rem',
                            color: '#10b981',
                            fontSize: '0.9rem',
                            fontWeight: 600
                        }}>
                            <CheckCircle size={18} />
                            <span>Lección completada</span>
                        </div>
                    )}
                </div>

                {/* Navegación por pestañas */}
                <nav className="lesson-tabs">
                    <button
                        className={`tab-btn ${activeTab === 'guia' ? 'active' : ''}`}
                        onClick={() => setActiveTab('guia')}
                    >
                        <BookOpen size={18} />
                        Guía de Aprendizaje
                    </button>
                    <button
                        className={`tab-btn ${activeTab === 'practica' ? 'active' : ''}`}
                        onClick={() => setActiveTab('practica')}
                    >
                        <Zap size={18} />
                        Práctica En Vivo
                    </button>
                </nav>

                <div className="leccion-contenido">
                    {activeTab === 'guia' ? (
                        <div className="theory-view">
                            <section className="content-section theory-animate">
                                <div className="section-header">
                                    <BookOpen size={22} style={{ color: '#60a5fa' }} />
                                    <h2>Teoría y Conceptos</h2>
                                </div>
                                <div className="section-body">
                                    <FormattedText text={contenidoActual.teoria} />
                                    <button className="ai-help-btn" onClick={() => toggleAIChat(`teoría de ${leccionInfo.titulo}`)}>
                                        <Sparkles size={16} />
                                        <span>🤔 No entiendo, explícame diferente</span>
                                    </button>
                                </div>
                            </section>

                            <section className="content-section theory-animate" style={{ animationDelay: '0.1s' }}>
                                <div className="section-header">
                                    <Code size={22} style={{ color: '#10b981' }} />
                                    <h2>Ejemplos de Código</h2>
                                </div>
                                <div className="section-body">
                                    <CodeSection code={contenidoActual.ejemplos} language="javascript" />
                                </div>
                            </section>

                            <section className="content-section theory-animate" style={{ animationDelay: '0.2s' }}>
                                <div className="section-header">
                                    <Lightbulb size={22} style={{ color: '#facc15' }} />
                                    <h2>💡 Tips Pro</h2>
                                </div>
                                <div className="section-body">
                                    <ul className="practicas-lista">
                                        {contenidoActual.buenasPracticas.map((practica, i) => (
                                            <li key={i}>
                                                <CheckCircle size={16} className="check-icon" />
                                                <span>{practica}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </section>
                        </div>
                    ) : (
                        <div className="practice-view">
                            <section className="content-section">
                                <div className="section-header">
                                    <Target size={22} style={{ color: '#a78bfa' }} />
                                    <h2>🎯 Tu Reto</h2>
                                </div>
                                <div className="section-body">
                                    <div style={{
                                        marginBottom: '1.5rem',
                                        padding: '1rem',
                                        background: 'rgba(139, 92, 246, 0.1)',
                                        border: '1px solid rgba(139, 92, 246, 0.2)',
                                        borderRadius: '12px',
                                        color: '#c4b5fd'
                                    }}>
                                        <p style={{ margin: 0 }}>
                                            📋 Lee las instrucciones en los comentarios del código y completa el ejercicio.
                                            <br />
                                            <small style={{ color: '#a1a1aa' }}>Tip: Usa el botón "Copiar" y pégalo en la consola (F12) para probarlo.</small>
                                        </p>
                                    </div>
                                    <CodeSection code={contenidoActual.ejercicio} language="javascript" />

                                    <div className="button-group-exercise" style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
                                        <button className="btn-solucion" onClick={() => setMostrarSolucion(prev => !prev)}>
                                            {mostrarSolucion ? <EyeOff size={18} /> : <Eye size={18} />}
                                            {mostrarSolucion ? 'Ocultar Solución' : '👀 Revelar Solución'}
                                        </button>
                                        <button className="ai-help-btn" style={{ marginBottom: 0, marginTop: 0 }} onClick={() => toggleAIChat(`el ejercicio de ${leccionInfo.titulo}`)}>
                                            <Sparkles size={16} />
                                            <span>💡 Dame una pista</span>
                                        </button>
                                    </div>

                                    {mostrarSolucion && (
                                        <div className="solucion-container theory-animate" style={{ marginTop: '2rem' }}>
                                            <div className="section-header" style={{ padding: '1rem', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '12px 12px 0 0' }}>
                                                <CheckCircle size={20} style={{ color: '#10b981' }} />
                                                <h4 style={{ color: '#10b981', margin: 0 }}>✅ Solución Sugerida</h4>
                                            </div>
                                            <CodeSection code={contenidoActual.solucion} language="javascript" />
                                        </div>
                                    )}
                                </div>
                            </section>
                        </div>
                    )}

                    {/* Sección de completar y siguiente */}
                    <div style={{
                        marginTop: '2rem',
                        padding: '1.5rem',
                        background: 'rgba(255, 255, 255, 0.02)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        borderRadius: '20px'
                    }}>
                        <button
                            className={`btn-completar ${estaCompletada ? 'completada' : ''}`}
                            onClick={handleCompletar}
                            disabled={estaCompletada}
                            style={{ width: '100%', maxWidth: 'none' }}
                        >
                            {estaCompletada ? (
                                <>
                                    <Trophy size={22} />
                                    <span>¡Lección Dominada!</span>
                                </>
                            ) : (
                                <>
                                    <Zap size={22} />
                                    <span>Marcar como Completada</span>
                                    <span className="puntos-reward">+15 pts</span>
                                </>
                            )}
                        </button>

                        {/* Botón siguiente lección */}
                        {estaCompletada && (
                            <button
                                className="next-lesson-btn"
                                onClick={irSiguienteLeccion}
                            >
                                {esUltimaLeccion ? (
                                    <>
                                        <span>🎉 Volver al módulo</span>
                                        <ChevronRight size={20} />
                                    </>
                                ) : (
                                    <>
                                        <span>Siguiente: {siguienteLeccion?.titulo}</span>
                                        <ArrowRight size={20} />
                                    </>
                                )}
                            </button>
                        )}
                    </div>
                </div>
            </main>

            <AIAssistant
                isOpen={isAIChatOpen}
                onClose={toggleAIChat}
                contexto={aiContext}
                modulo={modulo.titulo}
            />
            <AIFab onClick={() => toggleAIChat(leccionInfo.titulo)} />
        </PageLayout>
    );
};

export default LessonView;

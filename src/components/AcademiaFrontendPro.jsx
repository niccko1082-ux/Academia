import { useState, useEffect } from 'react';
import {
    Code, Layout, Palette, CheckCircle, Lightbulb,
    Rocket, Star, BookOpen, Zap, ArrowLeft,
    Trophy, Target, Eye, EyeOff, Clock, BarChart3,
    FileCode, FolderTree, ClipboardList, Award, Brain,
    MessageSquare, Bot, Sparkles, Send
} from 'lucide-react';
import { contenidoModulos, modulos, totalLecciones } from '../data/modulos';
import { quizzes, proyectos, estructuraArchivos, cheatsheets } from '../data/recursos-aprendizaje';
import Quiz from './Quiz';
import AIAssistant from './AIAssistant';
import '../styles/academy.css';

const FormattedText = ({ text }) => {
    if (!text) return null;

    // Split by blocks/paragraphs
    const blocks = text.split('\n\n');

    return (
        <div className="theory-container">
            {blocks.map((block, i) => {
                // Check for highlight boxes (starting with emojis or markers)
                if (block.includes('📦') || block.includes('🎯') || block.includes('💡') || block.includes('⚠️')) {
                    const lines = block.split('\n');
                    const title = lines[0];
                    const content = lines.slice(1);

                    return (
                        <div key={i} className="theory-block theory-highlight-box">
                            <h4>{title}</h4>
                            <ul className="theory-list">
                                {content.map((line, j) => (
                                    <li key={j}>
                                        <span className="bullet">•</span>
                                        <span>{line.replace('•', '').trim()}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    );
                }

                // Regular paragraphs
                return (
                    <p key={i} className="theory-block">
                        {block.split('\n').map((line, j) => (
                            <span key={j}>
                                {line}
                                <br />
                            </span>
                        ))}
                    </p>
                );
            })}
        </div>
    );
};

const CodeSection = ({ code, language = 'javascript', title = 'Ejemplo' }) => {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="code-block-wrapper">
            <div className="code-header">
                <span className="code-lang">{language}</span>
                <button className="code-copy" onClick={copyToClipboard}>
                    {copied ? <CheckCircle size={14} /> : <ClipboardList size={14} />}
                    {copied ? 'Copiado' : 'Copiar'}
                </button>
            </div>
            <pre className="code-block">{code}</pre>
        </div>
    );
};

const AcademiaFrontendPro = () => {
    const [vista, setVista] = useState('modulos'); // modulos, lecciones, leccion, quiz, proyecto, estructura, cheatsheet
    const [moduloActual, setModuloActual] = useState(null);
    const [leccionActual, setLeccionActual] = useState(null);
    const [activeTab, setActiveTab] = useState('guia'); // guia, practica, cheat
    const [progreso, setProgreso] = useState(() => {
        const saved = localStorage.getItem('academia-progreso');
        return saved ? JSON.parse(saved) : {};
    });
    const [quizCompletados, setQuizCompletados] = useState(() => {
        const saved = localStorage.getItem('academia-quizzes');
        return saved ? JSON.parse(saved) : {};
    });
    const [mostrarSolucion, setMostrarSolucion] = useState({});
    const [isAIChatOpen, setIsAIChatOpen] = useState(false);
    const [aiContext, setAiContext] = useState('');
    const [puntos, setPuntos] = useState(() => {
        const saved = localStorage.getItem('academia-puntos');
        return saved ? parseInt(saved) : 0;
    });

    useEffect(() => {
        localStorage.setItem('academia-progreso', JSON.stringify(progreso));
    }, [progreso]);

    useEffect(() => {
        localStorage.setItem('academia-puntos', puntos.toString());
    }, [puntos]);

    useEffect(() => {
        localStorage.setItem('academia-quizzes', JSON.stringify(quizCompletados));
    }, [quizCompletados]);

    const completarLeccion = (moduloId, leccionId) => {
        const key = `${moduloId}-${leccionId}`;
        if (!progreso[key]) {
            setProgreso(prev => ({ ...prev, [key]: true }));
            setPuntos(prev => prev + 15);
        }
    };

    const onQuizComplete = (moduloId, porcentaje) => {
        if (!quizCompletados[moduloId] || porcentaje > quizCompletados[moduloId]) {
            setQuizCompletados(prev => ({ ...prev, [moduloId]: porcentaje }));
            if (porcentaje >= 80) setPuntos(prev => prev + 50);
        }
    };

    const toggleSolucion = (moduloId, leccionId) => {
        const key = `${moduloId}-${leccionId}`;
        setMostrarSolucion(prev => ({ ...prev, [key]: !prev[key] }));
    };

    const toggleAIChat = (context = '') => {
        setAiContext(context);
        setIsAIChatOpen(prev => !prev);
    };

    const obtenerProgresoModulo = (moduloId) => {
        const modulo = modulos.find(m => m.id === moduloId);
        if (!modulo) return 0;
        const total = modulo.lecciones.length;
        const completadas = modulo.lecciones.filter(l => progreso[`${moduloId}-${l.id}`]).length;
        return Math.round((completadas / total) * 100);
    };

    const obtenerProgresoTotal = () => {
        const totalCompletadas = Object.values(progreso).filter(Boolean).length;
        return Math.round((totalCompletadas / totalLecciones) * 100);
    };

    const obtenerNivel = () => {
        if (puntos >= 500) return '🏅 Senior';
        if (puntos >= 200) return '🥈 Fullstack';
        if (puntos >= 50) return '🥉 Junior';
        return '🌱 Beginner';
    };

    const navegarA = (nuevaVista, moduloId = null, leccionId = null) => {
        if (moduloId) setModuloActual(moduloId);
        if (leccionId) setLeccionActual(leccionId);
        setActiveTab('guia'); // Reset tab when navigating
        setVista(nuevaVista);
    };

    // =========== HEADER COMPONENT ===========
    const Header = ({ showBack = false, backTo = 'modulos', backLabel = 'Volver' }) => (
        <header className="academia-header compact">
            <div className="header-brand" onClick={() => navegarA('modulos')} style={{ cursor: 'pointer' }}>
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
                    <button className="back-button" onClick={() => navegarA(backTo, moduloActual)}>
                        <ArrowLeft size={18} />
                        <span>{backLabel}</span>
                    </button>
                )}
                <div className="stat-badge nivel-badge" style={{ borderColor: 'var(--accent-purple)' }}>
                    <span className="stat-emoji">🏆</span>
                    <span>{obtenerNivel()}</span>
                </div>
                <div className="stat-badge puntos-badge">
                    <Star size={18} className="star-icon" />
                    <span>{puntos} pts</span>
                </div>
            </div>
        </header>
    );

    // =========== RENDER HELPER: AI FAB ===========
    const AIFab = () => (
        <button className="ai-fab" onClick={() => toggleAIChat('asistencia general')}>
            <div className="ai-fab-badge">Mentor</div>
            <Bot size={28} />
        </button>
    );

    // =========== VISTA PRINCIPAL (Lista de Módulos) ===========
    if (vista === 'modulos') {
        const progresoTotal = obtenerProgresoTotal();

        return (
            <div className="academia-container">
                <div className="bg-effects">
                    <div className="bg-orb bg-orb-1"></div>
                    <div className="bg-orb bg-orb-2"></div>
                    <div className="bg-orb bg-orb-3"></div>
                </div>

                <Header />

                {/* Progreso Global */}
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
                        {Object.keys(progreso).filter(k => progreso[k]).length} de {totalLecciones} lecciones completadas
                    </p>
                </section>


                <main className="modulos-grid">
                    <div className="section-header-flex">
                        <h2 className="section-title">
                            <BookOpen size={24} />
                            Módulos de Aprendizaje
                        </h2>

                        <div className="quick-actions">
                            <button className="action-btn-secondary" onClick={() => navegarA('estructura')}>
                                <FolderTree size={18} />
                                Estructura Pro
                            </button>
                        </div>
                    </div>

                    <div className="modulos-container">
                        {modulos.map((modulo, index) => {
                            const IconComponent = modulo.icono;
                            const progresoModulo = obtenerProgresoModulo(modulo.id);
                            const completadas = modulo.lecciones.filter(l => progreso[`${modulo.id}-${l.id}`]).length;
                            const quizAprobado = quizCompletados[modulo.id];

                            return (
                                <div
                                    key={modulo.id}
                                    className="modulo-card"
                                    onClick={() => navegarA('lecciones', modulo.id)}
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
                        })}
                    </div>
                </main>

                <footer className="academia-footer">
                    <p>🎯 Completa todos los módulos para convertirte en Frontend Developer</p>
                </footer>

                <AIAssistant
                    isOpen={isAIChatOpen}
                    onClose={toggleAIChat}
                    contexto={aiContext}
                    modulo={moduloActual}
                />
                <AIFab />
            </div>
        );
    }

    // =========== VISTA DE ESTRUCTURA DE ARCHIVOS ===========
    if (vista === 'estructura') {
        return (
            <div className="academia-container">
                <div className="bg-effects">
                    <div className="bg-orb bg-orb-1"></div>
                </div>

                <Header showBack={true} backTo="modulos" backLabel="Volver a módulos" />

                <main className="estructura-view">
                    <div className="estructura-hero">
                        <FolderTree size={48} />
                        <h1>{estructuraArchivos.titulo}</h1>
                        <p>{estructuraArchivos.descripcion}</p>
                    </div>

                    <section className="content-section">
                        <div className="section-header">
                            <FileCode size={22} />
                            <h2>Estructura Típica</h2>
                        </div>
                        <div className="section-body">
                            <pre className="estructura-tree">{estructuraArchivos.contenido}</pre>
                            <button className="ai-help-btn" onClick={() => toggleAIChat('estructura de archivos profesionales')}>
                                <Sparkles size={16} />
                                <span>Preguntar al Mentor sobre esto</span>
                            </button>
                        </div>
                    </section>

                    <section className="content-section reglas-section">
                        <div className="section-header">
                            <Lightbulb size={22} />
                            <h2>Reglas de Oro</h2>
                        </div>
                        <div className="section-body">
                            <div className="reglas-grid">
                                {estructuraArchivos.reglas.map((regla, i) => (
                                    <div key={i} className="regla-item">
                                        <h4>{regla.titulo}</h4>
                                        <p>{regla.descripcion}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section className="content-section archivos-section">
                        <div className="section-header">
                            <FileCode size={22} />
                            <h2>Archivos Importantes</h2>
                        </div>
                        <div className="section-body">
                            {estructuraArchivos.archivosImportantes.map((archivo, i) => (
                                <div key={i} className="archivo-item">
                                    <h4>📄 {archivo.archivo}</h4>
                                    <p className="archivo-proposito">{archivo.proposito}</p>
                                    <CodeSection code={archivo.ejemplo} title={archivo.archivo} language="code" />
                                </div>
                            ))}
                        </div>
                    </section>
                </main>
                <AIAssistant
                    isOpen={isAIChatOpen}
                    onClose={toggleAIChat}
                    contexto={aiContext}
                    modulo="Estructura de Proyectos"
                />
                <AIFab />
            </div>
        );
    }

    // =========== VISTA DE MÓDULO (Lecciones + Recursos) ===========
    const modulo = modulos.find(m => m.id === moduloActual);

    if (vista === 'lecciones' && modulo) {
        const progresoModulo = obtenerProgresoModulo(modulo.id);

        return (
            <div className="academia-container">
                <div className="bg-effects">
                    <div className="bg-orb bg-orb-1"></div>
                    <div className="bg-orb bg-orb-2"></div>
                </div>

                <Header showBack={true} backTo="modulos" backLabel="Volver a módulos" />

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
                        <button className="recurso-btn" onClick={() => navegarA('quiz', modulo.id)}>
                            <Brain size={20} />
                            <span>Quiz de Evaluación</span>
                            {quizCompletados[modulo.id] && <span className="recurso-check">✓ {quizCompletados[modulo.id]}%</span>}
                        </button>
                        <button className="recurso-btn" onClick={() => navegarA('proyecto', modulo.id)}>
                            <Target size={20} />
                            <span>Proyecto Práctico</span>
                        </button>
                        <button className="recurso-btn" onClick={() => navegarA('cheatsheet', modulo.id)}>
                            <ClipboardList size={20} />
                            <span>Cheatsheet</span>
                        </button>
                    </div>

                    <h3 className="lecciones-titulo">📚 Lecciones</h3>

                    <div className="lecciones-lista">
                        {modulo.lecciones.map((leccion, index) => {
                            const completada = progreso[`${moduloActual}-${leccion.id}`];

                            return (
                                <div
                                    key={leccion.id}
                                    className={`leccion-item ${completada ? 'completada' : ''}`}
                                    onClick={() => navegarA('leccion', moduloActual, leccion.id)}
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
                        })}
                    </div>
                </main>
                <AIAssistant
                    isOpen={isAIChatOpen}
                    onClose={toggleAIChat}
                    contexto={aiContext}
                    modulo={modulo.titulo}
                />
                <AIFab />
            </div>
        );
    }

    // =========== VISTA DE QUIZ ===========
    if (vista === 'quiz' && modulo) {
        const quizPreguntas = quizzes[modulo.id];

        return (
            <div className="academia-container">
                <div className="bg-effects">
                    <div className="bg-orb bg-orb-1"></div>
                </div>

                <Header showBack={true} backTo="lecciones" backLabel="Volver a lecciones" />

                <main className="quiz-view">
                    <div className="quiz-hero">
                        <Brain size={40} />
                        <h1>Quiz: {modulo.titulo}</h1>
                        <p>Demuestra tus conocimientos</p>
                        <button className="ai-help-btn" style={{ margin: '1rem auto' }} onClick={() => toggleAIChat(`preparación para el quiz de ${modulo.titulo}`)}>
                            <Sparkles size={16} />
                            <span>Mentor, ¿algún consejo antes de empezar?</span>
                        </button>
                    </div>

                    <Quiz
                        preguntas={quizPreguntas}
                        moduloNombre={modulo.titulo}
                        onComplete={(porcentaje) => onQuizComplete(modulo.id, porcentaje)}
                    />
                </main>
                <AIAssistant
                    isOpen={isAIChatOpen}
                    onClose={toggleAIChat}
                    contexto={aiContext}
                    modulo={modulo.titulo}
                />
                <AIFab />
            </div>
        );
    }

    // =========== VISTA DE PROYECTO ===========
    if (vista === 'proyecto' && modulo) {
        const proyecto = proyectos[modulo.id];

        if (!proyecto) {
            return (
                <div className="academia-container">
                    <Header showBack={true} backTo="lecciones" backLabel="Volver a lecciones" />
                    <div className="quiz-view" style={{ textAlign: 'center', padding: '5rem' }}>
                        <Target size={48} style={{ color: '#71717a', marginBottom: '1rem' }} />
                        <h3>Contenido en construcción</h3>
                        <p>El proyecto para este módulo estará disponible muy pronto.</p>
                    </div>
                </div>
            );
        }

        return (
            <div className="academia-container">
                <div className="bg-effects">
                    <div className="bg-orb bg-orb-1"></div>
                </div>

                <Header showBack={true} backTo="lecciones" backLabel="Volver a lecciones" />

                <main className="proyecto-view">
                    <div className="proyecto-hero">
                        <Target size={40} />
                        <h1>{proyecto.titulo}</h1>
                        <p>{proyecto.descripcion}</p>
                    </div>

                    <section className="content-section">
                        <div className="section-header">
                            <CheckCircle size={22} />
                            <h2>Requisitos</h2>
                        </div>
                        <div className="section-body">
                            <ul className="requisitos-lista">
                                {proyecto.requisitos.map((req, i) => (
                                    <li key={i}>
                                        <CheckCircle size={16} className="check-icon" />
                                        <span>{req}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>

                    <section className="content-section">
                        <div className="section-header">
                            <Code size={22} />
                            <h2>Código de Referencia</h2>
                        </div>
                        <div className="section-body">
                            <CodeSection code={proyecto.codigo} language={modulo.id === 'bootstrap' ? 'html' : 'javascript'} />
                            <button className="ai-help-btn" onClick={() => toggleAIChat(`logica para el proyecto "${proyecto.titulo}"`)}>
                                <Sparkles size={16} />
                                <span>No entiendo este código, ¿me lo explicas?</span>
                            </button>
                        </div>
                    </section>

                    <section className="content-section">
                        <div className="section-header">
                            <Zap size={22} />
                            <h2>Skills Aplicados</h2>
                        </div>
                        <div className="section-body">
                            <div className="skills-tags">
                                {proyecto.skills.map((skill, i) => (
                                    <span key={i} className="skill-tag">{skill}</span>
                                ))}
                            </div>
                        </div>
                    </section>
                </main>
                <AIAssistant
                    isOpen={isAIChatOpen}
                    onClose={toggleAIChat}
                    contexto={aiContext}
                    modulo={modulo.titulo}
                />
                <AIFab />
            </div>
        );
    }

    // =========== VISTA DE CHEATSHEET ===========
    if (vista === 'cheatsheet' && modulo) {
        const cheatsheet = cheatsheets[modulo.id];

        if (!cheatsheet) {
            return (
                <div className="academia-container">
                    <Header showBack={true} backTo="lecciones" backLabel="Volver a lecciones" />
                    <div className="quiz-view" style={{ textAlign: 'center', padding: '5rem' }}>
                        <ClipboardList size={48} style={{ color: '#71717a', marginBottom: '1rem' }} />
                        <h3>Contenido en construcción</h3>
                        <p>La guía rápida para este módulo estará disponible pronto.</p>
                    </div>
                </div>
            );
        }

        return (
            <div className="academia-container">
                <div className="bg-effects">
                    <div className="bg-orb bg-orb-1"></div>
                </div>

                <Header showBack={true} backTo="lecciones" backLabel="Volver a lecciones" />

                <main className="cheatsheet-view">
                    <div className="cheatsheet-hero">
                        <ClipboardList size={40} />
                        <h1>{cheatsheet.titulo}</h1>
                        <p>Referencia rápida de comandos y sintaxis</p>
                        <button className="ai-help-btn" style={{ margin: '1rem auto' }} onClick={() => toggleAIChat(`resumen y sintaxis de ${modulo.titulo}`)}>
                            <Sparkles size={16} />
                            <span>Mentor, ¿algún truco pro que no esté aquí?</span>
                        </button>
                    </div>

                    <div className="cheatsheet-grid">
                        {cheatsheet.secciones.map((seccion, i) => (
                            <div key={i} className="cheatsheet-section">
                                <h3>{seccion.titulo}</h3>
                                <ul>
                                    {seccion.items.map((item, j) => (
                                        <li key={j}><code>{item}</code></li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </main>
                <AIAssistant
                    isOpen={isAIChatOpen}
                    onClose={toggleAIChat}
                    contexto={aiContext}
                    modulo={modulo.titulo}
                />
                <AIFab />
            </div>
        );
    }

    // =========== VISTA DE LECCIÓN ===========
    if (vista === 'leccion' && modulo && leccionActual) {
        const contenidoActual = contenidoModulos[moduloActual]?.[leccionActual];
        const leccionInfo = modulo.lecciones.find(l => l.id === leccionActual);
        const estaCompletada = progreso[`${moduloActual}-${leccionActual}`];
        const solucionVisible = mostrarSolucion[`${moduloActual}-${leccionActual}`];

        return (
            <div className="academia-container">
                <div className="bg-effects">
                    <div className="bg-orb bg-orb-1"></div>
                </div>

                <Header showBack={true} backTo="lecciones" backLabel="Volver a lecciones" />

                <main className="leccion-view">
                    <div className="leccion-header-card">
                        <span className="leccion-badge">{modulo.titulo}</span>
                        <h1>{leccionInfo?.titulo || contenidoActual?.titulo}</h1>
                    </div>

                    {/* Nueva navegación por pestañas */}
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

                    {contenidoActual && (
                        <div className="leccion-contenido">
                            {activeTab === 'guia' ? (
                                <div className="theory-view">
                                    <section className="content-section theory-animate">
                                        <div className="section-header">
                                            <BookOpen size={22} />
                                            <h2>Teoría y Conceptos</h2>
                                        </div>
                                        <div className="section-body">
                                            <FormattedText text={contenidoActual.teoria} />
                                            <button className="ai-help-btn" onClick={() => toggleAIChat(`teoría de ${leccionInfo.titulo} (${modulo.titulo})`)}>
                                                <Sparkles size={16} />
                                                <span>Mentor IA, no entiendo esta explicación</span>
                                            </button>
                                        </div>
                                    </section>

                                    <section className="content-section theory-animate" style={{ animationDelay: '0.1s' }}>
                                        <div className="section-header">
                                            <Code size={22} />
                                            <h2>Ejemplos de Código</h2>
                                        </div>
                                        <div className="section-body">
                                            <CodeSection code={contenidoActual.ejemplos} language="javascript" />
                                        </div>
                                    </section>

                                    <section className="content-section theory-animate" style={{ animationDelay: '0.2s' }}>
                                        <div className="section-header">
                                            <Lightbulb size={22} />
                                            <h2>Tips Pro</h2>
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
                                            <Target size={22} />
                                            <h2>Tu Reto</h2>
                                        </div>
                                        <div className="section-body">
                                            <p style={{ marginBottom: '1.5rem', color: '#a1a1aa' }}>
                                                Lee las instrucciones en los comentarios del código y completa el ejercicio.
                                            </p>
                                            <CodeSection code={contenidoActual.ejercicio} language="javascript" />

                                            <div className="button-group-exercise" style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                                                <button className="btn-solucion" onClick={() => toggleSolucion(moduloActual, leccionActual)}>
                                                    {solucionVisible ? <EyeOff size={18} /> : <Eye size={18} />}
                                                    {solucionVisible ? 'Ocultar Solución' : 'Revelar Solución'}
                                                </button>
                                                <button className="ai-help-btn" style={{ marginBottom: 0 }} onClick={() => toggleAIChat(`el ejercicio de ${leccionInfo.titulo}`)}>
                                                    <Sparkles size={16} />
                                                    <span>Necesito una pista para este ejercicio</span>
                                                </button>
                                            </div>

                                            {solucionVisible && (
                                                <div className="solucion-container theory-animate" style={{ marginTop: '2rem' }}>
                                                    <div className="section-header">
                                                        <CheckCircle size={20} style={{ color: '#10b981' }} />
                                                        <h4 style={{ color: '#10b981' }}>Solución Sugerida</h4>
                                                    </div>
                                                    <CodeSection code={contenidoActual.solucion} language="javascript" />
                                                </div>
                                            )}
                                        </div>
                                    </section>
                                </div>
                            )}

                            <div style={{ marginTop: '3rem', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '2rem' }}>
                                <button
                                    className={`btn-completar ${estaCompletada ? 'completada' : ''}`}
                                    onClick={() => completarLeccion(moduloActual, leccionActual)}
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
                            </div>
                        </div>
                    )}
                </main>
                <AIAssistant
                    isOpen={isAIChatOpen}
                    onClose={toggleAIChat}
                    contexto={aiContext}
                    modulo={modulo.titulo}
                />
                <AIFab />
            </div>
        );
    }

    return null;
};

export default AcademiaFrontendPro;

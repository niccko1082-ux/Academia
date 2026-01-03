import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Target, CheckCircle, Code, Zap, Sparkles } from 'lucide-react';
import { modulos } from '../data/modulos';
import { proyectos } from '../data/recursos-aprendizaje';
import { Header, CodeSection, AIFab, PageLayout } from '../components/ui';
import AIAssistant from '../components/AIAssistant';

/**
 * Vista del proyecto práctico de un módulo
 */
const ProjectView = () => {
    const { moduloId } = useParams();
    const [isAIChatOpen, setIsAIChatOpen] = useState(false);
    const [aiContext, setAiContext] = useState('');

    const modulo = modulos.find(m => m.id === moduloId);
    const proyecto = proyectos[moduloId];

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

    if (!proyecto) {
        return (
            <PageLayout>
                <Header showBack backTo={`/modulo/${moduloId}`} backLabel="Volver a lecciones" />
                <div className="quiz-view" style={{ textAlign: 'center', padding: '5rem' }}>
                    <Target size={48} style={{ color: '#71717a', marginBottom: '1rem' }} />
                    <h3>Contenido en construcción</h3>
                    <p>El proyecto para este módulo estará disponible muy pronto.</p>
                </div>
            </PageLayout>
        );
    }

    const toggleAIChat = (context = '') => {
        setAiContext(context);
        setIsAIChatOpen(prev => !prev);
    };

    return (
        <PageLayout>
            <Header showBack backTo={`/modulo/${moduloId}`} backLabel="Volver a lecciones" />

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
                        <CodeSection
                            code={proyecto.codigo}
                            language={moduloId === 'bootstrap' ? 'html' : 'javascript'}
                        />
                        <button
                            className="ai-help-btn"
                            onClick={() => toggleAIChat(`logica para el proyecto "${proyecto.titulo}"`)}
                        >
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
            <AIFab onClick={() => toggleAIChat(`proyecto de ${modulo.titulo}`)} />
        </PageLayout>
    );
};

export default ProjectView;

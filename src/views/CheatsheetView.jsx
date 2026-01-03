import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ClipboardList, Sparkles } from 'lucide-react';
import { modulos } from '../data/modulos';
import { cheatsheets } from '../data/recursos-aprendizaje';
import { Header, AIFab, PageLayout } from '../components/ui';
import AIAssistant from '../components/AIAssistant';

/**
 * Vista del cheatsheet de un módulo
 */
const CheatsheetView = () => {
    const { moduloId } = useParams();
    const [isAIChatOpen, setIsAIChatOpen] = useState(false);
    const [aiContext, setAiContext] = useState('');

    const modulo = modulos.find(m => m.id === moduloId);
    const cheatsheet = cheatsheets[moduloId];

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

    if (!cheatsheet) {
        return (
            <PageLayout>
                <Header showBack backTo={`/modulo/${moduloId}`} backLabel="Volver a lecciones" />
                <div className="quiz-view" style={{ textAlign: 'center', padding: '5rem' }}>
                    <ClipboardList size={48} style={{ color: '#71717a', marginBottom: '1rem' }} />
                    <h3>Contenido en construcción</h3>
                    <p>La guía rápida para este módulo estará disponible pronto.</p>
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

            <main className="cheatsheet-view">
                <div className="cheatsheet-hero">
                    <ClipboardList size={40} />
                    <h1>{cheatsheet.titulo}</h1>
                    <p>Referencia rápida de comandos y sintaxis</p>
                    <button
                        className="ai-help-btn"
                        style={{ margin: '1rem auto' }}
                        onClick={() => toggleAIChat(`resumen y sintaxis de ${modulo.titulo}`)}
                    >
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
            <AIFab onClick={() => toggleAIChat(`cheatsheet de ${modulo.titulo}`)} />
        </PageLayout>
    );
};

export default CheatsheetView;

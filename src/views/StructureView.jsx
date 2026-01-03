import { useState } from 'react';
import { FolderTree, FileCode, Lightbulb, Sparkles } from 'lucide-react';
import { estructuraArchivos } from '../data/recursos-aprendizaje';
import { Header, CodeSection, AIFab, PageLayout } from '../components/ui';
import AIAssistant from '../components/AIAssistant';

/**
 * Vista de estructura de archivos profesional
 */
const StructureView = () => {
    const [isAIChatOpen, setIsAIChatOpen] = useState(false);
    const [aiContext, setAiContext] = useState('');

    const toggleAIChat = (context = '') => {
        setAiContext(context);
        setIsAIChatOpen(prev => !prev);
    };

    return (
        <PageLayout>
            <Header showBack backTo="/" backLabel="Volver a módulos" />

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
                        <button
                            className="ai-help-btn"
                            onClick={() => toggleAIChat('estructura de archivos profesionales')}
                        >
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
            <AIFab onClick={() => toggleAIChat('estructura de archivos')} />
        </PageLayout>
    );
};

export default StructureView;

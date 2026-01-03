import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, FolderTree } from 'lucide-react';
import { modulos } from '../data/modulos';
import { Header, ProgressSection, ModuleCard, AIFab, PageLayout } from '../components/ui';
import AIAssistant from '../components/AIAssistant';

/**
 * Vista principal - Lista de módulos
 */
const ModulesView = () => {
    const navigate = useNavigate();
    const [isAIChatOpen, setIsAIChatOpen] = useState(false);
    const [aiContext, setAiContext] = useState('');

    const toggleAIChat = (context = '') => {
        setAiContext(context);
        setIsAIChatOpen(prev => !prev);
    };

    return (
        <PageLayout>
            <Header />

            <ProgressSection />

            <main className="modulos-grid">
                <div className="section-header-flex">
                    <h2 className="section-title">
                        <BookOpen size={24} />
                        Módulos de Aprendizaje
                    </h2>

                    <div className="quick-actions">
                        <button className="action-btn-secondary" onClick={() => navigate('/estructura')}>
                            <FolderTree size={18} />
                            Estructura Pro
                        </button>
                    </div>
                </div>

                <div className="modulos-container">
                    {modulos.map((modulo, index) => (
                        <ModuleCard
                            key={modulo.id}
                            modulo={modulo}
                            index={index}
                            onClick={() => navigate(`/modulo/${modulo.id}`)}
                        />
                    ))}
                </div>
            </main>

            <footer className="academia-footer">
                <p>🎯 Completa todos los módulos para convertirte en Frontend Developer</p>
            </footer>

            <AIAssistant
                isOpen={isAIChatOpen}
                onClose={toggleAIChat}
                contexto={aiContext}
                modulo={null}
            />
            <AIFab onClick={() => toggleAIChat('asistencia general')} />
        </PageLayout>
    );
};

export default ModulesView;

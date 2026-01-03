import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Brain, Sparkles } from 'lucide-react';
import { modulos } from '../data/modulos';
import { quizzes } from '../data/recursos-aprendizaje';
import { useProgress } from '../context/ProgressContext';
import { Header, AIFab, PageLayout } from '../components/ui';
import Quiz from '../components/Quiz';
import AIAssistant from '../components/AIAssistant';

/**
 * Vista del quiz de un módulo
 */
const QuizView = () => {
    const { moduloId } = useParams();
    const { onQuizComplete } = useProgress();
    const [isAIChatOpen, setIsAIChatOpen] = useState(false);
    const [aiContext, setAiContext] = useState('');

    const modulo = modulos.find(m => m.id === moduloId);
    const quizPreguntas = quizzes[moduloId];

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

    const toggleAIChat = (context = '') => {
        setAiContext(context);
        setIsAIChatOpen(prev => !prev);
    };

    return (
        <PageLayout>
            <Header showBack backTo={`/modulo/${moduloId}`} backLabel="Volver a lecciones" />

            <main className="quiz-view">
                <div className="quiz-hero">
                    <Brain size={40} />
                    <h1>Quiz: {modulo.titulo}</h1>
                    <p>Demuestra tus conocimientos</p>
                    <button
                        className="ai-help-btn"
                        style={{ margin: '1rem auto' }}
                        onClick={() => toggleAIChat(`preparación para el quiz de ${modulo.titulo}`)}
                    >
                        <Sparkles size={16} />
                        <span>Mentor, ¿algún consejo antes de empezar?</span>
                    </button>
                </div>

                <Quiz
                    preguntas={quizPreguntas}
                    moduloNombre={modulo.titulo}
                    onComplete={(porcentaje) => onQuizComplete(moduloId, porcentaje)}
                />
            </main>

            <AIAssistant
                isOpen={isAIChatOpen}
                onClose={toggleAIChat}
                contexto={aiContext}
                modulo={modulo.titulo}
            />
            <AIFab onClick={() => toggleAIChat(`quiz de ${modulo.titulo}`)} />
        </PageLayout>
    );
};

export default QuizView;

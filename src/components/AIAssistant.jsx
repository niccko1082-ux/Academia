import { useState, useEffect, useRef } from 'react';
import { Send, Bot, User, X, Sparkles, MessageSquare } from 'lucide-react';

const AIAssistant = ({ contexto, modulo, isOpen, onClose }) => {
    const [messages, setMessages] = useState([
        {
            role: 'assistant',
            content: `¡Hola! Soy tu Mentor IA. Estoy aquí para ayudarte a entender ${modulo || 'este tema'} de forma sencilla. ¿Tienes alguna duda sobre la teoría o el ejercicio?`
        }
    ]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    const generateResponse = (userQuery) => {
        setIsTyping(true);

        // Simulación de "IA" que responde según el contexto
        // En una app real, esto llamaría a una API como Gemini o ChatGPT
        setTimeout(() => {
            let response = "";
            const query = userQuery.toLowerCase();

            if (query.includes("hola") || query.includes("buenos días")) {
                response = "¡Hola! ¿En qué puedo ayudarte hoy con tu aprendizaje de frontend?";
            } else if (query.includes("explic") || query.includes("entiendo") || query.includes("que es") || query.includes("qué es")) {
                response = `Claro, te explico de forma sencilla. ${contexto ? `Sobre "${contexto}", lo más importante que debes recordar es que sirve para facilitar el desarrollo y hacer nuestro código más eficiente.` : "Lo que estamos viendo es fundamental porque permite que las páginas web sean interactivas y se vean bien en cualquier dispositivo."} ¿Hay alguna parte específica que te confunda?`;
            } else if (query.includes("ejercicio") || query.includes("ayuda")) {
                response = "¡Por supuesto! Para el ejercicio, te recomiendo descomponer el problema en pasos pequeños. Primero identifica qué elementos necesitas y luego aplica la lógica que vimos en la teoría. ¡Tú puedes!";
            } else if (query.includes("gracias")) {
                response = "¡De nada! Es un gusto ayudarte. ¿Tienes alguna otra pregunta?";
            } else {
                response = "Esa es una excelente pregunta. Para explicártelo de la manera más simple: piensa en ello como una herramienta en tu caja de herramientas de desarrollador. Cada una tiene su función específica para construir cosas asombrosas. ¿Quieres que profundicemos en algún detalle?";
            }

            setMessages(prev => [...prev, { role: 'assistant', content: response }]);
            setIsTyping(false);
        }, 1500);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!input.trim() || isTyping) return;

        const userMessage = { role: 'user', content: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        generateResponse(input);
    };

    if (!isOpen) return null;

    return (
        <div className="ai-chat-window">
            <div className="ai-chat-header">
                <div className="ai-header-info">
                    <div className="ai-avatar">
                        <Bot size={20} />
                        <div className="ai-status"></div>
                    </div>
                    <div>
                        <h4>Mentor IA</h4>
                        <span>En línea</span>
                    </div>
                </div>
                <button className="ai-close-btn" onClick={onClose}>
                    <X size={20} />
                </button>
            </div>

            <div className="ai-messages-container">
                {messages.map((msg, index) => (
                    <div key={index} className={`ai-message ${msg.role}`}>
                        <div className="message-icon">
                            {msg.role === 'assistant' ? <Bot size={14} /> : <User size={14} />}
                        </div>
                        <div className="message-content">
                            {msg.content}
                        </div>
                    </div>
                ))}
                {isTyping && (
                    <div className="ai-message assistant typing">
                        <div className="message-icon"><Bot size={14} /></div>
                        <div className="message-content">
                            <div className="typing-dots">
                                <span></span><span></span><span></span>
                            </div>
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            <form className="ai-input-area" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Escribe tu duda aquí..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    disabled={isTyping}
                />
                <button type="submit" disabled={!input.trim() || isTyping}>
                    <Send size={18} />
                </button>
            </form>

            <div className="ai-footer-note">
                <Sparkles size={12} />
                <span>Explicaciones optimizadas para fácil aprendizaje</span>
            </div>
        </div>
    );
};

export default AIAssistant;

import { Bot } from 'lucide-react';

/**
 * Botón flotante para abrir el asistente IA
 * @param {Object} props
 * @param {function} props.onClick - Callback al hacer click
 */
const AIFab = ({ onClick }) => {
    return (
        <button className="ai-fab" onClick={onClick}>
            <div className="ai-fab-badge">Mentor</div>
            <Bot size={28} />
        </button>
    );
};

export default AIFab;

import { useState } from 'react';
import { ChevronDown, ChevronRight, Info, AlertTriangle, Lightbulb, Zap } from 'lucide-react';

/**
 * Componente mejorado para renderizar contenido educativo con formato rico
 * - Resaltado de sintaxis inline
 * - Secciones colapsables
 * - Tarjetas de información
 * - Mejor tipografía
 */

// Función para resaltar código inline
const highlightInlineCode = (text) => {
    if (!text) return '';

    // Patrón para detectar código inline entre backticks o patrones de código
    const codePatterns = [
        // Backticks explícitos
        { regex: /`([^`]+)`/g, type: 'code' },
        // Palabras clave de JS
        { regex: /\b(const|let|var|function|return|if|else|for|while|true|false|null|undefined|new|this|class|import|export|from|async|await)\b/g, type: 'keyword' },
        // Funciones comunes
        { regex: /\b(console\.log|document\.querySelector|document\.querySelectorAll|addEventListener|getElementById|createElement|appendChild|innerHTML|textContent|classList|style|forEach|map|filter|reduce|find|push|pop|length)\b/g, type: 'function' },
        // Strings entre comillas
        { regex: /"[^"]*"|'[^']*'/g, type: 'string' },
        // Números
        { regex: /\b(\d+(\.\d+)?)\b/g, type: 'number' },
    ];

    let result = text;

    // Solo resaltamos código entre backticks para evitar falsos positivos en texto normal
    result = result.replace(/`([^`]+)`/g, '<code class="inline-code">$1</code>');

    // Resaltar patrones específicos de código (cuando están en contexto de código)
    result = result.replace(/&lt;(\/?[a-z][a-z0-9]*)\b([^&]*?)&gt;/gi, '<span class="code-tag">&lt;$1$2&gt;</span>');

    return result;
};

// Componente para sección colapsable
const CollapsibleSection = ({ title, icon: Icon, children, defaultOpen = true, accentColor = '#8b5cf6' }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <div className="collapsible-section" style={{ '--accent-color': accentColor }}>
            <button
                className="collapsible-header"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
            >
                <div className="collapsible-title">
                    {Icon && <Icon size={18} style={{ color: accentColor }} />}
                    <span>{title}</span>
                </div>
                {isOpen ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
            </button>
            {isOpen && (
                <div className="collapsible-content animate-slide-down">
                    {children}
                </div>
            )}
        </div>
    );
};

// Componente para tarjeta de información
const InfoCard = ({ type = 'info', children }) => {
    const configs = {
        info: { icon: Info, color: '#3b82f6', bg: 'rgba(59, 130, 246, 0.1)', label: 'Información' },
        tip: { icon: Lightbulb, color: '#10b981', bg: 'rgba(16, 185, 129, 0.1)', label: 'Consejo' },
        warning: { icon: AlertTriangle, color: '#f59e0b', bg: 'rgba(245, 158, 11, 0.1)', label: 'Importante' },
        highlight: { icon: Zap, color: '#8b5cf6', bg: 'rgba(139, 92, 246, 0.1)', label: 'Destacado' },
    };

    const config = configs[type] || configs.info;
    const Icon = config.icon;

    return (
        <div className="info-card" style={{ borderLeftColor: config.color, backgroundColor: config.bg }}>
            <div className="info-card-header">
                <Icon size={16} style={{ color: config.color }} />
                <span style={{ color: config.color, fontWeight: 600 }}>{config.label}</span>
            </div>
            <div className="info-card-content">
                {children}
            </div>
        </div>
    );
};

// Parsear y renderizar contenido con formato rico
const parseContentBlock = (block, index) => {
    const lines = block.split('\n');
    const firstLine = lines[0] || '';

    // Detectar tipo de bloque por emojis o marcadores
    const isHighlightBox = firstLine.match(/^[📦🎯💡⚠️🤔📋📝🔧🎨📐📱🔍🖱️⌨️🔄🗑️✨🚀🛡️]/);
    const isNumberedSection = firstLine.match(/^[1️⃣2️⃣3️⃣4️⃣5️⃣]/);
    const isWarning = firstLine.includes('⚠️') || firstLine.toLowerCase().includes('importante');
    const isTip = firstLine.includes('💡');
    const isExample = firstLine.includes('Ejemplo') || firstLine.includes('EJEMPLO');

    // Procesar lista con bullets
    const hasBullets = lines.some(line => line.trim().startsWith('•') || line.trim().startsWith('-'));

    if (isHighlightBox) {
        const title = firstLine;
        const content = lines.slice(1).filter(l => l.trim());

        // Determinar tipo de tarjeta
        let cardType = 'highlight';
        if (isWarning) cardType = 'warning';
        else if (isTip) cardType = 'tip';
        else if (firstLine.includes('🤔') || firstLine.includes('?')) cardType = 'info';

        return (
            <div key={index} className="theory-block formatted-section">
                <h3 className="section-title" dangerouslySetInnerHTML={{ __html: highlightInlineCode(title) }} />
                {hasBullets ? (
                    <ul className="formatted-list">
                        {content.map((line, j) => {
                            const cleanLine = line.replace(/^[•\-\s]+/, '').trim();
                            if (!cleanLine) return null;
                            return (
                                <li key={j} className="formatted-list-item">
                                    <span
                                        className="list-text"
                                        dangerouslySetInnerHTML={{ __html: highlightInlineCode(cleanLine) }}
                                    />
                                </li>
                            );
                        })}
                    </ul>
                ) : (
                    <div className="section-text">
                        {content.map((line, j) => (
                            <p
                                key={j}
                                dangerouslySetInnerHTML={{ __html: highlightInlineCode(line) }}
                                style={{ marginBottom: '0.5rem' }}
                            />
                        ))}
                    </div>
                )}
            </div>
        );
    }

    // Bloque normal de párrafo
    return (
        <div key={index} className="theory-block paragraph-block">
            {lines.map((line, j) => {
                if (!line.trim()) return <br key={j} />;
                return (
                    <p
                        key={j}
                        className="theory-paragraph"
                        dangerouslySetInnerHTML={{ __html: highlightInlineCode(line) }}
                    />
                );
            })}
        </div>
    );
};

const FormattedText = ({ text }) => {
    if (!text) return null;

    // Dividir por bloques (doble salto de línea)
    const blocks = text.split('\n\n').filter(b => b.trim());

    return (
        <div className="formatted-content">
            {blocks.map((block, i) => parseContentBlock(block, i))}
        </div>
    );
};

export { CollapsibleSection, InfoCard };
export default FormattedText;

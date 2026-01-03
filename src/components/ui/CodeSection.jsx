import { useState } from 'react';
import { CheckCircle, ClipboardList } from 'lucide-react';

/**
 * Bloque de código con funcionalidad de copiar
 * @param {Object} props
 * @param {string} props.code - Código a mostrar
 * @param {string} props.language - Lenguaje para mostrar en header
 * @param {string} props.title - Título opcional
 */
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

export default CodeSection;

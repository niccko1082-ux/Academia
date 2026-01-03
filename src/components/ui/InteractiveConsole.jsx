import { useState, useRef, useEffect } from 'react';
import { Play, RotateCcw, CheckCircle, XCircle, Terminal, Trash2 } from 'lucide-react';

/**
 * Consola interactiva para ejecutar codigo JavaScript
 * Permite escribir, ejecutar y ver resultados en tiempo real
 */
const InteractiveConsole = ({
    initialCode = '',
    expectedOutput = null,
    onSuccess = null,
    placeholder = '// Escribe tu codigo aqui...'
}) => {
    const [code, setCode] = useState(initialCode);
    const [output, setOutput] = useState([]);
    const [isRunning, setIsRunning] = useState(false);
    const [status, setStatus] = useState(null); // 'success' | 'error' | null
    const outputRef = useRef(null);

    // Scroll al final cuando hay nuevo output
    useEffect(() => {
        if (outputRef.current) {
            outputRef.current.scrollTop = outputRef.current.scrollHeight;
        }
    }, [output]);

    // Funcion segura para ejecutar codigo
    const executeCode = () => {
        setIsRunning(true);
        setOutput([]);
        setStatus(null);

        const logs = [];

        // Crear un console.log personalizado para capturar salida
        const customConsole = {
            log: (...args) => {
                const message = args.map(arg => {
                    if (typeof arg === 'object') {
                        try {
                            return JSON.stringify(arg, null, 2);
                        } catch {
                            return String(arg);
                        }
                    }
                    return String(arg);
                }).join(' ');
                logs.push({ type: 'log', message });
            },
            error: (...args) => {
                logs.push({ type: 'error', message: args.join(' ') });
            },
            warn: (...args) => {
                logs.push({ type: 'warn', message: args.join(' ') });
            },
            info: (...args) => {
                logs.push({ type: 'info', message: args.join(' ') });
            }
        };

        try {
            // Crear funcion con el codigo del usuario
            // eslint-disable-next-line no-new-func
            const userFunction = new Function('console', code);
            userFunction(customConsole);

            setOutput(logs);

            // Verificar si el output coincide con lo esperado
            if (expectedOutput) {
                const outputText = logs.map(l => l.message).join('\n');
                if (outputText.includes(expectedOutput)) {
                    setStatus('success');
                    if (onSuccess) onSuccess();
                }
            } else if (logs.length > 0 && !logs.some(l => l.type === 'error')) {
                setStatus('success');
                if (onSuccess) onSuccess();
            }
        } catch (error) {
            logs.push({ type: 'error', message: `Error: ${error.message}` });
            setOutput(logs);
            setStatus('error');
        }

        setIsRunning(false);
    };

    const clearOutput = () => {
        setOutput([]);
        setStatus(null);
    };

    const resetCode = () => {
        setCode(initialCode);
        setOutput([]);
        setStatus(null);
    };

    const handleKeyDown = (e) => {
        // Ctrl+Enter para ejecutar
        if (e.ctrlKey && e.key === 'Enter') {
            e.preventDefault();
            executeCode();
        }
        // Tab para indentar
        if (e.key === 'Tab') {
            e.preventDefault();
            const start = e.target.selectionStart;
            const end = e.target.selectionEnd;
            const newCode = code.substring(0, start) + '    ' + code.substring(end);
            setCode(newCode);
            // Mover cursor despues del tab
            setTimeout(() => {
                e.target.selectionStart = e.target.selectionEnd = start + 4;
            }, 0);
        }
    };

    return (
        <div className="interactive-console">
            {/* Editor de codigo */}
            <div className="console-editor">
                <div className="console-editor-header">
                    <div className="console-editor-title">
                        <Terminal size={16} />
                        <span>Editor de Codigo</span>
                    </div>
                    <div className="console-editor-actions">
                        <button
                            className="console-btn console-btn-reset"
                            onClick={resetCode}
                            title="Reiniciar codigo"
                        >
                            <RotateCcw size={14} />
                        </button>
                    </div>
                </div>
                <textarea
                    className="console-textarea"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder={placeholder}
                    spellCheck={false}
                />
                <div className="console-editor-footer">
                    <span className="console-hint">Ctrl + Enter para ejecutar</span>
                    <button
                        className={`console-btn console-btn-run ${isRunning ? 'running' : ''}`}
                        onClick={executeCode}
                        disabled={isRunning}
                    >
                        <Play size={16} />
                        <span>{isRunning ? 'Ejecutando...' : 'Ejecutar'}</span>
                    </button>
                </div>
            </div>

            {/* Salida de consola */}
            <div className={`console-output ${status ? `status-${status}` : ''}`}>
                <div className="console-output-header">
                    <div className="console-output-title">
                        {status === 'success' && <CheckCircle size={16} className="status-icon success" />}
                        {status === 'error' && <XCircle size={16} className="status-icon error" />}
                        <span>Consola</span>
                    </div>
                    <button
                        className="console-btn console-btn-clear"
                        onClick={clearOutput}
                        title="Limpiar consola"
                    >
                        <Trash2 size={14} />
                    </button>
                </div>
                <div className="console-output-body" ref={outputRef}>
                    {output.length === 0 ? (
                        <div className="console-empty">
                            Los resultados apareceran aqui...
                        </div>
                    ) : (
                        output.map((line, i) => (
                            <div key={i} className={`console-line console-${line.type}`}>
                                <span className="console-prefix">{'>'}</span>
                                <pre className="console-message">{line.message}</pre>
                            </div>
                        ))
                    )}
                </div>
                {status === 'success' && (
                    <div className="console-success-banner">
                        <CheckCircle size={18} />
                        <span>Codigo ejecutado correctamente</span>
                    </div>
                )}
                {status === 'error' && (
                    <div className="console-error-banner">
                        <XCircle size={18} />
                        <span>Hay errores en tu codigo. Revisa e intenta de nuevo.</span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default InteractiveConsole;

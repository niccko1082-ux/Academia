import { useState, useRef, useEffect } from 'react';
import { Play, RotateCcw, CheckCircle, XCircle, Terminal, Trash2, Lightbulb, HelpCircle } from 'lucide-react';

/**
 * Consola interactiva para ejecutar codigo JavaScript
 * Permite escribir, ejecutar y ver resultados en tiempo real
 * Incluye validacion automatica y pistas para principiantes
 */
const InteractiveConsole = ({
    initialCode = '',
    expectedOutput = null,
    hints = [],
    onSuccess = null,
    placeholder = '// Escribe tu codigo aqui...',
    exerciseTitle = 'Ejercicio'
}) => {
    const [code, setCode] = useState(initialCode);
    const [output, setOutput] = useState([]);
    const [isRunning, setIsRunning] = useState(false);
    const [status, setStatus] = useState(null); // 'success' | 'error' | 'incorrect' | null
    const [attempts, setAttempts] = useState(0);
    const [showHint, setShowHint] = useState(false);
    const [currentHint, setCurrentHint] = useState(0);
    const [validationMessage, setValidationMessage] = useState('');
    const outputRef = useRef(null);

    // Scroll al final cuando hay nuevo output
    useEffect(() => {
        if (outputRef.current) {
            outputRef.current.scrollTop = outputRef.current.scrollHeight;
        }
    }, [output]);

    // Reset hint cuando cambia el codigo
    useEffect(() => {
        setCode(initialCode);
        setOutput([]);
        setStatus(null);
        setAttempts(0);
        setShowHint(false);
        setCurrentHint(0);
    }, [initialCode]);

    // Validar la salida del usuario
    const validateOutput = (userOutput, expected) => {
        if (!expected) return { valid: true, message: '' };

        // Normalizar para comparacion (quitar espacios extras, convertir a minusculas para comparacion flexible)
        const normalizedOutput = userOutput.trim().toLowerCase();
        const normalizedExpected = expected.trim().toLowerCase();

        // Verificar si la salida contiene lo esperado
        if (normalizedOutput.includes(normalizedExpected)) {
            return { valid: true, message: 'Excelente! Tu codigo es correcto.' };
        }

        // Verificar si al menos hay algo de output
        if (userOutput.length > 0) {
            return {
                valid: false,
                message: 'Casi! El resultado no es exactamente lo esperado. Revisa tu codigo.'
            };
        }

        return {
            valid: false,
            message: 'Tu codigo no produjo ningun resultado. Asegurate de usar console.log()'
        };
    };

    // Funcion segura para ejecutar codigo
    const executeCode = () => {
        setIsRunning(true);
        setOutput([]);
        setStatus(null);
        setValidationMessage('');
        setAttempts(prev => prev + 1);

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

            // Validar si hay expectedOutput
            if (expectedOutput) {
                const outputText = logs.map(l => l.message).join('\n');
                const validation = validateOutput(outputText, expectedOutput);

                if (validation.valid) {
                    setStatus('success');
                    setValidationMessage(validation.message);
                    if (onSuccess) onSuccess();
                } else {
                    setStatus('incorrect');
                    setValidationMessage(validation.message);
                    // Mostrar pista automaticamente despues de 2 intentos
                    if (attempts >= 1 && hints.length > 0) {
                        setShowHint(true);
                    }
                }
            } else if (logs.length > 0 && !logs.some(l => l.type === 'error')) {
                setStatus('success');
                setValidationMessage('Codigo ejecutado correctamente!');
                if (onSuccess) onSuccess();
            }
        } catch (error) {
            logs.push({ type: 'error', message: `Error: ${error.message}` });
            setOutput(logs);
            setStatus('error');
            setValidationMessage(getErrorHelp(error.message));
        }

        setIsRunning(false);
    };

    // Ayuda contextual para errores comunes
    const getErrorHelp = (errorMessage) => {
        if (errorMessage.includes('is not defined')) {
            const variable = errorMessage.split(' ')[0];
            return `La variable "${variable}" no existe. Asegurate de haberla declarado con const o let.`;
        }
        if (errorMessage.includes('Unexpected token')) {
            return 'Hay un error de sintaxis. Revisa que no falten comillas, parentesis o punto y coma.';
        }
        if (errorMessage.includes('Unexpected end of input')) {
            return 'El codigo esta incompleto. Revisa que hayas cerrado todas las llaves {} y parentesis ().';
        }
        if (errorMessage.includes('is not a function')) {
            return 'Estas intentando llamar algo que no es una funcion. Revisa el nombre.';
        }
        return 'Hay un error en tu codigo. Revisa la sintaxis cuidadosamente.';
    };

    const clearOutput = () => {
        setOutput([]);
        setStatus(null);
        setValidationMessage('');
    };

    const resetCode = () => {
        setCode(initialCode);
        setOutput([]);
        setStatus(null);
        setAttempts(0);
        setShowHint(false);
        setCurrentHint(0);
        setValidationMessage('');
    };

    const showNextHint = () => {
        if (currentHint < hints.length - 1) {
            setCurrentHint(prev => prev + 1);
        }
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
                        {status === 'incorrect' && <HelpCircle size={16} className="status-icon warning" />}
                        <span>Consola</span>
                        {attempts > 0 && <span className="attempt-counter">Intento #{attempts}</span>}
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

                {/* Banner de exito */}
                {status === 'success' && (
                    <div className="console-success-banner">
                        <CheckCircle size={18} />
                        <span>{validationMessage || 'Codigo ejecutado correctamente!'}</span>
                    </div>
                )}

                {/* Banner de error */}
                {status === 'error' && (
                    <div className="console-error-banner">
                        <XCircle size={18} />
                        <span>{validationMessage || 'Hay un error en tu codigo.'}</span>
                    </div>
                )}

                {/* Banner de casi correcto */}
                {status === 'incorrect' && (
                    <div className="console-warning-banner">
                        <HelpCircle size={18} />
                        <span>{validationMessage}</span>
                    </div>
                )}

                {/* Sistema de pistas */}
                {showHint && hints.length > 0 && (
                    <div className="console-hints">
                        <div className="hint-header">
                            <Lightbulb size={16} />
                            <span>Pista {currentHint + 1} de {hints.length}</span>
                        </div>
                        <div className="hint-content">
                            {hints[currentHint]}
                        </div>
                        {currentHint < hints.length - 1 && (
                            <button className="hint-more-btn" onClick={showNextHint}>
                                Necesito otra pista
                            </button>
                        )}
                    </div>
                )}

                {/* Boton para pedir pista */}
                {!showHint && hints.length > 0 && status !== 'success' && attempts > 0 && (
                    <button
                        className="console-hint-btn"
                        onClick={() => setShowHint(true)}
                    >
                        <Lightbulb size={14} />
                        <span>Necesito una pista</span>
                    </button>
                )}
            </div>
        </div>
    );
};

export default InteractiveConsole;

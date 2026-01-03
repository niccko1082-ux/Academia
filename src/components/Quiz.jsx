import { useState } from 'react';
import { CheckCircle, XCircle, HelpCircle, Trophy, RotateCcw } from 'lucide-react';

const Quiz = ({ preguntas, moduloNombre, onComplete }) => {
    const [preguntaActual, setPreguntaActual] = useState(0);
    const [respuestaSeleccionada, setRespuestaSeleccionada] = useState(null);
    const [mostrarResultado, setMostrarResultado] = useState(false);
    const [respuestasCorrectas, setRespuestasCorrectas] = useState(0);
    const [quizTerminado, setQuizTerminado] = useState(false);

    if (!preguntas || preguntas.length === 0) {
        return (
            <div className="quiz-container" style={{ textAlign: 'center', padding: '3rem' }}>
                <HelpCircle size={48} style={{ color: '#71717a', marginBottom: '1rem' }} />
                <h3>No hay preguntas disponibles aún</h3>
                <p style={{ color: '#71717a' }}>Vuelve pronto, estamos preparando el contenido.</p>
            </div>
        );
    }

    const pregunta = preguntas[preguntaActual];

    const verificarRespuesta = (indice) => {
        if (mostrarResultado) return;

        setRespuestaSeleccionada(indice);
        setMostrarResultado(true);

        if (indice === pregunta.respuestaCorrecta) {
            setRespuestasCorrectas(prev => prev + 1);
        }
    };

    const siguientePregunta = () => {
        if (preguntaActual < preguntas.length - 1) {
            setPreguntaActual(prev => prev + 1);
            setRespuestaSeleccionada(null);
            setMostrarResultado(false);
        } else {
            setQuizTerminado(true);
            const porcentaje = Math.round(((respuestasCorrectas + (respuestaSeleccionada === pregunta.respuestaCorrecta ? 1 : 0)) / preguntas.length) * 100);
            if (onComplete) onComplete(porcentaje);
        }
    };

    const reiniciarQuiz = () => {
        setPreguntaActual(0);
        setRespuestaSeleccionada(null);
        setMostrarResultado(false);
        setRespuestasCorrectas(0);
        setQuizTerminado(false);
    };

    if (quizTerminado) {
        const totalCorrectas = respuestasCorrectas + (respuestaSeleccionada === pregunta.respuestaCorrecta ? 1 : 0);
        const porcentaje = Math.round((totalCorrectas / preguntas.length) * 100);
        const aprobado = porcentaje >= 60;

        return (
            <div className="quiz-resultado">
                <div className={`resultado-icon ${aprobado ? 'aprobado' : 'reprobado'}`}>
                    {aprobado ? <Trophy size={48} /> : <RotateCcw size={48} />}
                </div>
                <h2>{aprobado ? '¡Felicidades!' : 'Sigue practicando'}</h2>
                <p className="resultado-score">
                    {totalCorrectas} de {preguntas.length} correctas
                </p>
                <div className="resultado-porcentaje">
                    <span style={{ color: aprobado ? '#10b981' : '#ef4444' }}>{porcentaje}%</span>
                </div>
                <p className="resultado-mensaje">
                    {aprobado
                        ? `Has demostrado un buen dominio de ${moduloNombre}`
                        : `Repasa las lecciones de ${moduloNombre} y vuelve a intentarlo`}
                </p>
                <button className="btn-reiniciar" onClick={reiniciarQuiz}>
                    <RotateCcw size={18} />
                    Reintentar Quiz
                </button>
            </div>
        );
    }

    return (
        <div className="quiz-container">
            <div className="quiz-header">
                <span className="quiz-progreso">
                    Pregunta {preguntaActual + 1} de {preguntas.length}
                </span>
                <div className="quiz-progress-bar">
                    <div
                        className="quiz-progress-fill"
                        style={{ width: `${((preguntaActual + 1) / preguntas.length) * 100}%` }}
                    ></div>
                </div>
            </div>

            <div className="quiz-pregunta">
                <HelpCircle size={24} className="pregunta-icon" />
                <h3>{pregunta.pregunta}</h3>
            </div>

            <div className="quiz-opciones">
                {pregunta.opciones.map((opcion, index) => {
                    let className = 'quiz-opcion';

                    if (mostrarResultado) {
                        if (index === pregunta.respuestaCorrecta) {
                            className += ' correcta';
                        } else if (index === respuestaSeleccionada) {
                            className += ' incorrecta';
                        }
                    } else if (respuestaSeleccionada === index) {
                        className += ' seleccionada';
                    }

                    return (
                        <button
                            key={index}
                            className={className}
                            onClick={() => verificarRespuesta(index)}
                            disabled={mostrarResultado}
                        >
                            <span className="opcion-letra">{String.fromCharCode(65 + index)}</span>
                            <span className="opcion-texto">{opcion}</span>
                            {mostrarResultado && index === pregunta.respuestaCorrecta && (
                                <CheckCircle size={20} className="opcion-icon" />
                            )}
                            {mostrarResultado && index === respuestaSeleccionada && index !== pregunta.respuestaCorrecta && (
                                <XCircle size={20} className="opcion-icon" />
                            )}
                        </button>
                    );
                })}
            </div>

            {mostrarResultado && (
                <div className={`quiz-explicacion ${respuestaSeleccionada === pregunta.respuestaCorrecta ? 'correcta' : 'incorrecta'}`}>
                    <p>
                        <strong>
                            {respuestaSeleccionada === pregunta.respuestaCorrecta ? '✅ ¡Correcto!' : '❌ Incorrecto'}
                        </strong>
                    </p>
                    <p>{pregunta.explicacion}</p>
                </div>
            )}

            {mostrarResultado && (
                <button className="btn-siguiente" onClick={siguientePregunta}>
                    {preguntaActual < preguntas.length - 1 ? 'Siguiente Pregunta →' : 'Ver Resultados'}
                </button>
            )}
        </div>
    );
};

export default Quiz;

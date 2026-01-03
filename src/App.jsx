import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ProgressProvider } from './context/ProgressContext';
import {
    ModulesView,
    LessonsView,
    LessonView,
    QuizView,
    ProjectView,
    CheatsheetView,
    StructureView
} from './views';
import './styles/academy.css';

function App() {
    return (
        <ProgressProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<ModulesView />} />
                    <Route path="/modulo/:moduloId" element={<LessonsView />} />
                    <Route path="/modulo/:moduloId/leccion/:leccionId" element={<LessonView />} />
                    <Route path="/modulo/:moduloId/quiz" element={<QuizView />} />
                    <Route path="/modulo/:moduloId/proyecto" element={<ProjectView />} />
                    <Route path="/modulo/:moduloId/cheatsheet" element={<CheatsheetView />} />
                    <Route path="/estructura" element={<StructureView />} />
                </Routes>
            </BrowserRouter>
        </ProgressProvider>
    );
}

export default App;

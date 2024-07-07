import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Creator from './pages/Creator';
import Result from './pages/Result';
import MainLayout from './layouts/MainLayout';

function App() {
  return (
    <Router basename={'/random-quiz-opentdb/'}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Creator />} />
          <Route path="result" element={<Result />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App;

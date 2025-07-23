// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import ItemPage from './pages/ItemPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/items" element={<ItemPage />} />
      </Routes>
    </Router>
  );
}

export default App;

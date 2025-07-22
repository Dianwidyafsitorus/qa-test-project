import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import ItemPage from './pages/ItemPage';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/items"
          element={
            <PrivateRoute>
              <ItemPage />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

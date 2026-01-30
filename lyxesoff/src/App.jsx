import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'; // Глобальные стили (фон, шрифты)
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
// import ShopPage from './components/ShopPage'; // Потом создашь отдельно

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Navbar /> {/* Навигация всегда сверху */}
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<div style={{padding: '100px'}}><h1>Страница Магазина</h1></div>} />
          <Route path="/support" element={<div style={{padding: '100px'}}><h1>Поддержка</h1></div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
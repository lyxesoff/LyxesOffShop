// src/components/Navbar.jsx
import { Link } from 'react-router-dom';
import './Navbar.css'; // Стили навигации ОТДЕЛЬНО

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">LYXES<span>OFF</span></Link>
      <div className="nav-links">
        <Link to="/">Главная</Link>
        <Link to="/shop">Магазин</Link>
        <Link to="/support">Поддержка</Link>
      </div>
    </nav>
  );
};

export default Navbar;
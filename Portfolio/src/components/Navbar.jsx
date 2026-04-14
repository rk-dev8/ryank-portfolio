import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          Ryan Kurtz Dev
        </div>
        <ul className="nav-menu">
          <li className="nav-item">
            Welcome
          </li>
          <li className="nav-item">
            About me
          </li>
          <li className="nav-item">
            Dev
          </li>
          <li className="nav-item">
            Education
          </li>
        </ul>
      </div>
    </nav>
  );
}

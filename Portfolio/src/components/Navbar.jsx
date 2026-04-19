import './Navbar.css';

const sections = [
  { label: 'Welcome', id: 'welcome' },
  { label: 'About Me', id: 'about' },
  { label: 'Dev', id: 'dev' },
  { label: 'Education', id: 'education' },
];

export default function Navbar() {
  const handleClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">Ryan Kurtz Dev</div>
      <ul className="nav-menu">
        {sections.map(({ label, id }) => (
          <li
            key={id}
            className="nav-item"
            onClick={() => handleClick(id)}
          >
            {label}
          </li>
        ))}
      </ul>
    </nav>
  );
}

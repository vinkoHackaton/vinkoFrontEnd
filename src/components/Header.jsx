import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="/images/vinko.png" alt="Logo" className="logo-img" />
      </div>
      
      <div className="icons">
        <img src="/images/IconoSobre.png" alt="Icono 1" className="icon" />
        <img src="images/IconoUsuario.png" alt="Icono 2" className="icon" />
      </div>
    </header>
  );
}
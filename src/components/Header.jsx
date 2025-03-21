import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <Link to={"/"}>
      <div className="logo">
        <img src="/images/vinko.png" alt="Logo" className="logo-img" />
      </div>
      </Link>
      
      <div className="icons">
        <img src="/images/IconoSobre.png" alt="Icono 1" className="icon" />
        <Link to={"/form"}>
          <img src="images/IconoUsuario.png" alt="Icono 2" className="icon" />
        </Link>
      </div>
    </header>
  );
}
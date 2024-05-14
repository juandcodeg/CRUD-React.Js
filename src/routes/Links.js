import { NavLink } from "react-router-dom";

function Links() {
  return (
    <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item">
        <NavLink to="/info" className="nav-link text-white">
          Inicio
        </NavLink>
      </li>
      <li>
        <NavLink to="/new" className="nav-link text-white">
          Añadir información
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" className="nav-link text-white">
          Contacto
        </NavLink>
      </li>
    </ul>
  );
}

export default Links;

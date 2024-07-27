import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "font-awesome/css/font-awesome.min.css";
import * as React from "react";
import Links from "./Links.js";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  redirect,
} from "react-router-dom";
import Table from "../table.js";
import AgregaPersona from "../agregarPersona.js";
import Contact from "../contact";
import useAlmacenamientoLocal from "../hooks/localStorage.js";
import EditarDato from "../editarDato.js";

function Root() {
  const [datos, setDatos] = useAlmacenamientoLocal("datos", []);
  return (
    <Router>
      <div className="App">
        {/* Sidebar desktop */}
        <div
          className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar-desktop"
          style={{ width: "280px", height: "100vh" }}
        >
          <a
            href="/"
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
          >
            <svg className="bi pe-none me-2" width="40" height="32">
              <use href="#bootstrap" />
            </svg>
            <span className="fs-4">CRUD React.js</span>
          </a>
          <hr />
          <Links />
        </div>
        {/* React Router */}
        <div className="table-container">
          <Routes>
            <Route
              path="/info"
              element={<Table datos={datos} setDatos={setDatos} />}
            ></Route>
            <Route
              path="new/"
              element={<AgregaPersona datos={datos} setDatos={setDatos} />}
            />
            <Route path="contact/" element={<Contact />} />
            <Route
              element={<EditarDato datos={datos} setDatos={setDatos} />}
              path="/edit/:id"
            />
            <Route component={() => redirect("/")} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default Root;

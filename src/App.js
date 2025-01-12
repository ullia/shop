// import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Store from "./pages/store/store.js";

import Brand from "./pages/brand/brand.js";

import { Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import srcLogo from "./assets/images/logo.jpg";

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src={srcLogo} alt="" />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/store">
              store
            </Nav.Link>
            <Nav.Link as={Link} to="/brand">
              brand
            </Nav.Link>
            <Nav.Link as={Link} to="/event">
              event
            </Nav.Link>
            <Nav.Link as={Link} to="/cart">
              cart
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<div>main page</div>} />
        <Route path="/store" element={<Store />} />
        <Route path="/brand" element={<Brand />} />
        <Route path="/event" element={<div>ccc</div>} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </div>
  );
}

export default App;

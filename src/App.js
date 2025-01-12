import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import itemRacketData from "./services/itemRacketData.json";
import Item from "./components/item.js";

import { Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import srcLogo from "./assets/images/logo.jpg";

function App() {
  const [racketItems, setRacketItems] = useState(itemRacketData);
  const racketData = JSON.stringify(racketItems, null, 2);
  console.log(racketItems);

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img src={srcLogo} alt="" />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#store">store</Nav.Link>
            <Nav.Link href="#brand">brand</Nav.Link>
            <Nav.Link href="#event">event</Nav.Link>
            <Nav.Link href="#cart">cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="main-bg"></div>

      <Container>
        <Row>
          {itemRacketData.map((data, idx) => {
            return (
              <Col>
                <Item data={data} index={idx} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default App;

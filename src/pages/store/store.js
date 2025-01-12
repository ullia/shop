import React from "react";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import itemRacketData from "../../services/itemRacketData.json";
import Item from "../../components/item.js";
import Detail from "./detail.js";

const Store = () => {
  const [racketItems, setRacketItems] = useState(itemRacketData);
  const racketData = JSON.stringify(racketItems, null, 2);
  console.log(racketItems);

  return (
    <>
      <div className="main-bg"></div>

      <Container>
        <Row>
          {racketItems.map((data, idx) => {
            return (
              <Col>
                <Item as={Link} to="/detail" data={data} index={idx} />
              </Col>
            );
          })}
        </Row>
      </Container>

      <Link to="/detail">디테일 페이지</Link>

      <Routes>
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </>
  );
};

export default Store;

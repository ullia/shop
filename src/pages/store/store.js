import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Item from "../../components/item.js";

const Store = ({ racketItems }) => {
  return (
    <>
      <div className="main-bg"></div>

      <Container>
        <Row>
          {racketItems.map((data, idx) => {
            console.log(data.id);
            return (
              <Col key={data.id}>
                <Link to={`/detail/${data.id}`}>
                  <Item data={data} index={idx} />
                </Link>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default Store;

import "./style.css";
import { Container, Row, Col } from "react-bootstrap";
import LefColAccount from "../LeftColAccount/LeftColAccout";
import ReducedCustomFooter from "../customFooters/reducedCustomFooter/ReducedCustomFooter"

const FirstPage = () => {
  return (
    <>
      <Container>
        <Row>
          <Col
            md={3}
            className="d-flex align-items-center flex-column p-0 bg-dark"
          >
            <LefColAccount />
          </Col>
          <Col md={5} className="bg-warning  ">
            Prova
          </Col>
          <Col md={3} className="bg-danger p-0">
            <ReducedCustomFooter />
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default FirstPage;

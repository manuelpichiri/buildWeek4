import "./style.css";
import { Container, Row, Col } from "react-bootstrap";
import LefColAccount from "../LeftColAccount/LeftColAccout";
import MainPage from "../mainPage/MainPage";
import ReducedCustomFooter from "../customFooters/reducedCustomFooter/ReducedCustomFooter"
import CustomNews from "../customNews/CustomNews";
import Advertise from "../advertise/Advertise";
import MessageBox from "../messages/MessageBox";


const FirstPage = () => {
  return (
    <>
      <Container>
        <Row className="g-5">
          <Col
            md={3} lg={3}
            className="d-flex align-items-center flex-column p-0 bg-dark"
          >
            <LefColAccount />
          </Col>
          <Col md={9} lg={6} className="  ">
           <MainPage/>
          </Col>
          <Col lg={3} className="bg-danger d-none d-lg-block">
            Col
          </Col>
        </Row>
      </Container>

      <MessageBox />
    </>
  );
};
export default FirstPage;

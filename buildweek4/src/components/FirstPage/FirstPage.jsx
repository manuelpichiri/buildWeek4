import "./style.css";
import { Container, Row, Col } from "react-bootstrap";
import LefColAccount from "../LeftColAccount/LeftColAccount";
import MainPage from "../mainPage/MainPage";
import ReducedCustomFooter from "../customFooters/reducedCustomFooter/ReducedCustomFooter";
import MessageBox from "../messages/MessageBox";
import NavBarLinkedin from "../customNavbar/NavbarLinkedin";
import Advertise from "../advertise/Advertise";
import CustomNews from "../customNews/CustomNews";

const FirstPage = () => {
  return (
    <>
      <NavBarLinkedin />
      <Container>
        <Row className="g-5">
          <Col
            md={3}
            lg={3}
            className="d-flex align-items-center flex-column p-0  "
          >
            <LefColAccount />
          </Col>

          <Col md={9} lg={6}>
            <MainPage />
          </Col>
          <Col md={8} lg={3} className=" d-lg-block d-none ">
            <CustomNews />
            <Advertise />
            <ReducedCustomFooter />
          </Col>
        </Row>
      </Container>

      <MessageBox />
    </>
  );
};
export default FirstPage;

import Layout from "../layout/layout";
import MessageBox from "../messages/MessageBox";
import ExperienceSection from "../experience/ExperienceSection"
import { Col, Container, Row } from "react-bootstrap";

const ProfilePage = () => {
  return (
    <>
      <Layout>
      <Container>
        <Row>
          <Col 
          md={8} xs={12}>

          <ExperienceSection />
          </Col>

          <Col md={4} xs={12} className="bg-warning">
          
          </Col>
        </Row>
      </Container>



        


      </Layout>
      <MessageBox />
    </>
  );
};

export default ProfilePage;

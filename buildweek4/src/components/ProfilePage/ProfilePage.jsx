import Layout from "../layout/layout";
import MessageBox from "../messages/MessageBox";
import ExperienceSection from "../experience/ExperienceSection";
import { Col, Container, Row } from "react-bootstrap";
import ProfileHero from "../ProfileHero/ProfileHero";
import RightProfilePage from "../RightProfilePage/RightProfilePage";

const ProfilePage = () => {
  return (
    <>
      <Layout>
        <Container>
          <Row
            className="mt-4"
          >
            <Col md={8} xs={12}>
              <ProfileHero />
              <ExperienceSection />
            </Col>

            <Col md={4} xs={12}>
              <RightProfilePage />
            </Col>
          </Row>
        </Container>
      </Layout>
      <MessageBox />
    </>
  );
};

export default ProfilePage;

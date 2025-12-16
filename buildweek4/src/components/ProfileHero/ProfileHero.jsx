import { Container, Row, Col } from "react-bootstrap";
import { Pencil, Dot, ShieldCheck } from "lucide-react";
import { useEffect, useState } from "react";
import { getMyProfile } from "../../api/profileApi";
import "./style.css";
import ModalCustom from "../ModalCustom/ModalCustomSectionProfile";
import ModalCustomUpgradeProfile from "../ModalCustomUpgradeProfile/ModalCustomUpgradeProfile";
const ProfileHero = () => {
  const [show, setShow] = useState(false);
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);

  const fetchProfile = async () => {
    const myProfile = await getMyProfile();
    return myProfile;
  };

  const toggleUpgradeModal = () => {
    if (showUpgradeModal === true) {
      setShowUpgradeModal(false);
    } else {
      setShowUpgradeModal(true);
    }
  };

  const toggleModal = () => {
    if (show === true) {
      setShow(false);
    } else {
      setShow(true);
    }
  };
  useEffect(() => {
    fetchProfile;
    console.log(fetchProfile());
  }, []);

  console.log(show);
  return (
    <>
      <Container className="border-col bg-light ">
        <Row>
          <Col md={12} className="p-0 ">
            <div className="first-div-profile-hero">
              <div className="  ">
                <img
                  className="hero-div-page-profile"
                  src="/assets/Consigli-su-come-fare-foto-allo-spazio-qn85thdixup7eg60zpvmmsiqoe3gtbq4m60dospmi8.jpg"
                />
                <div className="div-pencil-border-bg">
                  <button className="button-pencil">
                    <Pencil size={15} color="#2678bb" />
                  </button>
                </div>
                <div className="mb-5 ">
                  <img className="image-profile" src="/assets/images.png" />
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="ms-2 align-items-center ">
          <Col md={12} lg={6} className="p-0   mt-2">
            <div className="d-flex align-items-center gap-1 text-nowrap ">
              <h3>Massimo Rossi</h3>
              <a className="div-dotted text-primary">
                {" "}
                <ShieldCheck size={17} /> Aggiunge badge di verifica
              </a>
            </div>
          </Col>
          <Col md={12} lg={6} className="p-0   mt-2">
            <div className="d-flex justify-content-end flex-wrap me-2">
              <ul>
                <li className="li-custom-point">
                  <img
                    className="custom-img-study me-1"
                    src="/assets/UniRoma3.jpg"
                  />
                  Università degli studi di Roma
                </li>
              </ul>
            </div>
          </Col>
        </Row>
        <Row className="ms-2">
          <Col md={6} lg={12} className="p-0 bg-light">
            <div className="d-flex align-items-center w-100 ">
              <p className="m-0 p-custom-profile w-100">Roma, Lazio, Italia</p>
              <Dot size={10} />
              <a className="m-0 text-primary link-decoration w-100 prova-text ">
                Informazione di contatto
              </a>
            </div>
            <div>
              <a className="link-decoration m-0 text-primary">
                20 Collegamenti
              </a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={6} lg={12}>
            <div className="d-flex gap-1">
              <button className="border-button btn">Disponibile per</button>
              <button className="border-button btn" onClick={toggleModal}>
                Aggiungi sezione del profilo
              </button>
              {show === true && (
                <ModalCustom
                  show={show}
                  toggleModal={toggleModal}
                ></ModalCustom>
              )}
              <button
                className="border-button btn"
                onClick={toggleUpgradeModal}
              >
                Migliora profilo
              </button>
              {showUpgradeModal === true && (
                <ModalCustomUpgradeProfile
                  showUpgradeModal={showUpgradeModal}
                  toggleUpgradeModal={toggleUpgradeModal}
                ></ModalCustomUpgradeProfile>
              )}
              <button className=" btn">Risorse</button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default ProfileHero;

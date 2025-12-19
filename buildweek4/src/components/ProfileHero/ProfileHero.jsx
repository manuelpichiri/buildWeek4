import { Container, Row, Col, Dropdown, DropdownItem } from "react-bootstrap";
import {
  Pencil,
  Dot,
  ShieldCheck,
  Download,
  Camera,
  Bookmark,
  CornerUpRight,
  Image,
} from "lucide-react";
import { useEffect, useState } from "react";
import { getMyProfile } from "../../api/profileApi";
import "./style.css";

import ProfileModalChange from "../profileModalChange/ProfileModalChange";
import ModalCustom from "../ModalCustom/ModalCustomSectionProfile";
import ModalCustomUpgradeProfile from "../ModalCustomUpgradeProfile/ModalCustomUpgradeProfile";
const ProfileHero = () => {
  const [show, setShow] = useState(false);
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);
  const [showProfileChanges, setShowProfileChanges] = useState(false);
  const [profileAttribute, setProfileAttribute] = useState(null);
  const [showDropDown, setShowDropDown] = useState(false);

  const fetchProfile = async () => {
    try {
      const myProfile = await getMyProfile();
      setProfileAttribute(myProfile);
    } catch (error) {
      console.log(error);
    }
  };

  const toggleDropDown = () => {
    if (showDropDown === true) {
      setShowDropDown(false);
    } else {
      setShowDropDown(true);
    }
  };

  const toggleModifyModal = () => {
    if (showProfileChanges === true) {
      setShowProfileChanges(false);
    } else {
      setShowProfileChanges(true);
    }
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
    fetchProfile();
  }, []);

  return (
    <>
      <Container className="border-col bg-white  mb-2">
        {profileAttribute && (
          <>
            <Row>
              <Col md={12} className="p-0 ">
                <div className="first-div-profile-hero">
                  <img
                    className="hero-div-page-profile"
                    src="/assets/spazio.jpg"
                  />
                  <div className="div-pencil-border-bg d-flex align-items-center justify-content-center">
                    <Dropdown className="p-0  0 dropdwon-pencil-hero-img ">
                      <Dropdown.Toggle
                        as="button"
                        className="dropdwon-pencil-hero-img w-100 d-flex justify-content-center align-items-center"
                      >
                        <button className="button-pencil d-flex align-items-center justify-content-center ">
                          <Camera />
                        </button>
                      </Dropdown.Toggle>

                      <Dropdown.Menu className="custom-dropdown-menu2">
                        <DropdownItem className="dropdown-item2">
                          <span className="span-custom-dropdown d-flex align-items-center gap-2">
                            <Image /> Modifica immagine di copertina
                          </span>
                        </DropdownItem>
                        <DropdownItem className="dropdown-item2">
                          <span className="span-custom-dropdown">
                            Servizi offerti
                          </span>
                          <p className="m-0">Metti in risalto i servizi</p>
                        </DropdownItem>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <div className="mb-3 ">
                    <div>
                      <img
                        className="image-profile"
                        src={profileAttribute.image}
                      />
                    </div>
                    <div className="d-flex justify-content-end  p-2">
                      <button
                        className="border-0 pencil-padding-button"
                        onClick={toggleModifyModal}
                      >
                        <Pencil size={20} color="#000000ff" />
                      </button>
                      {showProfileChanges && (
                        <ProfileModalChange
                          showProfileChanges={showProfileChanges}
                          toggleModifyModal={toggleModifyModal}
                        ></ProfileModalChange>
                      )}
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            <Row className="ms-2  align-items-center ">
              <Col xs={12} md={8} className="p-0   mt-2">
                <div className="d-flex align-items-center gap-1 text-nowrap ">
                  <h3 className="p-0 m-0">
                    {profileAttribute.name} {profileAttribute.surname}
                  </h3>
                  <a className="m-0 div-dotted text-primary d-flex align-items-center   ">
                    {" "}
                    <ShieldCheck size={17} />{" "}
                    <span className="d-none d-xl-block">
                      Aggiunge badge di verifica
                    </span>
                  </a>
                </div>
              </Col>
              <Col xs={5} md={5} lg={4} className="p-0 media-col mt-2">
                <div className="d-flex justify-content-end flex-wrap me-2">
                  <a className="p-0 m-0">
                    <img
                      className="custom-img-study me-1"
                      src="/assets/UniRoma3.jpg"
                    />
                    Università degli studi di Roma
                  </a>
                </div>
              </Col>
            </Row>
            <Row className="ms-2">
              <Col md={6} lg={12} className="p-0 bg-white">
                <div className="d-flex   align-items-center ">
                  <p className="m-0 p-custom-profile ">
                    {profileAttribute.area}
                  </p>
                  <Dot size={10} />
                  <a className="m-0 text-primary link-decoration   ">
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
            <Row className="ms-2 mt-2 g-2 align-items-center">
              <Col xs={12} md={6} lg="auto">
                <Dropdown className="w-100">
                  <Dropdown.Toggle
                    as="button"
                    className="dropdown-color-first w-100 d-flex justify-content-center align-items-center"
                  >
                    <span className="px-3">Disponibile per</span>
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="custom-dropdown-menu2">
                    <DropdownItem className="dropdown-item2">
                      <span className="span-custom-dropdown">
                        Selezione del personale
                      </span>
                      <p className="m-0">Attrai candidati qualificati</p>
                    </DropdownItem>
                    <DropdownItem className="dropdown-item2">
                      <span className="span-custom-dropdown">
                        Servizi offerti
                      </span>
                      <p className="m-0">Metti in risalto i servizi</p>
                    </DropdownItem>
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
              <Col xs={12} md={6} lg="auto">
                <button
                  className="paragraph-custom-color btn w-100 button-height d-flex align-items-center text-align-laptop ellipsis-text "
                  onClick={toggleModal}
                >
                  Aggiungi sezione del profilo
                </button>
                {show === true && (
                  <ModalCustom
                    show={show}
                    toggleModal={toggleModal}
                  ></ModalCustom>
                )}
              </Col>
              <Col xs={12} md={6} lg="auto">
                <button
                  className="paragraph-custom-color btn w-100 button-height d-flex align-items-center text-align-laptop "
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
              </Col>
              <Col xs={12} md={6} lg="auto">
                <Dropdown className="w-100">
                  <Dropdown.Toggle
                    as="button"
                    className="dropdown-toggle-wrapper2 w-100 d-flex justify-content-center align-items-center"
                  >
                    <span className="px-3">Risorse</span>
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="custom-dropdown-menu2">
                    <DropdownItem>
                      {" "}
                      <CornerUpRight size={16} className="me-1" /> Invia il
                      profilo
                    </DropdownItem>
                    <DropdownItem>
                      <Download size={16} className="me-1" />
                      Salva come PDF
                    </DropdownItem>
                    <DropdownItem>
                      {" "}
                      <Bookmark size={16} fill="black" className="me-1" />
                      Elementi salvati
                    </DropdownItem>
                    <DropdownItem>
                      <svg
                        className="me-3"
                        width="14"
                        height="14"
                        viewBox="0 0 256 256"
                      >
                        <g
                          transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
                          style={{
                            stroke: "none",
                            strokeWidth: 0,
                            strokeDasharray: "none",
                            strokeLinecap: "butt",
                            strokeLinejoin: "miter",
                            strokeMiterlimit: 10,
                            fill: "none",
                            fillRule: "nonzero",
                            opacity: 1,
                          }}
                        >
                          <path
                            d="M 82.236 0 H 7.764 C 3.476 0 0 3.476 0 7.764 v 74.473 C 0 86.524 3.476 90 7.764 90 h 74.473 C 86.524 90 90 86.524 90 82.236 V 7.764 C 90 3.476 86.524 0 82.236 0 z M 52.103 71.55 c -1.987 1.589 -3.641 2.763 -4.919 3.489 c -2.655 1.51 -4.825 2.307 -6.634 2.438 c -1.66 0.12 -3.037 -0.234 -4.091 -1.05 c -1.041 -0.804 -1.624 -1.974 -1.733 -3.48 c -0.32 -4.429 1.989 -15.083 7.059 -32.569 c 0.213 -0.752 0.302 -1.417 0.262 -1.975 c -0.03 -0.419 -0.157 -0.41 -0.409 -0.391 c -0.683 0.049 -1.485 0.356 -2.383 0.911 c -0.842 0.521 -2.626 2.047 -5.303 4.537 c -0.201 0.188 -0.515 0.26 -0.796 0.182 c -0.28 -0.078 -0.474 -0.289 -0.492 -0.537 c -0.218 -3.025 1.262 -5.998 3.96 -7.954 c 1.023 -0.742 2.035 -1.395 3.005 -1.941 c 3.396 -1.908 6.395 -2.967 8.914 -3.149 c 1.495 -0.108 2.699 0.098 3.579 0.613 c 0.924 0.544 1.429 1.335 1.503 2.354 c 0.049 0.683 -0.221 2.799 -3.129 13.238 c -3.463 12.482 -5.129 20.055 -4.952 22.507 c 0.026 0.353 0.14 0.625 0.352 0.831 c 0.169 0.167 0.296 0.221 0.354 0.217 c 0.458 -0.033 2.151 -0.667 7.959 -5.822 c 0.208 -0.18 0.52 -0.245 0.791 -0.169 c 0.277 0.08 0.467 0.29 0.485 0.535 C 55.679 67.056 54.446 69.674 52.103 71.55 z M 51.463 25.186 c -3.499 0.253 -6.54 -2.379 -6.792 -5.877 c -0.253 -3.499 2.379 -6.54 5.877 -6.792 c 3.499 -0.253 6.54 2.379 6.792 5.877 C 57.593 21.893 54.961 24.934 51.463 25.186 z"
                            fill="black"
                          />
                        </g>
                      </svg>
                      Attività
                    </DropdownItem>
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
            </Row>
          </>
        )}
        <Row className="mb-3 ms-2 ">
          <Col md={6} className="p-0 m-0">
            <div className="div-blue-details d-flex flex-column mt-4 ps-3 ">
              <div className="d-flex justify-content-between   ">
                <span className="p-0 m-0">Disponibile a lavorare</span>
                <Pencil size={15} color="#000000ff" fill="#0000" />
              </div>

              <p className="p-0 m-0">Ruoli di Sviluppatore di software</p>
              <a href="#" className="link-customize-blue-div p-0 m-0">
                Mostra dettagli
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default ProfileHero;

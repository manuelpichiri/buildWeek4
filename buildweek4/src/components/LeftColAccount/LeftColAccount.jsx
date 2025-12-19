import { Col, Row, Container } from "react-bootstrap";
import "./style.css";
import { Bookmark, Users, Calendar1, Newspaper } from "lucide-react";
import { getMyProfile } from "../../api/profileApi";
import { useState, useEffect } from "react";
// PICCOLA PARENTESI TUTTI GLI ANCHOR [A] SARANNO POI SOSTITUITI DAI LINK DI REACT UTILIZZATI PER LE ROOT.
const LefColAccount = () => {
  const [profileAttribute, setProfileAttribute] = useState(null);

  const fetchProfile = async () => {
    try {
      const myProfile = await getMyProfile();
      setProfileAttribute(myProfile);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchProfile();
  }, []);
  return (
    <>
      <Container fluid>
        {profileAttribute && (
          <>
            <Row>
              <Col className="reset-padding">
                <div className="bg-white mt-4 mb-2 border-general-div ">
                  <div className="w-100 div-img-custom border-div">
                    <a href="#">
                      <img
                        className="w-100 h-100 img-custom border-div"
                        src="/assets/spazio.jpg"
                      />
                    </a>
                  </div>
                  <div className="div-account-img">
                    <a href="#">
                      <img
                        className="account-img"
                        src={profileAttribute.image}
                      />
                    </a>
                  </div>
                  <div className="mt-5 ms-3 d-flex flex-column ">
                    <a className="link-custom" href="#">
                      <h3 className="m-0">
                        {profileAttribute.name} {profileAttribute.surname}
                      </h3>

                      {/* ⬆️il nome dell' account loggato va riportato qui  */}
                    </a>
                    <a href="#" className="link-custom">
                      <p className="paragraph-custom-city m-0">
                        <span className="span-custom">
                          {profileAttribute.area}
                        </span>
                      </p>
                      {/* ⬆️ il nome della città relativa al profilo loggato va riportato qui  */}
                    </a>
                    <a href="#" className="link-custom">
                      <p className="paragraph-custom-study m-0">
                        <img
                          className="custom-img-study"
                          src="/assets/UniRoma3.jpg"
                        />
                        Università degli studi di Roma
                      </p>
                      {/* ⬆️ vanno aggiunte le informazioni sulla Formazione relative al profilo loggato va riportato qui  */}
                    </a>
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col className="reset-padding">
                <div className="bg-white border-general-div mb-2 div-link-connect ">
                  <a className="link-connect ">
                    <p className="line">
                      <span className="bolder">Collegamenti</span>
                      <br />
                      <span className="span-custom">Espandi la tua rete</span>
                    </p>
                    <p className="line text-primary">
                      27{" "}
                      {/* ⬆️ qui vanno inserito il numero di collegamenti [amici] corrispondenti al profilo */}
                    </p>
                  </a>
                </div>
              </Col>
            </Row>
            <Row>
              <Col className="reset-padding">
                <div className="d-flex flex-column bg-white border-general-div premium-div mb-2">
                  <a className="link-connect flex-column  ">
                    <p className="span-custom m-0">
                      {" "}
                      Raggiungi i tuoi obiettivi con <br />
                      Premium
                    </p>
                    <div className="d-flex align-items-center">
                      <p className="paragraph-custom-study icon-p-premium m-0 ">
                        <img
                          className="premium-img"
                          src="/assets/premium.png"
                        />
                        Prova Premium per 0 EUR
                      </p>
                    </div>
                  </a>
                </div>
              </Col>
            </Row>
            <Row>
              <Col className="reset-padding">
                <div className="bg-white border-general-div p-2 mb-2 ">
                  <div>
                    <ul className="list-of-element p-0 ms-1">
                      <li className="line">
                        <a href="#">
                          <Bookmark
                            fill="#000000d6"
                            size={17}
                            className="icon-list"
                          />
                          Elementi salvati
                        </a>
                      </li>
                      <li className="line">
                        <a href="#">
                          <Users
                            fill="#000000d6"
                            size={17}
                            className="icon-list"
                          />
                          Gruppi
                        </a>
                      </li>
                      <li className="line">
                        <a href="#">
                          <Newspaper size={17} className="icon-list" />
                          Newsletter
                        </a>
                      </li>
                      <li className="line">
                        <a href="#">
                          <Calendar1 size={17} className="icon-list " />
                          Eventi
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
            </Row>
          </>
        )}
      </Container>
    </>
  );
};
export default LefColAccount;

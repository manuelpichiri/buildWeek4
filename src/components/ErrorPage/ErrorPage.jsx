import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.css";
import CustomFooter from "../customFooters/customFooter/CustomFooter";
const ErrorPage = () => {
  return (
    <>
      <main className="prova">
        <Container>
          <Row className="d-flex justify-content-between align-items-center">
            <Col md={6}>
              <div className="d-flex  mt-3">
                <img
                  className="img-div-logo"
                  src="../../../public/assets/logo-linkedin-2003-2011.png"
                />
              </div>
            </Col>
            <Col md={6}>
              <div className="d-flex justify-content-end mt-3">
                <select
                  id="globalfooter-select_language"
                  class="global-footer__language-selection-dropdown t-12 t-black--light t-bold"
                >
                  <option value="ar_AE" lang="ar-ae">
                    العربية (Arabo)
                  </option>
                  <option value="bn_IN" lang="bn-in">
                    বাংলা (Bengali)
                  </option>
                  <option value="cs_CZ" lang="cs-cz">
                    Čeština (Ceco)
                  </option>
                  <option value="da_DK" lang="da-dk">
                    Dansk (Danese)
                  </option>
                  <option value="de_DE" lang="de-de">
                    Deutsch (Tedesco)
                  </option>
                  <option value="el_GR" lang="el-gr">
                    Ελληνικά (Greco)
                  </option>
                  <option value="en_US" lang="en-us">
                    English (Inglese)
                  </option>
                  <option value="es_ES" lang="es-es">
                    Español (Spagnolo)
                  </option>
                  <option value="fa_IR" lang="fa-ir">
                    فارسی (Persiano)
                  </option>
                  <option value="fi_FI" lang="fi-fi">
                    Suomi (Finlandese)
                  </option>
                  <option value="fr_FR" lang="fr-fr">
                    Français (Francese)
                  </option>
                  <option value="hi_IN" lang="hi-in">
                    हिंदी (Hindi)
                  </option>
                  <option value="hu_HU" lang="hu-hu">
                    Magyar (Ungherese)
                  </option>
                  <option value="in_ID" lang="in-id">
                    Bahasa Indonesia (Indonesiano)
                  </option>
                  <option value="it_IT" lang="it-it">
                    Italiano (Italiano)
                  </option>
                  <option value="iw_IL" lang="iw-il">
                    עברית (Ebraico)
                  </option>
                  <option value="ja_JP" lang="ja-jp">
                    日本語 (Giapponese)
                  </option>
                  <option value="ko_KR" lang="ko-kr">
                    한국어 (Coreano)
                  </option>
                  <option value="mr_IN" lang="mr-in">
                    मराठी (Marathi)
                  </option>
                  <option value="ms_MY" lang="ms-my">
                    Bahasa Malaysia (Malese)
                  </option>
                  <option value="nl_NL" lang="nl-nl">
                    Nederlands (Olandese)
                  </option>
                  <option value="no_NO" lang="no-no">
                    Norsk (Norvegese)
                  </option>
                  <option value="pa_IN" lang="pa-in">
                    ਪੰਜਾਬੀ (Punjabi)
                  </option>
                  <option value="pl_PL" lang="pl-pl">
                    Polski (Polacco)
                  </option>
                  <option value="pt_BR" lang="pt-br">
                    Português (Portoghese)
                  </option>
                  <option value="ro_RO" lang="ro-ro">
                    Română (Rumeno)
                  </option>
                  <option value="ru_RU" lang="ru-ru">
                    Русский (Russo)
                  </option>
                  <option value="sv_SE" lang="sv-se">
                    Svenska (Svedese)
                  </option>
                  <option value="te_IN" lang="te-in">
                    తెలుగు (Telugu)
                  </option>
                  <option value="th_TH" lang="th-th">
                    ภาษาไทย (Tailandese)
                  </option>
                  <option value="tl_PH" lang="tl-ph">
                    Tagalog (Tagalog)
                  </option>
                  <option value="tr_TR" lang="tr-tr">
                    Türkçe (Turco)
                  </option>
                  <option value="uk_UA" lang="uk-ua">
                    Українська (Ucraino)
                  </option>
                  <option value="vi_VN" lang="vi-vn">
                    Tiếng Việt (Vietnamita)
                  </option>
                  <option value="zh_CN" lang="zh-cn">
                    简体中文 (Cinese (Semplificato))
                  </option>
                  <option value="zh_TW" lang="zh-tw">
                    正體中文 (Cinese (Tradizionale))
                  </option>
                </select>
              </div>
            </Col>
          </Row>
        </Container>
        <Container fluid>
          <Row className="col-custom">
            <Col className=" col-12 col-custom">
              <div className="rounded-3  center-div ">
                <div className="d-flex justify-content-center flex-column">
                  <h1 className="text-center h1-custom">Pagina non trovata</h1>

                  <p className="paragraph-description">
                    Non abbiamo trovato la pagina che stai cercando. Prova a
                    tornare alla pagina precedente o visita il nostro{" "}
                    <a href="#" className="text-primary paragraph-description">
                      Centro assistenza
                    </a>{" "}
                    per saperne di più.
                  </p>
                  <div className="d-flex justify-content-center">
                    <Link to={`/`} className="text-primary  link-custom-erorr">
                      Vai al tuo feed
                    </Link>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </main>
      <CustomFooter />
    </>
  );
};
export default ErrorPage;

import { useState } from "react";
import { Dropdown } from "react-bootstrap";
import { customFooterLinks } from "./CustomFooterData";
import './style.css';

const CustomFooter = () => {

  const [isOpenIndex, setIsOpenIndex] = useState(null);

  return (

    <footer
      className="footer-main-container"
    >
      <div
        className="d-flex flex-column flex-sm-row gap-3"
      >
        <ul
          className="custom-footer-links-list list-unstyled"
        >

          {customFooterLinks.map((link, index) => (

            <li
              key={`${link.label}${index}`}
              className="m-0"
            >

              {link.submenu ? (

                <Dropdown
                  show={isOpenIndex === index}
                  onToggle={() =>
                    setIsOpenIndex(isOpenIndex === index ? null : index)
                  }
                >
                  <Dropdown.Toggle
                    as="div"
                    className="custom-footer-link dropdown-toggle-wrapper"
                  >
                    <a
                      className="sublink-text"
                    >
                      {link.label}
                    </a>
                    <a
                      className="footer-dropdown-caret"
                    >
                      ▼
                    </a>
                  </Dropdown.Toggle>

                  <Dropdown.Menu
                    className="custom-dropdown-menu">
                    {link.submenu.map((sublink, index) => (
                      <Dropdown.Item
                        key={`${sublink.label}${index}`}
                        href={sublink.href}
                        className="custom-footer-link"
                      >
                        {sublink.label}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              ) : (

                <a
                  className="custom-footer-link custom-footer-no-dropdown-link"
                  href={link.href}
                >
                  {link.label}
                </a>
              )}

            </li>
          ))}

        </ul>
        <div
          className="custom-footer-right-section d-flex"
        >
          <div
            className="d-flex flex-column"
          >

            <div
              className="d-flex gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="black" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-question-mark-icon lucide-circle-question-mark flex-shrink-0"><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" stroke="white" /><path d="M12 17h.01" stroke="white" /></svg>
              <div
                className="custom-footer-utilities d-flex flex-column"
              >
                <h6><a href="#">Domande?</a></h6>
                <p>Visita il nostro Centro assistenza.</p>
              </div>
            </div>

            <div
              className="d-flex gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="black" stroke="black" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" className="lucide lucide-settings-icon lucide-settings flex-shrink-0"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915" /><circle cx="12" cy="12" r="3" fill="white" stroke="white" /></svg>
              <div
                className="custom-footer-utilities d-flex flex-column"
              >
                <h6><a href="#">Gestisci il tuo account e la tua privacy</a></h6>
                <p>Vai alle impostazioni</p>
              </div>
            </div>

            <div
              className="d-flex gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-half-icon lucide-shield-half flex-shrink-0"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" /><path d="M12 22V2" /><defs><clipPath id="half-clip"><rect x="12" y="0" width="12" height="24" /></clipPath></defs><path d="M20 13c0 5-3.5 7.5-7.66 8.95C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" fill="black" clipPath="url(#half-clip)" /></svg>
              <div
                className="custom-footer-utilities d-flex flex-column"
              >
                <h6><a href="#">Trasparenza sui contenuti consigliati</a></h6>
                <p>Scopri di pià sui contenuti consigliati.</p>
              </div>
            </div>

          </div>

          <div>
            <label
              className="custom-footer-select-language-label"
              htmlFor="globalfooter-select_language"
            >
              Seleziona lingua
            </label>
            <select
              className="custom-footer-select-language"
              id="globalfooter-select_language"
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
        </div>
      </div>

      <p>LinkedIn Corporation © 2025</p>

    </footer>

  );
};

export default CustomFooter;

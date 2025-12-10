import "./style.css";

// PICCOLA PARENTESI TUTTI GLI ANCHOR [A] SARANNO POI SOSTITUITI DAI LINK DI REACT UTILIZZATI PER LE ROOT.
const LefColAccount = () => {
  return (
    <>
      <div className="bg-light mt-2 mb-2 border-general-div ">
        <div className="w-100 div-img-custom border-div">
          <a>
            <img
              className="w-100 h-100 img-custom border-div"
              src="../../../public/assets/Consigli-su-come-fare-foto-allo-spazio-qn85thdixup7eg60zpvmmsiqoe3gtbq4m60dospmi8.jpg"
            />
          </a>
        </div>
        <div className="div-account-img">
          <a>
            <img
              className="account-img"
              src="../../../public/assets/images.png"
            />
          </a>
        </div>
        <div className="mt-5 ms-3 d-flex flex-column ">
          <a className="link-custom">
            <p className="paragraph-custom">Massimo Rossi</p>{" "}
            {/* ⬆️il nome dell' account loggato va riportato qui  */}
          </a>
          <a href="" className="link-custom">
            <p className="paragraph-custom-city">
              <span className="span-custom">Roma,Lazio</span>
            </p>
            {/* ⬆️ il nome della città relativa al profilo loggato va riportato qui  */}
          </a>
          <a href="" className="link-custom">
            <p className="paragraph-custom-study">
              <img
                className="custom-img-study"
                src="../../../public/assets/UniRoma3.jpg"
              />
              Università degli studi di Roma
            </p>
            {/* ⬆️ vanno aggiunte le informazioni sulla Formazione relative al profilo loggato va riportato qui  */}
          </a>
        </div>
      </div>
      <div className="bg-light border-general-div mb-2 div-link-connect ">
        <a className="link-connect ">
          <p>
            Collegamenti
            <br />
            <span>Espandi la tua rete</span>
          </p>
          <p>
            27{" "}
            {/* ⬆️ qui vanno inserito il numero di collegamenti [amici] corrispondenti al profilo */}
          </p>
        </a>
      </div>

      <div className="d-flex flex-column bg-light border-general-div p-2">
        <a className="link-connect flex-column ">
          <p>
            {" "}
            Raggiungi i tuoi obiettivi con <br />
            Premium
          </p>

          <p>
            <img />
            Prova Premium per 0 EUR
          </p>
        </a>
      </div>
    </>
  );
};
export default LefColAccount;

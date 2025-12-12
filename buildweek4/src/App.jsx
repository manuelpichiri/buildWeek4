import { useState } from "react";

import "./App.css";
import FirstPage from "./components/FirstPage/FirstPage";
import NavBarLinkedin from "./components/customNavbar/NavbarLinkedin";

function App() {
  return (
    <>
      <NavBarLinkedin />
      <FirstPage />
    </>
  );
}

export default App;

import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import FirstPage from "./components/FirstPage/FirstPage";
import NavBarLinkedin from "./components/customNavbar/NavbarLinkedin";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import ProfilePage from "./components/ProfilePage/ProfilePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<FirstPage />} />
          <Route path="/PaginaProfilo" element={<ProfilePage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

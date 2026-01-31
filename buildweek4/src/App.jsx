import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import FirstPage from "./components/FirstPage/FirstPage";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import LoginPage from "./components/loginPage/LoginPage";
import RegistrationPage from "./components/registrationPage/RegistrationPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route index path="/" element={<FirstPage />} />
          <Route path="/PaginaProfilo" element={<ProfilePage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

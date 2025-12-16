import CustomFooter from "../customFooters/customFooter/CustomFooter";
import Navbarlinkedin from "../customNavbar/NavbarLinkedin";

const Layout = ({ children }) => {
  return (
    <>
      <Navbarlinkedin />
      {children}
      <CustomFooter />
    </>
  );
};
export default Layout;

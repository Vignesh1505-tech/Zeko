import GetinTouch from "../../pages/GetinTouch/GetinTouch";
import Footer from "../Footer";
import Header from "../Header";
import PropTypes from "prop-types";

const Layout = ({ children }) => (
  <div className="flex flex-col min-h-screen overflow-hidden bg-white dark:bg-black">
    <Header />
    <main className="flex-grow ">{children}</main>
    <GetinTouch/>
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Layout;

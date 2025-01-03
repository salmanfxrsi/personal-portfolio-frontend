import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar";
import Footer from "../pages/Shared/Footer";

const MainLayouts = () => {
  return (
    <div>
      <section>
        <Navbar></Navbar>
      </section>
      <section className="min-h-[calc(100vh-156px)]">
        <Outlet></Outlet>
      </section>
      <section className="container mx-auto">
        <Footer></Footer>
      </section>
    </div>
  );
};

export default MainLayouts;

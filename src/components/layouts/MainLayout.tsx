import Navbar from "../common/Navbar";
import { Outlet } from "react-router";
import Footer from "../common/Footer";

const MainLayout = () => {
  return (
    <section className="flex flex-col min-h-screen max-w-7xl mx-auto">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </section>
  );
};

export default MainLayout;

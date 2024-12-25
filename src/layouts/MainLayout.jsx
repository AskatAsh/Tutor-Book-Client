import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "./../components/Footer";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 font-roboto">
      {/* Header section */}
      <Navbar />

      {/* Main body */}
      <main>
        <Outlet />
      </main>

      {/* Footer section */}
      <Footer />
      <ScrollRestoration />
      <Toaster />
    </div>
  );
};

export default MainLayout;

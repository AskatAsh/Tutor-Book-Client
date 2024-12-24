import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from './../components/Footer';

const MainLayout = () => {
    return (
        <div className="bg-gray-50 dark:bg-gray-900">
            {/* Header section */}
            <Navbar />

            {/* Main body */}
            <main>
                <Outlet />
            </main>

            {/* Footer section */}
            <Footer />
        </div>
    );
};

export default MainLayout;
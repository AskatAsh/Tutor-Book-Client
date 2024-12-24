import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout = () => {
    return (
        <div>
            {/* Header section */}
            <Navbar />

            {/* Main body */}
            <main className="pt-16 md:pt-20 h-96">
                <Outlet />
            </main>

            {/* Footer section */}
            <div></div>
        </div>
    );
};

export default MainLayout;
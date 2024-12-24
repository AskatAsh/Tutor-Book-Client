import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout = () => {
    return (
        <div>
            {/* Header section */}
            <Navbar />

            {/* Main body */}
            <main>
                <Outlet />
            </main>

            {/* Footer section */}
            <div></div>
        </div>
    );
};

export default MainLayout;
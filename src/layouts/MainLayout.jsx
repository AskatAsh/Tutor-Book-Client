import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
            {/* Header section */}
            <div></div>

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
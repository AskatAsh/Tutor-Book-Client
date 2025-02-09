import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./../layouts/MainLayout";
import Home from "./../pages/Home";
import AddTutorials from "./../pages/AddTutorials";
import MyTutorials from "./../pages/MyTutorials";
import UpdateTutorial from "./../pages/UpdateTutorial";
import FindTutors from "./../pages/FindTutors";
import TutorDetails from "./../pages/TutorDetails";
import Login from "./../pages/auth/Login";
import Register from "./../pages/auth/Register";
import FindCategoryTutors from "../pages/FindCategoryTutors";
import MyBookedTutors from "./../pages/MyBookedTutors";
import PrivateRoutes from "./PrivateRoutes";
import ErrorPage from "../pages/ErrorPage";
import Sitemap from "../pages/Sitemap";
import TermsOfUse from "../pages/TermsOfUse";
import Accessibility from "../pages/Accessibility";
import AboutUs from "../pages/AboutUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/addTutorials",
        element: (
          <PrivateRoutes>
            <AddTutorials />
          </PrivateRoutes>
        ),
      },
      {
        path: "/myTutorials",
        element: (
          <PrivateRoutes>
            <MyTutorials />
          </PrivateRoutes>
        ),
      },
      {
        path: "/updateTutorial/:id",
        element: (
          <PrivateRoutes>
            <UpdateTutorial />
          </PrivateRoutes>
        ),
      },
      {
        path: "/findTutors",
        element: <FindTutors />,
      },
      {
        path: "/findTutors/:category",
        element: <FindCategoryTutors />,
      },
      {
        path: "/myBookedTutor",
        element: (
          <PrivateRoutes>
            <MyBookedTutors />
          </PrivateRoutes>
        ),
      },
      {
        path: "/tutor/:details",
        element: (
          <PrivateRoutes>
            <TutorDetails />
          </PrivateRoutes>
        ),
      },
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/register",
        element: <Register />,
      },
      {
        path: "/aboutus",
        element: <AboutUs />,
      },
      {
        path: "/contactus",
        element: <AboutUs />,
      },
      {
        path: "/sitemap",
        element: <Sitemap />,
      },
      {
        path: "/terms-of-use",
        element: <TermsOfUse />,
      },
      {
        path: "/accessibility",
        element: <Accessibility />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default router;

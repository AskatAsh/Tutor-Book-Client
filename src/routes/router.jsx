import { createBrowserRouter } from "react-router-dom";
import MainLayout from './../layouts/MainLayout';
import Home from './../pages/Home';
import AddTutorials from './../pages/AddTutorials';
import MyTutorials from './../pages/MyTutorials';
import UpdateTutorial from './../pages/UpdateTutorial';
import FindTutors from './../pages/FindTutors';
import TutorDetails from './../pages/TutorDetails';
import Error from './../pages/Error';
import Login from './../pages/auth/Login';
import Register from './../pages/auth/Register';
import FindCategoryTutors from "../pages/FindCategoryTutors";
import MyBookedTutors from './../pages/MyBookedTutors';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/addTutorials',
                element: <AddTutorials />
            },
            {
                path: '/myTutorials',
                element: <MyTutorials />
            },
            {
                path: '/updateTutorial',
                element: <UpdateTutorial />
            },
            {
                path: '/findTutors',
                element: <FindTutors />
            },
            {
                path: '/findTutors/:category',
                element: <FindCategoryTutors />
            },
            {
                path: '/myBookedTutor',
                element: <MyBookedTutors />
            },
            {
                path: '/tutor/:details',
                element: <TutorDetails />
            },
            {
                path: '/auth/login',
                element: <Login />
            },
            {
                path: '/auth/register',
                element: <Register />
            }
        ]
    },
    {
        path: '*',
        element: <Error />
    }
])

export default router;
import { createBrowserRouter } from "react-router-dom";
import MainLayout from './../layouts/MainLayout';
import Home from './../pages/Home';
import AddTutorials from './../pages/AddTutorials';
import MyTutorials from './../pages/MyTutorials';
import UpdateTutorial from './../pages/UpdateTutorial';
import FindTutors from './../pages/FindTutors';
import MyBookedTutor from './../pages/MyBookedTutor';
import TutorDetails from './../pages/TutorDetails';
import Error from './../pages/Error';

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
                path: '/myBookedTutor',
                element: <MyBookedTutor />
            },
            {
                path: '/tutorDetails',
                element: <TutorDetails />
            }
        ]
    },
    {
        path: '*',
        element: <Error />
    }
])

export default router;
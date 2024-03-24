import React from 'react'
import { createBrowserRouter, RouterProvider, useParams } from 'react-router-dom'

import FrontPage from "./FrontPage"
import Landing from './Pages/Landing';

import DisplayReviews from './Pages/DisplayReviews/DisplayReviews';
import AddStudent from './Pages/AddStudent/AddStudent';
import AddReview from './Pages/AddReview/AddReview';
import DisplayStudents from './Pages/DisplayStudents/DisplayStudents';
import StudentPage from './Pages/StudentPage/StudentPage';


export default function Router()
{

    function StudentPageWrapper() {
        const { studentId } = useParams();
        return <StudentPage student={studentId} />;
    }
    function AddReviewWrapper() {
        const { studentId } = useParams();
        return <AddReview student={studentId} />;
    }

    const router = createBrowserRouter([
        {
            path: "/Front",
            element: <FrontPage />,
        },
        {
            path: "/",
            element: <Landing />,
        },
        {
            path: "/displayReview",
            element: <DisplayReviews />,
        },
        {
            path: "/addStudent",
            element: <AddStudent />,
        },
        {
            path: "/addReview/:studentId",
            element: <AddReviewWrapper />,
        },
        {
            path: "/displayStudents",
            element: <DisplayStudents />,
        },

        {
            path: "/student/:studentId",
            element: <StudentPageWrapper/>,
        },



    ]);
    return <RouterProvider router = {router} />;
}
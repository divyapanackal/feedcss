import React, { useEffect } from 'react'
import { RouterProvider, createBrowserRouter, useNavigate } from 'react-router-dom'
import EntryLayout from '../layouts/EntryLayout/EntryLayout';
import LandingLayout from '../layouts/LandingLayout/LandingLayout';
import Team from '../pages/Team/Team';
import PageNotFound from '../pages/PageNotFound';
import TeamDetails from '../pages/TeamDetails/TeamDetails';


const BaseNavigation = () => {

    const nav = useNavigate();

    useEffect(() => {
        nav('/home');
    }, [nav]);

    return <></>
}


const TeamRoutes = () => {
    const routes = createBrowserRouter([
        {
            path: '/',
            element: <BaseNavigation />
        },
        {
            path: 'home',
            element: <LandingLayout />,
            children: [
            {
                path: '',
                element: <Team />
            }, 
            {
                path:'team/:profileId',
                element: <TeamDetails />
            }
            ]
        },
        {
            path: '*',
            element: <PageNotFound />
        }
    ]);
    return (
        <RouterProvider router={routes} />
    )
}

export default TeamRoutes
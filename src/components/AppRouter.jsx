import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { RouteNames } from '../router';
import Home from '../pages/Home';
import Charm from '../pages/Charm';
import Proximity from '../pages/Proximity';
import Talents from '../pages/Talents';

const AppRouter = () => {
    return (
        <Routes>    
            <Route 
                path={RouteNames.HOME}
                key={RouteNames.HOME}
                element={<Home />}
            />
            <Route 
                path={RouteNames.CHARM}
                key={RouteNames.CHARM}
                element={<Charm />}
            />
            <Route 
                path={RouteNames.PROXIMITY}
                key={RouteNames.PROXIMITY}
                element={<Proximity/>}
            />
            <Route 
                path={RouteNames.TALENTS}
                key={RouteNames.TALENTS}
                element={<Talents/>}
            />
            <Route
                path="*"
                element={<Navigate to={RouteNames.HOME} />}
            />
        </Routes>
    );
};

export default AppRouter;
import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, Route, useLocation } from 'react-router-dom';
// import { Redirect, Route } from 'react-router';
// import useAuth from '../../../components/hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';
const AdminRoute = ({ children, ...rest }) => {
    const { user, admin, isLoading } = useFirebase();
    const location = useLocation();
    if (isLoading) {
        return <div>
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
    }
    if (user.email && admin) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} />;
};

export default AdminRoute;
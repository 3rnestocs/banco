import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { selectIsLogged } from '../redux/user/userSlice';

const ProtectedRoute = ({ children, redirectToLogin = true }) => {
    const isLoggedIn = useSelector(selectIsLogged);
    const location = useLocation();

    // Allow public access to the institutional page ('/')
    if (location.pathname === '/') {
        return children;
    }

    // Redirect to login if not logged in
    if (!isLoggedIn && redirectToLogin) {
        return <Navigate to="/login" />;
    }

    // Redirect to dashboard if already logged in and trying to access public paths
    if (isLoggedIn && !redirectToLogin) {
        return <Navigate to="/dashboard" />;
    }

    // Allow access to protected content if logged in
    return children;
};

export default ProtectedRoute;

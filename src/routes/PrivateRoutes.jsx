import useAuthContext from './../hooks/useAuthContext';
import { useLocation, Navigate } from 'react-router-dom';
import Loading from './../components/Loading';
import { PropTypes } from 'prop-types';

const PrivateRoutes = ({children}) => {
    const {user, loading} = useAuthContext();
    const location = useLocation();

    if(loading){
        return <Loading />;
    }

    if(user && user?.email){
        return children;
    }

    return (
        <Navigate to="/auth/login" state={location?.pathname} />
    );
};

PrivateRoutes.propTypes = {
    children: PropTypes.object.isRequired
}

export default PrivateRoutes;
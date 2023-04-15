import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';

const PrivateRoutes = () => {
  console.log("hello")
  const registrationSlice = useSelector((state) => state.registration);
  console.log(registrationSlice,"----")
  const navigate = useNavigate();

  if (!registrationSlice) {
    // If user is not authenticated, navigate to the login page
    navigate('/');
    return null;
  }

  return <Outlet />;
};

export default PrivateRoutes;

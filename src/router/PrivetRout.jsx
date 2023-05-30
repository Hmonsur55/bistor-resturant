import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { authContext } from '../AuthProvider/AuthProvider';

const PrivetRout = ({children}) => {
    const { user, loading } = useContext(authContext);
    const location = useLocation();
    if (loading) {
      return (
        <div className="flex justify-center">
          <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin bg-green-500 "></div>
        </div>
      );
    }
    if(user){
        return children
    }

    return <Navigate to='/login' state={{from: location}}></Navigate>
};

export default PrivetRout;
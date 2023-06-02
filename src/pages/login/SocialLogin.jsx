import React, { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { authContext } from '../../AuthProvider/AuthProvider';

const SocialLogin = () => {
     const {  googleSignIn } = useContext(authContext);
     const [success, setSuccess] = useState("");
     const [error, setError] = useState("");
     const navigate = useNavigate();
     const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    
     const googleLogin = () => {
       googleSignIn()
         .then((result) => {
             const looginUser = result.user;
              const userDetails = {
                name: looginUser.displayName,
                email: looginUser.email,
              };
              fetch(`http://localhost:5000/users`, {
                method: "POST",
                headers: {
                  "content-type": "application/json",
                },
                body: JSON.stringify(userDetails),
              })
                .then((res) => res.json())
                .then(() => {
                  navigate(from, { replace: true });
                });
           
         })
         .catch((error) => {
           setError(error);
         });
    };
    
    return (
      <div>
        <div className="divider"></div>
        <button onClick={googleLogin} className="btn btn-accent">
          google
        </button>
      </div>
    );
};

export default SocialLogin;
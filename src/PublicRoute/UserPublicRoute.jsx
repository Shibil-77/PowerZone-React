import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';


function UserPublicRoute({ children }) {
    const navigate = useNavigate()
    useEffect(() => {
      const publicFu = () => {
          const token = localStorage.getItem("token");
          console.log(token)
          if (token) {
            navigate('/')
          }
      };
      publicFu();
    },[]);
    const token = localStorage.getItem("token")
    if (token === null) {
      return children
    }
}

export default UserPublicRoute
import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

function AdminPublicRoute({ children }) {
    const navigate = useNavigate
    useEffect(() => {
      const publicFu = () => {
          const adminToken = localStorage.getItem("adminToken");
          console.log(adminToken)
          if (adminToken) {
            navigate('/admin')
          }
      };
      publicFu();
    },[]);
    const adminToken = localStorage.getItem("adminToken")
    if (adminToken === null) {
      return children
    }
}

export default AdminPublicRoute
import { useEffect } from "react";
import {useNavigate} from 'react-router-dom'

const AdminProtectRouter = ({ children }) => {

  const navigate = useNavigate()
  useEffect(() => {
    const publicFu = () => {
        const AdminToken = localStorage.getItem("AdminToken");
        if (!AdminToken) {
          navigate('/admin/login')
        }
    };
    publicFu();
  },[]);
  const AdminToken = localStorage.getItem("AdminToken")
  if (AdminToken !=null) {
    return children;
  }
};

export default AdminProtectRouter;
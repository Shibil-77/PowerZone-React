import { useEffect } from "react";
import {useNavigate} from 'react-router-dom'

const UserProtectRouter = ({ children }) => {

  const navigate = useNavigate()
  useEffect(() => {
    const publicFu = () => {
        const token = localStorage.getItem("token");
        if (!token) {
          navigate('/login')
        }
    };
    publicFu();
  },[]);
  const token = localStorage.getItem("token")
  if (token !=null) {
    return children;
  }
};

export default UserProtectRouter;
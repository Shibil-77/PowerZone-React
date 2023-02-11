import { useEffect } from "react";
import {useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {userActions} from '../redux/userAuth'

const UserProtectRouter = ({ children }) => {
 const  dispatch = useDispatch()
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
    dispatch(
      userActions.userAddDetails({token:token,user:localStorage.getItem("user")})
    )
    return children;
  }
};

export default UserProtectRouter;
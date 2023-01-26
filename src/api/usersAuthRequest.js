import axios from 'axios'

export const  apiUserSignUp=async(registerData)=>{
    console.log(registerData);
    await axios.post('http://localhost:4000/api/user/register',registerData,{
        withCredentials: true,
      })

}

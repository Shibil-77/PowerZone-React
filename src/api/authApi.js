import axios from 'axios'

export const apiUserSignUp=async(registerData)=>{
    try {
      const data =  await axios.post('https://server.smartshoping.club/api/auth/register',registerData,{
        withCredentials: true,
      })
     return data
    } catch (error) {
       return error.response.data.message
    }
}


export const verifyResponse= async(id,code)=>{
  try {
     const data =  await axios.get(`https://server.smartshoping.club/api/auth/verify/${id}`,{
      withCredentials: true,
    })
    console.log(data.token);
    return data
    } catch (error) {
     console.log( error.response.data.message);
     return  error.response.data.message
}}


export const timeReset = async(id)=>{
    await axios.get(`https://server.smartshoping.club/api/auth/timeReset/${id}`,{
    withCredentials: true,
})
}

export const apiLogin = async(loginData) => {
  try {
    const data = await axios.post(`https://server.smartshoping.club/api/auth/login`,loginData,{
      withCredentials: true,
    })
    console.log("api call success");
    console.log(data.token);
    return data
  } catch (error) {
    console.log( error.response.data.message);
    return  error.response.data.message
  }
}

export const apiForgotPassword = async(forgotData)=>{
  try {
   const data = await axios.post(`https://server.smartshoping.club/api/auth/forgotPassword`,forgotData,
   {
    withCredentials: true,
  })
   return data
  } catch (error) {
     return error.response.data.message
  }
} 

export const apiResetPassword = async(id,resetData)=>{
  try {
    console.log(resetData);
    const data = await axios.post(`https://server.smartshoping.club/api/auth/resetPassword/${id}`,resetData,{
      withCredentials: true,
    })
    return data
  } catch (error) {
     return error.response.data.message
  }
}
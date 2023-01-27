import axios from 'axios'

export const apiUserSignUp=async(registerData)=>{
    try {
      const data =  await axios.post('http://localhost:4000/api/user/register',registerData,{
        withCredentials: true,
      })
     return data
    } catch (error) {
       return error.response.data.message
    }
}


export const verifyResponse= async(id,code)=>{
  try {
     const data =  await axios.get(`http://localhost:4000/api/user/verify/${id}`,{
      withCredentials: true,
    })
    console.log(data);
    return data
  } catch (error) {
     console.log( error.response.data.message);
     return  error.response.data.message
}}


export const timeReset = async(id)=>{
    await axios.get(`http://localhost:4000/api/user/timeReset/${id}`,{
    withCredentials: true,
})

}
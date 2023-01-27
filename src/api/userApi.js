import axios from "axios"


export const getUserData = async()=>{
     try {
        const response = await axios.get("http://localhost:4000/api/user/getUsersData")
        return response.data
     } catch (error) {
         console.log(error)
     }
}

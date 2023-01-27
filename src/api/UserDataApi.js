import axios from "axios"


export const userData = async()=>{
     try {
        const response = await axios.get("http://localhost:8000/api/user/getUsersData")
        console.log(response.data)
        return response.data
     } catch (error) {
         console.log(error)
     }
   
      
}

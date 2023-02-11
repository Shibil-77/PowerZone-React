import axios from "axios"


export const getUserData = async () => {
    try {
        const response = await axios.get("http://localhost:4000/api/admin/getUsersData", {
            withCredentials: true,
        })
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const userAccess = async (id) => {
    console.log(id);
    try {
        const response = await axios.get(`http://localhost:4000/api/admin/userAccess/${id}`, {
            withCredentials: true,
        })
        return response.data
    } catch (error) {
        console.log(error)
        return error
    }
}

export const apiAdminLogin =async (data)=>{
     try {
        console.log(data);
        const response = await axios.post('http://localhost:4000/api/admin/adminLogin',data,{
            withCredentials: true,
        })
        return response
     } catch (error) {
         return error
     }
}

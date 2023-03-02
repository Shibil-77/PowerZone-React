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


export const getPortData =async ()=>{
    try {
        const response = await axios.get("http://localhost:4000/api/admin/getPortData", {
            withCredentials: true,
        })
        console.log(response,"response");
        return response.data
    } catch (error) {
        
    }
}


export const portRequest = async(id)=>{
    try {
        const response = await axios.get(`http://localhost:4000/api/admin/portRequest/${id}`, {
            withCredentials: true,
        })
        return response.data
    } catch (error) {
        console.log(error)
        return error
    }
}

export const adminFindNewBookings = async()=>{
    try {
        const response = await axios.get(`http://localhost:4000/api/admin/adminFindNewBookings`, {
            withCredentials: true,
        })
        return response.data
    } catch (error) {
        return error
    }
}

export const dashBoard = async()=>{
    try {
        const response = await axios.get(`http://localhost:4000/api/admin/dashBoard`, {
            withCredentials: true,
        })
        return response.data
    } catch (error) {
        return error
    }
}
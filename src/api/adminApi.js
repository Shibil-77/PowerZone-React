import axios from "axios"


export const getUserData = async () => {
    try {
        const response = await axios.get("https://server.smartshoping.club/api/admin/getUsersData", {
            withCredentials: true,
        })
        return response.data
    } catch (error) {
    }
}

export const userAccess = async (id) => {
    try {
        const response = await axios.get(`https://server.smartshoping.club/api/admin/userAccess/${id}`, {
            withCredentials: true,
        })
        return response.data
    } catch (error) {
        return error
    }
}

export const apiAdminLogin =async (data)=>{
     try {
        const response = await axios.post('https://server.smartshoping.club/api/admin/adminLogin',data,{
            withCredentials: true,
        })
        return response
     } catch (error) {
         return error
     }
}


export const getPortData =async ()=>{
    try {
        const response = await axios.get("https://server.smartshoping.club/api/admin/getPortData", {
            withCredentials: true,
        })
        return response.data
    } catch (error) {
        
    }
}


export const portRequest = async(id)=>{
    try {
        const response = await axios.get(`https://server.smartshoping.club/api/admin/portRequest/${id}`, {
            withCredentials: true,
        })
        return response.data
    } catch (error) {
        return error
    }
}

export const adminFindNewBookings = async()=>{
    try {
        const response = await axios.get(`https://server.smartshoping.club/api/admin/adminFindNewBookings`, {
            withCredentials: true,
        })
        return response.data
    } catch (error) {
        return error
    }
}

export const dashBoard = async()=>{
    try {
        const response = await axios.get(`https://server.smartshoping.club/api/admin/dashBoard`, {
            withCredentials: true,
        })
        return response.data
    } catch (error) {
        return error
    }
}

export const SalesReportApi =async()=>{
    try {
        const response = await axios.get(`https://server.smartshoping.club/api/admin/salesReport`, {
            withCredentials: true,
        })
        return response.data
    } catch (error) {
        return error
    }
}



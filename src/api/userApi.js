import axios from "axios"

export const findProfileData = async()=>{
    try {
        const response = await axios.get("https://server.smartshoping.club/api/user/getProfileData", {
            withCredentials: true,
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        })
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const findNewBookings = async()=>{
    try {
        const response = await axios.get("https://server.smartshoping.club/api/user/findNewBookings", {
            withCredentials: true,
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        })
        return response.data
    } catch (error) {
        console.log(error)
    }
}

 
export const findChargingPort = async()=>{
    try {
        const response = await axios.get("https://server.smartshoping.club/api/user/findChargingPort", {
            withCredentials: true,
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        })
        console.log(response,"response.data");
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const userPortDetailsFinding = async()=>{
    try {
        const response = await axios.get("https://server.smartshoping.club/api/user/portDetailsFinding", {
            withCredentials: true,
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        })
        return response.data
    } catch (error) {
        console.log("Errrrrrrrr",error)
    }
}

export const deletePort = async(id)=>{
    try {
        const response = await axios.get(`https://server.smartshoping.club/api/user/deletePort/${id}`, {
            withCredentials: true,
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        })
        return response.data
    } catch (error) {
        console.log(error)
    }
}


export const bookingCancelApi = async(id)=>{
    try {
        const response = await axios.get(`https://server.smartshoping.club/api/user/bookingCancel/${id}`, {
            withCredentials: true,
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        })
        return response.data
    } catch (error) {
        console.log(error)
    }
}


export const userPortBooking =  async(id)=>{
    try {
        const response = await axios.get(`https://server.smartshoping.club/api/user/userPortBooking`, {
            withCredentials: true,
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        })
        console.log(response.data)
        return response.data
    } catch (error) {
        console.log(error)
    }
}


export const addAdmin =  async(id)=>{
    try {
        const response = await axios.get(`http://localhost:4000/api/user/addAdmin`, {
            withCredentials: true,
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        })
        return response.data
    } catch (error) {
        console.log(error)
    }
}
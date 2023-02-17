import axios from "axios"

export const findProfileData = async()=>{
    try {
        const response = await axios.get("http://localhost:4000/api/user/getProfileData", {
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
        console.log("=------------------============-------------=-------------=-");
        const response = await axios.get("http://localhost:4000/api/user/findNewBookings", {
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

 
export const findChargingPort = async()=>{
    try {
        console.log("=------------------============-------------=-------------=-");
        const response = await axios.get("http://localhost:4000/api/user/findChargingPort", {
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
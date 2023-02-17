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
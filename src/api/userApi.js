import axios from "axios"


export const getUserData = async () => {
    try {
        const response = await axios.get("http://localhost:4000/api/user/getUsersData", {
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
        const response = await axios.get(`http://localhost:4000/api/user/userAccess/${id}`, {
            withCredentials: true,
        })
        return response.data
    } catch (error) {
        console.log(error)
        return error
    }
}

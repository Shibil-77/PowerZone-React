import axios from "axios";


export const addChargingPortApi = async(value) => {
    console.log(localStorage.getItem('token'), 33443344334434334);
    try {
          const chargingData = await axios.post('http://localhost:4000/api/port/addChargingPort', value, {
            withCredentials: true,
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        })
        console.log(chargingData);
          return chargingData
    } catch (error) {

    }
}

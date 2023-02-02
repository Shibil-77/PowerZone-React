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

export const addPointValueApi = async(map,id)=>{
    console.log(id);
    try {
         console.log(map);
        const chargingData = await axios.patch('http://localhost:4000/api/port/addMapValue',{map,id},{
            withCredentials: true,
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        })
        return chargingData
    }catch(e) {
       
    }
}


export const mapDataApi =async()=>{
try {
    const data = await axios.get('http://localhost:4000/api/port/mapData',{
        withCredentials: true,
        headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
        },
    })
    return data.data
} catch (error) {
     return error.message 
}
}
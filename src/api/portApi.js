import axios from "axios";


export const addChargingPortApi = async(value) => {
    try {
          const chargingData = await axios.post('https://server.smartshoping.club/api/port/addChargingPort', value, {
            withCredentials: true,
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        })
          return chargingData
         } catch (error) {
            
         }
}

export const addPointValueApi = async(map,id)=>{
    try {
        const chargingData = await axios.patch('https://server.smartshoping.club/api/port/addMapValue',{map,id},{
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
    const data = await axios.get('https://server.smartshoping.club/api/port/mapData',{
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

export const findPortData =async (portId) =>{
  try {
    const {data} = await axios.post('https://server.smartshoping.club/api/port/findPortData',{portId},{
        withCredentials: true,
        headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
        },
    })
    
    return data;
  } catch (error) {
    return error
  }
}


export const bookingApi =async(time,date,id)=>{
    try {
        const data = await axios.post('https://server.smartshoping.club/api/port/booking',{time,date,id},{
            withCredentials: true,
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        })
        return data.data;
    } catch (error) {
        return error
    }
}


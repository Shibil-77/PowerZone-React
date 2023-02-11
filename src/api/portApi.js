import axios from "axios";


export const addChargingPortApi = async(value) => {
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

export const findPortData =async (portId) =>{
  try {
    console.log("findPortData")
    console.log(portId,"=======portId=======-----")
    const data = await axios.post('http://localhost:4000/api/port/findPortData',{portId},{
        withCredentials: true,
        headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
        },
    })
    console.log(data.data);
    return data.data;
  } catch (error) {
    return error
  }
}


export const bookingApi =async(time,date,id)=>{
    try {
        console.log(time);
        const data = await axios.post('http://localhost:4000/api/port/booking',{time,date,id},{
            withCredentials: true,
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        })
        console.log(data.data);
        return data.data;
    } catch (error) {
        return error
    }
}


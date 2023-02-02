export const  addChargingPortValidation  =(data)=>{
       const {kW,rate,dayStart,dayEnd,timeStart,timeEnd,type,address,city,postalCode,country} = data;
          if(kW !== Number ){
             return "Please enter kW "
         }else if(type !==null ){
             return "Please enter type "
         }else if(rate !== Number){
             return "Please enter rete"
         }else if(dayStart !== null || dayEnd !==null){
             return "Please enter dayStart and dayEnd "
         }else if(timeStart !== null || timeEnd !== null){
             return "Please enter timeStart and timeEnd "
         }
         else if(address!==null){
             return "Please enter address "
         }
         else if(city!==null){
             return "Please enter city "
         }
         else if(postalCode!==null){
             return "Please enter postalCode "
         }
         else if(country!==null){
             return "Please enter country "
         }
         else{
             return "success"
         } 
}
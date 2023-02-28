import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import { useLocation, useNavigate } from 'react-router-dom'
import "./Calendar.css"
import { findPortData } from '../../../api/portApi'



function CalendarPage() {
  const navigate = useNavigate()
  const location = useLocation()
  const [timeData, setTimeData] = useState([])
  const [value, onChange] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState([]);
  const [chargingPortData, setChargingPortData] = useState()
  const [findDay, setFindDay] = useState();
  const [findBookingData, setFindBookingData] = useState()
  const [filterBookingData, setFilterBooKingData] = useState()

  const findTime = async () => {
    const timeData = await chargingPortData.dayDetail.filter((data) => {
      return data.selectedDay === day
    })
    setFindDay(timeData)
    if (findDay.length > 0) {
      const myArray = findDay[0].timeStart.split(":")
      const myArray2 = findDay[0].timeEnd.split(":")
      console.log(Number(myArray[0]), Number(myArray2[0]))
      const TimeData = [Number(myArray[0]), Number(myArray2[0])]
      let time = [];
      for (let i = TimeData[0]; i < TimeData[1]; i++) {
        time.push(`${i}:00-${i + 1}:00`);
      }
      const bookingsTime = filterBookingData.map((data)=> data.time);
      const unique = time.filter((element) => bookingsTime.indexOf(element) === -1);
      setSelectedTime(unique)
    }
  }

  function convertDate(date) {
    let newDate = new Date(date);
    let year = newDate.getFullYear();
    let month = (newDate.getMonth() + 1).toString().padStart(2, '0');
    let day = newDate.getDate().toString().padStart(2, '0');
    let hour = newDate.getUTCHours().toString().padStart(2, '0');
    let minute = newDate.getUTCMinutes().toString().padStart(2, '0');
    let second = newDate.getUTCSeconds().toString().padStart(2, '0');
    let result = `${year}-${month}-${day}T${hour}:${minute}:${second}.000Z`;
    return result;
  }

  const handleClick = (date) => {
    const dateData = convertDate(date)
    const filterData = findBookingData.filter((bookingData) => bookingData.date === dateData)
    setFilterBooKingData(filterData)
    findTime()
  };

  async function test() {
    const { portData, bookingData } = await findPortData(location.hash)
    setChargingPortData(portData)
    setFindBookingData(bookingData)
    const filterData = findBookingData.filter((bookingData) => {
      console.log(bookingData.date,"bookingData.date");
      const dateData = convertDate(new Date())
      return bookingData.date === dateData
    })
    setFilterBooKingData(filterData)
    findTime()
  }

  useEffect(() => {
    test();
    findTime()
  }, [])


  const onSubmit = () => {
      navigate('/checkOut',{state:{value:value,timeData:timeData,id:location.hash,portData:chargingPortData}}); 
  }

  const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  const day = days[value.getDay()];

  return (
    <>
      <div className='grid-rows-2'>
        <div className='calendar-container h-48 flex  justify-start mt-6 '>
          <Calendar
            onChange={onChange}
            value={value}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            onClickDay={handleClick}
            minDate={new Date()}
          />
        </div>
        <p className='text-black font-extrabold'>Selected day:<span className='text-blue-600'>{day}</span></p>
        <div className='grid-rows-2'>
          <div className=' flex justify-center '>
            <div className='grid gap-5 grid-cols-3 md:grid-cols-4  max-2xl: '>
          
              {selectedTime?.length > 0 ? selectedTime?.map((data) => {
                return (
                <div className='flex' key={data}>
                <button type="submit"  onClick={() => {
                  setTimeData(data)
                }} className="w-20  h-11 max-w-xs  mt-2 bg-blue-600 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 text-xs rounded-lg  px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-900 dark:focus:ring-primary-800 hover:bg-orange-600 " >{data}</button> </div>)
              }) : <div className='w-fu h-10 flex justify-center rounded-xl bg-slate-100'>
                <h1 className='text-red-600 font-bold'>NOT AVAILABLE</h1>
              </div>}
            </div>
          </div>
          <div className='flex justify-center '>
            <button type="submit" onClick={onSubmit} className="w-20   h-11 max-w-xs mx-2 mt-2 bg-green-600 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 text-xs rounded-lg  px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-900 dark:focus:ring-primary-800 hover:bg-orange-600 " >Booking Now</button>
          </div>
        </div>
      </div>
    </>

  );
}
export default CalendarPage;
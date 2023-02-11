import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import { useLocation } from 'react-router-dom'
import "./Calendar.css"
import { findPortData } from '../../api/portApi'
import { bookingApi } from '../../api/portApi'


function CalendarPage() {

  const location = useLocation()
  const [portData, setPortData] = useState({})
  const [timeData, setTimeData] = useState([])
  const [value, onChange] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState([]);
  const [chargingPortData, setChargingPortData] = useState()
  const [findDay, setFindDay] = useState();


  const findTime = async () => {
    
    console.log("============================4====================================",chargingPortData)

    const timeData = await chargingPortData.dayDetail.filter((data) => {
      console.log(data.selectedDay, "data.selectedDay")
      console.log(day, "day")
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
      setSelectedTime(time)
    }
  }

  const handleClick = (date) => {
    console.log('date'.date)
    findTime()
    console.log("==============================3==================================")

  };

  async function test() {
    const findData = await findPortData(location.hash)
    setChargingPortData(findData)
    console.log("============================1====================================")

  }

  useEffect(() => {
    test();
    findTime()
    console.log("================================================================")
  }, [])


  const onSubmit = () => {
    bookingApi(timeData, value, location.hash)
  }

  const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  const day = days[value.getDay()];


  return (
    <>
      <div className='grid-rows-2'>
        <div className='calendar-container h-48 flex justify-start mt-6 '>
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
        <p>Selected day: {day}</p>
        <div className='grid-rows-2'>
          <div className=' flex justify-center '>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-2 max-2xl:'>
              {selectedTime.map((data) => {
                return <button type="submit" onClick={() => {
                  setTimeData(data)
                }} class="w-20 h-11 max-w-xs mx-2 mt-2 bg-blue-600 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 text-xs rounded-lg  px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-900 dark:focus:ring-primary-800 hover:bg-orange-600" >{data}</button>
              })}
            </div>
          </div>
          <div className='flex justify-center'>
            <button type="submit" onClick={onSubmit} class="w-20 h-11 max-w-xs mx-2 mt-2 bg-green-600 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 text-xs rounded-lg  px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-900 dark:focus:ring-primary-800 hover:bg-orange-600" >Booking Now</button>
          </div>
        </div>
      </div>
    </>

  );
}
export default CalendarPage;
import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import { useLocation } from 'react-router-dom'
import "./Calendar.css"
import { findPortData } from '../../api/portApi'
import {bookingApi} from '../../api/portApi'


function CalendarPage() {
  const [portData, setPortData] = useState({})
  const [time, setTime] = useState(0)
  const [timeData, setTimeData] = useState([])
  const location = useLocation()
  const [value, onChange] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState([]);

  const handleClick = (date) => {
    
  };

  async function test() {
    const findData = await findPortData(location.hash)
    const myArray = findData.timeStart.split(":");
    const myArray2 = findData.timeEnd.split(":");
    const TimeData = [Number(myArray[0]), Number(myArray2[0])]
    let time = [];
    for (let i = TimeData[0]; i < TimeData[1]; i++) {
      time.push(`${i}:00-${i + 1}:00`);
    }
    setSelectedTime(time)
  }

  useEffect(() => {
    test();
  }, [])
  console.log(value)
  console.log(timeData)


  const onSubmit = ()=>{
       bookingApi(timeData,value,location.hash)
  }



  return (
    <>
     <h1 className='text-black font-bold text-3xl text-center  '>Booking Now</h1>
      <div className='calendar-container  flex justify-center mt-6 '>
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
      <div className=' flex justify-center '>

       <div className='grid grid-cols-2 md:grid-cols-4 gap-2 max-2xl:'>
        {selectedTime.map((data) => {
          return <button type="submit" onClick={()=>{
            setTimeData(data)
          }} class="w-20 h-11 max-w-xs mx-2 mt-2 bg-blue-600 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 text-xs rounded-lg  px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-900 dark:focus:ring-primary-800 hover:bg-orange-600" >{data}</button>
        })}
      </div>
      </div>
      <div className='flex justify-center'>
      <button type="submit" onClick={onSubmit} class="w-20 h-11 max-w-xs mx-2 mt-2 bg-green-600 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 text-xs rounded-lg  px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-900 dark:focus:ring-primary-800 hover:bg-orange-600" >Booking Now</button>
      </div>
    </>

  );
}
export default CalendarPage;
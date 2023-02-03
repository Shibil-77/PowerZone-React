import { useState } from 'react';
import Calendar from 'react-calendar';


function  CalendarPage() {
    const [date, setDate] = useState(new Date());
  return (
    <div>
 <div className=''>
   <h1>React Calendar with Range</h1>
   <div>
     <Calendar onChange={setDate} value={date} selectRange={true}/>
   </div>
   {date.length > 0 ? (
   <p>
     <span>Start:</span>{' '} {date[0].toDateString()}
     &nbsp; to &nbsp;
     <span>End:</span> {date[1].toDateString()}
   </p>
        ) : (
   <p>
     <span>Default selected date:</span>{' '} {date.toDateString()}
   </p>
        )}
 </div>

    </div>
  )
}

export default  CalendarPage

import React,{ useState } from 'react';
import { Link } from 'react-router-dom'
import AddLocationAltSharpIcon from '@mui/icons-material/AddLocationAltSharp';
import HomeIcon from '@mui/icons-material/HomeSharp';
import QueryStatsIcon from '@mui/icons-material/QueryStatsSharp';
import LoginIcon from '@mui/icons-material/LoginSharp';
import EventNoteIcon from '@mui/icons-material/EventNoteSharp';
import ThreePSharpIcon from '@mui/icons-material/ThreePSharp';

function BottomBar() {


  const Menus = [
    { title: "Home", src: HomeIcon },
    { title: "Add a charging point", src: AddLocationAltSharpIcon },
    { title: "Find a Charging point", src: QueryStatsIcon },
    { title: "Bookings ", src: EventNoteIcon },
    { title: "Requests", src: ThreePSharpIcon },
    { title: "Login", src: LoginIcon },

  ];
  return (

    <div  className="fixed bottom-0 w-full border-t-2 flex px-4 py-2 justify-between border-slate-700 bg-white h-14">
      {Menus.map((menu,index) => (
        <Link
          href={`${'/login'}`}
          key={index}
        >
          <div className="hover:bg-[#bbc0c7] rounded-md p-2"><menu.src fontSize="large" color="success" /></div>
        </Link>
      ))}
    </div>
  )
}

export default BottomBar
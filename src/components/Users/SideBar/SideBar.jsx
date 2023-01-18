import { useState } from "react";
import Icons from '../../../assets/Icons/user.png'
import Arrow from '../../../assets/Icons/arrow.png'
import AddLocationAltSharpIcon from '@mui/icons-material/AddLocationAltSharp';
import HomeIcon from '@mui/icons-material/HomeSharp';
import QueryStatsIcon from '@mui/icons-material/QueryStatsSharp';
import LoginIcon from '@mui/icons-material/LoginSharp';
import EventNoteIcon from '@mui/icons-material/EventNoteSharp';
import ThreePSharpIcon from '@mui/icons-material/ThreePSharp';
import { NavLink } from 'react-router-dom'


const SideBar= ({children}) => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Home", src: HomeIcon },
    { title: "Add a charging point", src: AddLocationAltSharpIcon },
    { title: "Find a Charging point", src: QueryStatsIcon },
    { title: "Bookings ", src:EventNoteIcon },
    { title: "Requests", src: ThreePSharpIcon},
    { title: "Login", src: LoginIcon },
   
  ];

  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-[#5EA634] h-full p-5  pt-8 relative duration-300`}
      >
        <img
          src={Arrow}
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img 
            src={Icons}
            className={`cursor-pointer duration-500 w-10 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Muhammed Shibil
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <NavLink to='/login'>
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
                
              <Menu.src fontSize="large"/>
               <span className={`${!open && "hidden"}  origin-left duration-200 text-lg text-white`}>
                {Menu.title}
              </span>
            </li>
           </NavLink>
          ))}
        </ul>
      </div>

{/* Home  */}
{/* 
      <div className="h-screen flex-1 p-7">
        <h1 className="text-2xl font-semibold ">Home Page</h1>
      </div> */}
{children}
{/* end Home */}

    </div>
  );
};

export default SideBar;
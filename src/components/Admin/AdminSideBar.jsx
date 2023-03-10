import { useState, React } from "react";
import Icons from '../../assets/Icons/user.png'
import Arrow from '../../assets/Icons/arrow.png'
import HomeIcon from '@mui/icons-material/HomeSharp';
import QueryStatsIcon from '@mui/icons-material/QueryStatsSharp';
import PeopleIcon from '@mui/icons-material/People';
import EventNoteIcon from '@mui/icons-material/EventNoteSharp';
import EvStationIcon from '@mui/icons-material/EvStation';
import { NavLink } from 'react-router-dom'


const AdminSideBar = () => {
  const [open, setOpen] = useState(true);

  const Menus = [
    { title: "Home", src: HomeIcon, link: '/admin' },
    { title: "User Details", src: PeopleIcon, link: '/admin/UsersDetails' },
    { title: "Sales Report", src: QueryStatsIcon, link: '/admin/salesReport' },
    { title: "Bookings ", src: EventNoteIcon, link: '/admin/BookingDetails' },
    { title: "Charging Details", src: EvStationIcon, link: '/admin/PortDetails' },
  ];

  return (
    <>
    <div
      className={`${open ? "w-72" : "w-20 "
        } bg-white h-auto p-5  pt-8 relative rounded-2xl duration-300`}
    >
      <img
        src={Arrow}
        className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
         border-2 rounded-full  ${!open && "rotate-180"}`}
        onClick={() => setOpen(!open)}
        alt='hello'
      />
        <NavLink to='/admin'>
      <div className="flex gap-x-4 items-center">
        <img
          src={Icons}
          className={`cursor-pointer duration-500 w-10 ${open && "rotate-[360deg]"
            }`}
          alt='hello'
        />
        <h1
          className={`text-[#004f6d] origin-left font-medium text-xl duration-200 ${!open && "scale-0"
            }`}
        >
          Admin
        </h1>
      </div>
      </NavLink>
      <ul className="pt-6">
        {Menus.map((Menu, index) => (
          <NavLink to={Menu.link}>
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
            ${Menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-light-white"
                } `}
            >
              <Menu.src fontSize="large" color="success" />
              <span className={`${!open && "hidden"}  origin-left duration-200 text-lg text-black`}>
                {Menu.title}
              </span>
            </li>
          </NavLink>
        ))}
      </ul>
    </div>
  </>

  );
};

export default AdminSideBar;
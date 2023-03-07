import React  from 'react';
import { Link } from 'react-router-dom'
import PeopleIcon from '@mui/icons-material/People';
import HomeIcon from '@mui/icons-material/HomeSharp';
import QueryStatsIcon from '@mui/icons-material/QueryStatsSharp';
import EventNoteIcon from '@mui/icons-material/EventNoteSharp';
import EvStationIcon from '@mui/icons-material/EvStation';

function AdminBottomBar() {
  const Menus = [
    { title: "Home", src: HomeIcon, link: '/admin' },
    { title: "User Details", src: PeopleIcon, link: '/admin/UsersDetails' },
    { title: "Sales Report", src: QueryStatsIcon, link: '/admin/salesReport' },
    { title: "Bookings ", src: EventNoteIcon, link: '/admin/BookingDetails' },
    { title: "Charging Details", src: EvStationIcon, link: '/admin/PortDetails' },
  ];
  return (

    <div className="fixed bottom-0 w-full border-t-2 flex px-4 py-2 justify-between border-slate-700 bg-white h-14">
      {Menus.map((menu) => (
        <Link
          href={`${'/login'}`}
          key={menu?.name}
        >
          <div className="hover:bg-[#bbc0c7] rounded-md p-2"><menu.src fontSize="large" color="success" /></div>
        </Link>
      ))}

      {/* <Link
            href="/user/Friends"
            >
            <div  className="hover:bg-[#bbc0c7] rounded-md p-2"> <Menu.src fontSize="large" color="success" /></div>
            </Link> */}

    </div>
  )
}

export default AdminBottomBar
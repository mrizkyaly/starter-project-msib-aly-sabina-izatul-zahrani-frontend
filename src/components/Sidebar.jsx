import React, { useState } from "react";
import { HiMenuAlt3, HiOutlineAcademicCap, HiOutlineCollection, HiOutlineCalendar, HiOutlineChatAlt2, HiOutlineClipboardList, HiOutlineLogout, HiOutlineUser, HiOutlineCog, HiOutlineViewGrid } from "react-icons/hi";
import { Link } from "react-router-dom";

const Sidebar = () => {
    const menus = [
        { name: "Dashboard", icon: HiOutlineViewGrid, path: "#" },
        { name: "Learning Path", icon: HiOutlineCollection, path: "#" },
        { name: "Courses", icon: HiOutlineAcademicCap, path: "#" },
        { name: "Assignment", icon: HiOutlineClipboardList, margin: true, path: "#" },
        { name: "Schedule", icon: HiOutlineCalendar, path: "#" },
        { name: "Forum", icon: HiOutlineChatAlt2, path: "#" },
        { name: "Profile", icon: HiOutlineUser, margin: true, path: "/profile" },
        { name: "Settings", icon: HiOutlineCog, path: "#" },
        { name: "Logout", icon: HiOutlineLogout, path: "/" },
      ];
    
      const [open, setOpen] = useState(true);
      const [activeMenu, setActiveMenu] = useState(6); // Menyimpan indeks menu yang aktif
    
      const handleMenuClick = (index) => {
        setActiveMenu(index);
      };

      const toggleSidebar = () => {
        setOpen(!open);
      };

    return (
        <div
      className={`bg-secondary min-h-screen ${
        open ? "w-72" : "w-16"
      } duration-500 relative px-4`}
    >
    <div className="py-3 flex justify-between items-center">
      <div className="flex gap-x-4 items-center">
        <img
          src="./src/assets/logo4.svg"
          className={`w-10 h-10 cursor-pointer duration-500 ${
            open ? "rotate-[360deg]" : "scale-0"
          }`}
        />
        <h1
          className={`text-white origin-left font-medium text-xl duration-200 ${
            open ? "" : "scale-0"
          }`}
        >
          Studify
        </h1>
      </div>
      <div className={`absolute end-4 flex`}>
        <HiMenuAlt3
          size={26}
          className="cursor-pointer text-white"
          onClick={toggleSidebar}
        />
      </div>
    </div>
    <div className="mt-4 flex flex-col gap-4 relative">
        {menus.map((menu, i) => (
          <Link to={menu.path} key={i} style={{ textDecoration: 'none' }}>
            <div
              className={` ${menu.margin && "mt-5"} group flex items-center text-sm cursor-pointer gap-3.5 font-medium p-2 hover:bg-[#797596] rounded-md ${
                activeMenu === i && "bg-[#797596]"
              }`}
              onClick={() => handleMenuClick(i)} // Mengatur menu yang aktif saat diklik
            >
              <div>{React.createElement(menu.icon, { size: "20" })}</div>
              <h2
                className={`whitespace-pre ${
                  !open && "overflow-hidden"
                }`}
              >
                {menu.name}
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-primary rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
              >
                {menu.name}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
    );
};

export default Sidebar;
import { useState } from 'react';
import { HiOutlineSearch, HiOutlineBell, HiOutlineMail, HiChevronDown, HiOutlineLogout, HiOutlineUser, HiOutlineCog } from 'react-icons/hi';
import UserAvatar from '../assets/avatar2.png';

const Navbar = () => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

    return (
    <nav className="bg-contentbox flex w-full h-[71px] px-7 items-center justify-end sticky top-0 z-50">
      {/* Search bar */}
      <div className="hidden lg:flex flex-1">
        <div className="relative">
            <input type="text" placeholder="Search" className="w-64 border-2 border-border p-2 rounded-xl bg-transparent focus:ring focus:ring-focus focus:outline-none focus:border-focus" />
            <button className="text-primary justify-center items-center absolute right-3 top-1/2 transform -translate-y-1/2">
            <HiOutlineSearch size={20} />
            </button>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        {/* Bell, and Mail icons */}
        <span className="relative">
          <HiOutlineBell className="w-6 h-6 text-primary hover:text-gray-500 cursor-pointer" />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-600 rounded-full"></span>
        </span>
        <HiOutlineMail className="w-6 h-6 text-primary hover:text-gray-500 cursor-pointer" />

        <div className="border-l border-border h-6"></div>

        {/* User Menu */}
        <div className="relative inline-block text-left">
          <button className="inline-flex items-center text-primary hover:text-gray-500 focus:outline-none" onClick={toggleUserMenu}>
            <img className="rounded-full w-[35px] bg-[#797596]" src={UserAvatar} alt="user" />
            <span className="font-medium ml-3">SabinaIzatul</span>
            <HiChevronDown className="w-5 h-5" />
          </button>
          {isUserMenuOpen && (
            <div className="absolute right-0 mt-2 w-56 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <button className="group flex items-center w-full px-2 py-2 text-sm text-primary hover:text-gray-500 focus:outline-none">
                <HiOutlineUser className="w-5 h-5 mr-2" />
                My Profile
              </button>
              <button className="group flex items-center w-full px-2 py-2 text-sm text-primary hover:text-gray-500 focus:outline-none">
                <HiOutlineCog className="w-5 h-5 mr-2" />
                Settings
              </button>
              <button className="group flex items-center w-full px-2 py-2 text-sm text-primary hover:text-gray-500 focus:outline-none">
                <HiOutlineLogout className="w-5 h-5 mr-2" />
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
    );
};

export default Navbar;
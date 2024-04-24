import { useState, useEffect } from 'react';
import { HiOutlineSearch, HiOutlineBell, HiOutlineMail, HiChevronDown, HiOutlineLogout, HiOutlineUser, HiOutlineCog, HiX, HiDotsVertical } from 'react-icons/hi';
import UserAvatar from '../assets/avatar2.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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

      {/* HiDotsVertical icon */}
      <div className="md:hidden">
        {isMenuOpen ? (
          <HiX className="text-primary text-2xl cursor-pointer" onClick={toggleMenu} />
        ) : (
          <HiDotsVertical className="text-primary text-2xl cursor-pointer" onClick={toggleMenu} />
        )}
      </div>

      <div className="hidden md:flex items-center space-x-4">
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

      {/* Expanded menu */}
      {isMenuOpen && (
          <div className="block absolute top-14 left-0 bg-contentbox w-full">
          <button className="flex items-center text-primary hover:text-gray-500 py-2 px-3">
              <HiOutlineBell className="w-6 h-6" />
              <span className="px-2 font-bold">Notification</span>
          </button>
          <button className="flex items-center text-primary hover:text-gray-500 py-2 px-3">
              <HiOutlineMail className="w-6 h-6" />
              <span className="px-2 font-bold">Message</span>
          </button>
          <hr className="border-t border-gray-300" />
          <button className="flex items-center text-primary hover:text-gray-500 py-2 px-3">
              <HiOutlineUser className="w-6 h-6" />
              <span className="px-2 font-bold">My Profile</span>
          </button>
          <button className="flex items-center text-primary hover:text-gray-500 py-2 px-3">
              <HiOutlineCog className="w-6 h-6" />
              <span className="px-2 font-bold">Setting</span>
          </button>
          <button className="flex items-center text-primary hover:text-gray-500 py-2 px-3">
              <HiOutlineLogout className="w-6 h-6" />
              <span className="px-2 font-bold">Logout</span>
          </button>
      </div>
        )}
    </nav>
    );
};

export default Navbar;
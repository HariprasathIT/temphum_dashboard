import { Search, Bell, Mail, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import nystailogo from "/src/assets/nystailogo.png"

function Navbar() {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <>
      <nav className="w-full flex items-center gap-3 px-4 lg:px-[40px] py-3 shadow-sm bg-white max-md:px-5 max-md:gap-2 sticky top-0 z-10">
        {/* LEFT — LOGO */}
        <div className="flex items-center gap-2 w-[255px] max-md:flex-1 max-md:w-auto">
          <img
            src={nystailogo}
            alt="NYSTAILOGO"
            className="h-[45px] max-md:h-[35px]"
          />
        </div>

        {/* CENTER — SEARCH (Desktop Only) */}
        <div className="relative w-[1200px] max-md:hidden px-4">
          <input
            type="text"
            placeholder="Company Name / Device ID / Location"
            className="w-[600px] sm:w-[300px] md:w-[300px] lg:w-[600px] border rounded-[10px] py-2 pl-10 pr-4 text-[12px] outline-none focus:ring-1 focus:ring-gray-400"
          />
          <Search className="absolute left-7 top-2.5 h-4 w-4 text-gray-500" />
        </div>

        {/* RIGHT ICONS */}
        <div className="flex items-center gap-5 w-[145px] max-md:gap-3 max-md:w-auto" style={{justifyContent:"end"}}>
          {/* Search Toggle Arrow (Mobile/Tab Only) */}
          <button 
            onClick={() => setShowSearch(!showSearch)}
            className="hidden max-md:block text-gray-700 hover:text-gray-900"
            aria-label="Toggle search"
          >
            {showSearch ? (
              <ChevronUp className="h-5 w-5" />
            ) : (
              <ChevronDown className="h-5 w-5" />
            )}
          </button>

          {/* Mail with badge */}
          <div className="relative">
            <Mail className="h-5 w-5 text-gray-700" />
            <span className="absolute -top-2 -right-1 text-xs bg-yellow-400 text-black rounded-full px-[5px]">
              2
            </span>
          </div>

          {/* Bell */}
          <Bell className="h-5 w-5 text-gray-700" />

          {/* Profile */}
          <img
            src="https://i.pravatar.cc/300"
            alt="User"
            className="h-9 w-9 rounded-full object-cover"
          />
        </div>
      </nav>

      {/* Mobile/Tab Search Bar (Dropdown) */}
      {showSearch && (
        <div className="w-full px-[40px] py-3 bg-white shadow-sm max-md:px-5 hidden max-md:block">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Company Name / Device ID / Location"
              className="w-full border rounded-[10px] py-2 pl-10 pr-4 text-[12px] outline-none focus:ring-1 focus:ring-gray-400"
            />
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-500" />
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
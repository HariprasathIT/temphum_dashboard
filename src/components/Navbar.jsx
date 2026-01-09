import { Search, Bell, Mail, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import nystailogo from "/src/assets/nystailogo.png"
import { Link } from "react-router-dom";

import { Dialog, DialogContent } from "@mui/material";
import { Settings, LogOut } from "lucide-react";


function Navbar() {
  const [profileOpen, setProfileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [messageOpen, setMessageOpen] = useState(false);

  return (
    <>
      <nav className="w-full flex items-center gap-3 px-4 lg:px-[40px] py-3 shadow-sm bg-white max-md:px-5 max-md:gap-2 sticky top-0 z-10">
        {/* LEFT — LOGO */}

        <div className="flex items-center gap-2 w-[255px] max-md:flex-1 max-md:w-auto">
          <Link to="/">
            <img
              src={nystailogo}
              alt="NYSTAILOGO"
              className="h-[45px] max-md:h-[35px]"
            />
          </Link>
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
        <div className="flex items-center gap-5 w-[145px] max-md:gap-3 max-md:w-auto" style={{ justifyContent: "end" }}>
          {/* Search Toggle Arrow (Mobile/Tab Only) */}
          <button
            className="hidden max-md:block text-gray-700 hover:text-gray-900"
            aria-label="Toggle search"
            onClick={() => setSearchOpen(true)}
          >
            <Search className="h-5 w-5" />
          </button>


          {/* Mail with badge */}
          <div className="relative cursor-pointer" onClick={() => setMessageOpen(true)}>
            <Mail className="h-5 w-5 text-gray-700" />
            <span className="absolute -top-2 -right-1 text-xs bg-yellow-400 text-black rounded-full px-[5px]">
              2
            </span>
          </div>

          {/* Bell */}
          {/* <Bell className="h-5 w-5 text-gray-700" /> */}

          {/* Profile */}
          <img
            src="https://i.pravatar.cc/300"
            alt="User"
            className="h-9 w-9 rounded-full object-cover cursor-pointer"
            onClick={() => setProfileOpen(true)}
          />
        </div>
      </nav>


      <Dialog
        open={profileOpen}
        onClose={() => setProfileOpen(false)}
        PaperProps={{
          sx: { borderRadius: "12px", width: "260px", paddingY: 1 }
        }}
      >
        <DialogContent>
          <div className="flex flex-col text-center gap-3">

            <div className="flex items-center gap-4 pb-4">
              {/* Profile avatar */}
              <img
                src="https://i.pravatar.cc/200"
                className="h-[55px] w-[55px] rounded-full object-cover"
              />

              {/* Name + Email */}
              <div className="text-start">
                <p className="font-semibold text-[15px] text-[#18181B]">
                  Hari prasath
                </p>
                <p className="text-[12px] text-[#71717A]">
                  hari@gmail.com
                </p>
              </div>
            </div>



            {/* Buttons */}
            <div className="w-full border-t pt-2 flex flex-col gap-2">
              <button className="flex items-center gap-4 text-[14px] py-3">
                <Settings size={16} />
                Manage Account
              </button>

              <button className="flex items-center gap-4 text-[14px] text-red-500 pt-4 border-t py-3">
                <LogOut size={16} />
                Logout
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog
        open={searchOpen}
        onClose={() => setSearchOpen(false)}
        sx={{
          "& .MuiDialog-container": {
            alignItems: "flex-start"
          }
        }}
        PaperProps={{
          sx: {
            borderRadius: "12px",
            width: "90%",
            maxWidth: "400px"
          }
        }}
      >
        <DialogContent>
          <div className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="Company Name / Device ID / Location"
              className="w-full border rounded-[10px] py-2 px-3 text-[13px] outline-none focus:ring-1 focus:ring-gray-400"
            />
          </div>
        </DialogContent>
      </Dialog>

      <Dialog
        open={messageOpen}
        onClose={() => setMessageOpen(false)}
        sx={{
          "& .MuiDialog-container": {
          }
        }}
        PaperProps={{
          sx: {
            borderRadius: "12px",
            width: "95%",
            maxWidth: "500px",
            mt: 2,
            paddingY: 1
          }
        }}
      >
        <DialogContent>
          <h2 className="text-center font-semibold text-[15px] text-[#18181B] pb-3">
            Messages
          </h2>

          {/* SINGLE MESSAGE */}
          <div className="flex justify-between py-2 border-b">
            <div>
              <p className="font-medium text-[13px] text-[#18181B]">
                New device assigned successfully.
              </p>
              <p className="text-[12px] text-[#71717A]">ABC Pharma Pvt Ltd</p>
            </div>
            <p className="text-[11px] text-[#71717A] whitespace-nowrap">5 min ago</p>
          </div>

          <div className="flex justify-between py-2 border-b">
            <div>
              <p className="font-medium text-[13px] text-[#18181B]">
                Request for additional hardware approval.
              </p>
              <p className="text-[12px] text-[#71717A]">FreshMart Logistics</p>
            </div>
            <p className="text-[11px] text-[#71717A] whitespace-nowrap">1 hr ago</p>
          </div>

          <div className="flex justify-between py-2">
            <div>
              <p className="font-medium text-[13px] text-[#18181B]">
                Request for additional hardware approval.
              </p>
              <p className="text-[12px] text-[#71717A]">FreshMart Logistics</p>
            </div>
            <p className="text-[11px] text-[#71717A] whitespace-nowrap">1 hr ago</p>
          </div>

          <div className="flex justify-center pt-3">
            <button className="text-[13px] text-red-600 font-medium" onClick={() => setMessageOpen(false)}>
              View All Messages
            </button>
          </div>
        </DialogContent>
      </Dialog>

    </>
  );
}

export default Navbar;
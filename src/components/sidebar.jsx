import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Plus, Home, Users, BarChart3, KeyRound, Settings, LogOut, Menu, X } from "lucide-react";

export default function Sidebar() {
    const { pathname } = useLocation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    const SidebarContent = () => (
        <>
            {/* Top menu items */}
            <div className="px-4 lg:px-[40px] space-y-5 mt-5">
                {/* Add Device Company */}
                <button className="w-full max-w-[200px] h-[40px] flex items-center gap-3 px-4 bg-[#ED1C24] text-white rounded-lg transition-colors">
                    <Plus size={14} />
                    <span className="text-sm font-medium">Add Device Company</span>
                </button>

                {/* Dashboard */}
                <Link
                    to="/"
                    onClick={closeMobileMenu}
                    className={`w-full max-w-[155px] h-[40px] flex items-center gap-3 px-4 py-3 rounded-lg transition-colors
            ${pathname === "/" ? "bg-[#FFBF4A] text-gray-900" : "text-gray-700 hover:bg-gray-100"}
          `}
                >
                    <Home size={14} />
                    <span className="text-sm font-medium">Dashboard</span>
                </Link>

                {/* Customers */}
                <Link
                    to="/customers"
                    onClick={closeMobileMenu}
                    className={`w-full max-w-[155px] h-[40px] flex items-center gap-3 px-4 py-3 rounded-lg transition-colors
            ${pathname === "/customers" ? "bg-[#FFBF4A] text-gray-900" : "text-gray-700 hover:bg-gray-100"}
          `}
                >
                    <Users size={14} />
                    <span className="text-sm font-medium">Customers</span>
                </Link>

                {/* Reports */}
                <Link
                    to="/reports"
                    onClick={closeMobileMenu}
                    className={`w-full max-w-[155px] h-[40px] flex items-center gap-3 px-4 py-3 rounded-lg transition-colors
            ${pathname === "/reports" ? "bg-[#FFBF4A] text-gray-900" : "text-gray-700 hover:bg-gray-100"}
          `}
                >
                    <BarChart3 size={14} />
                    <span className="text-sm font-medium">Reports</span>
                </Link>

                {/* Credentials */}
                <Link
                    to="/credentials"
                    onClick={closeMobileMenu}
                    className={`w-full max-w-[155px] h-[40px] flex items-center gap-3 px-4 py-3 rounded-lg transition-colors
            ${pathname === "/credentials" ? "bg-[#FFBF4A] text-gray-900" : "text-gray-700 hover:bg-gray-100"}
          `}
                >
                    <KeyRound size={14} />
                    <span className="text-sm font-medium">Credentials</span>
                </Link>
            </div>

            {/* Spacer */}
            <div className="flex-1" />

            {/* Bottom */}
            <div className="p-4 space-y-2">
                <Link
                    to="/settings"
                    onClick={closeMobileMenu}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors
            ${pathname === "/settings" ? "bg-[#FFBF4A] text-gray-900" : "text-gray-700 hover:bg-gray-100"}
          `}
                >
                    <Settings size={14} />
                    <span className="text-sm font-medium">Settings</span>
                </Link>

                <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                    <LogOut size={14} />
                    <span className="text-sm font-medium">Logout</span>
                </button>
            </div>
        </>
    );

    return (
        <>
            {/* Mobile Menu Button */}
            <button
                onClick={toggleMobileMenu}
                className="lg:hidden fixed top-[60px] left-4 z-50 p-2 bg-white rounded-[5px] shadow-lg"
            >
                {isMobileMenuOpen ? <X size={12} /> : <Menu size={12} />}
            </button>

            {/* Desktop Sidebar */}
            <div className="hidden lg:flex h-[90vh] w-[280px] bg-[#fafafa] flex-col sticky top-[70px]">
                <SidebarContent />
            </div>

            {/* Mobile Drawer Overlay */}
            {isMobileMenuOpen && (
                <div
                    className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
                    onClick={closeMobileMenu}
                />
            )}

            {/* Mobile Drawer */}
            <div
                className={`lg:hidden fixed top-0 left-0 h-full w-[280px] bg-[#fafafa] flex flex-col z-50 transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                <SidebarContent />
            </div>
        </>
    );
}
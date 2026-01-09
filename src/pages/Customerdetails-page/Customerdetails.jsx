import { useState } from 'react';
import { ChevronLeft, ChevronRight, TrendingDown, TrendingUp } from 'lucide-react';
import headerimg from "/src/assets/CUSTOMERDETAILS/Customerdetailsheader.png"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";

const Customerdetails = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");

    const customerData = {
        name: 'Jhone dehe',
        email: 'Jhone@gmail.com',
        location: 'Coimbatore',
        status: 'Active',
        hardwareSold: '3547',
        createdDate: 'Jan 22, 2024'
    };

    const statsCards = [
        { label: 'TOTAL HARDWARE SOLD', value: '4572', change: '+36%', isPositive: true },
        { label: 'TOTAL ALERTS GENERATED', value: '2,38,485', change: '+14%', isPositive: false },
        { label: 'ACTIVE VS OFFLINE DEVICES', value: '84,382', change: '+36%', isPositive: true },
        { label: 'TOTAL HARDWARE SOLD', value: '4572', change: '+36%', isPositive: true },
    ];

    const customers = [
        { id: 1, name: 'ABC Pharma Pvt Ltd', location: 'Coimbatore', status: 'Active', devices: 12, date: 'Jan 22, 2024', statusColor: 'green', lastseen: "3 min ago" },
        { id: 2, name: 'FreshMart Logistics', location: 'Bengaluru', status: 'Inactive', devices: 12, date: 'Jan 22, 2024', statusColor: 'yellow', lastseen: "3 min ago" },
        { id: 3, name: 'CoolTemp Solutions', location: 'Coimbatore', status: 'Active', devices: 12, date: 'Jan 22, 2024', statusColor: 'green', lastseen: "3 min ago" },
        // { id: 4, name: 'MediLife Inc', location: 'Pune', status: 'Active', devices: 12, date: 'Jan 22, 2024', statusColor: 'green', lastseen: "3 min ago" }
    ];

    const filteredCustomers = customers.filter(customer => {
        const matchesSearch = customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            customer.location.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesSearch;
    });

    return (
        <>
            <section className="max-w-[1350px] mx-auto px-4 mt-5 mb-4">

                {/* Header Section */}
                <div className="relative rounded-xl overflow-hidden h-[100px] sm:h-[120px] md:h-[140px] mb-5">

                    <img
                        src={headerimg}
                        alt="Customer Banner"
                        className="w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 bg-black/10 flex flex-col items-center justify-center text-white px-4">
                        <h1 className="text-[16px] sm:text-[18px] md:text-[22px] text-[#353535] font-bold mb-1 sm:mb-2 text-center">
                            ABC Pharma Pvt Ltd
                        </h1>
                        <p className="text-center text-[#353535] text-[12px] sm:text-[14px] md:text-[17px] max-w-[90%] sm:max-w-[500px] md:max-w-[600px]">
                            Manage customer details, assign hardware, and monitor account status.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    {/* Recent System Activities */}
                    <div className="xl:col-span-2 bg-white rounded-lg shadow-sm border border-gray-100">

                        {/* Header Section */}
                        <div className="p-6 flex items-center justify-between border-b">
                            <div className="flex items-center gap-4">
                                <div className="w-16 h-16 bg-purple-200 rounded-full flex items-center justify-center">
                                    <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 2a3 3 0 00-3 3v1H5a2 2 0 00-2 2v9a2 2 0 002 2h10a2 2 0 002-2V8a2 2 0 00-2-2h-2V5a3 3 0 00-3-3zm0 2a1 1 0 011 1v1H9V5a1 1 0 011-1z" />
                                    </svg>
                                </div>
                                <div>
                                    <h1 className="text-[#353535] text-[17px] font-bold text-gray-800">ABC Pharma Pvt Ltd</h1>
                                    <p className="text-[#353535] text-[12px] mt-1">Hardware ID : MS353J675K_45</p>
                                </div>
                            </div>
                            <button className="bg-[#ED1C24] text-[12px] text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
                                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                                </svg>
                                Edit
                            </button>
                        </div>

                        {/* Swipeable Table Section */}
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <tbody>
                                    <tr className="border-b">
                                        <td className="px-6 py-4 font-semibold text-[#18181B] text-[14px] whitespace-nowrap border-r border-[#E4E4E7]">
                                            Customer Name
                                        </td>
                                        <td className="px-6 py-4 text-[#71717A] text-[14px] whitespace-nowrap border-r border-[#E4E4E7]">
                                            {customerData.name}
                                        </td>
                                        <td className="px-6 py-4 font-semibold text-[#18181B] text-[14px] whitespace-nowrap border-r border-[#E4E4E7]">
                                            Mail ID
                                        </td>
                                        <td className="px-6 py-4 text-[#71717A] text-[14px] whitespace-nowrap border-r border-[#E4E4E7]">
                                            {customerData.email}
                                        </td>
                                        <td className="px-6 py-4 font-semibold text-[#18181B] text-[14px] whitespace-nowrap border-r border-[#E4E4E7]">
                                            Hardware Sold
                                        </td>
                                        <td className="px-6 py-4 text-[#71717A] text-[14px] whitespace-nowrap border-r border-[#E4E4E7]">
                                            {customerData.hardwareSold}
                                        </td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="px-6 py-4 font-semibold text-[#18181B] text-[14px] whitespace-nowrap border-r border-[#E4E4E7]">
                                            Location
                                        </td>
                                        <td className="px-6 py-4 text-[#71717A] text-[14px] whitespace-nowrap border-r border-[#E4E4E7]">
                                            {customerData.location}
                                        </td>
                                        <td className="px-6 py-4 font-semibold text-[#18181B] text-[14px] whitespace-nowrap border-r border-[#E4E4E7]">
                                            Status
                                        </td>
                                        <td className="px-6 py-4 text-[#71717A] text-[14px] whitespace-nowrap border-r border-[#E4E4E7]">
                                            <span className="text-green-600 font-medium">
                                                {customerData.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 font-semibold text-[#18181B] text-[14px] whitespace-nowrap border-r border-[#E4E4E7]">
                                            Created Date
                                        </td>
                                        <td className="px-6 py-4 text-[#71717A] text-[14px] whitespace-nowrap border-r border-[#E4E4E7]">
                                            {customerData.createdDate}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Mobile scroll hint */}
                        <div className="md:hidden bg-gray-50 px-6 py-2 text-center text-xs text-gray-500 border-t">
                            ← Swipe to view all details →
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-4 px-6 mt-4">
                            {statsCards.map((stat, index) => (
                                <div
                                    key={index}
                                    className="w-full h-[91px] bg-white rounded-lg p-5 border border-gray-100"
                                >
                                    <div className="text-[11px] font-medium text-[#71717A] mb-2 tracking-wider">
                                        {stat.label}
                                    </div>

                                    <div className="flex items-end justify-between">
                                        <div className="text-[18px] font-bold text-[#18181B]">{stat.value}</div>

                                        <div
                                            className={`flex items-center text-[12px] font-medium ${stat.isPositive ? "text-[#22C55E]" : "text-[#EF4444]"
                                                }`}
                                        >
                                            {stat.change}
                                            {stat.isPositive ? (
                                                <TrendingUp className="w-4 h-4 ml-1" />
                                            ) : (
                                                <TrendingDown className="w-4 h-4 ml-1" />
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="bg-white border border-gray-200 overflow-hidden mt-4">
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                        <tr className="bg-[#F2F2F2] border-b border-gray-200">
                                            <th className="px-6 py-4 text-left text-[13px] font-bold text-[#181818]">Device ID</th>
                                            <th className="px-6 py-4 text-left text-[13px] font-bold text-[#181818]">Location</th>
                                            <th className="px-6 py-4 text-left text-[13px] font-bold text-[#181818]">Status</th>
                                            <th className="px-6 py-4 text-left text-[13px] font-bold text-[#181818]">Alerts</th>
                                            <th className="px-6 py-4 text-left text-[13px] font-bold text-[#181818]">Last Seen</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredCustomers.map((customer, index) => (
                                            <tr key={customer.id} className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50/30'}`}>
                                                <td className="px-6 py-4 font-medium text-[13px] text-[#71717A]">{customer.name}</td>
                                                <td className="px-6 py-4 font-medium text-[13px] text-[#71717A]">{customer.location}</td>
                                                <td className="px-6 py-4">
                                                    <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium ${customer.statusColor === 'green'
                                                        ? 'bg-green-50 text-green-700'
                                                        : 'bg-yellow-50 text-yellow-700'
                                                        }`}>
                                                        <span className={`w-2 h-2 rounded-full ${customer.statusColor === 'green' ? 'bg-green-500' : 'bg-yellow-500'
                                                            }`}></span>
                                                        {customer.status}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 font-medium text-[13px] text-[#71717A]">{customer.devices}</td>
                                                <td className="px-6 py-4 font-medium text-[13px] text-[#71717A]">{customer.lastseen}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="px-6 py-4 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                            <div className="text-[13px] text-[#71717A]">
                                Showing 1 to 7 of 45 entries
                            </div>
                            <div className="flex items-center gap-2">
                                <button className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors">
                                    <ChevronLeft className="w-4 h-4 text-gray-600" />
                                </button>
                                {[1, 2, 3, 4, 5].map((page) => (
                                    <button
                                        key={page}
                                        onClick={() => setCurrentPage(page)}
                                        className={`w-8 h-8 rounded-xl text-[13px] font-medium transition-colors ${currentPage === page
                                            ? 'bg-red-600 text-white'
                                            : 'border border-gray-300 text-gray-600 hover:bg-gray-50'
                                            }`}
                                    >
                                        {page}
                                    </button>
                                ))}
                                <button className="w-8 h-8 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50 transition-colors">
                                    ...
                                </button>
                                <button className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors">
                                    <ChevronRight className="w-4 h-4 text-gray-600" />
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>

    );
};

export default Customerdetails;
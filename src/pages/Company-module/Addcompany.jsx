import { useState } from 'react';
import { ChevronDown, TrendingDown, TrendingUp } from 'lucide-react';
import headerimg from "/src/assets/ADDFORM/addformheader.png"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";
import { Link } from 'react-router-dom';

const Adddevicecompany = () => {

    const statsCards = [
        { label: 'TOTAL HARDWARE SOLD', value: '4572', change: '+36%', isPositive: true },
        { label: 'TOTAL ALERTS GENERATED', value: '2,38,485', change: '+14%', isPositive: false },
        { label: 'ACTIVE VS OFFLINE DEVICES', value: '84,382', change: '+36%', isPositive: true },
    ];

    const customers = [
        { id: 1, name: 'ABC Pharma Pvt Ltd', location: 'Coimbatore', status: 'Active', devices: 12, date: 'Jan 22, 2024', statusColor: 'green' },
        { id: 2, name: 'FreshMart Logistics', location: 'Bengaluru', status: 'Inactive', devices: 12, date: 'Jan 22, 2024', statusColor: 'yellow' },
        { id: 3, name: 'CoolTemp Solutions', location: 'Coimbatore', status: 'Active', devices: 12, date: 'Jan 22, 2024', statusColor: 'green' },
        { id: 4, name: 'MediLife Inc', location: 'Pune', status: 'Active', devices: 12, date: 'Jan 22, 2024', statusColor: 'green' },
        { id: 5, name: 'ABC Pharma Pvt Ltd', location: 'Coimbatore', status: 'Active', devices: 12, date: 'Jan 22, 2024', statusColor: 'green' },
        { id: 6, name: 'FreshMart Logistics', location: 'Bengaluru', status: 'Inactive', devices: 12, date: 'Jan 22, 2024', statusColor: 'yellow' },
        { id: 7, name: 'CoolTemp Solutions', location: 'Coimbatore', status: 'Active', devices: 12, date: 'Jan 22, 2024', statusColor: 'green' }
    ];

    return (
        <>
            <section className="max-w-[1350px] mx-auto px-4 mt-5">

                {/* Header Section */}
                <div className="relative rounded-xl overflow-hidden h-[100px] sm:h-[120px] md:h-[140px] mb-6">

                    <img
                        src={headerimg}
                        alt="Customer Banner"
                        className="w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 bg-black/10 flex flex-col items-center justify-center text-white px-4">
                        <h1 className="text-[16px] sm:text-[18px] md:text-[22px] text-[#353535] font-bold mb-1 sm:mb-2 text-center">
                            ADD CUSTOMERS
                        </h1>
                        <p className="text-center text-[#353535] text-[12px] sm:text-[14px] md:text-[17px] max-w-[90%] sm:max-w-[500px] md:max-w-[600px]">
                            Manage customer details, assign hardware, and monitor account status.
                        </p>
                    </div>
                </div>

                <div className="max-w-[1350px] mx-auto mt-5 px-4 bg-white rounded-lg shadow-sm border border-gray-200 mb-4">
                    <div className="max-w-[1010px] mx-auto py-8">
                        {/* Row 1 */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                            {/* Hardware ID */}
                            <div>
                                <label className="text-[14px] text-[#585858] font-bold">
                                    Hardware ID
                                </label>
                                <input
                                    type="text"
                                    className="text-[12px] text-[#A1A1AA] w-full px-4 py-2.5 border border-[#E4E4E7] rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent mt-2"
                                />
                            </div>

                            {/* Customer Name */}
                            <div>
                                <label className="text-[14px] text-[#585858] font-bold">
                                    Customer Name
                                </label>
                                <input
                                    type="text"
                                    className="text-[12px] text-[#A1A1AA] w-full px-4 py-2.5 border border-[#E4E4E7] rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent mt-2"
                                />
                            </div>

                            {/* Email ID */}
                            <div>
                                <label className="text-[14px] text-[#585858] font-bold">
                                    Email ID
                                </label>
                                <input
                                    type="text"
                                    className="text-[12px] text-[#A1A1AA] w-full px-4 py-2.5 border border-[#E4E4E7] rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent mt-2"
                                />
                            </div>
                        </div>

                        {/* Row 2 */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                            {/* Phone Number */}
                            <div>
                                <label className="text-[14px] text-[#585858] font-bold">
                                    Phone Number
                                </label>
                                <input
                                    type="text"
                                    className="text-[12px] text-[#A1A1AA] w-full px-4 py-2.5 border border-[#E4E4E7] rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent mt-2"
                                />
                            </div>

                            {/* Location */}
                            <div>
                                <label className="text-[14px] text-[#585858] font-bold">
                                    Location
                                </label>
                                <div className="relative">
                                    <select className="text-[12px] text-[#A1A1AA] w-full px-4 py-2.5 border border-[#E4E4E7] rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent mt-2">
                                        <option>Location 1</option>
                                        <option>Location 2</option>
                                        <option>Location 3</option>
                                    </select>
                                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-3 h-3 text-gray-600 pointer-events-none mt-1" />
                                </div>
                            </div>

                            {/* Status */}
                            <div>
                                <label className="text-[14px] text-[#585858] font-bold">
                                    Status
                                </label>
                                <div className="relative">
                                    <select className="text-[12px] text-[#A1A1AA] w-full px-4 py-2.5 border border-[#E4E4E7] rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent mt-2">
                                        <option>Active</option>
                                        <option>Inactive</option>
                                        <option>Pending</option>
                                    </select>
                                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-3 h-3 text-gray-600 pointer-events-none mt-1" />
                                </div>
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row justify-center gap-4 py-4 w-full">
                            <button className="text-[12px] px-8 py-2.5 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium rounded-md transition-colors w-full sm:w-auto">
                                Cancel
                            </button>
                            <Link to="/customers">
                                <button className="text-[12px] px-6 py-2.5 bg-red-600 hover:bg-red-700 text-white font-medium rounded-md transition-colors w-full sm:w-auto">
                                    Add Customer
                                </button>
                            </Link>

                        </div>

                    </div>
                </div>

            </section>
        </>

    );
};

export default Adddevicecompany;
import { useState } from 'react';
import { TrendingDown, TrendingUp } from 'lucide-react';
import headerimg from "/src/assets/REPORT/reportheader.png"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";

const CustomerTable = () => {

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
                            Reports Management
                        </h1>
                        <p className="text-center text-[#353535] text-[12px] sm:text-[14px] md:text-[17px] max-w-[90%] sm:max-w-[500px] md:max-w-[600px]">
                            View and export sales and usage reports in Excel format.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

                    {/* Recent System Activities */}
                    <div className="xl:col-span-2 bg-white rounded-lg shadow-sm border border-gray-100">

                        {/* header */}
                        <div className="py-4 px-6 border border-gray-100">
                            <div className="flex flex-col sm:flex-row  justify-between gap-4">

                                {/* Left side - From / To */}
                                <div className="flex flex-col sm:flex-row gap-4">

                                    {/* From */}
                                    <div className="flex items-center gap-2">
                                        <span className="text-[13px] text-[#18181B]">From :</span>
                                        <input
                                            type="date"
                                            className="bg-transparent border border-gray-400 rounded-md px-3 py-1.5 text-[12px] focus:outline-none cursor-pointer"
                                        />
                                    </div>

                                    {/* To */}
                                    <div className="flex items-center gap-2">
                                        <span className="text-[13px] text-[#18181B]">To :</span>
                                        <input
                                            type="date"
                                            className="bg-transparent border border-gray-400 rounded-md px-3 py-1.5 text-[12px] focus:outline-none cursor-pointer"
                                        />
                                    </div>

                                </div>

                                {/* Export PDF Button */}
                                <button className="bg-white text-[#18181B] px-4 py-2 rounded-md flex items-center gap-2 text-[13px] font-medium hover:bg-gray-200">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19.5 14.25v-6.75a2.25 2.25 0 00-2.25-2.25h-10.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h6.75m3.75-4.5l-3 3m0 0l-3-3m3 3v-12" />
                                    </svg>
                                    Export PDF
                                </button>

                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 md:gap-4 px-6 mt-4">
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
                                            <th className="px-6 py-4 text-left text-[13px] font-bold text-[#181818]">Customer Name</th>
                                            <th className="px-6 py-4 text-left text-[13px] font-bold text-[#181818]">Location</th>
                                            <th className="px-6 py-4 text-left text-[13px] font-bold text-[#181818]">Hardware Sold</th>
                                            <th className="px-6 py-4 text-left text-[13px] font-bold text-[#181818]">Active Devices</th>
                                            <th className="px-6 py-4 text-left text-[13px] font-bold text-[#181818]">Alerts Generated</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {customers.map((customer, index) => (
                                            <tr key={customer.id} className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50/30'}`}>
                                                <td className="px-6 py-4 font-medium text-[13px] text-[#71717A]">{customer.name}</td>
                                                <td className="px-6 py-4 font-medium text-[13px] text-[#71717A]">{customer.location}</td>
                                                <td className="px-6 py-4 font-medium text-[13px] text-[#71717A]">{customer.status}</td>
                                                <td className="px-6 py-4 font-medium text-[13px] text-[#71717A]">{customer.devices} Devices</td>
                                                <td className="px-6 py-4 font-medium text-[13px] text-[#71717A]">{customer.date}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                        </div>

                    </div>

                    {/* Right side 2 charts 1 by 1 */}
                    <div className="xl:col-span-1 bg-white rounded-lg shadow-sm border border-gray-100 p-4 sm:p-6">
                        {/* Active Device Chart */}
                        <div className="">
                            <h3 className="text-[14px] font-semibold text-[#18181B] mb-4">Active Device</h3>
                            <div className="h-[250px]">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart
                                        data={[
                                            { name: '12', value: 17000 },
                                            { name: '44', value: 30000 },
                                            { name: '55', value: 21000 },
                                            { name: '67', value: 32000 },
                                            { name: '898', value: 13000 }
                                        ]}
                                        margin={{ top: 10, right: 10, left: -30, bottom: 0 }}
                                    >
                                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                                        <XAxis
                                            dataKey="name"
                                            axisLine={false}
                                            tickLine={false}
                                            tick={{ fill: '#6b7280', fontSize: 12 }}
                                        />
                                        <YAxis
                                            axisLine={false}
                                            tickLine={false}
                                            tick={{ fill: '#9ca3af', fontSize: 12 }}
                                            tickFormatter={(value) => `${value / 1000}K`}
                                        />
                                        <Bar
                                            dataKey="value"
                                            fill="#ff6b6b"
                                            radius={[8, 8, 8, 8]}
                                            barSize={40}
                                        />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </div>

                        {/* Offline Devices Chart */}
                        <div className='mt-4 shadow-sm'>
                            <h3 className="text-[14px] font-semibold text-gray-900 mb-4">Offline Devices</h3>
                            <div className="h-[250px]">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart
                                        data={[
                                            { name: '12', value: 16000 },
                                            { name: '44', value: 30000 },
                                            { name: '55', value: 21000 },
                                            { name: '67', value: 32000 },
                                            { name: '898', value: 12000 }
                                        ]}
                                        margin={{ top: 10, right: 10, left: -30, bottom: 0 }}
                                    >
                                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                                        <XAxis
                                            dataKey="name"
                                            axisLine={false}
                                            tickLine={false}
                                            tick={{ fill: '#6b7280', fontSize: 12 }}
                                        />
                                        <YAxis
                                            axisLine={false}
                                            tickLine={false}
                                            tick={{ fill: '#9ca3af', fontSize: 12 }}
                                            tickFormatter={(value) => `${value / 1000}K`}
                                        />
                                        <Bar
                                            dataKey="value"
                                            fill="#f59e0b"
                                            radius={[8, 8, 8, 8]}
                                            barSize={40}
                                        />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </div>

                </div>

            </section>
        </>

    );
};

export default CustomerTable;
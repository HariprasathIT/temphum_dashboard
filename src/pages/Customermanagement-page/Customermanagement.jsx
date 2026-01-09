import React, { useState } from 'react';
import { Search, Plus, Download, Eye, Trash2, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import headerimg from "/src/assets/CMS/headerimg.png"
import { Link } from 'react-router-dom';

export default function CustomerManagement() {
    const [searchTerm, setSearchTerm] = useState('');
    const [stateFilter, setStateFilter] = useState('All');
    const [statusFilter, setStatusFilter] = useState('All');
    const [dateFilter, setDateFilter] = useState('All');
    const [currentPage, setCurrentPage] = useState(1);

    const customers = [
        { id: 1, name: 'ABC Pharma Pvt Ltd', location: 'Coimbatore', status: 'Active', devices: 12, date: 'Jan 22, 2024', statusColor: 'green' },
        { id: 2, name: 'FreshMart Logistics', location: 'Bengaluru', status: 'Inactive', devices: 12, date: 'Jan 22, 2024', statusColor: 'yellow' },
        { id: 3, name: 'CoolTemp Solutions', location: 'Coimbatore', status: 'Active', devices: 12, date: 'Jan 22, 2024', statusColor: 'green' },
        { id: 4, name: 'MediLife Inc', location: 'Pune', status: 'Active', devices: 12, date: 'Jan 22, 2024', statusColor: 'green' },
    ];

    const filteredCustomers = customers.filter(customer => {
        const matchesSearch = customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            customer.location.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesSearch;
    });

    return (

        <>
            <div className="max-w-[1350px] mx-auto mt-5 px-4">
                {/* Header Section */}
                <div className="relative rounded-xl overflow-hidden h-[100px] sm:h-[120px] md:h-[140px] mb-6">

                    <img
                        src={headerimg}
                        alt="Customer Banner"
                        className="w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 bg-black/10 flex flex-col items-center justify-center text-white px-4">
                        <h1 className="text-[16px] sm:text-[18px] md:text-[22px] text-[#353535] font-bold mb-1 sm:mb-2 text-center">
                            Customer Management
                        </h1>
                        <p className="text-center text-[#353535] text-[12px] sm:text-[14px] md:text-[17px] max-w-[90%] sm:max-w-[500px] md:max-w-[600px]">
                            Manage customer details, assign hardware, and monitor account status.
                        </p>
                    </div>
                </div>

                {/* Search and Add Customer Section */}
                <div className="bg-white rounded-xl  shadow-sm border border-gray-200 p-6 mb-6">
                    <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                        <div className="relative flex-1 w-full md:max-w-md">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                            <input
                                type="text"
                                placeholder="Search by Customer Name / Email"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full text-[12px] pl-10 pr-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                            />
                        </div>
                        <button className="bg-[#ED1C24] text-[13px] hover:bg-red-700 text-white px-6 h-[40px] rounded-xl flex items-center gap-2 font-medium transition-colors shadow-sm w-full md:w-auto justify-center">
                            <Plus className="w-4 h-4" />
                            Add Customer
                        </button>
                    </div>
                </div>

                {/* Filters and Export Section */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
                    <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">

                        {/* Filters */}
                        <div className="flex flex-col sm:flex-row flex-wrap gap-4 w-full lg:w-auto">

                            {/* State */}
                            <div className="flex items-center gap-2 w-full sm:w-auto">
                                <span className="text-[13px] font-semibold text-[#18181B] whitespace-nowrap">State:</span>
                                <select
                                    value={stateFilter}
                                    onChange={(e) => setStateFilter(e.target.value)}
                                    className="h-[30px] w-full sm:w-[120px] text-[13px] border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none bg-white cursor-pointer"
                                >
                                    <option>All</option>
                                    <option>Maharashtra</option>
                                    <option>Karnataka</option>
                                    <option>Tamil Nadu</option>
                                </select>
                            </div>

                            {/* Status */}
                            <div className="flex items-center gap-2 w-full sm:w-auto">
                                <span className="text-[13px] font-semibold text-[#18181B] whitespace-nowrap">Status:</span>
                                <select
                                    value={statusFilter}
                                    onChange={(e) => setStatusFilter(e.target.value)}
                                    className="h-[30px] w-full sm:w-[120px] text-[13px] border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none bg-white cursor-pointer"
                                >
                                    <option>All</option>
                                    <option>Active</option>
                                    <option>Inactive</option>
                                </select>
                            </div>

                            {/* Date */}
                            <div className="flex items-center gap-2 w-full sm:w-auto">
                                <span className="text-[13px] font-semibold text-[#18181B] whitespace-nowrap">Date:</span>
                                <select
                                    value={dateFilter}
                                    onChange={(e) => setDateFilter(e.target.value)}
                                    className="h-[30px] w-full sm:w-[120px] text-[13px] border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none bg-white cursor-pointer"
                                >
                                    <option>All</option>
                                    <option>Today</option>
                                    <option>Last 7 days</option>
                                    <option>Last 30 days</option>
                                </select>
                            </div>

                        </div>

                        {/* Export */}
                        <button className="text-[11px] bg-white hover:bg-gray-50 text-gray-700 px-4 h-[30px] rounded-lg flex items-center justify-center gap-2 font-medium border border-gray-300 transition-colors sm:w-auto">
                            <Download className="w-3 h-3" />
                            Export PDF
                        </button>

                    </div>
                </div>

                {/* Table Section */}
                <div className="grid grid-cols-1 gap-6 mt-6 mb-4">
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">

                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="bg-[#F2F2F2] border-b border-gray-200">
                                        <th className="px-6 py-4 text-left text-[13px] font-bold text-[#181818]">Customer Name</th>
                                        <th className="px-6 py-4 text-left text-[13px] font-bold text-[#181818]">Location</th>
                                        <th className="px-6 py-4 text-left text-[13px] font-bold text-[#181818]">Devices</th>
                                        <th className="px-6 py-4 text-left text-[13px] font-bold text-[#181818]">Status</th>
                                        <th className="px-6 py-4 text-left text-[13px] font-bold text-[#181818]">Created Date</th>
                                        <th className="px-6 py-4 text-left text-[13px] font-bold text-[#181818]">Actions</th>
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
                                            <td className="px-6 py-4 font-medium text-[13px] text-[#71717A]">{customer.devices} Devices</td>
                                            <td className="px-6 py-4 font-medium text-[13px] text-[#71717A]">{customer.date}</td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-2">
                                                    <Link to={`/customer/${customer.id}`}>
                                                        <button className="bg-[#FFBF4A] text-white px-4 py-2 rounded-lg flex items-center gap-2 text-[13px] font-medium transition-colors ">
                                                            <Eye className="w-3 h-3" />
                                                            View
                                                        </button>
                                                    </Link>
                                                    <button className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-lg transition-colors">
                                                        <Trash2 className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
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
            </div>
        </>
    );
}
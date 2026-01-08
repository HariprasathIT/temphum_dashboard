import React, { useState } from 'react';
import { TrendingUp, TrendingDown, FileText, ChevronDown, ChevronRight, MoreHorizontal } from 'lucide-react';

const Dashboard = () => {
    const [selectedPeriod, setSelectedPeriod] = useState('12 Months');

    const statsCards = [
        { label: 'TOTAL CUSTOMERS', value: '4572', change: '+36%', isPositive: true },
        { label: 'TOTAL HARDWARE SOLD', value: '2,38,485', change: '+14%', isPositive: false },
        { label: 'ACTIVE DEVICES', value: '84,382', change: '+36%', isPositive: true },
        { label: 'OFFLINE DEVICES', value: '173', change: '+36%', isPositive: true },
    ];

    const recentActivities = [
        { label: 'High Temperature', value: '1,43,382', width: 'w-full' },
        { label: 'High Humidity', value: '87,974', width: 'w-[85%]' },
        { label: 'Low Temperature', value: '45,211', width: 'w-[45%]' },
        { label: 'Device Offline', value: '21,893', width: 'w-[25%]' },
    ];

    const recentCustomers = [
        { name: 'ABC Pharma Pvt Ltd', email: 'contact@abcpharma.com', location: 'Coimbatore, TN', id: '2332', avatar: '👨‍💼' },
        { name: 'FreshMart Logistics', email: 'supply@freshmart.in', location: 'Bengaluru, KA', id: '45545', avatar: '👨‍💼' },
    ];

    const systemActivities = [
        { status: 'Completed', title: 'Hardware Added', description: 'Lorem Ipsum is simply', company: 'ABC Pharma', date: 'Jan 17, 2026', statusColor: 'bg-green-500' },
        { status: 'Completed', title: 'Device Assigned', description: 'Lorem Ipsum is simply', company: 'FreshMart', date: 'Jan 17, 2026', statusColor: 'bg-green-500' },
    ];



    return (
        <div className="py-6 max-w-[1350px] mx-auto px-4" >
            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6 mb-6">
                {statsCards.map((stat, index) => (
                    <div
                        key={index}
                        className="w-full h-[91px] bg-white rounded-lg p-5 shadow-sm border border-gray-100"
                    >
                        <div className="text-xs font-medium text-[#71717A] mb-2 tracking-wider">
                            {stat.label}
                        </div>

                        <div className="flex items-end justify-between">
                            <div className="text-[21px] font-bold text-[#18181B]">{stat.value}</div>

                            <div
                                className={`flex items-center text-[13px] font-medium ${stat.isPositive ? "text-[#22C55E]" : "text-[#EF4444]"
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

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Sales Overview - Takes 2 columns on large screens */}
                <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border border-gray-100">
                    <div className="p-4 sm:p-6 pb-4">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
                            <h2 className="text-[16px] font-bold text-[#18181B]">Sales overview</h2>
                            <div className="flex flex-wrap items-center gap-2">
                                <button
                                    onClick={() => setSelectedPeriod('12 Months')}
                                    className={`px-3 sm:px-4 py-1.5 text-[12px] rounded ${selectedPeriod === '12 Months' ? 'bg-[#18181B] text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                                >
                                    12 Months
                                </button>
                                <button
                                    onClick={() => setSelectedPeriod('6 Months')}
                                    className={`px-3 sm:px-4 py-1.5 text-[12px] rounded ${selectedPeriod === '6 Months' ? 'bg-[#18181B] text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                                >
                                    6 Months
                                </button>
                                <button
                                    onClick={() => setSelectedPeriod('30 Days')}
                                    className={`px-3 sm:px-4 py-1.5 text-[12px] rounded ${selectedPeriod === '30 Days' ? 'bg-[#18181B] text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                                >
                                    30 Days
                                </button>
                                <button
                                    onClick={() => setSelectedPeriod('7 Days')}
                                    className={`px-3 sm:px-4 py-1.5 text-[12px] rounded ${selectedPeriod === '7 Days' ? 'bg-[#18181B] text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                                >
                                    7 Days
                                </button>
                                <button className="px-3 sm:px-4 py-1.5 text-[12px] border border-gray-300 rounded flex items-center gap-2 hover:bg-gray-50">
                                    <FileText className="w-4 h-4" />
                                    <span className="hidden sm:inline">Export PDF</span>
                                    <span className="sm:hidden">Export</span>
                                </button>
                            </div>
                        </div>

                        <div className="relative h-48 sm:h-64 bg-gradient-to-b from-red-50 to-transparent rounded">
                            <svg className="w-full h-full" viewBox="0 0 800 250" preserveAspectRatio="none">
                                <path
                                    d="M 0,180 Q 50,170 100,160 T 200,155 Q 250,150 300,145 T 400,160 Q 450,155 500,140 T 600,135 Q 650,130 700,125 T 800,130"
                                    stroke="#ef4444"
                                    strokeWidth="2"
                                    fill="none"
                                />
                                <path
                                    d="M 0,200 Q 50,195 100,185 T 200,180 Q 250,175 300,170 T 400,185 Q 450,180 500,165 T 600,160 Q 650,155 700,150 T 800,155"
                                    stroke="#dc2626"
                                    strokeWidth="2"
                                    fill="none"
                                />
                                <circle cx="300" cy="145" r="4" fill="#ef4444" />
                            </svg>

                            <div className="absolute bottom-0 left-0 right-0 flex justify-between px-2 sm:px-4 text-[10px] sm:text-xs text-[#71717A]">
                                <span>Feb</span>
                                <span className="hidden sm:inline">Mar</span>
                                <span>Apr</span>
                                <span className="hidden sm:inline">May</span>
                                <span>Jun</span>
                                <span className="hidden sm:inline">Jul</span>
                                <span>Aug</span>
                                <span className="hidden sm:inline">Sep</span>
                                <span>Oct</span>
                                <span className="hidden sm:inline">Nov</span>
                                <span>Dec</span>
                                <span>Jan</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Recent Activities */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 sm:p-6">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-[16px] font-bold text-[#18181B]">Recent Activities</h2>
                        <button className="flex items-center gap-1 text-[12px] text-[#18181B]">
                            Last 7 Days <ChevronDown className="w-4 h-4" />
                        </button>
                    </div>

                    <div className="space-y-5">
                        {recentActivities.map((activity, index) => (
                            <div key={index}>
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-[13px] font-medium text-[#18181B]">{activity.label}</span>
                                    <span className="text-[13px] font-medium text-[#18181B]">{activity.value}</span>
                                </div>
                                <div className="w-full bg-gray-100 rounded-full h-[5px]">
                                    <div className={`bg-red-500 h-[5px] rounded-full ${activity.width}`}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">

                {/* Recent Customers */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 sm:p-6">
                    <h2 className="text-[16px] font-bold text-[#18181B] mb-1">Recent Customers</h2>
                    <p className="text-[13px] text-[#71717A] mb-6">Recently added customers with assigned hardware.</p>

                    <div className="space-y-4">
                        {recentCustomers.map((customer, index) => (
                            <div key={index} className="flex items-center gap-3">
                                <div className="w-[36px] h-[36px] rounded-full bg-blue-100 flex items-center justify-center text-xl flex-shrink-0">
                                    {customer.avatar}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="text-[13px] font-bold text-[#18181B] truncate">{customer.name}</div>
                                    <div className="text-[12px] text-[#71717A] truncate">{customer.email}</div>
                                </div>
                                <div className="text-right flex-shrink-0">
                                    <div className="text-[13px] text-[#18181B]">{customer.location}</div>
                                    <div className="text-[12px] text-[#71717A]">{customer.id}</div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button className="flex items-center gap-2 text-[14px] text-[#18181B] mt-6 hover:gap-3 transition-all">
                        VIEW ALL CUSTOMERS <ChevronRight className="w-4 h-4" />
                    </button>
                </div>

                {/* Recent System Activities */}
                <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border border-gray-100 p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-3">
                        <div>
                            <h2 className="text-[16px] font-bold text-[#18181B] mb-1">Recent System Activities</h2>
                            <p className="text-[13px] text-[#71717A]">Recently added customers with assigned hardware.</p>
                        </div>
                        <button className="flex items-center gap-2 text-[12px] text-red-600 hover:text-[#ED1C24] self-start sm:self-auto">
                            See All <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>

                    {/* Scrollable table wrapper for mobile/tablet */}
                    <div className="overflow-x-auto -mx-4 sm:-mx-6 px-4 sm:px-6">
                        <table className="w-full min-w-[800px]">
                            <thead>
                                <tr className="border-b border-gray-200">
                                    <th className="text-left py-3 px-3 text-[12px] font-semibold text-[#71717A] uppercase tracking-wide">Status</th>
                                    <th className="text-left py-3 px-3 text-[12px] font-semibold text-[#71717A] uppercase tracking-wide">Activity</th>
                                    <th className="text-left py-3 px-3 text-[12px] font-semibold text-[#71717A] uppercase tracking-wide">Company</th>
                                    <th className="text-left py-3 px-3 text-[12px] font-semibold text-[#71717A] uppercase tracking-wide">Type</th>
                                    <th className="text-left py-3 px-3 text-[12px] font-semibold text-[#71717A] uppercase tracking-wide">Date</th>
                                    <th className="text-left py-3 px-3 text-[12px] font-semibold text-[#71717A] uppercase tracking-wide">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {systemActivities.map((activity, index) => (
                                    <tr
                                        key={index}
                                        className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                                    >
                                        <td className="py-4 px-3">
                                            <div className="flex items-center gap-3">
                                                <div className={`w-2 h-2 rounded-full ${activity.statusColor}`}></div>
                                                <span className={`text-[12px] font-medium px-3 py-1 rounded whitespace-nowrap ${activity.status === 'Completed' ? 'bg-green-50 text-green-700' :
                                                    activity.status === 'Pending' ? 'bg-yellow-50 text-yellow-700' :
                                                        'bg-red-50 text-red-700'
                                                    }`}>
                                                    {activity.status}
                                                </span>
                                            </div>
                                        </td>
                                        <td className="py-4 px-3">
                                            <div className="text-[13px] font-semibold text-[#18181B]">{activity.title}</div>
                                            <div className="text-[12px] text-[#71717A]">{activity.description}</div>
                                        </td>
                                        <td className="py-4 px-3">
                                            <div className="text-[13px] font-medium text-[#18181B] whitespace-nowrap">{activity.company}</div>
                                        </td>
                                        <td className="py-4 px-3">
                                            <div className="text-xs text-[#71717A]">Lorem</div>
                                        </td>
                                        <td className="py-4 px-3">
                                            <div className="text-xs text-[#71717A] whitespace-nowrap">{activity.date}</div>
                                        </td>
                                        <td className="py-4 px-3">
                                            <button className="text-gray-400 hover:text-gray-600">
                                                <MoreHorizontal className="w-5 h-5" />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Scroll indicator for mobile */}
                    <div className="lg:hidden mt-3 text-center">
                        <p className="text-[11px] text-[#71717A]">← Swipe to see more →</p>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Dashboard;
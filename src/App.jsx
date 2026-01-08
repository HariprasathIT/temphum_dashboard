
// import './App.css';
// import Navbar from './components/Navbar';
// import Sidebar from './components/sidebar';
// import Dashboard from './pages/Home';

// function App() {
//   return (
//     <>
//       <Navbar />

//       <div className='flex'>
//         <Sidebar />
//         <Dashboard />
//       </div>


//     </>
//   );
// }

// export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Sidebar from './components/sidebar';
import Dashboard from "./pages/Dashboard-page/Home";
import CustomerManagement from "./pages/Customermanagement-page/Customermanagement";
import CustomerTable from "./pages/reports/reports";
import Credentials from "./pages/Credentials-page/Credentials";
import Adddevicecompany from "./pages/Company-module/Addcompany";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <div className="flex">
        <Sidebar />

        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/customers" element={<CustomerManagement />} />
            <Route path="/reports" element={<CustomerTable />} />
            <Route path="/credentials" element={<Credentials />} />
            <Route path="/adddevicecompany" element={<Adddevicecompany />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;


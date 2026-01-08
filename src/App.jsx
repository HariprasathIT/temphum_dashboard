
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
import Dashboard from './pages/Home';
import CustomerManagement from "./pages/Customermanagement";
import CustomerTable from "./pages/reports";
import Credentials from "./pages/Credentials";

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
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;


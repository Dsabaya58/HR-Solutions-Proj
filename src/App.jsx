import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Employees from './pages/Employees';
import Clients from './pages/Clients';
import Projects from './pages/Projects';
import Tickets from './pages/Tickets';
import Contacts from './pages/Contacts';
import Reports from './pages/Reports';
import LeaveReport from './pages/Leave';
import ReportsDetailed from './pages/ReportsDetailed';
import ReportsStatistics from './pages/ReportsStatistics';
import Analytics from './pages/Analytics';
import Activities from './pages/Activities';
import Payroll from './pages/Payroll';
import Users from './pages/Users';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="employees" element={<Employees />} />
          <Route path="clients" element={<Clients />} />
          <Route path="projects" element={<Projects />} />
          <Route path="tickets" element={<Tickets />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="users" element={<Users />} />
          <Route path="reports" element={<Reports />}>
            <Route path="leaves" element={<LeaveReport />} />
            <Route path="detailed" element={<ReportsDetailed />} />
            <Route path="statistics" element={<ReportsStatistics />} />
          </Route>
          <Route path="analytics" element={<Analytics />} />
          <Route path="activities" element={<Activities />} />
          <Route path="payroll" element={<Payroll />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;

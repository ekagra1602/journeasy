import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import SearchResults from '@/pages/SearchResults';
import BookingDetails from '@/pages/BookingDetails';
import Dashboard from '@/pages/Dashboard';
import Navbar from '@/components/Navbar';


const App = () => {
  return (
      <>
          <Router>
          <Navbar />
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/results" element={<SearchResults />} />
                  <Route path="/details/:id" element={<BookingDetails />} />
                  <Route path="/dashboard" element={<Dashboard />} />
              </Routes>
          </Router>
      </>
  );
};

export default App;

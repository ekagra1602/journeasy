import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home.jsx';
import Login from '@/pages/Login.jsx';
import SearchResults from '@/pages/SearchResults.jsx';
import BookingDetails from '@/pages/BookingDetails.jsx';
import Dashboard from '@/pages/Dashboard.jsx';
import Navbar from '@/components/Navbar.jsx';

const App = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/results" element={<SearchResults />} />
                <Route path="/details/:id" element={<BookingDetails />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </>
    );
};

export default App;

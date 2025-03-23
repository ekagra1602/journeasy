import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home.jsx';
import Login from '@/pages/Login.jsx';
import Signup from '@/pages/Signup.jsx';
import SearchResults from '@/pages/SearchResults.jsx';
import BookingDetails from '@/pages/BookingDetails.jsx';
import Dashboard from '@/pages/Dashboard.jsx';
import Navbar from '@/components/Navbar.jsx';
import Footer from '@/components/Footer.jsx';

const App = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/search" element={<SearchResults />} />
                <Route path="/details/:id" element={<BookingDetails />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
            <Footer />
        </>
    );
};

export default App;

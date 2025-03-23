import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const destinations = [
  { id: 1, name: "Paris", image: "/src/assets/Paris.jpg", type: "city", price: 1200, rating: 4.8 },
  { id: 2, name: "New York", image: "/src/assets/New York.jpg", type: "city", price: 1500, rating: 4.7 },
  { id: 3, name: "Tokyo", image: "/src/assets/Tokyo.jpg", type: "city", price: 1800, rating: 4.9 },
];

const hotels = [
  { id: 1, name: "Hilton, Phuket", image: "/src/assets/Hilton.webp", type: "resort", price: 300, rating: 4.5 },
  { id: 2, name: "Hyatt, Hawaii", image: "/src/assets/Hyatt_Hawaii.webp", type: "resort", price: 500, rating: 4.8 },
  { id: 3, name: "Marriot, Bora Bora", image: "/src/assets/Marriot_BoraBora.webp", type: "resort", price: 800, rating: 4.9 },
];

const SearchResults = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  
  const [filters, setFilters] = useState({
    type: searchParams.get('type') || 'all',
    priceRange: searchParams.get('price') || 'all',
    rating: searchParams.get('rating') || 'all'
  });
  
  const [showFilters, setShowFilters] = useState(false);
  const [filteredResults, setFilteredResults] = useState([]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    const params = new URLSearchParams(searchParams);
    params.set('type', newFilters.type);
    params.set('price', newFilters.priceRange);
    params.set('rating', newFilters.rating);
    setSearchParams(params);
  };

  const applyFilters = () => {
    let results = [...destinations, ...hotels].filter(item =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );

    if (filters.type !== 'all') {
      results = results.filter(item => 
        filters.type === 'destination' ? !item.name.includes(',') : item.name.includes(',')
      );
    }

    if (filters.priceRange !== 'all') {
      results = results.filter(item => {
        switch (filters.priceRange) {
          case 'low': return item.price <= 500;
          case 'medium': return item.price > 500 && item.price <= 1000;
          case 'high': return item.price > 1000;
          default: return true;
        }
      });
    }

    if (filters.rating !== 'all') {
      results = results.filter(item => {
        switch (filters.rating) {
          case '4+': return item.rating >= 4;
          case '4.5+': return item.rating >= 4.5;
          case '4.8+': return item.rating >= 4.8;
          default: return true;
        }
      });
    }

    setFilteredResults(results);
  };

  useEffect(() => {
    applyFilters();
  }, [query, filters]);

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Search Results for "{query}"</h1>
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd" />
          </svg>
          Filters
        </button>
      </div>

      {/* Filters Panel */}
      {showFilters && (
        <div className="bg-white p-4 rounded-lg shadow-lg mb-6">
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Type</label>
              <select
                value={filters.type}
                onChange={(e) => handleFilterChange({...filters, type: e.target.value})}
                className="w-full p-2 border rounded"
              >
                <option value="all">All Types</option>
                <option value="destination">Destinations</option>
                <option value="hotel">Hotels</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Price Range</label>
              <select
                value={filters.priceRange}
                onChange={(e) => handleFilterChange({...filters, priceRange: e.target.value})}
                className="w-full p-2 border rounded"
              >
                <option value="all">All Prices</option>
                <option value="low">$0 - $500</option>
                <option value="medium">$501 - $1000</option>
                <option value="high">$1000+</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Rating</label>
              <select
                value={filters.rating}
                onChange={(e) => handleFilterChange({...filters, rating: e.target.value})}
                className="w-full p-2 border rounded"
              >
                <option value="all">All Ratings</option>
                <option value="4+">4+ Stars</option>
                <option value="4.5+">4.5+ Stars</option>
                <option value="4.8+">4.8+ Stars</option>
              </select>
            </div>
          </div>
        </div>
      )}

      {/* Results Grid */}
      <div className="grid grid-cols-3 gap-6">
        {filteredResults.map((item) => (
          <div
            key={item.id}
            className="border rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">${item.price}</span>
                <span className="text-yellow-500">★ {item.rating}</span>
              </div>
              <button className="mt-4 w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredResults.length === 0 && (
        <div className="text-center py-10">
          <p className="text-xl text-gray-600">No results found for your search criteria</p>
        </div>
      )}
    </div>
  );
};

export default SearchResults;

import React from 'react';
import { useNavigate } from 'react-router-dom';

const destinations = [
  { id: 1, name: "Paris", image: "/src/assets/Paris.jpg" },
  { id: 2, name: "New York", image: "/src/assets/New York.jpg" },
  { id: 3, name: "Tokyo", image: "/src/assets/Tokyo.jpg" },
];
const hotels = [
    { id: 1, name: "Hilton, Phuket", image: "/src/assets/Hilton.webp" },
    { id: 2, name: "Hyatt, Hawaii", image: "/src/assets/Hyatt_Hawaii.webp" },
    { id: 3, name: "Marriot, Bora Bora", image: "/src/assets/Marriot_BoraBora.webp" },
  ];

const Home = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [showFilters, setShowFilters] = React.useState(false);
  const [filters, setFilters] = React.useState({
    type: 'all',
    priceRange: 'all',
    rating: 'all'
  });
  const [filteredDestinations, setFilteredDestinations] = React.useState(destinations);
  const [filteredHotels, setFilteredHotels] = React.useState(hotels);
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchQuery.trim()) {
      const searchParams = new URLSearchParams();
      searchParams.set('q', searchQuery.trim());
      searchParams.set('type', filters.type);
      searchParams.set('price', filters.priceRange);
      searchParams.set('rating', filters.rating);
      navigate(`/search?${searchParams.toString()}`);
    }
  };

  return (
      <>
          {/* Hero Section */}
          <div className="h-[500px] bg-[url('/src/assets/waterfall_bg.jpg')] bg-cover bg-center relative">
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center">
                  <h1 className="text-white text-4xl font-bold">Plan Your Next Adventure</h1>
                  <p className="text-white mt-4 text-lg">Find the best destinations, hotels, events and experiences</p>
                  <div className="mt-6 flex flex-col items-center w-full max-w-2xl">
                      <div className="flex w-full">
                          <input
                              type="text"
                              value={searchQuery}
                              onChange={(e) => setSearchQuery(e.target.value)}
                              placeholder="Where are you going?"
                              className="p-3 w-full rounded-l-lg"
                              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                          />
                          <button 
                              onClick={() => setShowFilters(!showFilters)}
                              className="bg-blue-600 px-4 py-3 text-white flex items-center gap-2 hover:bg-blue-700 transition-colors"
                          >
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                  <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd" />
                              </svg>
                          </button>
                          <button 
                              onClick={handleSearch}
                              className="bg-yellow-500 px-6 py-3 rounded-r-lg hover:bg-yellow-600 transition-colors"
                          >
                              Search
                          </button>
                      </div>
                      
                      {/* Filters Panel */}
                      {showFilters && (
                          <div className="mt-4 bg-white p-4 rounded-lg shadow-lg w-full animate-fade-in">
                              <div className="grid grid-cols-3 gap-4">
                                  <div>
                                      <label className="block text-sm font-medium mb-2">Type</label>
                                      <select
                                          value={filters.type}
                                          onChange={(e) => setFilters({...filters, type: e.target.value})}
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
                                          onChange={(e) => setFilters({...filters, priceRange: e.target.value})}
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
                                          onChange={(e) => setFilters({...filters, rating: e.target.value})}
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
                  </div>
              </div>
          </div>

          {/* Featured Destinations */}
          <div className="p-5">
              <h2 className="text-2xl font-bold mb-6">Popular Destinations</h2>
              <div className="grid grid-cols-3 gap-6">
                  {filteredDestinations.map((destination) => (
                    <div
                        key={destination.id}
                        className="border rounded shadow hover:shadow-lg hover:scale-105 transform transition duration-300"
                    >
                        <img
                            src={destination.image}
                            alt={destination.name}
                            className="rounded-t h-48 w-full object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-lg font-bold">{destination.name}</h3>
                            <div className="mt-4 flex space-x-4">
                                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                                    Flights
                                </button>
                                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                                    Hotels
                                </button>
                                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                                    Events
                                </button>
                            </div>
                        </div>
                    </div>
                  ))}
              </div>
          </div>
            {/* Featured Hotels */}
            <div className="p-5">
                <h2 className="text-2xl font-bold mb-6">Popular Hotels</h2>
                <div className="grid grid-cols-3 gap-6">
                    {filteredHotels.map((hotel) => (
                    <div
                        key={hotel.id}
                        className="border rounded shadow hover:shadow-lg hover:scale-105 transform transition duration-300"
                    >
                        <img
                            src={hotel.image}
                            alt={hotel.name}
                            className="rounded-t h-48 w-full object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-lg font-bold">{hotel.name}</h3>
                            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                                Explore
                            </button>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
      </>
  );
};

export default Home;

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
  return (
      <>
          {/* Hero Section */}
          <div className="h-[500px] bg-[url('/src/assets/waterfall_bg.jpg')] bg-cover bg-center relative">
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center">
                  <h1 className="text-white text-4xl font-bold">Plan Your Next Adventure</h1>
                  <p className="text-white mt-4 text-lg">Find the best destinations, hotels, events and experiences</p>
                  <div className="mt-6 flex">
                      <input
                          type="text"
                          placeholder="Where are you going?"
                          className="p-3 w-80 rounded-l-lg"
                      />
                      <button className="bg-yellow-500 px-6 py-3 rounded-r-lg">Search</button>
                  </div>
              </div>
          </div>

          {/* Featured Destinations */}
          <div className="p-5">
              <h2 className="text-2xl font-bold mb-6">Popular Destinations</h2>
              <div className="grid grid-cols-3 gap-6">
                  {destinations.map((destination) => (
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
                    {hotels.map((hotel) => (
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

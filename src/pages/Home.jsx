const destinations = [
  { id: 1, name: "Paris", image: "/src/assets/Paris.jpg" },
  { id: 2, name: "New York", image: "/src/assets/New York.jpg" },
  { id: 3, name: "Tokyo", image: "/src/assets/Tokyo.jpg" },
];

const Home = () => {
  return (
      <>
          {/* Hero Section */}
          <div className="h-[500px] bg-[url('/src/assets/waterfall_bg.jpg')] bg-cover bg-center relative">
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center">
                  <h1 className="text-white text-4xl font-bold">Plan Your Next Adventure</h1>
                  <p className="text-white mt-4 text-lg">Find the best destinations, hotels, and experiences</p>
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
          <div className="p-8">
              <h2 className="text-2xl font-bold mb-6">Popular Destinations</h2>
              <div className="grid grid-cols-3 gap-6">
                  {destinations.map((destination) => (
                      <div key={destination.id} className="border rounded shadow">
                          <img
                              src={destination.image}
                              alt={destination.name}
                              className="rounded-t h-48 w-full object-cover"
                          />
                          <div className="p-4">
                              <h3 className="text-lg font-bold">{destination.name}</h3>
                              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
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

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-3 flex justify-between items-center">
      {/* Left Section */}
      <div className="flex items-center space-x-4">
        <Link to="/" className="text-3xl font-bold hover:shadow-lg hover:scale-105">
          Journeasy
        </Link>
        <Link to="/bookings" className="mt-1 text-xl hover:shadow-lg hover:scale-105">
          Bookings
        </Link>
        <Link to="/recommendations" className="mt-1 text-xl hover:shadow-lg hover:scale-105">
          Recommendations
        </Link>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search"
          className="p-2 rounded"
        />
        <button className="bg-yellow-500 px-4 py-2 rounded">Search</button>
        {/* Login Button */}
        <Link to="/login">
          <img
            src="/src/assets/login_button.png"
            alt="Login"
            className="w-10 h-10 rounded-full border-2 border-white shadow-md hover:scale-105 hover:shadow-lg"
          />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

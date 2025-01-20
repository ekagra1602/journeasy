import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
            <div className="flex items-center space-x-4">
                <Link to="/" className="text-2xl font-bold hover:shadow-lg hover:scale-105">Journeasy</Link>
                <Link to="/bookings" className="hover:shadow-lg hover:scale-105">Bookings</Link>
                <Link to="/recommendations" className="hover:shadow-lg hover:scale-105">Recommendations</Link>
            </div>
            <div className="flex items-center space-x-4">
                <input
                    type="text"
                    placeholder="Where are you going?"
                    className="p-2 rounded"
                />
                <button className="bg-yellow-500 px-4 py-2 rounded">Search</button>
                <Link to="/login" className="font-bold hover:shadow-lg hover:scale-105">Login</Link>
            </div>
        </nav>
    );
};

export default Navbar;

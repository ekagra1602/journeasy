function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-200">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold mb-4 text-center">Login</h1>
        <p className="mb-6 text-gray-600 text-center">
          Please log in to access your account.
        </p>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Log In
          </button>
        </form>
        <p className="mt-4 text-gray-600 text-center">
          Don't have an account? <a href="#" className="text-blue-500 hover:underline">Sign Up</a>
        </p>
      </div>
    </div>
  );
}
import api from '../api';

const handleLogin = async (e) => {
    e.preventDefault();
    try {
        const response = await api.post('/login', {
            email,
            password,
        });
        alert('Login successful');
        // Store token or handle further
    } catch (error) {
        console.error(error.response.data);
        alert('Login failed');
    }
};

export default Login;

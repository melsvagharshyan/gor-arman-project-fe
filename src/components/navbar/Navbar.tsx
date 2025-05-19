import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RegistrationModal } from "../../modals/Registration";
import { LoginModal } from "../../modals/Login";
import { Menu, X } from "lucide-react"; // You can use any icons here

const Navbar = ({
  user,
  onLogout,
  onLoginSuccess,
}: {
  user: any;
  onLogout: () => void;
  onLoginSuccess: (user: any) => void;
}) => {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        <div className="flex items-center space-x-4">
          <img
            onClick={() => navigate("/")}
            src="https://media.istockphoto.com/id/1036660952/vector/auto-service-sign-car-repair-logo-eps.jpg?s=612x612&w=0&k=20&c=YGPt3hie_G2IvanKJcLCTy8oNqP_KAkebHfynjx8QnE="
            alt="Logo"
            className="w-14 h-14 cursor-pointer"
          />

          {/* Desktop links */}
          {user && (
            <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/info">Info</Link>
              </li>
              <li>
                <Link to="/service">Service</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          )}
        </div>

        {/* Desktop auth buttons */}
        <div className="hidden md:flex space-x-4 items-center">
          {user ? (
            <>
              <span className="text-gray-700">
                {user.name} {user.surname}
              </span>
              <button
                onClick={onLogout}
                className="text-white bg-red-500 hover:bg-red-600 px-4 py-1 rounded cursor-pointer"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => setIsLoginOpen(true)}
                className="text-gray-700 cursor-pointer"
              >
                Login
              </button>
              <button
                onClick={() => setIsRegistrationOpen(true)}
                className="text-white bg-cyan-400 hover:bg-cyan-500 px-4 py-2 rounded cursor-pointer"
              >
                Register
              </button>
            </>
          )}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          {user ? (
            <>
              <ul className="space-y-2 text-gray-700 font-medium">
                <li>
                  <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/info" onClick={() => setIsMobileMenuOpen(false)}>
                    Info
                  </Link>
                </li>
                <li>
                  <Link
                    to="/service"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Service
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onLogout();
                }}
                className="w-full text-left text-white bg-red-500 hover:bg-red-600 px-4 py-2 rounded"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsLoginOpen(true);
                }}
                className="block w-full text-left text-gray-700 px-4 py-2 rounded"
              >
                Login
              </button>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsRegistrationOpen(true);
                }}
                className="block w-full text-left text-white bg-cyan-400 hover:bg-cyan-500 px-4 py-2 rounded"
              >
                Register
              </button>
            </>
          )}
        </div>
      )}

      {/* Modals */}
      <RegistrationModal
        isOpen={isRegistrationOpen}
        onClose={() => setIsRegistrationOpen(false)}
      />
      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onLoginSuccess={onLoginSuccess}
      />
    </nav>
  );
};

export default Navbar;

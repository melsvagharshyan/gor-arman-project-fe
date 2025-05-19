import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RegistrationModal } from "../../modals/Registration";
import { LoginModal } from "../../modals/Login";

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
  const navigate = useNavigate();

  return (
    <nav className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        <div className="flex items-center space-x-8">
          <img
            onClick={() => navigate("/")}
            src="https://media.istockphoto.com/id/1036660952/vector/auto-service-sign-car-repair-logo-eps.jpg?s=612x612&w=0&k=20&c=YGPt3hie_G2IvanKJcLCTy8oNqP_KAkebHfynjx8QnE="
            alt="Logo"
            className="w-15 h-15 cursor-pointer"
          />
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

        <div className="flex space-x-4 items-center">
          {user ? (
            <>
              <span className="text-gray-700">
                {" "}
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
      </div>

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

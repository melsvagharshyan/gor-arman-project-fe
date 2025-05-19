import {
  FaInstagram,
  FaFacebookF,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const contactDetails = [
  {
    icon: <FaInstagram className="text-pink-500 text-3xl" />,
    label: "@auto_master_service",
  },
  {
    icon: <FaFacebookF className="text-blue-600 text-3xl" />,
    label: "Auto Master Service",
  },
  {
    icon: <FaPhoneAlt className="text-green-600 text-3xl" />,
    label: "+374 77 123456",
  },
  {
    icon: <FaEnvelope className="text-red-500 text-3xl" />,
    label: "support@yourcarservice.com",
  },
];

const Contact = () => {
  return (
    <div className="w-full mt-10">
      {/* Map Section */}
      <div className="w-full h-80 shadow-md rounded-xl overflow-hidden">
        <img
          src="https://res.cloudinary.com/dxfqf6fgv/image/upload/v1747661424/Screenshot_2025-05-19_172927_vzmq1v.png"
          alt="Map Location"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Contact Info Section */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
          Get in Touch
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {contactDetails.map((contact, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white shadow-lg rounded-xl py-6 px-4 transition-transform hover:-translate-y-1 hover:shadow-xl"
            >
              {contact.icon}
              <p className="text-gray-700 text-base font-semibold mt-3 text-center break-words">
                {contact.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;

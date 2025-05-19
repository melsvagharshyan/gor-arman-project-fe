const services = [
  {
    title: "Oil Change",
    description:
      "Regular oil changes keep your engine running smoothly and extend the life of your car.",
    icon: "🛢️",
  },
  {
    title: "Brake Inspection",
    description:
      "We provide detailed brake checks and replacements to ensure your safety on the road.",
    icon: "🛑",
  },
  {
    title: "Tire Services",
    description:
      "From rotations to replacements, we keep your tires in perfect shape.",
    icon: "🛞",
  },
  {
    title: "Engine Diagnostics",
    description:
      "Using advanced tools, we diagnose and fix engine issues quickly and accurately.",
    icon: "🔧",
  },
  {
    title: "Battery Replacement",
    description:
      "Fast and reliable battery testing, charging, and replacement services.",
    icon: "🔋",
  },
  {
    title: "Air Conditioning Repair",
    description:
      "Stay cool with our A/C diagnostics and repair services for all car models.",
    icon: "❄️",
  },
];

const Service = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-10 text-center">
        Our Car Services
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition duration-300"
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {service.title}
            </h2>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;

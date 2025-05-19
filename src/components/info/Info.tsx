const Info = () => {
  return (
    <div className="w-full mt-10">
      {/* Auto Intro Image */}
      <div className="w-full h-96 bg-gray-200">
        <img
          src="https://mcphailauto.com/wp-content/uploads/2023/05/McPhail-Auto-service-page-1-Oil-Lube.jpg"
          alt="Auto Service Intro"
          className="w-full h-full object-cover"
        />
      </div>

      {/* About Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          About Our Car Service
        </h1>
        <p className="text-lg text-gray-600 leading-7 mb-4">
          Welcome to our car service center! We are dedicated to providing
          top-notch automotive care with a focus on honesty, efficiency, and
          customer satisfaction. Whether it's regular maintenance or complex
          repairs, our certified technicians are here to help.
        </p>
        <p className="text-lg text-gray-600 leading-7 mb-4">
          Our services include oil changes, brake inspections, engine
          diagnostics, tire services, and much more. We use the latest tools and
          technologies to ensure your vehicle stays safe and runs smoothly.
        </p>
        <p className="text-lg text-gray-600 leading-7">
          Visit us today and experience reliable, professional car service that
          puts your needs first. Your journey starts with a car you can trust —
          and we’re here to keep it that way.
        </p>
      </div>
    </div>
  );
};

export default Info;

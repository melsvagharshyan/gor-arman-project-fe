const Home = () => {
  return (
    <div className="relative h-screen w-full bg-black mt-10">
      <img
        src="https://columbiaautoservice.ca/wp-content/uploads/2024/04/Why_Columbia_Auto-1-1920x1211.png"
        alt="Auto Service Background"
        className="absolute inset-0 w-full h-full object-cover opacity-80"
      />

      <div className="absolute inset-0  bg-opacity-50" />

      <div className="relative z-10 flex flex-col items-center  h-full text-center px-4">
        <h1 className="text-5xl sm:text-6xl font-extrabold text-white drop-shadow-lg  mt-40">
          Welcome to Auto Master Service
        </h1>
        <p className="text-xl sm:text-2xl text-gray-200 max-w-2xl drop-shadow-md">
          Your trusted partner for car maintenance, repair, and performance
          upgrades.
        </p>
      </div>
    </div>
  );
};

export default Home;

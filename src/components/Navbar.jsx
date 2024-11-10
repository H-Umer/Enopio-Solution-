//import React from 'react';

function Navbar() {
  return (
    <nav className="relative bg-transparent border-b-2 border-orange-400 z-0">
      <div 
        className="absolute top-0 left-0 w-full h-screen bg-cover bg-center duration-300 bg-animate bg-blur" 
        style={{ 
          backgroundImage: 'url(https://i.pinimg.com/originals/be/4a/ea/be4aeabbd923e4b167d1212cd06ece30.jpg)',
         // backgroundImage: 'url(https://steamuserimages-a.akamaihd.net/ugc/2027233038710447721/E4C08D75696555FF9F9A150FCF7B03376C0A35D4/?imw=512&amp;imh=384&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true)',
          backdropFilter: 'blur(8px)'
        }}
      >
      </div>
      
      <div className="relative container mx-auto p-4 flex justify-between items-center">
        {/* Left Section */}
        <div className="flex items-center border-2 border-orange-400 rounded-md px-4 py-2 cursor-pointer  hover:scale-110 transition duration-300 ease-in-out">
          <span className="text-3xl font-bold text-white hover:text-orange-400">Enopio Solution</span>
        </div>
        
        {/* Right Section */}
        <div className="hidden md:flex items-center space-x-8 font-medium">
          <a 
            href="#" 
            className="text-lg text-white hover:text-orange-400 transition duration-300 hover:scale-110 border-2 border-orange-400 rounded-md px-4 py-2"
          >
            Home
          </a>
          <a 
            href="#" 
            className="text-lg text-white hover:text-orange-400 transition duration-300 hover:scale-110 border-2 border-orange-400 rounded-md px-4 py-2"
          >
            About
          </a>
          <a 
            href="#" 
            className="text-lg text-white hover:text-orange-400 transition duration-300 hover:scale-110 border-2 border-orange-400 rounded-md px-4 py-2"
          >
            Services
          </a>
          <a 
            href="#" 
            className="text-lg text-white hover:text-orange-400 transition duration-300 hover:scale-110 border-2 border-orange-400 rounded-md px-4 py-2"
          >
            Contact
          </a>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6 text-white hover:text-orange-400 duration-300 hover:scale-110 border-2 border-orange-400 rounded-full p-1" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
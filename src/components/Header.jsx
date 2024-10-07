import React, { useState } from 'react';
import { Search, Globe, Menu, User } from 'lucide-react';
const AirbnbSearch = () => {
  const [searchParams, setSearchParams] = useState({
    where: '',
    checkIn: '',
    checkOut: '',
    guests: ''
  });
  const categories = [
    { icon: '🏠', label: 'Historical homes' },
    { icon: '🏘️', label: 'Hanoks' },
    { icon: '🌬️', label: 'Windmills' },
    { icon: '👨‍🍳', label: "Chef's kitchens" },
    { icon: '🏖️', label: 'Beachfront' },
    { icon: '🏡', label: 'Casas particulares' },
    { icon: '🏞️', label: 'Lakefront' },
    { icon: '🐑', label: "Shepherd's huts" }
];
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchParams(prev => ({ ...prev, [name]: value }));
  };
  return (
    <div className="max-w-7xl mx-auto p-4">
      <header className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <svg className="w-8 h-8 text-pink-500 mr-2" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 2C7.163 2 0 9.163 0 18c0 7.01 4.42 13.477 11 15.9V18h5v16c0 .553.448 1 1 1h2c.552 0 1-.447 1-1V18h5c0 7.01 4.42 13.477 11 15.9 1.49-.363 2.906-.84 4.226-1.428C27.09 23.61 16 18.42 16 2z" fill="currentColor"/>
          </svg>
          <span className="text-2xl font-bold text-pink-500">airbnb</span>
        </div>
        <nav className="hidden md:flex space-x-4">
          <a href="#" className="text-gray-600 hover:text-gray-900">Stays</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Experiences</a>
        </nav>
        <div className="flex items-center space-x-4">
          <button className="text-gray-600 hover:text-gray-900">Airbnb your home</button>
          <Globe className="w-5 h-5 text-gray-600" />
          <div className="flex items-center border rounded-full p-2 hover:shadow-md">
            <Menu className="w-5 h-5 text-gray-600 mr-2" />
            <User className="w-5 h-5 text-gray-600" />
          </div>
        </div>
      </header>
      <div className="flex items-center justify-center mb-6">
        <div className="flex items-center bg-white shadow-lg rounded-full">
          <div className="flex-1 p-2">
            <input
              type="text"
              name="where"
              placeholder="Where"
              value={searchParams.where}
              onChange={handleInputChange}
              className="w-full outline-none"
            />
          </div>
          <div className="border-l border-gray-300 h-8"></div>
          <div className="flex-1 p-2">
            <input
              type="text"
              name="checkIn"
              placeholder="Check in"
              value={searchParams.checkIn}
              onChange={handleInputChange}
              className="w-full outline-none"
            />
          </div>
          <div className="border-l border-gray-300 h-8"></div>
          <div className="flex-1 p-2">
            <input
              type="text"
              name="checkOut"
              placeholder="Check out"
              value={searchParams.checkOut}
              onChange={handleInputChange}
              className="w-full outline-none"
            />
          </div>
          <div className="border-l border-gray-300 h-8"></div>
          <div className="flex-1 p-2">
            <input
              type="text"
              name="guests"
              placeholder="Who"
              value={searchParams.guests}
              onChange={handleInputChange}
              className="w-full outline-none"
            />
          </div>
          <button className="bg-pink-500 text-white p-3 rounded-full hover:bg-pink-600">
            <Search className="w-5 h-5" />
          </button>
        </div>
      </div>
      <div className="flex justify-between items-center overflow-x-auto pb-4">
        {categories.map((category, index) => (
          <div key={index} className="flex flex-col items-center mx-4 cursor-pointer">
            <span className="text-2xl mb-1">{category.icon}</span>
            <span className="text-xs whitespace-nowrap">{category.label}</span>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center mt-4">
        <button className="flex items-center space-x-2 text-sm font-medium">
          <span>Filters</span>
        </button>
        <label className="inline-flex items-center cursor-pointer">
          <span className="mr-2 text-sm font-medium">Display total before taxes</span>
          <div className="relative">
            <input type="checkbox" className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
          </div>
        </label>
      </div>
    </div>
  );
};
export default AirbnbSearch;
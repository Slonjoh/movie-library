import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 w-full z-10 backdrop-blur-md bg-opacity-70 bg-background px-4 py-3 flex items-center justify-between">
      <div className="text-2xl font-semibold text-foreground">Movie Library</div>
      <nav className="flex space-x-4">
        <button className="text-foreground hover:text-gray-300">Movies</button>
        <button className="text-foreground hover:text-gray-300">Favorites</button>
      </nav>
      <div className="flex items-center space-x-3">
        <input
          type="text"
          placeholder="Search movies"
          className="px-3 py-2 rounded-lg bg-gray-800 text-foreground focus:outline-none"
        />
        <div
          className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center text-white text-sm font-semibold"
          title="User"
        >
          U
        </div>
      </div>
    </header>
  );
};

export default Header;

import React from 'react';

const SkeletonLoader: React.FC = () => {
  return (
    <div className="movie-card bg-gray-700 animate-pulse rounded-lg overflow-hidden">
      <div className="w-full h-40 bg-gray-600"></div>
      <div className="p-3 space-y-2">
        <div className="h-4 bg-gray-600 rounded"></div>
        <div className="h-4 bg-gray-600 rounded w-3/4"></div>
      </div>
    </div>
  );
};

export default SkeletonLoader;

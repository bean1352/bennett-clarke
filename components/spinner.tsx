import React from 'react';

export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-40 w-full">
      <div className="relative">
        {/* Outer spinning ring */}
        <div className="absolute inset-0 rounded-full border-4 border-t-blue-500 border-r-blue-500 border-b-blue-200 border-l-blue-200 animate-spin w-12 h-12" />
        
        {/* Inner spinning ring */}
        <div className="absolute inset-2 rounded-full border-4 border-t-indigo-500 border-r-indigo-500 border-b-indigo-200 border-l-indigo-200 animate-spin animate-reverse w-8 h-8" />
        
        {/* Center dot */}
        <div className="absolute inset-4 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 w-4 h-4 animate-pulse" />
      </div>
    </div>
  );
};

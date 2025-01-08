import React from 'react';
import { Loader2 } from 'lucide-react';

interface LoadingSpinnerProps {
  size?: 'small' | 'default' | 'large';
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ size = 'default' }) => {
  const sizeClasses = {
    small: 'w-4 h-4',
    default: 'w-8 h-8',
    large: 'w-12 h-12'
  };

  return (
    <div className="flex flex-col items-center justify-center w-full gap-4">
      <div className="relative">
        {/* Primary spinner */}
        <div className="animate-spin">
          <Loader2 className={`text-primary ${sizeClasses[size]}`} />
        </div>
        
        {/* Background glow effect */}
        <div className="absolute inset-0 blur-xl bg-primary/20 rounded-full animate-pulse" />
      </div>
      
      {/* Loading text */}
      <p className="text-sm text-muted-foreground animate-pulse">Loading...</p>
    </div>
  );
};

export default LoadingSpinner;
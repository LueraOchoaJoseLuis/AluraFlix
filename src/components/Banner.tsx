import React from 'react';
import { Video } from '../types/Video';

interface BannerProps {
  video: Video;
}

const Banner: React.FC<BannerProps> = ({ video }) => {
  return (
    <div className="relative h-[70vh] mb-12">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900">
        <img 
          src={video.imageUrl} 
          alt={video.title} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-8 text-white z-10">
        <div className="inline-block bg-blue-500 px-4 py-2 rounded mb-4">
          FRONT END
        </div>
        <h1 className="text-5xl font-bold mb-4">{video.title}</h1>
        <p className="text-xl max-w-2xl">{video.description}</p>
      </div>
    </div>
  );
};

export default Banner;
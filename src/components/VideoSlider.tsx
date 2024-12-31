import React from 'react';
import Slider from 'react-slick';
import VideoCard from './VideoCard';
import { Video } from '../types/Video';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface VideoSliderProps {
  title: string;
  videos: Video[];
  category: 'frontend' | 'backend' | 'innovacion';
  onEdit: (video: Video) => void;
  onDelete: (id: string) => void;
}

const VideoSlider: React.FC<VideoSliderProps> = ({ title, videos, category, onEdit, onDelete }) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  const categoryColors: { [key in 'frontend' | 'backend' | 'innovacion']: string } = {
    frontend: 'bg-blue-500',
    backend: 'bg-green-500',
    innovacion: 'bg-yellow-500'
  };

  const filteredVideos = videos.filter(video => video.category === category);

  if (filteredVideos.length === 0) {
    return null;
  }

  return (
    <div className="mb-16">
      <h2 className={`text-2xl font-bold mb-6 p-2 ${categoryColors[category]} inline-block rounded`}>
        {title}
      </h2>
      <div className="mx-[-16px]">
        <Slider {...settings}>
          {filteredVideos.map(video => (
            <div key={video.id} className="px-4">
              <VideoCard
                video={video}
                onEdit={onEdit}
                onDelete={onDelete}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default VideoSlider;
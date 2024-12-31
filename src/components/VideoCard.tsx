import React from 'react';
import { Pencil, Trash2 } from 'lucide-react';
import { Video } from '../types/Video';

interface VideoCardProps {
  video: Video;
  onEdit: (video: Video) => void;
  onDelete: (id: string) => void;
}

const VideoCard: React.FC<VideoCardProps> = ({ video, onEdit, onDelete }) => {
  return (
    <div className="relative group">
      {/* Enlace alrededor de la imagen */}
      <a 
        href={video.videoUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block aspect-w-16 aspect-h-9"
      >
        <img
          src={video.imageUrl}
          alt={video.title}
          className="w-full h-full object-cover rounded-lg"
        />
      </a>
      {/* Botones superpuestos */}
      <div className="absolute bottom-0 left-0 right-0 p-2 bg-black/75 rounded-b-lg opacity-0 group-hover:opacity-100 transition-opacity flex justify-between items-center">
        <button
          onClick={() => onDelete(video.id)}
          className="p-2 rounded bg-red-500 hover:bg-red-600 transition"
        >
          <Trash2 size={16} className="text-white" />
        </button>
        <button
          onClick={() => onEdit(video)}
          className="p-2 rounded bg-blue-500 hover:bg-blue-600 transition"
        >
          <Pencil size={16} className="text-white" />
        </button>
      </div>
    </div>
  );
};

export default VideoCard;

import React, { useState } from 'react';
import Banner from '../components/Banner';
import VideoSlider from '../components/VideoSlider';
import EditVideoModal from '../components/EditVideoModal';
import Footer from '../components/Footer';
import { Video } from '../types/Video';

interface HomeProps {
  videos: Video[];
  setVideos: React.Dispatch<React.SetStateAction<Video[]>>;
}

const Home: React.FC<HomeProps> = ({ videos, setVideos }) => {
  const [editingVideo, setEditingVideo] = useState<Video | null>(null);

  const handleEdit = (video: Video) => {
    setEditingVideo(video);
  };

  const handleDelete = (id: string) => {
    setVideos(videos.filter(video => video.id !== id));
  };

  const handleSave = (updatedVideo: Video) => {
    setVideos(videos.map(video => 
      video.id === updatedVideo.id ? updatedVideo : video
    ));
    setEditingVideo(null);
  };

  const featuredVideo = videos.find(video => video.id === '1') || videos[0];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Banner video={featuredVideo} />
      <div className="px-8">
        <VideoSlider
          title="FRONT END"
          videos={videos}
          category="frontend"
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
        <VideoSlider
          title="BACK END"
          videos={videos}
          category="backend"
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
        <VideoSlider
          title="INNOVACIÓN Y GESTIÓN"
          videos={videos}
          category="innovacion"
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>

      {editingVideo && (
        <EditVideoModal
          video={editingVideo}
          onClose={() => setEditingVideo(null)}
          onSave={handleSave}
        />
      )}
      <Footer />
    </div>
  );
};

export default Home;
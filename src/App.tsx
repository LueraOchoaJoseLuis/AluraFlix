import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import NewVideo from './pages/NewVideo';
import { initialVideos } from './data/videos';
import { Video } from './types/Video';

function App() {
  const [videos, setVideos] = useState<Video[]>(initialVideos);

  const handleAddVideo = (newVideo: Omit<Video, 'id'>) => {
    const video: Video = {
      ...newVideo,
      id: String(videos.length + 1)
    };
    setVideos([...videos, video]);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-900">
        <Header />
        <Routes>
          <Route path="/" element={<Home videos={videos} setVideos={setVideos} />} />
          <Route path="/nuevo-video" element={<NewVideo onAddVideo={handleAddVideo} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
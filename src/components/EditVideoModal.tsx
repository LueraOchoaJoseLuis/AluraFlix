import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Video } from '../types/Video';

interface EditVideoModalProps {
  video: Video | null;
  onClose: () => void;
  onSave: (video: Video) => void;
}

const EditVideoModal: React.FC<EditVideoModalProps> = ({ video, onClose, onSave }) => {
  const [formData, setFormData] = useState<Video>({
    id: '',
    title: '',
    category: 'frontend',
    imageUrl: '',
    videoUrl: '',
    description: ''
  });

  useEffect(() => {
    if (video) {
      setFormData(video);
    }
  }, [video]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  const handleClear = () => {
    setFormData({
      id: video?.id || '',
      title: '',
      category: 'frontend',
      imageUrl: '',
      videoUrl: '',
      description: ''
    });
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-blue-900 p-8 rounded-lg w-full max-w-2xl">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">EDITAR CARD:</h2>
          <button onClick={onClose} className="text-white hover:text-gray-300">
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-white mb-2">Título</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full p-2 rounded bg-blue-800 text-white border border-blue-700"
            />
          </div>

          <div>
            <label className="block text-white mb-2">Categoría</label>
            <select
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value as Video['category'] })}
              className="w-full p-2 rounded bg-blue-800 text-white border border-blue-700"
            >
              <option value="frontend">Frontend</option>
              <option value="backend">Backend</option>
              <option value="innovacion">Innovación</option>
            </select>
          </div>

          <div>
            <label className="block text-white mb-2">Imagen</label>
            <input
              type="url"
              value={formData.imageUrl}
              onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
              className="w-full p-2 rounded bg-blue-800 text-white border border-blue-700"
            />
          </div>

          <div>
            <label className="block text-white mb-2">Video</label>
            <input
              type="url"
              value={formData.videoUrl}
              onChange={(e) => setFormData({ ...formData, videoUrl: e.target.value })}
              className="w-full p-2 rounded bg-blue-800 text-white border border-blue-700"
            />
          </div>

          <div>
            <label className="block text-white mb-2">Descripción</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full p-2 rounded bg-blue-800 text-white border border-blue-700 h-32"
            />
          </div>

          <div className="flex gap-4 justify-end">
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            >
              GUARDAR
            </button>
            <button
              type="button"
              onClick={handleClear}
              className="px-6 py-2 bg-transparent text-white border border-white rounded hover:bg-white/10 transition"
            >
              LIMPIAR
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditVideoModal;
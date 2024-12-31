import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Video } from '../types/Video';

interface NewVideoProps {
  onAddVideo: (video: Omit<Video, 'id'>) => void;
}

const NewVideo: React.FC<NewVideoProps> = ({ onAddVideo }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<Omit<Video, 'id'>>({
    title: '',
    category: 'frontend',
    imageUrl: '',
    videoUrl: '',
    description: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddVideo(formData);
    navigate('/');
  };

  const handleClear = () => {
    setFormData({
      title: '',
      category: 'frontend',
      imageUrl: '',
      videoUrl: '',
      description: ''
    });
  };

  return (
    <div className="min-h-screen bg-gray-900 pt-24 px-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-2">NUEVO VIDEO</h1>
        <p className="text-gray-400 mb-8">COMPLETE EL FORMULARIO PARA CREAR UNA NUEVA TARJETA DE VIDEO</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-white mb-2">Título</label>
            <input
              type="text"
              required
              placeholder="Ingrese el título"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700"
            />
          </div>

          <div>
            <label className="block text-white mb-2">Categoría</label>
            <select
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value as Video['category'] })}
              className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700"
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
              required
              placeholder="El enlace es obligatorio"
              value={formData.imageUrl}
              onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
              className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700"
            />
          </div>

          <div>
            <label className="block text-white mb-2">Video</label>
            <input
              type="url"
              required
              placeholder="Ingrese el enlace del video"
              value={formData.videoUrl}
              onChange={(e) => setFormData({ ...formData, videoUrl: e.target.value })}
              className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700"
            />
          </div>

          <div>
            <label className="block text-white mb-2">Descripción</label>
            <textarea
              required
              placeholder="¿De qué se trata este video?"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 h-32"
            />
          </div>

          <div className="flex gap-4">
            <button
              type="submit"
              className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            >
              GUARDAR
            </button>
            <button
              type="button"
              onClick={handleClear}
              className="px-6 py-3 bg-transparent text-white border border-white rounded hover:bg-white/10 transition"
            >
              LIMPIAR
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewVideo;
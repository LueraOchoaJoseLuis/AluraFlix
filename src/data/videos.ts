import { Video } from '../types/Video';

export const initialVideos: Video[] = [
  // Frontend Videos
  {
    id: '1',
    title: 'Aprende React con Hooks',
    category: 'frontend',
    imageUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee',
    videoUrl: 'https://www.youtube.com/watch?v=B8VR5mQcgjI',
    description: 'Aprende las habilidades fundamentales de React para ser un desarrollador Front-end'
  },
  {
    id: '2',
    title: 'Fundamentos de Svelte',
    category: 'frontend',
    imageUrl: 'https://bairesdev.mo.cloudinary.net/blog/2022/04/Svelte-3.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=Xsxm8_BI63s',
    description: 'Curso completo de Svelte para principiantes'
  },
  {
    id: '3',
    title: 'Astro en profundidad',
    category: 'frontend',
    imageUrl: 'https://cdn.prod.website-files.com/63e3d6905bacd6855fa38c1c/63e3d6905bacd670cda391e7_Astro%20Framework%20Thumb-min.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=RB5tR_nqUEw',
    description: 'Aprende a usar los Astro como un profesional'
  },

  // Backend Videos
  {
    id: '4',
    title: 'Introducción a Node',
    category: 'backend',
    imageUrl: 'https://i.ytimg.com/vi/qwfE7fSVaZM/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=i3OdKwuBjeM',
    description: 'Curso básico de Node para principiantes'
  },
  {
    id: '5',
    title: 'Curso de Python de cero a heroe',
    category: 'backend',
    imageUrl: 'https://i.ytimg.com/vi/Kp4Mvapo5kc/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=Kp4Mvapo5kc',
    description: 'Curso de Python desde cero de 10 horas'
  },
  {
    id: '6',
    title: 'Aprende Java desde cero a intermedio',
    category: 'backend',
    imageUrl: 'https://miro.medium.com/v2/resize:fit:2560/1*2XrX0fP0htyTCah7AglTig.jpeg',
    videoUrl: 'https://www.youtube.com/watch?v=BdNqW63ZaB0',
    description: 'Curso de Java + Sping + Docker + PostgreSQL'
  },
  // Innovación Videos
  {
    id: '7',
    title: 'Metodologías Ágiles',
    category: 'innovacion',
    imageUrl: 'https://i.ytimg.com/vi/alNDiVxaMVk/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=HhC75IonpOU',
    description: 'Introducción a Scrum y metodologías ágiles'
  },
  {
    id: '8',
    title: 'Aprende Docker en 1 hora',
    category: 'innovacion',
    imageUrl: 'https://www.cloudtern.com/wp-content/uploads/2021/08/top-5-advantages-of-using-docker.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=4Dko5W96WHg',
    description: 'Curso completo de Docker de cero a dios'
  },
  {
    id: '9',
    title: 'Introduccion a Amazon Web Services',
    category: 'innovacion',
    imageUrl: 'https://www.imagar.com/wp-content/uploads/2023/11/aws01.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=zQyrhjEAqLs',
    description: 'Curso de Amazon Web Services para principiantes'
  }
];
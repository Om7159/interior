import React from 'react';
import { useState } from 'react';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const galleryItems = [
    {
      id: 1,
      title: 'Modern Living Room',
      category: 'living',
      image: '/images/living-room-1.jpg',
      description: 'Contemporary living space with minimalist design'
    },
    {
      id: 2,
      title: 'Luxury Kitchen',
      category: 'kitchen',
      image: '/images/kitchen-1.jpg',
      description: 'High-end kitchen with premium finishes'
    },
    {
      id: 3,
      title: 'Serene Bedroom',
      category: 'bedroom',
      image: '/images/bedroom-1.jpg',
      description: 'Peaceful bedroom retreat'
    },
    {
      id: 4,
      title: 'Spa Bathroom',
      category: 'bathroom',
      image: '/images/bathroom-1.jpg',
      description: 'Luxurious bathroom design'
    },
    {
      id: 5,
      title: 'Home Office',
      category: 'office',
      image: '/images/office-1.jpg',
      description: 'Productive workspace design'
    },
    {
      id: 6,
      title: 'Outdoor Living',
      category: 'outdoor',
      image: '/images/outdoor-1.jpg',
      description: 'Beautiful outdoor entertainment area'
    }
  ];

  const categories = ['all', 'living', 'kitchen', 'bedroom', 'bathroom', 'office', 'outdoor'];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="gallery-page">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">Our Gallery</h1>
        <p className="text-xl text-center text-gray-600 mb-12">
          Explore our portfolio of stunning interior designs
        </p>

        {/* Category Filter */}
        <div className="flex justify-center flex-wrap gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full capitalize transition-colors ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map(item => (
            <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Image: {item.image}</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <button className="text-blue-600 hover:text-blue-800 font-medium">
                  View Details →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;

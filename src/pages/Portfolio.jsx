import React from 'react';
import { useState } from 'react';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Urban Loft Transformation',
      type: 'residential',
      style: 'Industrial',
      area: '1200 sq ft',
      duration: '8 weeks',
      location: 'New York, NY',
      description: 'Converted a raw industrial space into a sophisticated urban loft with custom metalwork and reclaimed materials.',
      images: ['/images/loft-1.jpg', '/images/loft-2.jpg', '/images/loft-3.jpg'],
      features: ['Custom metal staircase', 'Exposed brick walls', 'Open concept living', 'Smart home integration']
    },
    {
      id: 2,
      title: 'Luxury Hotel Lobby',
      type: 'commercial',
      style: 'Contemporary',
      area: '2500 sq ft',
      duration: '12 weeks',
      location: 'Miami, FL',
      description: 'Designed an elegant hotel lobby that combines luxury with functionality for a 5-star hospitality experience.',
      images: ['/images/hotel-1.jpg', '/images/hotel-2.jpg', '/images/hotel-3.jpg'],
      features: ['Custom lighting installation', 'Marble flooring', 'Artisanal furniture', 'Climate-controlled seating']
    },
    {
      id: 3,
      title: 'Family Home Renovation',
      type: 'residential',
      style: 'Transitional',
      area: '1800 sq ft',
      duration: '10 weeks',
      location: 'Austin, TX',
      description: 'Complete home renovation focusing on family-friendly spaces that blend modern and traditional elements.',
      images: ['/images/family-1.jpg', '/images/family-2.jpg', '/images/family-3.jpg'],
      features: ['Open kitchen design', 'Built-in storage solutions', 'Kid-friendly materials', 'Outdoor living integration']
    },
    {
      id: 4,
      title: 'Tech Startup Office',
      type: 'commercial',
      style: 'Modern',
      area: '5000 sq ft',
      duration: '15 weeks',
      location: 'San Francisco, CA',
      description: 'Created an innovative workspace that fosters collaboration and creativity for a growing tech company.',
      images: ['/images/office-1.jpg', '/images/office-2.jpg', '/images/office-3.jpg'],
      features: ['Collaborative zones', 'Sound-proof phone booths', 'Adjustable standing desks', 'Green walls']
    },
    {
      id: 5,
      title: 'Boutique Retail Store',
      type: 'commercial',
      style: 'Minimalist',
      area: '800 sq ft',
      duration: '6 weeks',
      location: 'Portland, OR',
      description: 'Designed a clean, minimalist retail space that highlights products while creating an engaging customer experience.',
      images: ['/images/retail-1.jpg', '/images/retail-2.jpg', '/images/retail-3.jpg'],
      features: ['Custom display units', 'Strategic lighting', 'Flexible layout', 'Sustainable materials']
    },
    {
      id: 6,
      title: 'Coastal Vacation Home',
      type: 'residential',
      style: 'Coastal',
      area: '2200 sq ft',
      duration: '14 weeks',
      location: 'San Diego, CA',
      description: 'Beachfront property designed with light, airy spaces that capture the essence of coastal living.',
      images: ['/images/coastal-1.jpg', '/images/coastal-2.jpg', '/images/coastal-3.jpg'],
      features: ['Ocean views maximized', 'Weather-resistant materials', 'Indoor-outdoor flow', 'Nautical elements']
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.type === filter);

  return (
    <div className="portfolio-page">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Portfolio</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our curated collection of completed projects that showcase our design expertise and attention to detail.
          </p>
        </div>

        {/* Filters */}
        <div className="flex justify-center gap-4 mb-12">
          {['all', 'residential', 'commercial'].map(type => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-6 py-2 rounded-full capitalize transition-colors ${
                filter === type
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div 
              key={project.id} 
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                <span className="text-white font-semibold">Project Image</span>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full capitalize">
                    {project.type}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-4">{project.location}</p>
                <p className="text-gray-700 mb-4 line-clamp-2">{project.description}</p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>{project.area}</span>
                  <span>{project.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <h2 className="text-3xl font-bold">{selectedProject.title}</h2>
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="text-gray-500 hover:text-gray-700 text-2xl"
                  >
                    ×
                  </button>
                </div>
                
                {/* Project Images */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {selectedProject.images.map((img, index) => (
                    <div key={index} className="h-40 bg-gray-200 rounded-lg flex items-center justify-center">
                      <span className="text-gray-500">Image {index + 1}</span>
                    </div>
                  ))}
                </div>

                {/* Project Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Project Details</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Type:</span>
                        <span className="font-medium capitalize">{selectedProject.type}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Style:</span>
                        <span className="font-medium">{selectedProject.style}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Area:</span>
                        <span className="font-medium">{selectedProject.area}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Duration:</span>
                        <span className="font-medium">{selectedProject.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Location:</span>
                        <span className="font-medium">{selectedProject.location}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                    <ul className="list-disc list-inside space-y-2">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index} className="text-gray-700">{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4">Description</h3>
                  <p className="text-gray-700 leading-relaxed">{selectedProject.description}</p>
                </div>

                <div className="mt-8 flex gap-4">
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                    Schedule Consultation
                  </button>
                  <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors">
                    View Similar Projects
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;

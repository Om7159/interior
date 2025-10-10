import React from 'react';

const Process = () => {
  const steps = [
    {
      number: '01',
      title: 'Discovery & Consultation',
      description: 'We begin with an in-depth conversation to understand your vision, needs, budget, and timeline. This is where we get to know you and your space.',
      activities: [
        'Initial meeting (virtual or in-person)',
        'Space assessment and measurements',
        'Budget and timeline discussion',
        'Style preference exploration'
      ],
      duration: '1-2 weeks',
      icon: '🔍'
    },
    {
      number: '02',
      title: 'Concept Development',
      description: 'Our design team creates initial concepts, mood boards, and space plans that align with your vision and functional requirements.',
      activities: [
        'Mood board creation',
        'Space planning and layout',
        'Preliminary material selection',
        'Concept presentation'
      ],
      duration: '2-3 weeks',
      icon: '💡'
    },
    {
      number: '03',
      title: 'Design Refinement',
      description: 'We refine the chosen concept, develop detailed drawings, and select all materials, furniture, and finishes.',
      activities: [
        'Detailed floor plans and elevations',
        'Furniture and material specifications',
        'Lighting and electrical plans',
        '3D renderings and visualizations'
      ],
      duration: '3-4 weeks',
      icon: '✏️'
    },
    {
      number: '04',
      title: 'Implementation Planning',
      description: 'We create a comprehensive project plan, coordinate with contractors, and establish timelines for procurement and installation.',
      activities: [
        'Contractor coordination',
        'Procurement scheduling',
        'Project timeline development',
        'Budget finalization'
      ],
      duration: '2-3 weeks',
      icon: '📋'
    },
    {
      number: '05',
      title: 'Execution & Installation',
      description: 'Our team manages the entire implementation process, ensuring quality control and keeping you informed at every stage.',
      activities: [
        'Regular site supervision',
        'Quality assurance checks',
        'Vendor coordination',
        'Installation management'
      ],
      duration: 'Varies by project',
      icon: '🚀'
    },
    {
      number: '06',
      title: 'Final Reveal & Support',
      description: 'We present the completed space and provide ongoing support to ensure your complete satisfaction with the final result.',
      activities: [
        'Final walkthrough',
        'Furniture styling and accessorizing',
        'Project documentation',
        'Post-project support'
      ],
      duration: '1 week',
      icon: '🎉'
    }
  ];

  return (
    <div className="process-page bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Our Design Process</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We follow a structured, collaborative approach to ensure your interior design project 
            is executed seamlessly from concept to completion.
          </p>
        </div>

        {/* Process Steps */}
        <div className="max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={step.number} className="flex flex-col md:flex-row mb-16 last:mb-0">
              {/* Left Column - Step Info */}
              <div className="md:w-2/5 mb-8 md:mb-0 md:pr-12">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mr-4">
                    {step.number}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">{step.title}</h2>
                    <p className="text-gray-500">{step.duration}</p>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  {step.description}
                </p>

                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h4 className="font-semibold mb-3 text-gray-800">Key Activities:</h4>
                  <ul className="space-y-2">
                    {step.activities.map((activity, activityIndex) => (
                      <li key={activityIndex} className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span className="text-gray-600">{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Column - Visual */}
              <div className="md:w-3/5 flex items-center">
                <div className="bg-white rounded-2xl shadow-lg p-8 w-full">
                  <div className="text-6xl text-center mb-4">{step.icon}</div>
                  <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
                    <span className="text-gray-500 font-medium">
                      Process Step Visualization - {step.title}
                    </span>
                  </div>
                  
                  {/* Connector Line */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:flex justify-center mt-8">
                      <div className="w-1 h-16 bg-blue-200 rounded-full"></div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto mt-20 text-center">
          <div className="bg-blue-600 rounded-2xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Let's begin the journey to transform your space with our proven design process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Schedule Free Consultation
              </button>
              <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Download Process Guide
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;

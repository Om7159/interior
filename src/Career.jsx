import React from 'react';
import { useState } from 'react';

const Careers = () => {
  const [activeDepartment, setActiveDepartment] = useState('all');

  const jobOpenings = [
    {
      id: 1,
      title: 'Senior Interior Designer',
      department: 'design',
      type: 'Full-time',
      location: 'New York, NY',
      experience: '5+ years',
      description: 'We are seeking an experienced Senior Interior Designer to lead residential and commercial projects from concept to completion.',
      responsibilities: [
        'Lead design projects and client presentations',
        'Develop creative concepts and space plans',
        'Coordinate with architects and contractors',
        'Mentor junior design team members'
      ],
      requirements: [
        'Bachelor\'s degree in Interior Design',
        '5+ years of professional experience',
        'Proficiency in AutoCAD, SketchUp, and Adobe Creative Suite',
        'Strong portfolio of completed projects'
      ]
    },
    {
      id: 2,
      title: 'Project Manager',
      department: 'operations',
      type: 'Full-time',
      location: 'Remote',
      experience: '3+ years',
      description: 'Manage interior design projects ensuring they are delivered on time, within scope and budget while maintaining quality standards.',
      responsibilities: [
        'Develop project plans and timelines',
        'Coordinate with vendors and contractors',
        'Monitor project progress and budgets',
        'Client communication and updates'
      ],
      requirements: [
        '3+ years project management experience',
        'Experience in interior design or construction',
        'Excellent organizational skills',
        'PMP certification preferred'
      ]
    },
    {
      id: 3,
      title: 'Junior Interior Designer',
      department: 'design',
      type: 'Full-time',
      location: 'Los Angeles, CA',
      experience: '1-3 years',
      description: 'Great opportunity for a creative Junior Interior Designer to grow and learn in a dynamic design environment.',
      responsibilities: [
        'Assist senior designers with project development',
        'Create mood boards and presentations',
        'Source materials and furnishings',
        'Prepare technical drawings'
      ],
      requirements: [
        'Degree in Interior Design or related field',
        '1-3 years of experience',
        'Proficiency in design software',
        'Strong creative and conceptual skills'
      ]
    },
    {
      id: 4,
      title: 'Marketing Coordinator',
      department: 'marketing',
      type: 'Full-time',
      location: 'Chicago, IL',
      experience: '2+ years',
      description: 'Join our marketing team to help promote our design services and build our brand presence across multiple channels.',
      responsibilities: [
        'Manage social media accounts',
        'Create marketing content and campaigns',
        'Coordinate photoshoots and events',
        'Analyze marketing performance metrics'
      ],
      requirements: [
        '2+ years marketing experience',
        'Experience with social media management',
        'Excellent writing and communication skills',
        'Knowledge of design industry preferred'
      ]
    }
  ];

  const departments = ['all', 'design', 'operations', 'marketing'];
  const benefits = [
    {
      icon: '💰',
      title: 'Competitive Salary',
      description: 'Industry-leading compensation with performance bonuses'
    },
    {
      icon: '🏥',
      title: 'Health Benefits',
      description: 'Comprehensive medical, dental, and vision insurance'
    },
    {
      icon: '📚',
      title: 'Professional Development',
      description: 'Annual budget for courses, conferences, and certifications'
    },
    {
      icon: '🏖️',
      title: 'Flexible Time Off',
      description: 'Unlimited PTO and flexible work arrangements'
    },
    {
      icon: '🎨',
      title: 'Creative Environment',
      description: 'Work in inspiring spaces with cutting-edge tools'
    },
    {
      icon: '👥',
      title: 'Team Culture',
      description: 'Collaborative environment with regular team events'
    }
  ];

  const filteredJobs = activeDepartment === 'all' 
    ? jobOpenings 
    : jobOpenings.filter(job => job.department === activeDepartment);

  return (
    <div className="careers-page">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Join Our Creative Team</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Help us create beautiful, functional spaces while growing your career in a supportive, innovative environment.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            View Open Positions
          </button>
        </div>

        {/* Benefits Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Why Work With Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Job Openings */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Current Openings</h2>
          
          {/* Department Filters */}
          <div className="flex justify-center flex-wrap gap-4 mb-12">
            {departments.map(dept => (
              <button
                key={dept}
                onClick={() => setActiveDepartment(dept)}
                className={`px-6 py-2 rounded-full capitalize transition-colors ${
                  activeDepartment === dept
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {dept === 'all' ? 'All Departments' : dept}
              </button>
            ))}
          </div>

          {/* Jobs List */}

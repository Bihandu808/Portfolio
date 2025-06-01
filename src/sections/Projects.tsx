import React, { useState } from 'react';
import { ExternalLink, Code, Calendar, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProjectProps {
  id: string;
  title: string;
  description: string;
  period: string;
  image: string;
  technologies: string[];
  features?: string[];
  githubLink?: string; // Added githubLink property
}

const projectsData: ProjectProps[] = [
  {
    id: "mood-beats",
    title: "MOOD BEATS",
    description: "An innovative application designed to integrate music generation, Facial Recognition and Voice Recognition into a unified system.",
    period: "Ongoing",
    image: "Asessts/IMG5.png",
    technologies: ["React Native", "Python", "MongoDB"],
    features: [
      "Leveraging advanced machine learning algorithms and user-friendly interface",
      "Generating personalized music experiences including song generation and automated cover generation",
      "Created and Designed Home page, Navigation bar, Log-in page, User profile using React Native",
      "Supported to connect Frontend and Backend with team members"
    ],
    githubLink: "https://github.com/BinaryVortex/SDGP-Project-MOODBEATS/branches/active" // Add actual GitHub link
  },
  {
    id: "plane-management",
    title: "Plane Management System",
    description: "A console-based application using Java 21 for managing plane seat reservations.",
    period: "February 2024 - April 2024",
    image: "Asessts/IMG2.png",
    technologies: ["JAVA", "Object Oriented Design (OOD)", "MySQL"],
    features: [
      "Implemented features to view seat availability, book and cancel seats, and display seating layouts dynamically",
      "Designed to handle multiple flight seating arrangements, enhancing reservation flexibility",
      "Optimized backend for efficient data management and seamless seat reservation processes",
      "Created a responsive user interface to improve the overall user experience"
    ],
    githubLink: "https://github.com/Bihandu808" // Add actual GitHub link
  },
  {
    id: "pure-energy",
    title: "Pure Energy",
    description: "Natural Energy generating products website. That user can use it to buy products, services and have a knowledge about Solar Energy System.",
    period: "February 2023 - March 2023",
    image: "Asessts/IMG3.png",
    technologies: ["HTML", "CSS", "JavaScript"],
    features: [
      "Implemented features to buy products and small description about Solar Energy System",
      "Created a responsive user interface to improve the overall user experience",
      "Designed product catalog with detailed information about solar energy products",
      "Integrated contact form for inquiries and quote requests"
    ],
    githubLink: "https://github.com/Bihandu808" // Add actual GitHub link
  }
];

const ProjectCard: React.FC<{ project: ProjectProps }> = ({ project }) => {
  return (
    <div className="group bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
      <div className="relative h-60 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
          <div className="p-4 w-full">
            <div className="flex items-center text-white/80 text-sm mb-2">
              <Calendar size={14} className="mr-1" />
              <span>{project.period}</span>
            </div>
            <h3 className="text-xl font-bold text-white">{project.title}</h3>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, index) => (
            <span key={index} className="px-2 py-1 bg-teal-100 dark:bg-teal-900/40 text-teal-800 dark:text-teal-300 rounded text-xs">
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex justify-between items-center">
          <Link 
            to={`/project/${project.id}`} 
            className="inline-flex items-center text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 transition-colors"
          >
            View Details
            <ExternalLink size={16} className="ml-1" />
          </Link>
          
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              title="View on GitHub"
            >
              <Github size={18} className="mr-1" />
              <span className="sr-only">GitHub</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-teal-600 dark:bg-teal-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of the projects I've worked on that showcase my skills and experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
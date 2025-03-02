import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export const metadata = {
  title: "Projects | Khushi - Premium UI/UX Designer",
  description: "Explore my UI/UX design projects showcasing user-centered solutions and creative problem-solving.",
};

export default function Projects() {
  const projects = [
    {
      id: "hypd",
      title: "HYBD",
      description: "Quick commerce platform for fashion, delivering trendy outfits in under 30 minutes.",
      image: "/images/hypd/home2.png",
      category: "E-commerce App",
    },
    {
      id: "aero",
      title: "Aero",
      description: "VR & AI-powered airport navigation app making travel seamless and stress-free.",
      image: "/images/aero/airport navigation 3d.png",
      category: "VR/AI Experience",
    },
    {
      id: "greencloz",
      title: "GreenCloz",
      description: "Sustainable fashion app helping users manage their wardrobe and make eco-friendly choices.",
      image: "/images/greencloz/Home.png",
      category: "Lifestyle App",
    },
  ];

  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="bg-white py-24 md:py-32">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-8">My Projects</h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
              A collection of my UI/UX design work showcasing my approach to solving design challenges and creating impactful user experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project) => (
              <div key={project.id} className="project-card group">
                <div className="relative overflow-hidden h-80">
                  <Image
                    src={project.image}
                    alt={`${project.title} Project`}
                    fill
                    className="project-card-image"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-8 bg-white">
                  <div className="text-sm font-medium text-gray-500 mb-3">
                    {project.category}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 font-playfair">{project.title}</h3>
                  <p className="text-gray-600 mb-6">
                    {project.description}
                  </p>
                  <Link 
                    href={`/projects/${project.id}`} 
                    className="inline-flex items-center font-medium text-black hover:opacity-70 transition-opacity"
                  >
                    View Case Study <FaArrowRight className="ml-2" size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Process Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="mb-6">My Design Process</h2>
            <p className="text-gray-600 mb-12">
              Each project follows a thoughtful approach to ensure the final solution meets both user needs and business goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="p-8 bg-gray-50 flex flex-col items-center text-center">
              <div className="text-4xl font-playfair font-bold mb-4">01</div>
              <h3 className="text-xl font-bold mb-4">Discover</h3>
              <p className="text-gray-600">
                Research and understand the problem space, user needs, and business goals.
              </p>
            </div>
            
            <div className="p-8 bg-gray-50 flex flex-col items-center text-center">
              <div className="text-4xl font-playfair font-bold mb-4">02</div>
              <h3 className="text-xl font-bold mb-4">Define</h3>
              <p className="text-gray-600">
                Synthesize research insights to define the core problems and objectives.
              </p>
            </div>
            
            <div className="p-8 bg-gray-50 flex flex-col items-center text-center">
              <div className="text-4xl font-playfair font-bold mb-4">03</div>
              <h3 className="text-xl font-bold mb-4">Design</h3>
              <p className="text-gray-600">
                Create wireframes, prototypes, and visual designs that address user needs.
              </p>
            </div>
            
            <div className="p-8 bg-gray-50 flex flex-col items-center text-center">
              <div className="text-4xl font-playfair font-bold mb-4">04</div>
              <h3 className="text-xl font-bold mb-4">Deliver</h3>
              <p className="text-gray-600">
                Test, refine, and implement the final design solution.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 
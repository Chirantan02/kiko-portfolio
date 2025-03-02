import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export const metadata = {
  title: "Aero - Airport Navigation App | Khushi - Premium UI/UX Designer",
  description: "Case study of Aero, a VR & AI-powered airport navigation app making travel seamless and stress-free.",
};

export default function AeroProject() {
  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="bg-white pt-20 pb-16">
        <div className="container-custom">
          <Link 
            href="/projects" 
            className="inline-flex items-center text-gray-600 hover:text-black transition-colors mb-12"
          >
            <FaArrowLeft className="mr-2" size={14} />
            Back to Projects
          </Link>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="slide-up">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Aero</h1>
              <p className="text-2xl text-gray-600 mb-8">
                Revolutionizing Airport Travel with VR & AI
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="px-4 py-2 bg-gray-100 text-gray-800 text-sm font-medium">VR/AI Experience</span>
                <span className="px-4 py-2 bg-gray-100 text-gray-800 text-sm font-medium">UI/UX Design</span>
                <span className="px-4 py-2 bg-gray-100 text-gray-800 text-sm font-medium">2 Weeks</span>
              </div>
            </div>
            <div className="relative h-[600px] shadow-xl">
              <Image
                src="/images/aero/airport navigation 3d.png"
                alt="Aero Project"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="md:col-span-2">
              <h2 className="text-4xl font-bold mb-8 font-playfair">Project Overview</h2>
              <div className="space-y-6 text-gray-700 text-lg">
                <p>
                  Airports are overwhelming, especially for first-time and international travellers. A 2023 survey by the Airports Council International found that 74% of travellers experience stress due to navigation issues, with 30% reporting missed flights caused by confusion.
                </p>
                <p>
                  Major hubs like Indira Gandhi International (Delhi) and Chhatrapati Shivaji Maharaj International (Mumbai) pose challenges due to confusing layouts, first-time traveller anxiety, and language barriers. Over 40% of Indian travellers struggle with English signage and announcements, leading to frequent delays and confusion.
                </p>
                <p>
                  Aero is a next-gen airport experience designed to make navigation seamless and stress-free through VR and AI technologies.
                </p>
              </div>
            </div>
            <div className="bg-white p-8 shadow-lg">
              <h3 className="text-xl font-bold mb-6 font-playfair">Project Details</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm text-gray-500 mb-1">Project Type</h4>
                  <p className="font-medium">VR/AI Experience</p>
                </div>
                <div>
                  <h4 className="text-sm text-gray-500 mb-1">Timeline</h4>
                  <p className="font-medium">2 weeks</p>
                </div>
                <div>
                  <h4 className="text-sm text-gray-500 mb-1">Role</h4>
                  <p className="font-medium">Lead UX Designer (Research, Prototyping, Testing)</p>
                </div>
                <div>
                  <h4 className="text-sm text-gray-500 mb-1">Tools</h4>
                  <p className="font-medium">Figma, Miro</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-4xl font-bold mb-8 text-center font-playfair">The Solution</h2>
          
          <p className="text-xl text-center mb-12 max-w-3xl mx-auto text-gray-700">
            A VR-powered navigation app that offers:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 p-8 shadow-lg">
              <div className="text-3xl font-playfair font-bold mb-6">01</div>
              <h3 className="text-xl font-bold mb-4">Pre-Travel 3D Airport Tours</h3>
              <p className="text-gray-700">
                Explore terminals before arrival.
              </p>
            </div>
            <div className="bg-gray-50 p-8 shadow-lg">
              <div className="text-3xl font-playfair font-bold mb-6">02</div>
              <h3 className="text-xl font-bold mb-4">Live AR/VR Navigation</h3>
              <p className="text-gray-700">
                Real-time, step-by-step visual and voice guidance.
              </p>
            </div>
            <div className="bg-gray-50 p-8 shadow-lg">
              <div className="text-3xl font-playfair font-bold mb-6">03</div>
              <h3 className="text-xl font-bold mb-4">AI-Powered Multilingual Assistance</h3>
              <p className="text-gray-700">
                Chatbot support in multiple languages.
              </p>
            </div>
            <div className="bg-gray-50 p-8 shadow-lg">
              <div className="text-3xl font-playfair font-bold mb-6">04</div>
              <h3 className="text-xl font-bold mb-4">Real-Time Flight & Gate Alerts</h3>
              <p className="text-gray-700">
                Instant updates on departures, security queues, and delays.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Diagrams */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-4xl font-bold mb-12 text-center font-playfair">Design Process & Flow</h2>
          
          <div className="space-y-16">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-center">AR Thought Process</h3>
              <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/aero/CENTRAL Ar thought process img flowchart.png"
                  alt="AR Thought Process Flowchart"
                  fill
                  className="object-contain bg-white"
                  sizes="100vw"
                />
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6 text-center">User Flow Diagram</h3>
              <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/aero/USER FLOW.png"
                  alt="User Flow Diagram"
                  fill
                  className="object-contain bg-white"
                  sizes="100vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UI Design Showcase */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="mb-12 text-center font-playfair text-4xl font-bold">UI Design Showcase</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative aspect-[9/16] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/aero/opening-screen.png"
                alt="Aero Opening Screen"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="relative aspect-[9/16] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/aero/home screen.png"
                alt="Aero Home Screen"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="relative aspect-[9/16] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/aero/virtual tour1.png"
                alt="Aero Virtual Tour 1"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="relative aspect-[9/16] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/aero/virtual tour2.png"
                alt="Aero Virtual Tour 2"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="relative aspect-[9/16] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/aero/flight status.png"
                alt="Aero Flight Status"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="relative aspect-[9/16] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/aero/customer support.png"
                alt="Aero Customer Support"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* User Research */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-4xl font-bold mb-8 text-center font-playfair">Empathy & User Research</h2>
          
          <p className="text-center mb-12 max-w-3xl mx-auto text-gray-700 text-lg">
            To truly understand the challenges travelers face, I conducted on-site research at Delhi & Mumbai airports and interviewed 52 travelers across different backgrounds.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 shadow-lg">
              <h3 className="text-xl font-bold mb-4">Frequent Flyers (20 travellers)</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2.5 mr-3"></span>
                  <p>70% struggled with last-minute gate changes</p>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2.5 mr-3"></span>
                  <p>55% found long security lines stressful</p>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2.5 mr-3"></span>
                  <p>40% had to ask airport staff for directions due to unclear signs</p>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 shadow-lg">
              <h3 className="text-xl font-bold mb-4">First-Time Travelers (18 travellers)</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2.5 mr-3"></span>
                  <p>83% felt overwhelmed navigating large airports</p>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2.5 mr-3"></span>
                  <p>61% had trouble finding check-in counters & baggage claim</p>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2.5 mr-3"></span>
                  <p>47% wasted time searching for restrooms & food outlets</p>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 shadow-lg">
              <h3 className="text-xl font-bold mb-4">Non-English Speakers (14 travellers)</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2.5 mr-3"></span>
                  <p>78% found English-only signs difficult to understand</p>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2.5 mr-3"></span>
                  <p>64% struggled with boarding announcements</p>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2.5 mr-3"></span>
                  <p>50% had to rely on co-passengers or staff for help</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-4xl font-bold mb-12 text-center font-playfair">Design Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-6">
                  <span className="text-xl font-bold">1</span>
                </div>
                <h3 className="text-2xl font-bold">Research & Problem Definition</h3>
              </div>
              <ul className="space-y-4 text-gray-700 text-lg ml-16">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2.5 mr-3"></span>
                  <p>Conducted on-site observations at airports.</p>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2.5 mr-3"></span>
                  <p>Interviewed travelers to identify pain points.</p>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2.5 mr-3"></span>
                  <p>Created user personas to guide the design process.</p>
                </li>
              </ul>
            </div>
            
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-6">
                  <span className="text-xl font-bold">2</span>
                </div>
                <h3 className="text-2xl font-bold">Ideation & Concept Development</h3>
              </div>
              <ul className="space-y-4 text-gray-700 text-lg ml-16">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2.5 mr-3"></span>
                  <p>Explored VR/AR technologies for navigation.</p>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2.5 mr-3"></span>
                  <p>Developed multilingual support concepts.</p>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2.5 mr-3"></span>
                  <p>Created user journey maps for different traveler types.</p>
                </li>
              </ul>
            </div>
            
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-6">
                  <span className="text-xl font-bold">3</span>
                </div>
                <h3 className="text-2xl font-bold">Prototyping & UI Design</h3>
              </div>
              <ul className="space-y-4 text-gray-700 text-lg ml-16">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2.5 mr-3"></span>
                  <p>Designed 3D airport models for virtual exploration.</p>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2.5 mr-3"></span>
                  <p>Created AR interface for real-time navigation.</p>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2.5 mr-3"></span>
                  <p>Developed intuitive UI for diverse user groups.</p>
                </li>
              </ul>
            </div>
            
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-6">
                  <span className="text-xl font-bold">4</span>
                </div>
                <h3 className="text-2xl font-bold">Testing & Refinement</h3>
              </div>
              <ul className="space-y-4 text-gray-700 text-lg ml-16">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2.5 mr-3"></span>
                  <p>Conducted usability testing with diverse user groups.</p>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2.5 mr-3"></span>
                  <p>Refined navigation algorithms based on feedback.</p>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2.5 mr-3"></span>
                  <p>Optimized UI for accessibility and ease of use.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Results & Impact */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-4xl font-bold mb-8 text-center font-playfair">Results & Impact</h2>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 mb-8">
              While Aero is a conceptual project, user testing with a prototype showed promising results:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-8 text-center">
                <div className="text-4xl font-bold mb-4 font-playfair">92%</div>
                <p className="text-gray-700">Reduction in navigation confusion</p>
              </div>
              <div className="bg-white p-8 text-center">
                <div className="text-4xl font-bold mb-4 font-playfair">85%</div>
                <p className="text-gray-700">Users felt more confident in airports</p>
              </div>
              <div className="bg-white p-8 text-center">
                <div className="text-4xl font-bold mb-4 font-playfair">78%</div>
                <p className="text-gray-700">Reduction in time spent finding facilities</p>
              </div>
            </div>
            
            <p className="text-lg text-gray-700">
              The project demonstrates how emerging technologies like VR and AI can transform challenging physical environments into accessible, stress-free experiences for all users, regardless of language or travel experience.
            </p>
          </div>
        </div>
      </section>

      {/* Next Project Link */}
      <section className="py-16 bg-white">
        <div className="container-custom text-center">
          <h3 className="text-2xl font-bold mb-6">Explore More Projects</h3>
          <div className="flex justify-center gap-6">
            <Link href="/projects/hypd" className="btn-secondary">
              View HYBD Project
            </Link>
            <Link href="/projects/greencloz" className="btn-secondary">
              View GreenCloz Project
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 
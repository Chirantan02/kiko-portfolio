import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export const metadata = {
  title: "GreenCloz - Sustainable Fashion App | Khushi - Premium UI/UX Designer",
  description: "Case study of GreenCloz, a sustainable fashion marketplace app promoting eco-friendly clothing choices.",
};

export default function GreenClozProject() {
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
              <h1 className="text-5xl md:text-6xl font-bold mb-6">GreenCloz</h1>
              <p className="text-2xl text-gray-600 mb-8">
                Sustainable Fashion Marketplace
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="px-4 py-2 bg-gray-100 text-gray-800 text-sm font-medium">E-Commerce</span>
                <span className="px-4 py-2 bg-gray-100 text-gray-800 text-sm font-medium">UI/UX Design</span>
                <span className="px-4 py-2 bg-gray-100 text-gray-800 text-sm font-medium">3 Weeks</span>
              </div>
            </div>
            <div className="relative h-[600px] shadow-xl">
              <Image
                src="/images/greencloz/Home.png"
                alt="GreenCloz Project"
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
                  The fashion industry is one of the largest polluters globally, contributing to 10% of global carbon emissions and 20% of global wastewater. Fast fashion has created a culture of disposable clothing, with the average consumer throwing away 70 pounds of clothing annually.
                </p>
                <p>
                  GreenCloz is a sustainable fashion marketplace app designed to connect eco-conscious consumers with ethical fashion brands. The platform promotes transparency in the fashion supply chain and encourages sustainable shopping habits.
                </p>
                <p>
                  The app features carbon footprint tracking, detailed sustainability metrics for each product, and a community section where users can share styling tips and upcycling ideas.
                </p>
              </div>
            </div>
            <div className="bg-white p-8 shadow-lg">
              <h3 className="text-xl font-bold mb-6 font-playfair">Project Details</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm text-gray-500 mb-1">Project Type</h4>
                  <p className="font-medium">E-Commerce App</p>
                </div>
                <div>
                  <h4 className="text-sm text-gray-500 mb-1">Timeline</h4>
                  <p className="font-medium">3 weeks</p>
                </div>
                <div>
                  <h4 className="text-sm text-gray-500 mb-1">Role</h4>
                  <p className="font-medium">UI/UX Designer (Research, Wireframing, Visual Design)</p>
                </div>
                <div>
                  <h4 className="text-sm text-gray-500 mb-1">Tools</h4>
                  <p className="font-medium">Figma, Adobe Illustrator</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-4xl font-bold mb-8 text-center font-playfair">The Challenge</h2>
          
          <p className="text-xl text-center mb-12 max-w-3xl mx-auto text-gray-700">
            How might we create a shopping experience that makes sustainable fashion accessible, transparent, and appealing to mainstream consumers?
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 shadow-lg">
              <div className="text-3xl font-playfair font-bold mb-6">01</div>
              <h3 className="text-xl font-bold mb-4">Perception Problem</h3>
              <p className="text-gray-700">
                Many consumers perceive sustainable fashion as expensive, unfashionable, or difficult to find.
              </p>
            </div>
            <div className="bg-gray-50 p-8 shadow-lg">
              <div className="text-3xl font-playfair font-bold mb-6">02</div>
              <h3 className="text-xl font-bold mb-4">Transparency Issues</h3>
              <p className="text-gray-700">
                Lack of clear information about how products are made and their environmental impact.
              </p>
            </div>
            <div className="bg-gray-50 p-8 shadow-lg">
              <div className="text-3xl font-playfair font-bold mb-6">03</div>
              <h3 className="text-xl font-bold mb-4">Behavior Change</h3>
              <p className="text-gray-700">
                Encouraging consumers to shift from fast fashion to more sustainable consumption patterns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* UI Design Showcase */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="mb-12 text-center font-playfair text-4xl font-bold">UI Design Showcase</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative aspect-[9/16] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/greencloz/Home.png"
                alt="GreenCloz Home Screen"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="relative aspect-[9/16] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/greencloz/login.png"
                alt="GreenCloz Login Screen"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="relative aspect-[9/16] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/greencloz/Register.png"
                alt="GreenCloz Register Screen"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="relative aspect-[9/16] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/greencloz/dasboard.png"
                alt="GreenCloz Dashboard"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="relative aspect-[9/16] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/greencloz/camera-widget.png"
                alt="GreenCloz Camera Widget"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="relative aspect-[9/16] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/greencloz/pick your style.png"
                alt="GreenCloz Style Picker"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="relative aspect-[9/16] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/greencloz/Product info 1.png"
                alt="GreenCloz Product Info 1"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="relative aspect-[9/16] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/greencloz/Product info 2.png"
                alt="GreenCloz Product Info 2"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="relative aspect-[9/16] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/greencloz/Chat.png"
                alt="GreenCloz Chat"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* User Research */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-4xl font-bold mb-8 text-center font-playfair">User Research Insights</h2>
          
          <p className="text-center mb-12 max-w-3xl mx-auto text-gray-700 text-lg">
            I conducted interviews with 35 participants aged 18-45 who expressed interest in sustainable living but had varying levels of commitment to sustainable fashion.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-50 p-8 shadow-lg">
              <h3 className="text-xl font-bold mb-4">Price Sensitivity</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2.5 mr-3"></span>
                  <p>78% cited higher prices as the main barrier to purchasing sustainable fashion</p>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2.5 mr-3"></span>
                  <p>65% would pay up to 20% more for verified sustainable products</p>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-8 shadow-lg">
              <h3 className="text-xl font-bold mb-4">Information Needs</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2.5 mr-3"></span>
                  <p>82% wanted clear information about materials and production methods</p>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2.5 mr-3"></span>
                  <p>71% were skeptical of vague sustainability claims</p>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-8 shadow-lg">
              <h3 className="text-xl font-bold mb-4">Shopping Behavior</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2.5 mr-3"></span>
                  <p>67% wanted to see how items looked on diverse body types</p>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2.5 mr-3"></span>
                  <p>59% were interested in community features for styling advice</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-4xl font-bold mb-12 text-center font-playfair">Key Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-6">
                  <span className="text-xl font-bold">1</span>
                </div>
                <h3 className="text-2xl font-bold">Sustainability Metrics</h3>
              </div>
              <ul className="space-y-4 text-gray-700 text-lg ml-16">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2.5 mr-3"></span>
                  <p>Detailed breakdown of materials and production methods</p>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2.5 mr-3"></span>
                  <p>Water and carbon footprint calculations</p>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2.5 mr-3"></span>
                  <p>Third-party certifications and verification</p>
                </li>
              </ul>
            </div>
            
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-6">
                  <span className="text-xl font-bold">2</span>
                </div>
                <h3 className="text-2xl font-bold">Personal Impact Dashboard</h3>
              </div>
              <ul className="space-y-4 text-gray-700 text-lg ml-16">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2.5 mr-3"></span>
                  <p>Track environmental savings from purchases</p>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2.5 mr-3"></span>
                  <p>Set personal sustainability goals</p>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2.5 mr-3"></span>
                  <p>Earn rewards for sustainable choices</p>
                </li>
              </ul>
            </div>
            
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-6">
                  <span className="text-xl font-bold">3</span>
                </div>
                <h3 className="text-2xl font-bold">Community Features</h3>
              </div>
              <ul className="space-y-4 text-gray-700 text-lg ml-16">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2.5 mr-3"></span>
                  <p>User-generated styling ideas and outfit combinations</p>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2.5 mr-3"></span>
                  <p>Upcycling tutorials and workshops</p>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2.5 mr-3"></span>
                  <p>Discussion forums on sustainable fashion topics</p>
                </li>
              </ul>
            </div>
            
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-6">
                  <span className="text-xl font-bold">4</span>
                </div>
                <h3 className="text-2xl font-bold">Inclusive Shopping Experience</h3>
              </div>
              <ul className="space-y-4 text-gray-700 text-lg ml-16">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2.5 mr-3"></span>
                  <p>Diverse model representation across body types</p>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2.5 mr-3"></span>
                  <p>Detailed size guides with user reviews</p>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2.5 mr-3"></span>
                  <p>Price filtering and budget-friendly collections</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-4xl font-bold mb-8 text-center font-playfair">Design Process</h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-4">1. Research & Discovery</h3>
              <p className="text-lg text-gray-700 mb-4">
                I began by conducting extensive research on the sustainable fashion market, including competitor analysis, user interviews, and surveys to understand consumer pain points and desires.
              </p>
              <p className="text-lg text-gray-700">
                Key insights revealed that users wanted transparency, affordability, and a shopping experience that didn&apos;t compromise on style or user experience.
              </p>
            </div>
            
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-4">2. Ideation & Wireframing</h3>
              <p className="text-lg text-gray-700 mb-4">
                Based on research findings, I created user flows and wireframes focusing on three core pillars:
              </p>
              <ul className="space-y-2 text-lg text-gray-700 mb-4 ml-6">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2.5 mr-3"></span>
                  <p>Transparent product information</p>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2.5 mr-3"></span>
                  <p>Personal impact tracking</p>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2.5 mr-3"></span>
                  <p>Community engagement</p>
                </li>
              </ul>
            </div>
            
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-4">3. Visual Design & Prototyping</h3>
              <p className="text-lg text-gray-700 mb-4">
                I developed a visual identity that balanced eco-consciousness with contemporary fashion aesthetics. The color palette features earthy greens and neutrals with vibrant accents to create a fresh, modern look.
              </p>
              <p className="text-lg text-gray-700">
                Interactive prototypes were created to test the user flow and gather feedback on key features like the sustainability metrics display and impact dashboard.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4">4. Testing & Iteration</h3>
              <p className="text-lg text-gray-700 mb-4">
                Usability testing with 12 participants revealed several opportunities for improvement:
              </p>
              <ul className="space-y-2 text-lg text-gray-700 ml-6">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2.5 mr-3"></span>
                  <p>Simplified sustainability metrics for better comprehension</p>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2.5 mr-3"></span>
                  <p>Enhanced filter options for more precise product discovery</p>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2.5 mr-3"></span>
                  <p>Improved community content organization</p>
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
              The GreenCloz prototype was tested with a focus group of 20 participants who regularly shop for clothing online:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-8 text-center shadow-lg">
                <div className="text-4xl font-bold mb-4 font-playfair">90%</div>
                <p className="text-gray-700">Found sustainability information helpful in decision-making</p>
              </div>
              <div className="bg-white p-8 text-center shadow-lg">
                <div className="text-4xl font-bold mb-4 font-playfair">85%</div>
                <p className="text-gray-700">Rated the shopping experience as superior to traditional e-commerce</p>
              </div>
              <div className="bg-white p-8 text-center shadow-lg">
                <div className="text-4xl font-bold mb-4 font-playfair">75%</div>
                <p className="text-gray-700">Expressed interest in the community features</p>
              </div>
            </div>
            
            <p className="text-lg text-gray-700">
              The project demonstrates how thoughtful UX design can help bridge the gap between sustainable values and consumer behavior, making eco-friendly fashion more accessible and appealing to mainstream shoppers.
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
            <Link href="/projects/aero" className="btn-secondary">
              View Aero Project
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 
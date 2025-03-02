import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export const metadata = {
  title: "HYBD - Quick Commerce Fashion | Khushi - Premium UI/UX Designer",
  description: "Case study of HYBD, a quick commerce platform for fashion delivering trendy outfits in under 30 minutes.",
};

export default function HYBDProject() {
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
              <h1 className="mb-6">HYBD</h1>
              <p className="text-2xl text-gray-600 mb-8">
                Bringing Quick Commerce to Fashion
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="px-4 py-2 bg-gray-100 text-gray-800 text-sm font-medium">E-commerce App</span>
                <span className="px-4 py-2 bg-gray-100 text-gray-800 text-sm font-medium">UI/UX Design</span>
                <span className="px-4 py-2 bg-gray-100 text-gray-800 text-sm font-medium">2 Weeks</span>
              </div>
            </div>
            <div className="relative h-[600px] shadow-xl">
              <Image
                src="/images/hypd/home2.png"
                alt="HYBD Project"
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
              <h2 className="mb-8 font-playfair">The Spark: Why I Built This</h2>
              <div className="space-y-6 text-gray-600 text-lg">
                <p>
                  It all started with a common frustration: last-minute plans and nothing to wear. My friends and I often faced this problem—whether it was a sudden party, an office meeting, or just a mood to dress up differently. But traditional online shopping took days, and physical stores weren&apos;t always an option.
                </p>
                <p>
                  That&apos;s when I asked myself: If groceries can arrive in 10 minutes, why not fashion?
                </p>
                <p>
                  With Blinkit, Zepto, and BigBasket revolutionizing quick commerce, I saw a massive gap in the fashion industry. No one was delivering clothes instantly. So, I decided to build HYBD—a quick commerce platform for trendy outfits delivered in under 30 minutes.
                </p>
              </div>
            </div>
            <div className="bg-white p-8 shadow-lg">
              <h3 className="text-xl font-bold mb-6 font-playfair">Project Details</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm text-gray-500 mb-1">Project Type</h4>
                  <p className="font-medium">E-commerce App</p>
                </div>
                <div>
                  <h4 className="text-sm text-gray-500 mb-1">Timeline</h4>
                  <p className="font-medium">2 weeks</p>
                </div>
                <div>
                  <h4 className="text-sm text-gray-500 mb-1">Role</h4>
                  <p className="font-medium">UI/UX Designer, Researcher</p>
                </div>
                <div>
                  <h4 className="text-sm text-gray-500 mb-1">Tools</h4>
                  <p className="font-medium">Figma, React, Tailwind CSS, Firebase</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Gap & Opportunity */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="mb-12 text-center font-playfair">Market Gap & Opportunity</h2>
          
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6">Quick Commerce is Booming, but Fashion is Missing</h3>
            <ul className="space-y-5 text-gray-600 text-lg">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-black rounded-full mt-2.5 mr-4"></span>
                <p>India&apos;s quick commerce market grew from $0.1B in 2020 to $3.3B in 2024, projected to hit $9.95B by 2029.</p>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-black rounded-full mt-2.5 mr-4"></span>
                <p>Blinkit, Zepto, and BigBasket dominate groceries, but no major player exists in fashion.</p>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-black rounded-full mt-2.5 mr-4"></span>
                <p>72% of urban millennials say they struggle to find last-minute outfits when needed.</p>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Real User Insights (Informal Study)</h3>
            <p className="mb-6 text-gray-600 text-lg">
              To validate my idea, I conducted a quick survey with 10 urban professionals aged 18-35:
            </p>
            <ul className="space-y-5 text-gray-600 text-lg">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-black rounded-full mt-2.5 mr-4"></span>
                <p>8/10 said they had faced &ldquo;last-minute outfit stress&rdquo; at least once in the past month.</p>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-black rounded-full mt-2.5 mr-4"></span>
                <p>7/10 said they would pay extra for instant fashion delivery.</p>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-black rounded-full mt-2.5 mr-4"></span>
                <p>9/10 said they often abandon online shopping due to long delivery times.</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="mb-8 text-center font-playfair">The Solution: HYBD</h2>
          
          <p className="text-xl text-center mb-16 max-w-3xl mx-auto text-gray-600">
            A Blinkit-style platform, but for fashion. Users can:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 shadow-lg">
              <div className="text-3xl font-bold mb-6 font-playfair">01</div>
              <h3 className="text-xl font-bold mb-4">Real-Time Inventory</h3>
              <p className="text-gray-600">
                Browse real-time inventory of trendy outfits nearby.
              </p>
            </div>
            <div className="bg-white p-8 shadow-lg">
              <div className="text-3xl font-bold mb-6 font-playfair">02</div>
              <h3 className="text-xl font-bold mb-4">30-Minute Delivery</h3>
              <p className="text-gray-600">
                Get clothes delivered in under 30 minutes.
              </p>
            </div>
            <div className="bg-white p-8 shadow-lg">
              <div className="text-3xl font-bold mb-6 font-playfair">03</div>
              <h3 className="text-xl font-bold mb-4">Virtual Try-On</h3>
              <p className="text-gray-600">
                Virtually try-on outfits before purchasing.
              </p>
            </div>
            <div className="bg-white p-8 shadow-lg">
              <div className="text-3xl font-bold mb-6 font-playfair">04</div>
              <h3 className="text-xl font-bold mb-4">Seamless Experience</h3>
              <p className="text-gray-600">
                Pay seamlessly and return easily if needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="mb-16 text-center font-playfair">Design Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-6">
                  <span className="text-xl font-bold">1</span>
                </div>
                <h3 className="text-2xl font-bold">Research & User Pain Points</h3>
              </div>
              <ul className="space-y-4 text-gray-600 text-lg ml-16">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2.5 mr-3"></span>
                  <p>Conducted surveys & interviews.</p>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2.5 mr-3"></span>
                  <p>Identified key user needs: speed, easy returns, and real-time inventory.</p>
                </li>
              </ul>
            </div>
            
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-6">
                  <span className="text-xl font-bold">2</span>
                </div>
                <h3 className="text-2xl font-bold">Ideation & Features</h3>
              </div>
              <ul className="space-y-4 text-gray-600 text-lg ml-16">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2.5 mr-3"></span>
                  <p>Built a dark store model (like Blinkit) to store trending fashion locally.</p>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2.5 mr-3"></span>
                  <p>Integrated AR try-on for a seamless shopping experience.</p>
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
              <ul className="space-y-4 text-gray-600 text-lg ml-16">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2.5 mr-3"></span>
                  <p>Used Figma & Three.js for a modern, aesthetic UI.</p>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2.5 mr-3"></span>
                  <p>Focused on a Blinkit-style minimal design with a fashion-first experience.</p>
                </li>
              </ul>
            </div>
            
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-6">
                  <span className="text-xl font-bold">4</span>
                </div>
                <h3 className="text-2xl font-bold">Development</h3>
              </div>
              <ul className="space-y-4 text-gray-600 text-lg ml-16">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2.5 mr-3"></span>
                  <p>Built using React, Tailwind CSS, and Firebase for a smooth user experience.</p>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2.5 mr-3"></span>
                  <p>Integrated real-time stock updates & fast logistics API for 30-minute deliveries.</p>
                </li>
              </ul>
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
                src="/images/hypd/home1.png"
                alt="HYPD Home Screen"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="relative aspect-[9/16] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/hypd/home2.png"
                alt="HYPD Home Screen Alternative"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="relative aspect-[9/16] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/hypd/dashboard.png"
                alt="HYPD Dashboard"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="relative aspect-[9/16] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/hypd/products showcase.png"
                alt="HYPD Products Showcase"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="relative aspect-[9/16] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/hypd/product detail.png"
                alt="HYPD Product Detail"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="relative aspect-[9/16] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/hypd/order track.png"
                alt="HYPD Order Tracking"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Next Project */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <h2 className="mb-8 font-playfair">Next Project</h2>
          <Link 
            href="/projects/aero" 
            className="btn-primary inline-flex items-center"
          >
            View Aero Project <FaArrowLeft className="ml-2 rotate-180" size={14} />
          </Link>
        </div>
      </section>
    </div>
  );
} 
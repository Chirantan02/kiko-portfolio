import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function Home() {
  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="slide-up">
              <h1 className="text-5xl md:text-7xl font-bold mb-8 text-black">
                ELEVATING DIGITAL EXPERIENCES
              </h1>
              <p className="text-xl md:text-2xl mb-10 text-gray-700 max-w-lg font-light">
                UI/UX Designer crafting bold, user-centric designs that transform ideas into exceptional digital experiences.
              </p>
              <div className="flex flex-wrap gap-6">
                <Link href="/projects" className="btn-primary text-lg px-8 py-4 font-medium">
                  EXPLORE MY WORK
                </Link>
                <Link href="/about" className="btn-secondary text-lg px-8 py-4 font-medium">
                  ABOUT ME
                </Link>
              </div>
            </div>
            <div className="relative h-[600px] shadow-2xl hidden md:block">
              <Image
                src="/images/hero-bg.png"
                alt="UI/UX Design"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Designing with Purpose</h2>
            <p className="text-xl text-gray-600 mb-0 leading-relaxed">
              I believe in creating designs that not only look beautiful but also solve real problems. 
              My approach combines aesthetic sensibility with user-centered thinking to craft digital 
              experiences that are intuitive, engaging, and impactful.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects Section - Vertical Layout */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
            <p className="max-w-2xl mx-auto text-gray-600 text-xl">
              Explore some of my recent work showcasing my approach to solving design challenges and creating impactful user experiences.
            </p>
          </div>

          {/* HYBD Project - Vertical Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
            <div className="relative h-[700px] shadow-xl order-2 md:order-1">
              <Image
                src="/images/hypd/home2.png"
                alt="HYBD Project"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-3xl font-bold mb-6">HYBD</h3>
              <p className="text-gray-600 mb-8 text-lg">
                Quick commerce platform for fashion, delivering trendy outfits in under 30 minutes. 
                This project focused on creating a seamless shopping experience with intuitive navigation 
                and a checkout process optimized for speed.
              </p>
              <ul className="mb-8 text-gray-600">
                <li className="mb-2">• User research and competitive analysis</li>
                <li className="mb-2">• Wireframing and prototyping</li>
                <li className="mb-2">• Visual design and UI components</li>
                <li className="mb-2">• Usability testing and iteration</li>
              </ul>
              <Link 
                href="/projects/hypd" 
                className="inline-flex items-center font-medium text-black hover:opacity-70 transition-opacity"
              >
                View Case Study <FaArrowRight className="ml-2" size={14} />
              </Link>
            </div>
          </div>

          {/* Aero Project - Vertical Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
            <div className="order-2">
              <h3 className="text-3xl font-bold mb-6">Aero</h3>
              <p className="text-gray-600 mb-8 text-lg">
                VR & AI-powered airport navigation app making travel seamless and stress-free. 
                This innovative solution uses augmented reality to guide travelers through 
                complex airport environments, reducing anxiety and improving the travel experience.
              </p>
              <ul className="mb-8 text-gray-600">
                <li className="mb-2">• Experience mapping and user journeys</li>
                <li className="mb-2">• AR/VR interface design</li>
                <li className="mb-2">• Wayfinding system development</li>
                <li className="mb-2">• Accessibility considerations</li>
              </ul>
              <Link 
                href="/projects/aero" 
                className="inline-flex items-center font-medium text-black hover:opacity-70 transition-opacity"
              >
                View Case Study <FaArrowRight className="ml-2" size={14} />
              </Link>
            </div>
            <div className="relative h-[700px] shadow-xl order-1">
              <Image
                src="/images/aero/airport navigation 3d.png"
                alt="Aero Project"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* GreenCloz Project - Vertical Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative h-[700px] shadow-xl order-2 md:order-1">
              <Image
                src="/images/greencloz/Home.png"
                alt="GreenCloz Project"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-3xl font-bold mb-6">GreenCloz</h3>
              <p className="text-gray-600 mb-8 text-lg">
                Sustainable fashion app helping users manage their wardrobe and make eco-friendly choices. 
                This project addresses the growing concern for sustainable consumption by providing tools 
                for wardrobe management and ethical shopping.
              </p>
              <ul className="mb-8 text-gray-600">
                <li className="mb-2">• Sustainability research and benchmarking</li>
                <li className="mb-2">• Information architecture</li>
                <li className="mb-2">• Visual design system creation</li>
                <li className="mb-2">• User testing with eco-conscious consumers</li>
              </ul>
              <Link 
                href="/projects/greencloz" 
                className="inline-flex items-center font-medium text-black hover:opacity-70 transition-opacity"
              >
                View Case Study <FaArrowRight className="ml-2" size={14} />
              </Link>
            </div>
          </div>

          <div className="text-center mt-20">
            <Link href="/projects" className="btn-secondary">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* About Me Brief Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
              <p className="text-gray-600 mb-6 text-lg">
                Hello! I&apos;m Khushi, a UX/UI Designer driven by a passion for crafting user-centric digital experiences that are both functional and beautifully engaging. My design journey is a blend of formal education and self-directed learning, giving me a unique perspective grounded in design principles and fueled by a constant desire to explore and innovate.
              </p>
              <p className="text-gray-600 mb-8 text-lg">
                I approach each project with empathy and curiosity, seeking to understand the core problems before crafting solutions that delight users and achieve business goals.
              </p>
              <Link href="/about" className="btn-primary text-lg px-8 py-4 font-medium">
                LEARN MORE ABOUT ME
              </Link>
            </div>
            <div className="relative h-[500px] rounded-none overflow-hidden shadow-xl flex items-center justify-center">
              <Image
                src="/images/about/cute.png"
                alt="Khushi - UI/UX Designer"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Design Process Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">My Design Process</h2>
            <p className="max-w-2xl mx-auto text-gray-600 text-xl">
              A thoughtful approach to creating meaningful digital experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Process Step 1 */}
            <div className="p-8 bg-gray-50">
              <div className="text-4xl font-playfair font-bold mb-4">01</div>
              <h3 className="text-xl font-bold mb-4">Discover</h3>
              <p className="text-gray-600">
                Research and understand the problem space, user needs, and business goals to establish a solid foundation.
              </p>
            </div>

            {/* Process Step 2 */}
            <div className="p-8 bg-gray-50">
              <div className="text-4xl font-playfair font-bold mb-4">02</div>
              <h3 className="text-xl font-bold mb-4">Define</h3>
              <p className="text-gray-600">
                Synthesize research insights to define the core problems and establish clear design objectives.
              </p>
            </div>

            {/* Process Step 3 */}
            <div className="p-8 bg-gray-50">
              <div className="text-4xl font-playfair font-bold mb-4">03</div>
              <h3 className="text-xl font-bold mb-4">Design</h3>
              <p className="text-gray-600">
                Create wireframes, prototypes, and visual designs that address user needs with intuitive interfaces.
              </p>
            </div>

            {/* Process Step 4 */}
            <div className="p-8 bg-gray-50">
              <div className="text-4xl font-playfair font-bold mb-4">04</div>
              <h3 className="text-xl font-bold mb-4">Deliver</h3>
              <p className="text-gray-600">
                Test, refine, and implement the final design solution, ensuring it meets all requirements.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 
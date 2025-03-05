import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { Butterfly } from './components/Butterfly';

export default function Home() {
  return (
    <div className="min-h-screen bg-ethereal relative overflow-hidden">
      {/* Butterfly Cursor - Ensure this is the first child */}
      <Butterfly />

      {/* Enhanced Animated Butterflies */}
      <div className="fixed inset-0 pointer-events-none z-10">
        <div className="butterfly opacity-80" style={{ top: '10%', left: '5%', animationDelay: '0s', ['--hue-rotate' as string]: '0deg' }}></div>
        <div className="butterfly opacity-80" style={{ top: '30%', right: '15%', animationDelay: '1s', ['--hue-rotate' as string]: '45deg' }}></div>
        <div className="butterfly opacity-80" style={{ top: '70%', left: '20%', animationDelay: '2s', ['--hue-rotate' as string]: '90deg' }}></div>
        <div className="butterfly opacity-80" style={{ top: '50%', right: '25%', animationDelay: '3s', ['--hue-rotate' as string]: '135deg' }}></div>
        <div className="butterfly opacity-80" style={{ top: '90%', left: '40%', animationDelay: '4s', ['--hue-rotate' as string]: '180deg' }}></div>
      </div>

      {/* Hero Section with Enhanced Glassmorphism */}
      <section className="relative pt-32 pb-20">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto space-y-32">
            {/* Main Content */}
            <div className="glass-morphism p-16 rounded-[3rem] relative overflow-hidden transform hover:scale-105 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-100/30 to-purple-100/30 z-0"></div>
              <div className="relative z-10">
                <h1 className="text-6xl md:text-8xl font-playfair mb-8 bg-gradient-to-r from-[#D5006D] to-[#FF7F3F] bg-clip-text text-transparent">
                  digital dreams
                  <span className="block mt-4">come alive ✨</span>
                </h1>
                <p className="text-gray-800 text-xl md:text-2xl max-w-2xl font-light mb-12 leading-relaxed">
                  Welcome to my enchanted portfolio, where every design tells a story and every interaction sparks joy.
                </p>
                <div className="flex flex-wrap gap-8">
                  <Link
                    href="/portfolio"
                    className="glass-morphism hover-magical px-10 py-5 rounded-full text-[#D5006D] text-lg font-medium"
                  >
                    explore my garden 🦋
                  </Link>
                  <Link
                    href="/about"
                    className="glass-morphism hover-magical px-10 py-5 rounded-full text-[#D5006D] text-lg font-medium"
                  >
                    meet the artist 🎨
                  </Link>
                </div>
              </div>
            </div>

            {/* Featured Work */}
            <div className="space-y-24">
              {/* HYPD Project */}
              <div className="glass-morphism p-12 rounded-[3rem] transform hover:scale-105 transition-all duration-500">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="relative h-[500px] overflow-hidden rounded-[25px] glass-morphism">
                    <Image
                      src="/home images/HYPD.png"
                      alt="HYPD Project"
                      fill
                      className="object-contain transition-transform duration-700 hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="space-y-6">
                    <h3 className="text-4xl md:text-5xl font-playfair bg-gradient-to-r from-[#D5006D] to-[#FF7F3F] bg-clip-text text-transparent">HYPD</h3>
                    <p className="text-gray-800 text-lg leading-relaxed">
                      Revolutionary e-commerce platform empowering creators to monetize their influence through personalized shopping experiences.
                    </p>
                    <ul className="space-y-3 text-gray-800">
                      <li className="flex items-center gap-2">
                        <span className="text-[#FF7F3F]">✨</span> User experience innovation
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-[#FF7F3F]">✨</span> Creator-first approach
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-[#FF7F3F]">✨</span> Seamless integration
                      </li>
                    </ul>
                    <Link
                      href="https://www.behance.net/gallery/220731875/HYPD-The-Blink-it-for-Fashion-"
                      className="glass-morphism hover-magical px-8 py-4 rounded-full inline-flex items-center gap-2 text-[#D5006D] mt-6"
                      target="_blank"
                    >
                      View Case Study <FaArrowRight />
                    </Link>
                  </div>
                </div>
              </div>

              {/* AERO Project */}
              <div className="glass-morphism p-12 rounded-[3rem] transform hover:scale-105 transition-all duration-500">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6 order-2 md:order-1">
                    <h3 className="text-4xl md:text-5xl font-playfair bg-gradient-to-r from-[#D5006D] to-[#FF7F3F] bg-clip-text text-transparent">AERO</h3>
                    <p className="text-gray-800 text-lg leading-relaxed">
                      Reimagining the future of air travel through intuitive design and seamless user experiences.
                    </p>
                    <ul className="space-y-3 text-gray-800">
                      <li className="flex items-center gap-2">
                        <span className="text-[#FF7F3F]">✨</span> Modern booking experience
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-[#FF7F3F]">✨</span> Real-time flight tracking
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-[#FF7F3F]">✨</span> Smart recommendations
                      </li>
                    </ul>
                    <Link
                      href="https://www.behance.net/gallery/220730085/AERO-Revolutionizing-Airport-Travel-with-VR-AI"
                      className="glass-morphism hover-magical px-8 py-4 rounded-full inline-flex items-center gap-2 text-[#D5006D] mt-6"
                      target="_blank"
                    >
                      View Case Study <FaArrowRight />
                    </Link>
                  </div>
                  <div className="relative h-[500px] overflow-hidden rounded-[25px] glass-morphism order-1 md:order-2">
                    <Image
                      src="/home images/AERO.png"
                      alt="AERO Project"
                      fill
                      className="object-contain transition-transform duration-700 hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>

              {/* GREENCLOZ Project */}
              <div className="glass-morphism p-12 rounded-[3rem] transform hover:scale-105 transition-all duration-500">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="relative h-[500px] overflow-hidden rounded-[25px] glass-morphism">
                    <Image
                      src="/home images/GREENCLOZ.jpg"
                      alt="GREENCLOZ Project"
                      fill
                      className="object-contain transition-transform duration-700 hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="space-y-6">
                    <h3 className="text-4xl md:text-5xl font-playfair bg-gradient-to-r from-[#D5006D] to-[#FF7F3F] bg-clip-text text-transparent">GREENCLOZ</h3>
                    <p className="text-gray-800 text-lg leading-relaxed">
                      Sustainable fashion platform that connects eco-conscious consumers with ethical fashion choices.
                    </p>
                    <ul className="space-y-3 text-gray-800">
                      <li className="flex items-center gap-2">
                        <span className="text-[#FF7F3F]">✨</span> Sustainable fashion focus
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-[#FF7F3F]">✨</span> Ethical sourcing tracker
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-[#FF7F3F]">✨</span> Community engagement
                      </li>
                    </ul>
                    <Link
                      href="https://www.behance.net/gallery/220735589/GreenCloz-Your-Digital-Wardrobe"
                      className="glass-morphism hover-magical px-8 py-4 rounded-full inline-flex items-center gap-2 text-[#D5006D] mt-6"
                      target="_blank"
                    >
                      View Case Study <FaArrowRight />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
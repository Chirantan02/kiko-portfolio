import Image from "next/image";
import Link from "next/link";
import { Butterfly } from '../components/Butterfly';

export const metadata = {
  title: "About Me | Khushi - Premium UI/UX Designer",
  description: "Learn about Khushi's background, skills, and passion for UI/UX design.",
};

export default function About() {
  // Creative exploration images from the about folder
  const largeExplorations = [
    { 
      id: 1, 
      src: "/images/about/large1.png", 
      alt: "Creative Exploration Large 1",
    },
    { 
      id: 2, 
      src: "/images/about/large4.png", 
      alt: "Creative Exploration Large 2",
    },
    { 
      id: 3, 
      src: "/images/about/large5.png", 
      alt: "Creative Exploration Large 3",
    },
    { 
      id: 4, 
      src: "/images/about/large11.png", 
      alt: "Creative Exploration Large 4",
    }
  ];
  
  const smallExplorations = [
    { 
      id: 1, 
      src: "/images/about/small1.png", 
      alt: "Creative Exploration Small 1",
    },
    { 
      id: 2, 
      src: "/images/about/small2.png", 
      alt: "Creative Exploration Small 2",
    },
    { 
      id: 3, 
      src: "/images/about/small3.png", 
      alt: "Creative Exploration Small 3",
    },
    { 
      id: 4, 
      src: "/images/about/small4.png", 
      alt: "Creative Exploration Small 4",
    },
    { 
      id: 5, 
      src: "/images/about/small5.png", 
      alt: "Creative Exploration Small 5",
    },
    { 
      id: 6, 
      src: "/images/about/small 8.jpg", 
      alt: "Creative Exploration Small 6",
    },
    { 
      id: 7, 
      src: "/images/about/small 9.jpg", 
      alt: "Creative Exploration Small 7",
    }
  ];

  return (
    <div className="min-h-screen bg-ethereal relative overflow-hidden fade-in">
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
            <div className="glass-morphism p-16 rounded-[3rem] relative overflow-hidden transform hover:scale-105 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-100/30 to-purple-100/30 z-0"></div>
              <div className="relative z-10">
                <h1 className="text-6xl md:text-8xl font-playfair mb-8 bg-gradient-to-r from-[#D5006D] to-[#FF7F3F] bg-clip-text text-transparent">
                  About <span className="block mt-4">my journey ✨</span>
                </h1>
                <p className="text-gray-800 text-xl md:text-2xl max-w-2xl font-light mb-12 leading-relaxed">
                  Exploring the intersection of creativity, technology, and human-centered design.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sections with Enhanced Glass Morphism and Hover Effects */}
      <section className="section-padding bg-transparent">
        <div className="container-custom">
          <div className="space-y-24">
            {/* Introduction Section */}
            <div className="glass-morphism p-12 rounded-[3rem] transform hover:scale-105 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-100/20 to-purple-100/20 z-0"></div>
              <div className="max-w-3xl mx-auto relative z-10">
                <h2 className="text-4xl font-bold mb-8 font-playfair bg-gradient-to-r from-[#D5006D] to-[#FF7F3F] bg-clip-text text-transparent">
                  Hello, I&apos;m Khushi
                </h2>
                <div className="space-y-6 text-lg text-gray-800">
                  <p>
                    I&apos;m a UX/UI Designer driven by a passion for crafting user-centric digital experiences that are both functional and beautifully engaging. My design journey is a blend of formal education and self-directed learning, giving me a unique perspective grounded in design principles and fueled by a constant desire to explore and innovate.
                  </p>
                  <p>
                    With a Bachelor of Design in UI/UX and currently pursuing a Bachelor of Computer Applications, I bridge the gap between aesthetics and functionality. I believe great design is not just about visual appeal; it&apos;s about solving real user problems with empathy and creativity. My background allows me to approach design challenges with both a visual artist&apos;s eye and a logical, problem-solving mindset.
                  </p>
                  <p>
                    Beyond the digital realm, my inspiration is drawn from the tangible world of museums, art galleries, and the rich history of arts and crafts. Exploring these spaces fuels my creativity and sharpens my understanding of visual harmony and color palettes. I believe a strong sense of color and genuine empathy are foundational to impactful design. I am continuously learning and evolving, eager to embrace new challenges and refine my skills within the dynamic field of UI/UX.
                  </p>
                </div>
              </div>
            </div>

            {/* Skills Section */}
            <div className="glass-morphism p-12 rounded-[3rem] transform hover:scale-105 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-100/20 to-purple-100/20 z-0"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
                <div>
                  <h3 className="text-2xl font-bold mb-8 font-playfair bg-gradient-to-r from-[#D5006D] to-[#FF7F3F] bg-clip-text text-transparent">
                    Design Expertise
                  </h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="glass-morphism p-6 rounded-xl transform hover:scale-105 transition-all duration-300">
                      <h4 className="text-xl font-bold mb-2 text-[#D5006D]">UI Design</h4>
                      <p className="text-gray-700">Creating visually appealing and intuitive interfaces.</p>
                    </div>
                    <div className="glass-morphism p-6 rounded-xl transform hover:scale-105 transition-all duration-300">
                      <h4 className="text-xl font-bold mb-2 text-[#D5006D]">UX Research</h4>
                      <p className="text-gray-700">Understanding user needs through research and testing.</p>
                    </div>
                    <div className="glass-morphism p-6 rounded-xl transform hover:scale-105 transition-all duration-300">
                      <h4 className="text-xl font-bold mb-2 text-[#D5006D]">Visual Design</h4>
                      <p className="text-gray-700">Creating cohesive visual systems and brand identities.</p>
                    </div>
                    <div className="glass-morphism p-6 rounded-xl transform hover:scale-105 transition-all duration-300">
                      <h4 className="text-xl font-bold mb-2 text-[#D5006D]">Color Theory</h4>
                      <p className="text-gray-700">Applying color psychology and harmony principles.</p>
                    </div>
                    <div className="glass-morphism p-6 rounded-xl transform hover:scale-105 transition-all duration-300">
                      <h4 className="text-xl font-bold mb-2 text-[#D5006D]">Typography</h4>
                      <p className="text-gray-700">Selecting and arranging type for readability and impact.</p>
                    </div>
                    <div className="glass-morphism p-6 rounded-xl transform hover:scale-105 transition-all duration-300">
                      <h4 className="text-xl font-bold mb-2 text-[#D5006D]">Brand Design</h4>
                      <p className="text-gray-700">Developing consistent and memorable brand experiences.</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-8 font-playfair bg-gradient-to-r from-[#D5006D] to-[#FF7F3F] bg-clip-text text-transparent">
                    Tools & Methods
                  </h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="glass-morphism p-6 rounded-xl transform hover:scale-105 transition-all duration-300">
                      <h4 className="text-xl font-bold mb-2 text-[#D5006D]">Wireframing</h4>
                      <p className="text-gray-700">Creating structural blueprints of digital products.</p>
                    </div>
                    <div className="glass-morphism p-6 rounded-xl transform hover:scale-105 transition-all duration-300">
                      <h4 className="text-xl font-bold mb-2 text-[#D5006D]">Prototyping</h4>
                      <p className="text-gray-700">Building interactive models to test functionality.</p>
                    </div>
                    <div className="glass-morphism p-6 rounded-xl transform hover:scale-105 transition-all duration-300">
                      <h4 className="text-xl font-bold mb-2 text-[#D5006D]">User Testing</h4>
                      <p className="text-gray-700">Evaluating designs with real users to improve usability.</p>
                    </div>
                    <div className="glass-morphism p-6 rounded-xl transform hover:scale-105 transition-all duration-300">
                      <h4 className="text-xl font-bold mb-2 text-[#D5006D]">Design Systems</h4>
                      <p className="text-gray-700">Creating scalable and consistent component libraries.</p>
                    </div>
                    <div className="glass-morphism p-6 rounded-xl transform hover:scale-105 transition-all duration-300">
                      <h4 className="text-xl font-bold mb-2 text-[#D5006D]">Figma</h4>
                      <p className="text-gray-700">Expert in collaborative design and prototyping.</p>
                    </div>
                    <div className="glass-morphism p-6 rounded-xl transform hover:scale-105 transition-all duration-300">
                      <h4 className="text-xl font-bold mb-2 text-[#D5006D]">Adobe Suite</h4>
                      <p className="text-gray-700">Proficient in Photoshop, Illustrator, and XD.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Creative Explorations with Enhanced Glass Morphism */}
      <section className="section-padding bg-transparent">
        <div className="container-custom">
          <h2 className="text-4xl font-bold mb-8 text-center font-playfair bg-gradient-to-r from-[#D5006D] to-[#FF7F3F] bg-clip-text text-transparent">
            Creative Explorations
          </h2>
          <p className="text-xl text-center mb-12 max-w-3xl mx-auto text-gray-800">
            Design, for me, extends beyond structured projects and user flows. It&apos;s a way of seeing the world, experimenting with form and color, and exploring abstract concepts visually.
          </p>
          
          {/* First Masonry Layout */}
          <div className="glass-morphism p-12 rounded-[3rem] mb-16 transform hover:scale-105 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-100/20 to-purple-100/20 z-0"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
              {/* Large Image on Left */}
              <div className="glass-morphism relative aspect-[4/3] rounded-[25px] overflow-hidden transform hover:scale-105 transition-all duration-300">
                <Image
                  src={largeExplorations[0].src}
                  alt={largeExplorations[0].alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              
              {/* 4 Small Images in 2x2 Grid on Right */}
              <div className="grid grid-cols-2 gap-8">
                {smallExplorations.slice(0, 4).map((exploration) => (
                  <div 
                    key={exploration.id} 
                    className="glass-morphism relative aspect-square rounded-[25px] overflow-hidden transform hover:scale-105 transition-all duration-300"
                  >
                    <Image
                      src={exploration.src}
                      alt={exploration.alt}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Second Masonry Layout */}
          <div className="glass-morphism p-12 rounded-[3rem] transform hover:scale-105 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-100/20 to-purple-100/20 z-0"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
              {/* 4 Small Images in 2x2 Grid on Left */}
              <div className="grid grid-cols-2 gap-8">
                {smallExplorations.slice(4).map((exploration) => (
                  <div 
                    key={exploration.id} 
                    className="glass-morphism relative aspect-square rounded-[25px] overflow-hidden transform hover:scale-105 transition-all duration-300"
                  >
                    <Image
                      src={exploration.src}
                      alt={exploration.alt}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                ))}
              </div>
              
              {/* Large Image on Right */}
              <div className="glass-morphism relative aspect-[4/3] rounded-[25px] overflow-hidden transform hover:scale-105 transition-all duration-300">
                <Image
                  src={largeExplorations[1].src}
                  alt={largeExplorations[1].alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-black text-white">
        <div className="container-custom text-center">
          <h2 className="text-sparkle mb-6 text-4xl font-bold">Let&apos;s Create Something Amazing Together</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            I&apos;m always open to discussing new projects, creative ideas or opportunities to be part of your vision.
          </p>
          <Link 
            href="/contact" 
            className="glass-morphism hover-magical px-10 py-5 rounded-full text-[#D5006D] text-lg font-medium inline-block transform hover:scale-105 transition-all duration-300"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
} 
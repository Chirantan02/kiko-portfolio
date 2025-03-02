import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About Me | Khushi - Premium UI/UX Designer",
  description: "Learn about Khushi's background, skills, and passion for UI/UX design.",
};

export default function About() {
  // Creative exploration images from the about folder
  const largeExplorations = [
    { 
      id: 1, 
      src: "/images/about/Large1.png", 
      alt: "Creative Exploration 1",
    },
    { 
      id: 2, 
      src: "/images/about/large2.png", 
      alt: "Creative Exploration 2",
    },
    { 
      id: 3, 
      src: "/images/about/large3.png", 
      alt: "Creative Exploration 3",
    },
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
      src: "/images/about/small6.png", 
      alt: "Creative Exploration Small 6",
    },
    { 
      id: 7, 
      src: "/images/about/small7.png", 
      alt: "Creative Exploration Small 7",
    },
    { 
      id: 8, 
      src: "/images/about/small8.png", 
      alt: "Creative Exploration Small 8",
    },
  ];

  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="bg-white pt-20 pb-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="slide-up">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">About Me</h1>
              <p className="text-2xl text-gray-600 mb-8">
                Passionate UI/UX Designer with a focus on creating intuitive and engaging digital experiences.
              </p>
            </div>
            <div className="relative h-[500px] rounded-none overflow-hidden shadow-xl flex items-center justify-center">
              <Image
                src="/images/about/cute.png"
                alt="Khushi - UI/UX Designer"
                fill
                className="object-contain"
                style={{ objectPosition: 'center' }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 font-playfair">Hello, I&apos;m Khushi</h2>
            <div className="space-y-6 text-lg text-gray-700">
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
      </section>

      {/* Creative Explorations */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-4xl font-bold mb-8 text-center font-playfair">Creative Explorations</h2>
          <p className="text-xl text-center mb-12 max-w-3xl mx-auto text-gray-700">
            Design, for me, extends beyond structured projects and user flows. It&apos;s a way of seeing the world, experimenting with form and color, and exploring abstract concepts visually. Below is a curated collection of some of my personal design explorations – a glimpse into my creative process.
          </p>
          
          {/* Masonry Layout */}
          <div className="mb-16">
            {/* First Row - 1 Large + 4 Small */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {/* Large Image */}
              <div className="md:col-span-1">
                <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={largeExplorations[0].src}
                    alt={largeExplorations[0].alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              </div>
              
              {/* 4 Small Images in 2x2 Grid */}
              <div className="md:col-span-2">
                <div className="grid grid-cols-2 gap-6 h-full">
                  <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src={smallExplorations[0].src}
                      alt={smallExplorations[0].alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 16vw"
                    />
                  </div>
                  <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src={smallExplorations[1].src}
                      alt={smallExplorations[1].alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 16vw"
                    />
                  </div>
                  <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src={smallExplorations[2].src}
                      alt={smallExplorations[2].alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 16vw"
                    />
                  </div>
                  <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src={smallExplorations[3].src}
                      alt={smallExplorations[3].alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 16vw"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Second Row - 4 Small + 1 Large */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {/* 4 Small Images in 2x2 Grid */}
              <div className="md:col-span-2">
                <div className="grid grid-cols-2 gap-6 h-full">
                  <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src={smallExplorations[4].src}
                      alt={smallExplorations[4].alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 16vw"
                    />
                  </div>
                  <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src={smallExplorations[5].src}
                      alt={smallExplorations[5].alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 16vw"
                    />
                  </div>
                  <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src={smallExplorations[6].src}
                      alt={smallExplorations[6].alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 16vw"
                    />
                  </div>
                  <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src={smallExplorations[7].src}
                      alt={smallExplorations[7].alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 16vw"
                    />
                  </div>
                </div>
              </div>
              
              {/* Large Image */}
              <div className="md:col-span-1">
                <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={largeExplorations[1].src}
                    alt={largeExplorations[1].alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              </div>
            </div>
            
            {/* Third Row - 1 Large + Remaining Images */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Large Image */}
              <div className="md:col-span-1">
                <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={largeExplorations[2].src}
                    alt={largeExplorations[2].alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              </div>
              
              {/* Placeholder for more images if needed */}
              <div className="md:col-span-2">
                <div className="grid grid-cols-2 gap-6 h-full">
                  {/* You can add more images here if needed */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center font-playfair">Education</h2>
            
            <div className="space-y-12">
              <div className="bg-white p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-2">Bachelor of Computer Applications (BCA)</h3>
                <p className="text-gray-600 mb-4">Manipal University | <em>Pursuing, Expected Graduation: 2026</em></p>
                <p className="text-gray-700">
                  Currently expanding my technical knowledge to complement my design skills, focusing on understanding the development side of digital products.
                </p>
              </div>
              
              <div className="bg-white p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-2">Bachelor of Design (UI/UX)</h3>
                <p className="text-gray-600 mb-4">1 Year Formal Training | <em>2023 - 2024</em></p>
                <p className="text-gray-700">
                  Specialized training in user interface and user experience design principles, methodologies, and tools.
                </p>
              </div>
              
              <div className="bg-white p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-2">Self-Taught UI/UX Design</h3>
                <p className="text-gray-600 mb-4">Independent Learning & Projects | <em>2023 - Present</em></p>
                <p className="text-gray-700">
                  Continuously expanding my knowledge through online courses, design challenges, and personal projects to stay current with industry trends and best practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-4xl font-bold mb-12 text-center font-playfair">Skills</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-bold mb-8 font-playfair">Design Expertise</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 shadow-lg">
                  <h4 className="text-xl font-bold mb-2">UI Design</h4>
                  <p className="text-gray-700">Creating visually appealing and intuitive interfaces.</p>
                </div>
                <div className="bg-gray-50 p-6 shadow-lg">
                  <h4 className="text-xl font-bold mb-2">UX Research</h4>
                  <p className="text-gray-700">Understanding user needs through research and testing.</p>
                </div>
                <div className="bg-gray-50 p-6 shadow-lg">
                  <h4 className="text-xl font-bold mb-2">Visual Design</h4>
                  <p className="text-gray-700">Creating cohesive visual systems and brand identities.</p>
                </div>
                <div className="bg-gray-50 p-6 shadow-lg">
                  <h4 className="text-xl font-bold mb-2">Color Theory</h4>
                  <p className="text-gray-700">Applying color psychology and harmony principles.</p>
                </div>
                <div className="bg-gray-50 p-6 shadow-lg">
                  <h4 className="text-xl font-bold mb-2">Typography</h4>
                  <p className="text-gray-700">Selecting and arranging type for readability and impact.</p>
                </div>
                <div className="bg-gray-50 p-6 shadow-lg">
                  <h4 className="text-xl font-bold mb-2">Brand Design</h4>
                  <p className="text-gray-700">Developing consistent and memorable brand experiences.</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-8 font-playfair">Tools & Methods</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 shadow-lg">
                  <h4 className="text-xl font-bold mb-2">Wireframing</h4>
                  <p className="text-gray-700">Creating structural blueprints of digital products.</p>
                </div>
                <div className="bg-gray-50 p-6 shadow-lg">
                  <h4 className="text-xl font-bold mb-2">Prototyping</h4>
                  <p className="text-gray-700">Building interactive models to test functionality.</p>
                </div>
                <div className="bg-gray-50 p-6 shadow-lg">
                  <h4 className="text-xl font-bold mb-2">User Testing</h4>
                  <p className="text-gray-700">Evaluating designs with real users to improve usability.</p>
                </div>
                <div className="bg-gray-50 p-6 shadow-lg">
                  <h4 className="text-xl font-bold mb-2">Design Systems</h4>
                  <p className="text-gray-700">Creating scalable and consistent component libraries.</p>
                </div>
                <div className="bg-gray-50 p-6 shadow-lg">
                  <h4 className="text-xl font-bold mb-2">Figma</h4>
                  <p className="text-gray-700">Expert in collaborative design and prototyping.</p>
                </div>
                <div className="bg-gray-50 p-6 shadow-lg">
                  <h4 className="text-xl font-bold mb-2">Adobe Suite</h4>
                  <p className="text-gray-700">Proficient in Photoshop, Illustrator, and XD.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Philosophy */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-4xl font-bold mb-12 text-center font-playfair">Design Philosophy</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-10 shadow-lg mb-12">
              <p className="text-2xl italic text-center font-light">
                &quot;Good design is not just about how it looks, but how it works for the people who use it. I believe in creating experiences that are both beautiful and functional.&quot;
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 shadow-lg">
                <h3 className="text-xl font-bold mb-4">User-Centered</h3>
                <p className="text-gray-700">
                  I place users at the heart of every design decision, ensuring that products are intuitive, accessible, and solve real problems.
                </p>
              </div>
              
              <div className="bg-white p-8 shadow-lg">
                <h3 className="text-xl font-bold mb-4">Purposeful</h3>
                <p className="text-gray-700">
                  Every element in my designs serves a purpose. I believe in intentional design that eliminates clutter and focuses on what matters.
                </p>
              </div>
              
              <div className="bg-white p-8 shadow-lg">
                <h3 className="text-xl font-bold mb-4">Innovative</h3>
                <p className="text-gray-700">
                  I constantly push boundaries and explore new approaches, balancing creativity with practicality to create forward-thinking solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-black text-white">
        <div className="container-custom text-center">
          <h2 className="mb-6">Let&apos;s Create Something Amazing Together</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            I&apos;m always open to discussing new projects, creative ideas or opportunities to be part of your vision.
          </p>
          <Link href="/contact" className="btn-primary bg-white text-black hover:bg-gray-200">
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
} 
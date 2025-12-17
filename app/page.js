'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Navbar from './components/Navbar';

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return (
    <>
      <Navbar />
      
      <div 
        className="fixed w-4 h-4 bg-black rounded-full pointer-events-none z-50 transition-all duration-100 ease-out"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
        }}
      />
      
      <div className="relative pt-32 min-h-screen bg-white px-10 sm:px-12 lg:px-16 xl:px-20">
        <div className="absolute inset-0 -z-10 opacity-40 bg-[radial-gradient(ellipse_at_top_left,_#e5e7eb_0%,_transparent_50%)]"></div>
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid grid-cols-12 gap-4 sm:gap-6 lg:gap-8">
            <div className="col-span-12">
              <div className="flex items-start justify-center lg:justify-end">
                <div className="max-w-4xl xl:max-w-5xl text-left">
                  <div className="flex items-center mb-6 sm:mb-8 mt-6 sm:mt-10">
                    <div className="text-black text-lg sm:text-xl font-light mr-3 sm:mr-4" style={{fontStyle: 'italic', transform: 'skew(-15deg)'}}>
                      01.
                    </div>
                    <div className="flex-1 h-px bg-black"></div>
                  </div>

                  <div className="space-y-6 sm:space-y-8 mb-10 sm:mb-12">
                    <div className="uppercase tracking-widest text-sm text-gray-600">ASL Studio</div>
                    <h1 className="perspective-1000 rotate-y-12 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent text-shadow-3d">
                      Design & Development
                    </h1>
                    <p className="text-gray-700 text-base sm:text-lg max-w-2xl">
                      We craft clear, modern digital products — from idea to impact.
                    </p>
                    <p className="text-gray-600 text-base sm:text-lg max-w-2xl">
                      We partner with startups and brands to design intuitive interfaces,
                      build robust web and mobile apps, and help products grow with
                      performance and content.
                    </p>
                  </div>

                  <div className="flex items-center gap-6">
                    <a
                      href="https://cal.com/madebyasl"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center h-12 px-6 rounded-full bg-black text-white text-sm font-semibold shadow-md hover:shadow-lg hover:scale-[1.02] transition-all"
                    >
                      Book a Call
                    </a>
                    <a
                      href="#work"
                      className="inline-flex items-center justify-center h-12 px-6 rounded-full border border-black text-black text-sm font-semibold hover:bg-black hover:text-white transition-colors"
                    >
                      See Work
                    </a>
                  </div>

                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="work" className="relative min-h-screen bg-white py-0 px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="absolute inset-0 -z-10 opacity-35 bg-[radial-gradient(ellipse_at_bottom_right,_#f3f4f6_0%,_transparent_60%)]"></div>
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid grid-cols-12 gap-8 sm:gap-12 lg:gap-16">
            <div className="col-span-12">
              <div className="flex items-start justify-center lg:justify-start">
                <div className="max-w-6xl xl:max-w-7xl">
                  <div className="flex items-center mb-6 sm:mb-8">
                    <div className="text-black text-lg sm:text-xl font-light mr-3 sm:mr-4" style={{fontStyle: 'italic', transform: 'skew(-15deg)'}}>
                      02.
                    </div>
                    <div className="flex-1 h-px bg-black"></div>
                  </div>
                  
                  <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 lg:gap-16">
                    <div>
                      <div className="space-y-4 sm:space-y-6 mb-4">
                        <div className="uppercase tracking-widest text-sm text-gray-600">Services</div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent">
                          What we do
                        </h2>
                        
                      </div>
                    </div>
                    <div className="space-y-12">
                      <div className="group relative -mx-6 sm:mx-0 py-10 pl-9 pr-9 sm:py-6 sm:pl-6 sm:pr-6 rounded-xl border-[3px] sm:border border-black/10 bg-white/60 backdrop-blur-sm hover:bg-white hover:shadow-md hover:ring-2 sm:hover:ring-1 hover:ring-black/10 hover:translate-x-[1px] transition before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-[4px] sm:before:w-[2px] before:bg-gradient-to-b before:from-black before:to-blue-300">
                        <div className="flex items-center gap-5 sm:gap-3 mb-4">
                          <span className="inline-block w-3 h-3 sm:w-2.5 sm:h-2.5 rounded-full bg-black"></span>
                          <h3 className="text-black text-3xl sm:text-2xl font-extrabold sm:font-bold">Development</h3>
                        </div>
                        <ul className="space-y-3 sm:space-y-2 text-gray-700 text-xl sm:text-lg font-medium sm:font-normal">
                          <li className="flex items-center gap-3"><svg className="w-6 h-6 sm:w-5 sm:h-5 text-black" viewBox="0 0 20 20" fill="currentColor"><path d="M16.704 5.29a1 1 0 0 1 .006 1.414l-7.07 7.07a1 1 0 0 1-1.415 0l-3.535-3.536a1 1 0 1 1 1.414-1.414l2.828 2.829 6.364-6.364a1 1 0 0 1 1.408-.999z"/></svg>Mobile Apps</li>
                          <li className="flex items-center gap-3"><svg className="w-6 h-6 sm:w-5 sm:h-5 text-black" viewBox="0 0 20 20" fill="currentColor"><path d="M16.704 5.29a1 1 0 0 1 .006 1.414l-7.07 7.07a1 1 0 0 1-1.415 0l-3.535-3.536a1 1 0 1 1 1.414-1.414l2.828 2.829 6.364-6.364a1 1 0 0 1 1.408-.999z"/></svg>Web Apps</li>
                          <li className="flex items-center gap-3"><svg className="w-6 h-6 sm:w-5 sm:h-5 text-black" viewBox="0 0 20 20" fill="currentColor"><path d="M16.704 5.29a1 1 0 0 1 .006 1.414l-7.07 7.07a1 1 0 0 1-1.415 0l-3.535-3.536a1 1 0 1 1 1.414-1.414l2.828 2.829 6.364-6.364a1 1 0 0 1 1.408-.999z"/></svg>Backend</li>
                          <li className="flex items-center gap-3"><svg className="w-6 h-6 sm:w-5 sm:h-5 text-black" viewBox="0 0 20 20" fill="currentColor"><path d="M16.704 5.29a1 1 0 0 1 .006 1.414l-7.07 7.07a1 1 0 0 1-1.415 0l-3.535-3.536a1 1 0 1 1 1.414-1.414l2.828 2.829 6.364-6.364a1 1 0 0 1 1.408-.999z"/></svg>AI</li>
                        </ul>
                        <svg className="absolute bottom-3 right-3 w-8 h-8 sm:w-6 sm:h-6 text-black/30 group-hover:text-black group-hover:translate-x-[2px] transition" viewBox="0 0 20 20" fill="currentColor"><path d="M7 5l5 5-5 5" stroke="currentColor" strokeWidth="2" fill="none"/></svg>
                        <div className="absolute right-6 top-1/2 -translate-y-1/2 text-9xl sm:text-8xl font-extrabold text-black/10">01</div>
                      </div>

                      <div className="group relative -mx-6 sm:mx-0 py-10 pl-9 pr-9 sm:py-6 sm:pl-6 sm:pr-6 rounded-xl border-[3px] sm:border border-black/10 bg-white/60 backdrop-blur-sm hover:bg-white hover:shadow-md hover:ring-2 sm:hover:ring-1 hover:ring-black/10 hover:translate-x-[1px] transition before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-[4px] sm:before:w-[2px] before:bg-gradient-to-b before:from-black before:to-purple-300">
                        <div className="flex items-center gap-5 sm:gap-3 mb-4">
                          <span className="inline-block w-3 h-3 sm:w-2.5 sm:h-2.5 rounded-full bg-black"></span>
                          <h3 className="text-black text-3xl sm:text-2xl font-extrabold sm:font-bold">Design</h3>
                        </div>
                        <ul className="space-y-3 sm:space-y-2 text-gray-700 text-xl sm:text-lg font-medium sm:font-normal">
                          <li className="flex items-center gap-3"><svg className="w-6 h-6 sm:w-5 sm:h-5 text-black" viewBox="0 0 20 20" fill="currentColor"><path d="M16.704 5.29a1 1 0 0 1 .006 1.414l-7.07 7.07a1 1 0 0 1-1.415 0l-3.535-3.536a1 1 0 1 1 1.414-1.414l2.828 2.829 6.364-6.364a1 1 0 0 1 1.408-.999z"/></svg>UI/UX</li>
                          <li className="flex items-center gap-3"><svg className="w-6 h-6 sm:w-5 sm:h-5 text-black" viewBox="0 0 20 20" fill="currentColor"><path d="M16.704 5.29a1 1 0 0 1 .006 1.414l-7.07 7.07a1 1 0 0 1-1.415 0l-3.535-3.536a1 1 0 1 1 1.414-1.414l2.828 2.829 6.364-6.364a1 1 0 0 1 1.408-.999z"/></svg>Interaction</li>
                          <li className="flex items-center gap-3"><svg className="w-6 h-6 sm:w-5 sm:h-5 text-black" viewBox="0 0 20 20" fill="currentColor"><path d="M16.704 5.29a1 1 0 0 1 .006 1.414l-7.07 7.07a1 1 0 0 1-1.415 0l-3.535-3.536a1 1 0 1 1 1.414-1.414l2.828 2.829 6.364-6.364a1 1 0 0 1 1.408-.999z"/></svg>Research</li>
                          <li className="flex items-center gap-3"><svg className="w-6 h-6 sm:w-5 sm:h-5 text-black" viewBox="0 0 20 20" fill="currentColor"><path d="M16.704 5.29a1 1 0 0 1 .006 1.414l-7.07 7.07a1 1 0 0 1-1.415 0l-3.535-3.536a1 1 0 1 1 1.414-1.414l2.828 2.829 6.364-6.364a1 1 0 0 1 1.408-.999z"/></svg>Art Direction</li>
                        </ul>
                        <svg className="absolute bottom-3 right-3 w-8 h-8 sm:w-6 sm:h-6 text-black/30 group-hover:text-black group-hover:translate-x-[2px] transition" viewBox="0 0 20 20" fill="currentColor"><path d="M7 5l5 5-5 5" stroke="currentColor" strokeWidth="2" fill="none"/></svg>
                        <div className="absolute right-6 top-1/2 -translate-y-1/2 text-9xl sm:text-8xl font-extrabold text-black/10">02</div>
                      </div>

                      <div className="group relative -mx-6 sm:mx-0 py-10 pl-9 pr-9 sm:py-6 sm:pl-6 sm:pr-6 rounded-xl border-[3px] sm:border border-black/10 bg-white/60 backdrop-blur-sm hover:bg-white hover:shadow-md hover:ring-2 sm:hover:ring-1 hover:ring-black/10 hover:translate-x-[1px] transition before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-[4px] sm:before:w-[2px] before:bg-gradient-to-b before:from-black before:to-green-300">
                        <div className="flex items-center gap-5 sm:gap-3 mb-4">
                          <span className="inline-block w-3 h-3 sm:w-2.5 sm:h-2.5 rounded-full bg-black"></span>
                          <h3 className="text-black text-3xl sm:text-2xl font-extrabold sm:font-bold">Growth</h3>
                        </div>
                        <ul className="space-y-3 sm:space-y-2 text-gray-700 text-xl sm:text-lg font-medium sm:font-normal">
                          <li className="flex items-center gap-3"><svg className="w-6 h-6 sm:w-5 sm:h-5 text-black" viewBox="0 0 20 20" fill="currentColor"><path d="M16.704 5.29a1 1 0 0 1 .006 1.414l-7.07 7.07a1 1 0 0 1-1.415 0l-3.535-3.536a1 1 0 1 1 1.414-1.414l2.828 2.829 6.364-6.364a1 1 0 0 1 1.408-.999z"/></svg>Product Strategy</li>
                          <li className="flex items-center gap-3"><svg className="w-6 h-6 sm:w-5 sm:h-5 text-black" viewBox="0 0 20 20" fill="currentColor"><path d="M16.704 5.29a1 1 0 0 1 .006 1.414l-7.07 7.07a1 1 0 0 1-1.415 0l-3.535-3.536a1 1 0 1 1 1.414-1.414l2.828 2.829 6.364-6.364a1 1 0 0 1 1.408-.999z"/></svg>Performance</li>
                          <li className="flex items-center gap-3"><svg className="w-6 h-6 sm:w-5 sm:h-5 text-black" viewBox="0 0 20 20" fill="currentColor"><path d="M16.704 5.29a1 1 0 0 1 .006 1.414l-7.07 7.07a1 1 0 0 1-1.415 0l-3.535-3.536a1 1 0 1 1 1.414-1.414l2.828 2.829 6.364-6.364a1 1 0 0 1 1.408-.999z"/></svg>Content</li>
                          <li className="flex items-center gap-3"><svg className="w-6 h-6 sm:w-5 sm:h-5 text-black" viewBox="0 0 20 20" fill="currentColor"><path d="M16.704 5.29a1 1 0 0 1 .006 1.414l-7.07 7.07a1 1 0 0 1-1.415 0l-3.535-3.536a1 1 0 1 1 1.414-1.414l2.828 2.829 6.364-6.364a1 1 0 0 1 1.408-.999z"/></svg>Community</li>
                        </ul>
                        <svg className="absolute bottom-3 right-3 w-8 h-8 sm:w-6 sm:h-6 text-black/30 group-hover:text-black group-hover:translate-x-[2px] transition" viewBox="0 0 20 20" fill="currentColor"><path d="M7 5l5 5-5 5" stroke="currentColor" strokeWidth="2" fill="none"/></svg>
                        <div className="absolute right-6 top-1/2 -translate-y-1/2 text-9xl sm:text-8xl font-extrabold text-black/10">03</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-8 sm:py-10 px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid grid-cols-12 gap-8 sm:gap-12 lg:gap-16">
            <div className="col-span-12">
              <div className="flex items-start justify-center lg:justify-end">
                <div className="max-w-6xl xl:max-w-7xl text-center lg:text-right">
                  <div className="flex items-center mb-6 sm:mb-8 justify-center lg:justify-end">
                    <div className="text-black text-lg sm:text-xl font-light mr-3 sm:mr-4" style={{fontStyle: 'italic', transform: 'skew(-15deg)'}}>
                      03.
                    </div>
                    <div className="flex-1 h-px bg-black"></div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-start justify-center lg:justify-end space-y-4 sm:space-y-0 sm:space-x-4 mb-4">
                    <div className="text-black text-xl sm:text-2xl font-medium">Client</div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black leading-tight">
                      From idea to impact —<br />
                      we design, build, and<br />
                      grow digital products.
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-8 sm:py-10 px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid grid-cols-12 gap-8 sm:gap-12 lg:gap-16">
            <div className="col-span-12">
              <div className="flex items-start justify-center lg:justify-start">
                <div className="max-w-6xl xl:max-w-7xl">
                  <div className="flex items-center mb-6 sm:mb-8">
                    <div className="text-black text-lg sm:text-xl font-light mr-3 sm:mr-4" style={{fontStyle: 'italic', transform: 'skew(-15deg)'}}>
                      04.
                    </div>
                    <div className="flex-1 h-px bg-black"></div>
                  </div>
                  
                  <div className="text-gray-600 text-sm font-medium mb-6 sm:mb-8">Testimonials</div>
                  <div className="space-y-12 sm:space-y-16">
                    <div className="max-w-2xl xl:max-w-3xl">
                      <blockquote className="text-lg sm:text-xl lg:text-2xl text-black leading-relaxed mb-6 sm:mb-8">
                        &ldquo;We have collaborated with ASL Studio on a couple of tasks related with our app. They were cooperative, coachable and was capable of delivering the tasks.&rdquo;
                      </blockquote>
                      
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden">
                          <Image src="/avatar1.png" alt="Hasan" width={48} height={48} className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <div className="text-black font-semibold text-base">Hasan</div>
                          <div className="text-gray-600 text-sm">Çalışkanbey Logistics - Logistics Control Platform</div>
                        </div>
                      </div>
                    </div>

                    <div className="max-w-2xl xl:max-w-3xl">
                      <blockquote className="text-lg sm:text-xl lg:text-2xl text-black leading-relaxed mb-6 sm:mb-8">
                        &ldquo;ASL Studio have very successful communication skills and business ethics. I highly recommend them.&rdquo;
                      </blockquote>
                      
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden">
                          <Image src="/avatar2.png" alt="Müge" width={48} height={48} className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <div className="text-black font-semibold text-base">Müge</div>
                          <div className="text-gray-600 text-sm">Mobile Application</div>
                        </div>
                      </div>
                    </div>

                    <div className="max-w-2xl xl:max-w-3xl">
                      <blockquote className="text-lg sm:text-xl lg:text-2xl text-black leading-relaxed mb-6 sm:mb-8">
                        &ldquo;ASL Studio&rsquo;s attention to detail and innovative approach made our project a huge success. Their team exceeded our expectations.&rdquo;
                      </blockquote>
                      
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden">
                          <Image src="/avatar3.png" alt="Salim" width={48} height={48} className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <div className="text-black font-semibold text-base">Salim</div>
                          <div className="text-gray-600 text-sm">E-commerce Platform</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 sm:py-20 lg:py-24 bg-white px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid grid-cols-12 gap-8 sm:gap-12 lg:gap-16">
            <div className="col-span-12">
              <div className="flex items-start justify-center lg:justify-end">
                <div className="max-w-6xl xl:max-w-7xl text-center lg:text-right">
                  <div className="flex items-center mb-6 sm:mb-8 justify-center lg:justify-end">
                    <div className="text-black text-lg sm:text-xl font-light mr-3 sm:mr-4" style={{fontStyle: 'italic', transform: 'skew(-15deg)'}}>
                      05.
                    </div>
                    <div className="flex-1 h-px bg-black"></div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-start justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mb-16 sm:mb-20 lg:mb-24">
                    <div className="text-black text-xl sm:text-2xl font-medium">Footer</div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black leading-tight">
                      Let&apos;s connect
                    </h2>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-16 text-left">
                    <div>
                      <h3 className="text-black text-lg font-semibold mb-4 sm:mb-6">Sitemap</h3>
                      <div className="space-y-3 sm:space-y-4">
                        <div className="text-gray-600 hover:text-black cursor-pointer transition-colors text-sm">
                          Home
                        </div>
                        <div className="text-gray-600 hover:text-black cursor-pointer transition-colors text-sm">
                          Work
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-black text-lg font-semibold mb-4 sm:mb-6">Address</h3>
                      <div className="space-y-2 text-gray-600 text-sm">
                        <div>Turkey</div>
                        <div>Talas  Kayseri 38280</div>
                        <div className="mt-4 sm:mt-6">
                          <div>P: (+90) 544 995 44 04</div>
                          <div>E: hello@madebyasl.com</div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-black text-lg font-semibold mb-4 sm:mb-6">Social</h3>
                      <a 
                        href="https://www.linkedin.com/company/madebyasl" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-black hover:text-gray-600 cursor-pointer transition-colors inline-block"
                      >
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

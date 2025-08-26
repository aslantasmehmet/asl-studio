'use client';
import { useState, useEffect } from 'react';
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
      
      {/* Mouse takip eden siyah nokta */}
      <div 
        className="fixed w-4 h-4 bg-black rounded-full pointer-events-none z-50 transition-all duration-100 ease-out"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
        }}
      />
      
      {/* 01. Bölüm - SAĞ TARAF */}
      <div className="pt-32 min-h-screen bg-white px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid grid-cols-12 gap-4 sm:gap-6 lg:gap-8">
            <div className="col-span-12">
              <div className="flex items-start justify-center lg:justify-end">
                <div className="max-w-4xl xl:max-w-5xl text-left">
                  {/* Numara ve çizgi üstte */}
                  <div className="flex items-center mb-6 sm:mb-8 mt-6 sm:mt-10">
                    <div className="text-black text-lg sm:text-xl font-light mr-3 sm:mr-4" style={{fontStyle: 'italic', transform: 'skew(-15deg)'}}>
                      01.
                    </div>
                    <div className="flex-1 h-px bg-black"></div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-4 mb-12 sm:mb-16">
                    <div className="text-black text-xl sm:text-2xl font-medium">Hello!</div>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black leading-tight">
                      ASL is a design &<br />
                      development studio crafting<br />
                      innovative digital experiences
                    </h1>
                  </div>
                  
                  <div className="flex items-end justify-between">
                    <div className="w-24 h-24 sm:w-32 sm:h-32 bg-black rounded-full flex items-center justify-center">
                      <a 
                        href="https://cal.com/madebyasl" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-white text-xs sm:text-sm font-medium text-center leading-tight hover:opacity-80 transition-opacity"
                      >
                        BOOK A<br />CALL
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 02. Bölüm - SOL TARAF */}
      <div className="min-h-screen bg-white py-16 sm:py-20 px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid grid-cols-12 gap-8 sm:gap-12 lg:gap-16">
            <div className="col-span-12">
              <div className="flex items-start justify-center lg:justify-start">
                <div className="max-w-6xl xl:max-w-7xl">
                  {/* Numara ve çizgi üstte */}
                  <div className="flex items-center mb-6 sm:mb-8">
                    <div className="text-black text-lg sm:text-xl font-light mr-3 sm:mr-4" style={{fontStyle: 'italic', transform: 'skew(-15deg)'}}>
                      02.
                    </div>
                    <div className="flex-1 h-px bg-black"></div>
                  </div>
                  
                  <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 lg:gap-16">
                    <div>
                      <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-4">
                        <div className="text-black text-xl sm:text-2xl font-medium">Services</div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black leading-tight">
                          What we do
                        </h2>
                      </div>
                    </div>
                    <div className="space-y-8 sm:space-y-12">
                      <div>
                        <div className="flex items-center justify-between">
                          <h3 className="text-black text-lg font-semibold mb-4">Development</h3>
                        </div>
                        <div className="space-y-2 text-gray-600 text-sm">
                          <div>Mobile App Development</div>
                          <div>Web App Development</div>
                          <div>Backend Development</div>
                          <div>AI Integration</div>
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center justify-between">
                          <h3 className="text-black text-lg font-semibold mb-4">Design</h3>
                        </div>
                        <div className="space-y-2 text-gray-600 text-sm">
                          <div>UI/UX Design</div>
                          <div>UX Research</div>
                          <div>Interaction Design</div>
                          <div>Art Direction</div>
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center justify-between">
                          <h3 className="text-black text-lg font-semibold mb-4">Growth</h3>
                        </div>
                        <div className="space-y-2 text-gray-600 text-sm">
                          <div>Product Strategy</div>
                          <div>Performance Marketing</div>
                          <div>Content & Community Growth</div>
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

      {/* 03. Bölüm - SAĞ TARAF */}
      <div className="bg-white py-8 sm:py-10 px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid grid-cols-12 gap-8 sm:gap-12 lg:gap-16">
            <div className="col-span-12">
              <div className="flex items-start justify-center lg:justify-end">
                <div className="max-w-6xl xl:max-w-7xl text-center lg:text-right">
                  {/* Numara ve çizgi üstte - sayı başta */}
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

      {/* 04. Bölüm - SOL TARAF */}
      <div className="bg-white py-8 sm:py-10 px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid grid-cols-12 gap-8 sm:gap-12 lg:gap-16">
            <div className="col-span-12">
              <div className="flex items-start justify-center lg:justify-start">
                <div className="max-w-6xl xl:max-w-7xl">
                  {/* Numara ve çizgi üstte */}
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
                          <img src="/avatar1.png" alt="Hasan" className="w-full h-full object-cover" />
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
                          <img src="/avatar2.png" alt="Müge" className="w-full h-full object-cover" />
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
                          <img src="/avatar3.png" alt="Salim" className="w-full h-full object-cover" />
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

      {/* 05. Bölüm - SAĞ TARAF */}
      <div className="py-16 sm:py-20 lg:py-24 bg-white px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid grid-cols-12 gap-8 sm:gap-12 lg:gap-16">
            <div className="col-span-12">
              <div className="flex items-start justify-center lg:justify-end">
                <div className="max-w-6xl xl:max-w-7xl text-center lg:text-right">
                  {/* Numara ve çizgi üstte - sayı başta */}
                  <div className="flex items-center mb-6 sm:mb-8 justify-center lg:justify-end">
                    <div className="text-black text-lg sm:text-xl font-light mr-3 sm:mr-4" style={{fontStyle: 'italic', transform: 'skew(-15deg)'}}>
                      05.
                    </div>
                    <div className="flex-1 h-px bg-black"></div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-start justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mb-16 sm:mb-20 lg:mb-24">
                    <div className="text-black text-xl sm:text-2xl font-medium">Footer</div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black leading-tight">
                      Let's connect
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
                        <div>Bademli Street No:2</div>
                        <div>Mevlana,Talas  Kayseri 38280</div>
                        <div className="mt-4 sm:mt-6">
                          <div>P: +90 507 911 04 66</div>
                          <div>E: hello@madebyasl.com</div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-black text-lg font-semibold mb-4 sm:mb-6">Social</h3>
                      <div className="text-black hover:text-gray-600 cursor-pointer transition-colors">
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </div>
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
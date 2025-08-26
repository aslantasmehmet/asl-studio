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
                      <button className="text-white text-xs sm:text-sm font-medium text-center leading-tight">
                        BOOK A<br />CALL
                      </button>
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
                        "We have collaborated with Echo Studio on a couple of tasks related with our app. They were cooperative, coachable and was capable of delivering the tasks."
                      </blockquote>
                      
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                          <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
                        </div>
                        <div>
                          <div className="text-black font-semibold text-base">Mustafa</div>
                          <div className="text-gray-600 text-sm">Crypto-based Social Media</div>
                        </div>
                      </div>
                    </div>

                    <div className="max-w-2xl xl:max-w-3xl">
                      <blockquote className="text-lg sm:text-xl lg:text-2xl text-black leading-relaxed mb-6 sm:mb-8">
                        "Echo Studio have very successful communication skills and business ethics. I highly recommend them."
                      </blockquote>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                            <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
                          </div>
                          <div>
                            <div className="text-black font-semibold text-base">Selin</div>
                            <div className="text-gray-600 text-sm">Photo Editing</div>
                          </div>
                        </div>
                        <div className="w-4 h-4 bg-black rounded-full"></div>
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
                        <div>United States</div>
                        <div>8 The Green STE D Dover, County of</div>
                        <div>Kent, Delaware19901</div>
                        <div className="mt-4 sm:mt-6">
                          <div>P: 3740 213 301</div>
                          <div>E: hello@madebyecho.com</div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-black text-lg font-semibold mb-4 sm:mb-6">Social</h3>
                      <div className="text-black hover:text-gray-600 cursor-pointer transition-colors">
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
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
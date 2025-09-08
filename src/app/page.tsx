export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white">
      {/* Navigation */}
      <nav className="bg-black/95 backdrop-blur-md border-b border-red-600 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-3xl font-bold text-white tracking-wider">THINK TWICE</h1>
              <span className="ml-3 text-red-500 text-sm font-bold">FL</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#music" className="text-gray-300 hover:text-red-500 px-3 py-2 text-sm font-bold transition-colors tracking-wide">
                  MUSIC
                </a>
                <a href="#tour" className="text-gray-300 hover:text-red-500 px-3 py-2 text-sm font-bold transition-colors tracking-wide">
                  TOUR
                </a>
                <a href="#merch" className="text-gray-300 hover:text-red-500 px-3 py-2 text-sm font-bold transition-colors tracking-wide">
                  MERCH
                </a>
                <a href="#about" className="text-gray-300 hover:text-red-500 px-3 py-2 text-sm font-bold transition-colors tracking-wide">
                  ABOUT
                </a>
                <a href="#contact" className="text-gray-300 hover:text-red-500 px-3 py-2 text-sm font-bold transition-colors tracking-wide">
                  CONTACT
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 to-black/50"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <div className="mb-8">
              <span className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold tracking-wider">
                FLORIDA METALCORE
              </span>
            </div>
            <h1 className="text-7xl md:text-9xl font-black text-white mb-6 tracking-tight">
              THINK TWICE
            </h1>
            <p className="text-3xl text-red-400 mb-8 max-w-3xl mx-auto font-bold">
              RECOVERY STREAMING NOW
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="https://open.spotify.com/artist/thinktwice" target="_blank" rel="noopener noreferrer" className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg transition-colors text-lg tracking-wide">
                STREAM ON SPOTIFY
              </a>
              <a href="https://music.apple.com/us/artist/think-twice" target="_blank" rel="noopener noreferrer" className="border-2 border-red-600 text-red-400 font-bold py-4 px-8 rounded-lg transition-colors hover:bg-red-600 hover:text-white text-lg tracking-wide">
                APPLE MUSIC
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Release */}
      <section id="music" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tight">
              LATEST RELEASE
            </h2>
            <p className="text-2xl text-red-400 font-bold">
              Recovery - Available Now
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-lg border border-red-600">
              <div className="aspect-square bg-gradient-to-br from-red-600 via-black to-red-800 rounded-lg mb-6 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="text-center relative z-10">
                  <h3 className="text-4xl font-black text-white mb-2 tracking-wider">RECOVERY</h3>
                  <p className="text-red-400 font-bold tracking-wide">THINK TWICE</p>
                  <p className="text-gray-300 text-sm mt-2">FLORIDA METALCORE</p>
                </div>
              </div>
              <div className="space-y-4">
                <a href="https://open.spotify.com/artist/thinktwice" target="_blank" rel="noopener noreferrer" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center">
                  <span className="mr-2">🎵</span> STREAM ON SPOTIFY
                </a>
                <a href="https://music.apple.com/us/artist/think-twice" target="_blank" rel="noopener noreferrer" className="w-full border border-red-600 text-red-400 font-bold py-3 px-6 rounded-lg hover:bg-red-600 hover:text-white transition-colors flex items-center justify-center">
                  <span className="mr-2">🍎</span> STREAM ON APPLE MUSIC
                </a>
                <a href="https://www.youtube.com/@thinktwicefl" target="_blank" rel="noopener noreferrer" className="w-full border border-red-600 text-red-400 font-bold py-3 px-6 rounded-lg hover:bg-red-600 hover:text-white transition-colors flex items-center justify-center">
                  <span className="mr-2">📺</span> WATCH ON YOUTUBE
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-4xl font-black text-white mb-6 tracking-wide">STREAMING PLATFORMS</h3>
              <div className="space-y-4">
                <a href="https://open.spotify.com/artist/thinktwice" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 bg-gray-900 rounded-lg border border-gray-800 hover:border-red-600 transition-colors group">
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">🎵</span>
                    <span className="text-white font-bold">Spotify</span>
                  </div>
                  <span className="text-red-400 group-hover:text-red-300 transition-colors">→</span>
                </a>
                <a href="https://music.apple.com/us/artist/think-twice" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 bg-gray-900 rounded-lg border border-gray-800 hover:border-red-600 transition-colors group">
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">🍎</span>
                    <span className="text-white font-bold">Apple Music</span>
                  </div>
                  <span className="text-red-400 group-hover:text-red-300 transition-colors">→</span>
                </a>
                <a href="https://www.youtube.com/@thinktwicefl" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 bg-gray-900 rounded-lg border border-gray-800 hover:border-red-600 transition-colors group">
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">📺</span>
                    <span className="text-white font-bold">YouTube Music</span>
                  </div>
                  <span className="text-red-400 group-hover:text-red-300 transition-colors">→</span>
                </a>
                <a href="https://music.amazon.com/artists/think-twice" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 bg-gray-900 rounded-lg border border-gray-800 hover:border-red-600 transition-colors group">
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">🛒</span>
                    <span className="text-white font-bold">Amazon Music</span>
                  </div>
                  <span className="text-red-400 group-hover:text-red-300 transition-colors">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tight">
              FOLLOW THE MOVEMENT
            </h2>
            <p className="text-2xl text-red-400 font-bold">
              Join the Florida Metalcore Scene
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a href="https://www.instagram.com/thinktwicefl/" target="_blank" rel="noopener noreferrer" className="group">
              <div className="bg-gradient-to-br from-pink-600 via-red-600 to-purple-600 p-8 rounded-lg text-center hover:scale-105 transition-transform border border-red-600">
                <div className="text-6xl mb-4">📸</div>
                <h3 className="text-3xl font-black text-white mb-2 tracking-wide">INSTAGRAM</h3>
                <p className="text-gray-200 font-bold">@thinktwicefl</p>
                <p className="text-sm text-gray-300 mt-2">Behind the scenes & updates</p>
              </div>
            </a>
            
            <a href="https://www.tiktok.com/@thinktwicefl" target="_blank" rel="noopener noreferrer" className="group">
              <div className="bg-gradient-to-br from-black via-gray-800 to-red-600 p-8 rounded-lg text-center hover:scale-105 transition-transform border border-red-600">
                <div className="text-6xl mb-4">🎵</div>
                <h3 className="text-3xl font-black text-white mb-2 tracking-wide">TIKTOK</h3>
                <p className="text-gray-200 font-bold">@thinktwicefl</p>
                <p className="text-sm text-gray-300 mt-2">Short form content & covers</p>
              </div>
            </a>
            
            <a href="https://linktr.ee/thinktwicefl" target="_blank" rel="noopener noreferrer" className="group">
              <div className="bg-gradient-to-br from-green-600 via-red-600 to-blue-600 p-8 rounded-lg text-center hover:scale-105 transition-transform border border-red-600">
                <div className="text-6xl mb-4">🔗</div>
                <h3 className="text-3xl font-black text-white mb-2 tracking-wide">LINKTREE</h3>
                <p className="text-gray-200 font-bold">All Links</p>
                <p className="text-sm text-gray-300 mt-2">Everything in one place</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
                ABOUT THINK TWICE
              </h2>
              <div className="mb-6">
                <span className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold tracking-wider">
                  FLORIDA METALCORE
                </span>
              </div>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Think Twice is a dynamic Florida-based metalcore project that brings together powerful vocals, 
                innovative production, and meaningful lyrics. With their latest release &ldquo;Recovery,&rdquo; 
                the band continues to push boundaries and connect with audiences worldwide.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Born from the Florida metalcore scene, Think Twice delivers authentic music that resonates with listeners. 
                From intimate acoustic sessions to full production tracks, they represent the next generation of 
                Florida metalcore talent.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/thinktwicefl/" target="_blank" rel="noopener noreferrer" className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                  FOLLOW ON IG
                </a>
                <a href="https://linktr.ee/thinktwicefl" target="_blank" rel="noopener noreferrer" className="border border-red-600 text-red-400 font-bold py-3 px-6 rounded-lg hover:bg-red-600 hover:text-white transition-colors">
                  ALL LINKS
                </a>
              </div>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-lg border border-red-600">
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-2xl">🎤</span>
                  </div>
                  <div>
                    <h3 className="font-black text-white text-xl">VOCALS</h3>
                    <p className="text-red-400 text-sm font-bold">Lead & Harmony</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-2xl">🎸</span>
                  </div>
                  <div>
                    <h3 className="font-black text-white text-xl">INSTRUMENTS</h3>
                    <p className="text-red-400 text-sm font-bold">Guitar & Production</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-2xl">🎵</span>
                  </div>
                  <div>
                    <h3 className="font-black text-white text-xl">MUSIC</h3>
                    <p className="text-red-400 text-sm font-bold">Original Metalcore</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-2xl">🌴</span>
                  </div>
                  <div>
                    <h3 className="font-black text-white text-xl">LOCATION</h3>
                    <p className="text-red-400 text-sm font-bold">Florida, USA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tour Dates */}
      <section id="tour" className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tight">
              TOUR DATES
            </h2>
            <p className="text-2xl text-red-400 font-bold">
              Florida Metalcore Live
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-gray-900 to-black p-6 rounded-lg border border-red-600">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-2xl font-black text-white">More Florida dates coming soon...</h3>
                    <p className="text-red-400 font-bold">Stay tuned for upcoming shows</p>
                  </div>
                  <a href="https://www.instagram.com/thinktwicefl/" target="_blank" rel="noopener noreferrer" className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-lg transition-colors">
                    FOLLOW FOR UPDATES
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Merch Section */}
      <section id="merch" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tight">
              MERCHANDISE
            </h2>
            <p className="text-2xl text-red-400 font-bold">
              Florida Metalcore Gear
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-lg text-center border border-red-600">
              <div className="w-full h-64 bg-gradient-to-br from-red-600 via-black to-red-800 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-white text-4xl">👕</span>
              </div>
              <h3 className="text-2xl font-black text-white mb-2">T-SHIRTS</h3>
              <p className="text-red-400 font-bold mb-4">Official band tees</p>
              <a href="https://linktr.ee/thinktwicefl" target="_blank" rel="noopener noreferrer" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition-colors">
                COMING SOON
              </a>
            </div>
            
            <div className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-lg text-center border border-red-600">
              <div className="w-full h-64 bg-gradient-to-br from-red-600 via-black to-red-800 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-white text-4xl">🎵</span>
              </div>
              <h3 className="text-2xl font-black text-white mb-2">MUSIC</h3>
              <p className="text-red-400 font-bold mb-4">Physical releases</p>
              <a href="https://linktr.ee/thinktwicefl" target="_blank" rel="noopener noreferrer" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition-colors">
                COMING SOON
              </a>
            </div>
            
            <div className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-lg text-center border border-red-600">
              <div className="w-full h-64 bg-gradient-to-br from-red-600 via-black to-red-800 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-white text-4xl">🎁</span>
              </div>
              <h3 className="text-2xl font-black text-white mb-2">ACCESSORIES</h3>
              <p className="text-red-400 font-bold mb-4">Band accessories</p>
              <a href="https://linktr.ee/thinktwicefl" target="_blank" rel="noopener noreferrer" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition-colors">
                COMING SOON
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tight">
              CONTACT
            </h2>
            <p className="text-2xl text-red-400 font-bold">
              Connect with Think Twice
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <a href="https://www.instagram.com/thinktwicefl/" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-lg text-center hover:border-red-600 border border-gray-800 transition-colors group">
                <div className="text-4xl mb-3">📸</div>
                <h3 className="text-2xl font-black text-white mb-2">Instagram</h3>
                <p className="text-red-400 font-bold">@thinktwicefl</p>
                <p className="text-gray-400 text-sm mt-2">Behind the scenes content</p>
              </a>
              
              <a href="https://www.tiktok.com/@thinktwicefl" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-lg text-center hover:border-red-600 border border-gray-800 transition-colors group">
                <div className="text-4xl mb-3">🎵</div>
                <h3 className="text-2xl font-black text-white mb-2">TikTok</h3>
                <p className="text-red-400 font-bold">@thinktwicefl</p>
                <p className="text-gray-400 text-sm mt-2">Short form content</p>
              </a>
            </div>
            
            <div className="text-center">
              <p className="text-gray-400 mb-4 font-bold">For booking and business inquiries:</p>
              <a href="mailto:contact@thinktwice.com" className="text-red-400 hover:text-red-300 transition-colors font-bold">
                contact@thinktwice.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 border-t border-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-3xl font-black mb-4 tracking-wider">THINK TWICE</h3>
              <p className="text-gray-400 font-bold">
                Florida Metalcore
              </p>
            </div>
            <div>
              <h4 className="font-black mb-4 text-red-400">MUSIC</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="https://open.spotify.com/artist/thinktwice" target="_blank" rel="noopener noreferrer" className="hover:text-red-400 transition-colors font-bold">Recovery</a></li>
                <li><a href="https://open.spotify.com/artist/thinktwice" target="_blank" rel="noopener noreferrer" className="hover:text-red-400 transition-colors font-bold">Time</a></li>
                <li><a href="https://linktr.ee/thinktwicefl" target="_blank" rel="noopener noreferrer" className="hover:text-red-400 transition-colors font-bold">Streaming</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-black mb-4 text-red-400">SOCIAL</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="https://www.instagram.com/thinktwicefl/" target="_blank" rel="noopener noreferrer" className="hover:text-red-400 transition-colors font-bold">Instagram</a></li>
                <li><a href="https://www.tiktok.com/@thinktwicefl" target="_blank" rel="noopener noreferrer" className="hover:text-red-400 transition-colors font-bold">TikTok</a></li>
                <li><a href="https://linktr.ee/thinktwicefl" target="_blank" rel="noopener noreferrer" className="hover:text-red-400 transition-colors font-bold">Linktree</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-black mb-4 text-red-400">CONTACT</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="mailto:contact@thinktwice.com" className="hover:text-red-400 transition-colors font-bold">Email</a></li>
                <li><a href="https://www.instagram.com/thinktwicefl/" target="_blank" rel="noopener noreferrer" className="hover:text-red-400 transition-colors font-bold">Booking</a></li>
                <li><a href="https://linktr.ee/thinktwicefl" target="_blank" rel="noopener noreferrer" className="hover:text-red-400 transition-colors font-bold">Press</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-red-600 mt-8 pt-8 text-center text-gray-400">
            <p className="font-bold">&copy; 2024 Think Twice. All rights reserved. | Florida Metalcore</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="bg-black/90 backdrop-blur-md border-b border-gray-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-white">THINK TWICE</h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#music" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">
                  MUSIC
                </a>
                <a href="#tour" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">
                  TOUR
                </a>
                <a href="#merch" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">
                  MERCH
                </a>
                <a href="#about" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">
                  ABOUT
                </a>
                <a href="#contact" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">
                  CONTACT
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">
              THINK TWICE
            </h1>
            <p className="text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              RECOVERY STREAMING NOW
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-white text-black font-bold py-4 px-8 rounded-lg transition-colors hover:bg-gray-200 text-lg">
                LISTEN TO RECOVERY
              </button>
              <button className="border-2 border-white text-white font-bold py-4 px-8 rounded-lg transition-colors hover:bg-white hover:text-black text-lg">
                WATCH VIDEOS
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Release */}
      <section id="music" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              LATEST RELEASE
            </h2>
            <p className="text-xl text-gray-300">
              Recovery - Available Now
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-800 p-8 rounded-lg">
              <div className="aspect-square bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg mb-6 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-white mb-2">RECOVERY</h3>
                  <p className="text-gray-300">THINK TWICE</p>
                </div>
              </div>
              <div className="space-y-4">
                <button className="w-full bg-white text-black font-bold py-3 px-6 rounded-lg hover:bg-gray-200 transition-colors">
                  STREAM ON SPOTIFY
                </button>
                <button className="w-full border border-white text-white font-bold py-3 px-6 rounded-lg hover:bg-white hover:text-black transition-colors">
                  STREAM ON APPLE MUSIC
                </button>
                <button className="w-full border border-white text-white font-bold py-3 px-6 rounded-lg hover:bg-white hover:text-black transition-colors">
                  STREAM ON YOUTUBE
                </button>
              </div>
            </div>
            
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">STREAMING LINKS</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
                  <span className="text-white font-medium">Spotify</span>
                  <button className="text-purple-400 hover:text-purple-300 transition-colors">→</button>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
                  <span className="text-white font-medium">Apple Music</span>
                  <button className="text-purple-400 hover:text-purple-300 transition-colors">→</button>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
                  <span className="text-white font-medium">YouTube Music</span>
                  <button className="text-purple-400 hover:text-purple-300 transition-colors">→</button>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
                  <span className="text-white font-medium">Amazon Music</span>
                  <button className="text-purple-400 hover:text-purple-300 transition-colors">→</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              FOLLOW US
            </h2>
            <p className="text-xl text-gray-300">
              Stay connected with Think Twice
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a href="https://www.instagram.com/thinktwicefl/" target="_blank" rel="noopener noreferrer" className="group">
              <div className="bg-gradient-to-br from-pink-600 to-purple-600 p-8 rounded-lg text-center hover:scale-105 transition-transform">
                <div className="text-4xl mb-4">📸</div>
                <h3 className="text-2xl font-bold text-white mb-2">INSTAGRAM</h3>
                <p className="text-gray-200">@thinktwicefl</p>
              </div>
            </a>
            
            <a href="https://www.tiktok.com/@thinktwicefl" target="_blank" rel="noopener noreferrer" className="group">
              <div className="bg-gradient-to-br from-black to-gray-800 p-8 rounded-lg text-center hover:scale-105 transition-transform">
                <div className="text-4xl mb-4">🎵</div>
                <h3 className="text-2xl font-bold text-white mb-2">TIKTOK</h3>
                <p className="text-gray-200">@thinktwicefl</p>
              </div>
            </a>
            
            <a href="https://linktr.ee/thinktwicefl" target="_blank" rel="noopener noreferrer" className="group">
              <div className="bg-gradient-to-br from-green-600 to-blue-600 p-8 rounded-lg text-center hover:scale-105 transition-transform">
                <div className="text-4xl mb-4">🔗</div>
                <h3 className="text-2xl font-bold text-white mb-2">LINKTREE</h3>
                <p className="text-gray-200">All Links</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                ABOUT THINK TWICE
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                Think Twice is a dynamic musical project that brings together powerful vocals, 
                innovative production, and meaningful lyrics. With their latest release &ldquo;Recovery,&rdquo; 
                the band continues to push boundaries and connect with audiences worldwide.
              </p>
              <p className="text-lg text-gray-300 mb-8">
                Follow their journey on social media and stream their music on all major platforms. 
                From intimate acoustic sessions to full production tracks, Think Twice delivers 
                authentic music that resonates with listeners.
              </p>
              <div className="flex space-x-4">
                <button className="bg-white text-black font-bold py-3 px-6 rounded-lg hover:bg-gray-200 transition-colors">
                  READ MORE
                </button>
                <button className="border border-white text-white font-bold py-3 px-6 rounded-lg hover:bg-white hover:text-black transition-colors">
                  CONTACT
                </button>
              </div>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg">
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">🎤</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">VOCALS</h3>
                    <p className="text-gray-400 text-sm">Lead & Harmony</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">🎸</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">INSTRUMENTS</h3>
                    <p className="text-gray-400 text-sm">Guitar & Production</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">🎵</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">MUSIC</h3>
                    <p className="text-gray-400 text-sm">Original Compositions</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">🎬</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">CONTENT</h3>
                    <p className="text-gray-400 text-sm">Music Videos & Covers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tour Dates */}
      <section id="tour" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              TOUR DATES
            </h2>
            <p className="text-xl text-gray-300">
              Catch Think Twice live
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-bold text-white">More dates coming soon...</h3>
                    <p className="text-gray-400">Stay tuned for upcoming shows</p>
                  </div>
                  <button className="bg-white text-black font-bold py-2 px-6 rounded-lg hover:bg-gray-200 transition-colors">
                    NOTIFY ME
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Merch Section */}
      <section id="merch" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              MERCHANDISE
            </h2>
            <p className="text-xl text-gray-300">
              Official Think Twice merchandise coming soon
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <div className="w-full h-64 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">👕</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">T-SHIRTS</h3>
              <p className="text-gray-400 mb-4">Official band tees</p>
              <button className="w-full bg-white text-black font-bold py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors">
                COMING SOON
              </button>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <div className="w-full h-64 bg-gradient-to-br from-green-600 to-blue-600 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">🎵</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">MUSIC</h3>
              <p className="text-gray-400 mb-4">Physical releases</p>
              <button className="w-full bg-white text-black font-bold py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors">
                COMING SOON
              </button>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <div className="w-full h-64 bg-gradient-to-br from-pink-600 to-purple-600 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">🎁</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">ACCESSORIES</h3>
              <p className="text-gray-400 mb-4">Band accessories</p>
              <button className="w-full bg-white text-black font-bold py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors">
                COMING SOON
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              CONTACT
            </h2>
            <p className="text-xl text-gray-300">
              Get in touch with Think Twice
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <a href="https://www.instagram.com/thinktwicefl/" target="_blank" rel="noopener noreferrer" className="bg-gray-900 p-6 rounded-lg text-center hover:bg-gray-800 transition-colors">
                <div className="text-3xl mb-3">📸</div>
                <h3 className="text-xl font-bold text-white mb-2">Instagram</h3>
                <p className="text-gray-400">@thinktwicefl</p>
              </a>
              
              <a href="https://www.tiktok.com/@thinktwicefl" target="_blank" rel="noopener noreferrer" className="bg-gray-900 p-6 rounded-lg text-center hover:bg-gray-800 transition-colors">
                <div className="text-3xl mb-3">🎵</div>
                <h3 className="text-xl font-bold text-white mb-2">TikTok</h3>
                <p className="text-gray-400">@thinktwicefl</p>
              </a>
            </div>
            
            <div className="text-center">
              <p className="text-gray-400 mb-4">For booking and business inquiries:</p>
              <a href="mailto:contact@thinktwice.com" className="text-white hover:text-gray-300 transition-colors">
                contact@thinktwice.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">THINK TWICE</h3>
              <p className="text-gray-400">
                Official website for the band Think Twice
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">MUSIC</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Recovery</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Time</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Streaming</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">SOCIAL</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="https://www.instagram.com/thinktwicefl/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a></li>
                <li><a href="https://www.tiktok.com/@thinktwicefl" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">TikTok</a></li>
                <li><a href="https://linktr.ee/thinktwicefl" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Linktree</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">CONTACT</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="mailto:contact@thinktwice.com" className="hover:text-white transition-colors">Email</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Booking</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Think Twice. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white">
      {/* Navigation */}
      <nav className="bg-black/95 backdrop-blur-md border-b border-red-600 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-3xl font-bold text-white tracking-wider">THINK TWICE</span>
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
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Band Photos Background */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-screen flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/40 to-black/60 z-10"></div>
          <div className="absolute inset-0 bg-black/30 z-20"></div>
          
          {/* Single Bass Player Photo Background */}
          <div className="absolute inset-0 bg-cover bg-center opacity-30" 
               style={{
                 backgroundImage: `url('/images/band/bass-player.jpg')`,
                 backgroundSize: 'cover',
                 backgroundPosition: 'center center'
               }}>
          </div>
        </div>
        
        <div className="relative z-30 max-w-7xl mx-auto w-full">
          <div className="text-center">
            <h1 className="text-7xl md:text-9xl font-black text-white mb-6 tracking-tight drop-shadow-2xl">
              THINK TWICE
            </h1>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <a href="https://open.spotify.com/artist/2EXAMPLE" target="_blank" rel="noopener noreferrer" 
                 className="bg-green-600 hover:bg-green-700 text-white font-black py-4 px-8 rounded-lg transition-colors text-lg tracking-wide">
                STREAM ON SPOTIFY
              </a>
              <a href="https://www.youtube.com/@thinktwicefl" target="_blank" rel="noopener noreferrer" 
                 className="bg-red-600 hover:bg-red-700 text-white font-black py-4 px-8 rounded-lg transition-colors text-lg tracking-wide">
                WATCH ON YOUTUBE
              </a>
              <a href="https://www.tiktok.com/@thinktwicefl" target="_blank" rel="noopener noreferrer" 
                 className="bg-black hover:bg-gray-800 text-white font-black py-4 px-8 rounded-lg border-2 border-white transition-colors text-lg tracking-wide">
                FOLLOW ON TIKTOK
              </a>
            </div>
            <p className="text-xl text-gray-300 mb-8 font-light tracking-wider max-w-3xl mx-auto leading-relaxed">
              Metalcore from Southwest Florida. Raw energy meets melodic precision.
            </p>
          </div>
        </div>
      </section>

      {/* Music Section */}
      <section id="music" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-black text-center text-white mb-16 tracking-tight">
            MUSIC
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Spotify Card */}
            <div className="bg-gradient-to-br from-green-900 to-black p-8 rounded-xl border-2 border-green-600 hover:border-green-400 transition-colors group">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-3xl font-black text-white group-hover:text-green-400 transition-colors">
                  SPOTIFY
                </h3>
                <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center">
                  <span className="text-2xl font-black text-black">♪</span>
                </div>
              </div>
              <p className="text-gray-300 mb-6 font-medium leading-relaxed">
                Stream our latest tracks and discover our metalcore sound.
              </p>
              <a href="https://open.spotify.com/artist/2EXAMPLE" target="_blank" rel="noopener noreferrer" 
                 className="bg-green-600 hover:bg-green-500 text-black font-black py-3 px-6 rounded-lg transition-colors inline-flex items-center">
                LISTEN NOW →
              </a>
            </div>

            {/* YouTube Card */}
            <div className="bg-gradient-to-br from-red-900 to-black p-8 rounded-xl border-2 border-red-600 hover:border-red-400 transition-colors group">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-3xl font-black text-white group-hover:text-red-400 transition-colors">
                  YOUTUBE
                </h3>
                <div className="w-16 h-16 bg-red-600 rounded-xl flex items-center justify-center">
                  <span className="text-2xl font-black text-white">▶</span>
                </div>
              </div>
              <p className="text-gray-300 mb-6 font-medium leading-relaxed">
                Watch our music videos and behind-the-scenes content.
              </p>
              <a href="https://www.youtube.com/@thinktwicefl" target="_blank" rel="noopener noreferrer" 
                 className="bg-red-600 hover:bg-red-500 text-white font-black py-3 px-6 rounded-lg transition-colors inline-flex items-center">
                WATCH NOW →
              </a>
            </div>

            {/* TikTok Card */}
            <div className="md:col-span-2 bg-gradient-to-br from-purple-900 to-black p-8 rounded-xl border-2 border-purple-600 hover:border-purple-400 transition-colors group relative overflow-hidden">
              {/* Band member image positioned to show faces behind the link */}
              <div className="absolute inset-0 opacity-20">
                <div className="w-full h-full bg-cover bg-center" 
                     style={{
                       backgroundImage: `url('/images/band/group-photo.jpg')`,
                       backgroundSize: 'cover',
                       backgroundPosition: 'center center'
                     }}>
                </div>
              </div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-3xl font-black text-white group-hover:text-purple-400 transition-colors">
                    TIKTOK
                  </h3>
                  <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center">
                    <span className="text-2xl font-black text-white">♫</span>
                  </div>
                </div>
                <p className="text-gray-300 mb-6 font-medium leading-relaxed">
                  Follow us for quick clips, behind-the-scenes moments, and raw metalcore content.
                </p>
                <a href="https://www.tiktok.com/@thinktwicefl" target="_blank" rel="noopener noreferrer" 
                   className="bg-purple-600 hover:bg-purple-500 text-white font-black py-3 px-6 rounded-lg transition-colors inline-flex items-center">
                  FOLLOW US →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tour Section */}
      <section id="tour" className="py-16 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-black text-center text-white mb-16 tracking-tight">
            TOUR DATES
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-gray-900 to-black p-6 rounded-lg border border-red-600">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-2xl font-black text-white">More dates coming soon...</h3>
                    <p className="text-red-400 font-bold">Stay tuned for upcoming shows</p>
                  </div>
                  <a href="https://www.instagram.com/thinktwicefl/" target="_blank" rel="noopener noreferrer" 
                     className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-lg transition-colors">
                    FOLLOW FOR UPDATES
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Merch Section */}
      <section id="merch" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-black text-center text-white mb-16 tracking-tight">
            MERCH
          </h2>
          
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-gray-900 to-black p-12 rounded-xl border-2 border-red-600">
              <h3 className="text-3xl font-black text-white mb-4">MERCH COMING SOON</h3>
              <p className="text-gray-300 text-lg mb-8">Get ready for exclusive THINK TWICE gear</p>
              <a href="https://www.instagram.com/thinktwicefl/" target="_blank" rel="noopener noreferrer" 
                 className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition-colors text-lg">
                FOLLOW FOR UPDATES
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-black text-center text-white mb-16 tracking-tight">
            ABOUT
          </h2>
          
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              THINK TWICE is a metalcore band from Southwest Florida, bringing raw energy and melodic precision to the scene. 
              Our sound combines crushing breakdowns with soaring melodies, creating music that hits both the heart and the pit.
            </p>
            <div className="flex justify-center space-x-8">
              <a href="https://www.instagram.com/thinktwicefl/" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-300 hover:text-red-500 text-lg font-bold transition-colors">
                INSTAGRAM
              </a>
              <a href="https://www.tiktok.com/@thinktwicefl" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-300 hover:text-red-500 text-lg font-bold transition-colors">
                TIKTOK
              </a>
              <a href="https://www.youtube.com/@thinktwicefl" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-300 hover:text-red-500 text-lg font-bold transition-colors">
                YOUTUBE
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

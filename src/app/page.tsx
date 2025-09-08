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
        {/* Background Images */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/40 to-black/60 z-10"></div>
          <div className="absolute inset-0 bg-black/30 z-20"></div>
          
          {/* Band Photo 1 - Studio Shot */}
          <div className="absolute top-0 left-0 w-1/3 h-full bg-cover bg-center opacity-30" 
               style={{
                 backgroundImage: `url('/images/band/studio-shot.jpg')`,
                 backgroundSize: 'cover',
                 backgroundPosition: 'center'
               }}>
          </div>
          
          {/* Band Photo 2 - Bass Player */}
          <div className="absolute top-0 left-1/3 w-1/3 h-full bg-cover bg-center opacity-30" 
               style={{
                 backgroundImage: `url('/images/band/bass-player.jpg')`,
                 backgroundSize: 'cover',
                 backgroundPosition: 'center'
               }}>
          </div>
          
          {/* Band Photo 3 - Drummer */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-cover bg-center opacity-30" 
               style={{
                 backgroundImage: `url('/images/band/drummer.jpg')`,
                 backgroundSize: 'cover',
                 backgroundPosition: 'center'
               }}>
          </div>
        </div>
        
        <div className="relative z-30 max-w-7xl mx-auto w-full">
          <div className="text-center">
            <h1 className="text-7xl md:text-9xl font-black text-white mb-6 tracking-tight drop-shadow-2xl">
              THINK TWICE
            </h1>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <a href="https://open.spotify.com/artist/3RwpIznBaPTxoO4ZsqQt1X" target="_blank" rel="noopener noreferrer" className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg transition-colors text-lg tracking-wide drop-shadow-lg">
                SPOTIFY
              </a>
              <a href="https://music.apple.com/us/artist/think-twice/1788373488" target="_blank" rel="noopener noreferrer" className="border-2 border-red-600 text-red-400 font-bold py-4 px-8 rounded-lg transition-colors hover:bg-red-600 hover:text-white text-lg tracking-wide drop-shadow-lg">
                APPLE MUSIC
              </a>
              <a href="https://www.youtube.com/channel/UCx2EaVzfp8n3BFKC4kDH3Ow" target="_blank" rel="noopener noreferrer" className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg transition-colors text-lg tracking-wide drop-shadow-lg">
                YOUTUBE
              </a>
            </div>
            
            {/* YouTube Video Player */}
            <div className="max-w-4xl mx-auto">
              <div className="relative w-full" style={{paddingBottom: '56.25%'}}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-lg border-2 border-red-600"
                  src="https://www.youtube.com/embed?listType=playlist&list=UUx2EaVzfp8n3BFKC4kDH3Ow&index=0"
                  title="Think Twice - Latest Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
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
              Join the Think Twice Community
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a href="https://www.instagram.com/thinktwicefl/" target="_blank" rel="noopener noreferrer" className="group">
              <div className="relative p-8 rounded-lg text-center hover:scale-105 transition-transform border border-red-600 overflow-hidden">
                <div className="absolute inset-0 bg-cover opacity-60" 
                     style={{
                       backgroundImage: `url('/images/band/studio-shot.jpg')`,
                       backgroundPosition: 'center 20%'
                     }}>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-pink-600/40 via-red-600/40 to-purple-600/40"></div>
                <div className="relative z-10">
                  <h3 className="text-3xl font-black text-white mb-2 tracking-wide">INSTAGRAM</h3>
                  <p className="text-gray-200 font-bold">@thinktwicefl</p>
                  <p className="text-sm text-gray-300 mt-2">Behind the scenes & updates</p>
                </div>
              </div>
            </a>
            
            <a href="https://www.tiktok.com/@thinktwicefl" target="_blank" rel="noopener noreferrer" className="group">
              <div className="relative p-8 rounded-lg text-center hover:scale-105 transition-transform border border-red-600 overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center opacity-60" 
                     style={{backgroundImage: `url('/images/band/bass-player.jpg')`}}>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-gray-800/40 to-red-600/40"></div>
                <div className="relative z-10">
                  <h3 className="text-3xl font-black text-white mb-2 tracking-wide">TIKTOK</h3>
                  <p className="text-gray-200 font-bold">@thinktwicefl</p>
                  <p className="text-sm text-gray-300 mt-2">Short form content & covers</p>
                </div>
              </div>
            </a>
            
            <a href="https://linktr.ee/thinktwicefl" target="_blank" rel="noopener noreferrer" className="group">
              <div className="relative p-8 rounded-lg text-center hover:scale-105 transition-transform border border-red-600 overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center opacity-60" 
                     style={{backgroundImage: `url('/images/band/drummer.jpg')`}}>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-green-600/40 via-red-600/40 to-blue-600/40"></div>
                <div className="relative z-10">
                  <h3 className="text-3xl font-black text-white mb-2 tracking-wide">LINKTREE</h3>
                  <p className="text-gray-200 font-bold">All Links</p>
                  <p className="text-sm text-gray-300 mt-2">Everything in one place</p>
                </div>
              </div>
            </a>
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
              Official Think Twice Gear
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-lg text-center border border-red-600">
              <div className="w-full h-64 bg-gradient-to-br from-red-600 via-black to-red-800 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-white text-4xl">👕</span>
              </div>
              <h3 className="text-2xl font-black text-white mb-2">T-SHIRTS</h3>
              <p className="text-red-400 font-bold mb-4">Custom designs coming soon</p>
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
              <p className="text-red-400 font-bold mb-4">Custom accessories coming soon</p>
              <a href="https://linktr.ee/thinktwicefl" target="_blank" rel="noopener noreferrer" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition-colors">
                COMING SOON
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
                About THINK TWICE
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Think Twice is a dynamic musical project that brings together powerful vocals, 
                innovative production, and meaningful lyrics. With their latest release &ldquo;Recovery,&rdquo; 
                the band continues to push boundaries and connect with audiences worldwide.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Born from the music scene, Think Twice delivers authentic music that resonates with listeners. 
                From intimate acoustic sessions to full production tracks, they represent the next generation of 
                musical talent.
              </p>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-lg border border-red-600">
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-2xl">🎤</span>
                  </div>
                  <div>
                    <h3 className="font-black text-white text-xl">VOCALS</h3>
                    <p className="text-red-400 text-sm font-bold">Jackson Savage</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-2xl">🎸</span>
                  </div>
                  <div>
                    <h3 className="font-black text-white text-xl">GUITAR</h3>
                    <p className="text-red-400 text-sm font-bold">XXXX</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-2xl">🎵</span>
                  </div>
                  <div>
                    <h3 className="font-black text-white text-xl">BASS</h3>
                    <p className="text-red-400 text-sm font-bold">XXXX</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-2xl">🥁</span>
                  </div>
                  <div>
                    <h3 className="font-black text-white text-xl">DRUMS</h3>
                    <p className="text-red-400 text-sm font-bold">XXXX</p>
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
            <h2 className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tight">
              TOUR DATES
            </h2>
            <p className="text-2xl text-red-400 font-bold">
              Live Performances
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-gray-900 to-black p-6 rounded-lg border border-red-600">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-2xl font-black text-white">More dates coming soon...</h3>
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


      {/* Footer */}
      <footer className="bg-black text-white py-12 border-t border-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-3xl font-black mb-4 tracking-wider">THINK TWICE</h3>
              <p className="text-gray-400 font-bold">
                Official Band Website
              </p>
            </div>
            <div>
              <h4 className="font-black mb-4 text-red-400">MUSIC</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="https://open.spotify.com/artist/3RwpIznBaPTxoO4ZsqQt1X" target="_blank" rel="noopener noreferrer" className="hover:text-red-400 transition-colors font-bold">Recovery</a></li>
                <li><a href="https://open.spotify.com/artist/3RwpIznBaPTxoO4ZsqQt1X" target="_blank" rel="noopener noreferrer" className="hover:text-red-400 transition-colors font-bold">Time</a></li>
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
          </div>
          <div className="border-t border-red-600 mt-8 pt-8 text-center text-gray-400">
            <p className="font-bold">&copy; 2024 Think Twice. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
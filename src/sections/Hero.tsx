import { motion } from 'framer-motion';
import { Compass, Book, Shovel, Skull, Bone, PlayCircle, ChevronDown, Target, Brain, Puzzle, BookOpen, ArrowRight } from 'lucide-react';
import bgImage from '../img/background.png';
import logoImage from '../img/fossilhunt logo.png';

export function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden font-sans text-white select-none">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={bgImage} 
          alt="Museum Background" 
          className="w-full h-full object-cover"
        />
        {/* Subtle gradient overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
      </div>

      <div className="relative z-10 w-full h-full min-h-screen flex flex-col justify-between pt-6 pb-8">
        
        {/* Top Navigation */}
        <nav className="px-8 flex justify-between items-center">
          <div className="flex items-center gap-12">
            {/* Small Logo */}
            <img src={logoImage} alt="Fossil Hunt AR Logo" className="h-12 object-contain filter drop-shadow-md" />
            
            {/* Nav Links */}
            <ul className="hidden lg:flex gap-8 text-sm font-medium tracking-wide">
              <li><a href="#home" className="text-[#FFB300] hover:text-[#FF8F00] transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-[#FFB300] transition-colors">About</a></li>
              <li><a href="#gameplay" className="hover:text-[#FFB300] transition-colors">Gameplay</a></li>
              <li><a href="#research" className="hover:text-[#FFB300] transition-colors">Research</a></li>
              <li><a href="#features" className="hover:text-[#FFB300] transition-colors">Features</a></li>
              <li><a href="#gallery" className="hover:text-[#FFB300] transition-colors">Gallery</a></li>
              <li><a href="#download" className="hover:text-[#FFB300] transition-colors">Download</a></li>
              <li><a href="#contact" className="hover:text-[#FFB300] transition-colors">Contact</a></li>
            </ul>
          </div>
        </nav>

        {/* Main Content Area */}
        <div className="flex-1 flex items-center w-full px-8 mt-4 relative">
          
          {/* Left Sidebar Menu */}
          <div className="hidden md:flex flex-col gap-4 absolute left-8 top-1/2 -translate-y-1/2 z-20">
            {[
              { icon: Book, label: 'EXPLORE' },
              { icon: Shovel, label: 'EXCAVATE' },
              { icon: Skull, label: 'LEARN' },
              { icon: Bone, label: 'ASSEMBLE' },
            ].map((item, idx) => (
              <button key={idx} className="flex flex-col items-center justify-center bg-[#3E2723]/80 hover:bg-[#5D4037] backdrop-blur-md w-20 h-20 rounded-2xl border border-[#8D6E63]/30 transition-all group shadow-xl">
                <item.icon size={24} className="text-[#FFB300] mb-1 group-hover:scale-110 transition-transform" />
                <span className="text-[10px] font-bold tracking-wider text-[#f4ebd8]">{item.label}</span>
              </button>
            ))}
          </div>

          {/* Hero Content */}
          <div className="max-w-2xl ml-0 md:ml-32 lg:ml-40 z-10 flex flex-col items-start">
            <motion.img 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              src={logoImage} 
              alt="Fossil Hunt AR" 
              className="w-[500px] max-w-full drop-shadow-2xl mb-6"
            />
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl font-extrabold mb-4 text-[#FFB300] drop-shadow-lg tracking-wide uppercase leading-tight"
            >
              Discover the Legends.<br />
              <span className="text-white">Revive the Past.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-gray-200 mb-8 max-w-xl leading-relaxed drop-shadow-md font-medium"
            >
              Step into a lost world with Fossil Hunt AR, an immersive augmented reality adventure that brings prehistoric creatures to life in your museum.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <button className="flex items-center gap-2 bg-gradient-to-r from-[#FFB300] to-[#FF8F00] hover:from-[#FF8F00] hover:to-[#E65100] text-[#291b15] px-8 py-3.5 rounded-xl font-bold transition-all transform hover:scale-105 shadow-[0_4px_20px_rgba(255,179,0,0.4)]">
                Start Your Adventure
                <ArrowRight size={20} />
              </button>
              <button className="flex items-center gap-2 bg-[#5D4037]/80 hover:bg-[#3E2723] backdrop-blur-sm border border-[#8D6E63]/40 text-white px-8 py-3.5 rounded-xl font-bold transition-all shadow-lg group">
                Watch Trailer
                <PlayCircle size={20} className="text-[#FFB300] group-hover:scale-110 transition-transform" />
              </button>
            </motion.div>
          </div>

          {/* Right Floating Sign */}
          <div className="hidden xl:flex absolute right-8 top-1/2 -translate-y-1/2 z-20">
            <div className="relative group cursor-pointer">
              <div className="absolute inset-0 bg-[#3E2723] rounded-sm transform rotate-3 shadow-2xl"></div>
              <div className="relative bg-[#5D4037] border-2 border-[#3E2723] px-6 py-4 transform -rotate-2 flex items-center gap-3 transition-transform group-hover:rotate-0">
                <span className="font-bold text-xl tracking-wider text-[#FFB300] uppercase drop-shadow-md">
                  Legends<br/>Await
                </span>
                <ArrowRight size={28} className="text-white" />
                
                {/* Wood details */}
                <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-16 bg-[#3E2723] rounded-sm flex flex-col justify-between py-2 items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-black/50"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-black/50"></div>
                </div>
              </div>
              <div className="w-4 h-32 bg-[#3E2723] absolute -bottom-28 right-8 z-[-1] rounded-b-sm border-x border-[#291b15]"></div>
            </div>
          </div>
        </div>

        {/* Bottom Area */}
        <div className="w-full flex flex-col items-center gap-8 mt-12 relative z-10">
          
          {/* Features Bar */}
          <div className="flex flex-wrap justify-center gap-4 px-4">
            {[
              { icon: Target, title: 'AR EXPLORATION', desc: 'Real-world Interactions' },
              { icon: Brain, title: 'ACTIVE LEARNING', desc: 'Quizzes & Research Challenges' },
              { icon: Puzzle, title: 'COLLECT & BUILD', desc: 'Assemble Ancient Giants' },
              { icon: BookOpen, title: 'EDUCATIONAL FUN', desc: 'Learn with our Virtual Guide' },
            ].map((feature, idx) => (
              <div key={idx} className="flex items-center gap-4 bg-[#291b15]/70 backdrop-blur-md px-6 py-4 rounded-2xl border border-[#5D4037]/50 shadow-lg hover:bg-[#3E2723]/80 transition-colors cursor-pointer w-full sm:w-auto">
                <feature.icon size={32} className="text-[#FF8F00] flex-shrink-0" />
                <div className="flex flex-col">
                  <span className="font-bold text-sm text-[#FFB300] tracking-wide">{feature.title}</span>
                  <span className="text-xs text-gray-300">{feature.desc}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll Indicator */}
          <motion.div 
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="flex flex-col items-center gap-2 opacity-80 hover:opacity-100 cursor-pointer"
          >
            <div className="w-6 h-10 rounded-full border-2 border-white flex justify-center p-1">
              <motion.div 
                animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="w-1 h-2 bg-white rounded-full"
              />
            </div>
            <span className="text-[10px] font-bold tracking-widest uppercase">Scroll to Explore</span>
            <ChevronDown size={16} />
          </motion.div>
        </div>

      </div>
    </section>
  );
}


import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative bg-fossil-dark pt-32 pb-12 overflow-hidden">
      {/* Subtle particle effect or gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-fossil-dark to-transparent z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 border-b border-white/10 pb-16">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-display font-bold text-white mb-4 cyan-glow">
              FOSSIL HUNT <span className="text-excavation-orange">AR</span>
            </h2>
            <p className="text-museum-wall/70 max-w-sm leading-relaxed mb-6">
              Transforming traditional museum learning into an active, interactive excavation experience using state-of-the-art Augmented Reality.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-excavation-orange hover:text-fossil-dark transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-excavation-orange hover:text-fossil-dark transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-excavation-orange hover:text-fossil-dark transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Project Identity', 'Problem & Need', 'Solution Overview', 'Research & Validation'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-museum-wall/60 hover:text-cyan-glow transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Contact & Info</h4>
            <ul className="space-y-3 text-museum-wall/60">
              <li>Lead Researcher & Developer: Sesath Wickramasinghe</li>
              <li>Project Year: 2026</li>
              <li>Specialization: Interactive Media</li>
              <li>Contact: sinsanduwickramasinghe@gmail.com / +94704244261</li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between text-museum-wall/40 text-sm">
          <p>&copy; {new Date().getFullYear()} Fossil Hunt AR. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed for Immersive Education</p>
        </div>
      </div>
    </footer>
  );
}

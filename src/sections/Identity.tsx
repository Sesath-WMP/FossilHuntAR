import { motion } from 'framer-motion';
import { Microscope, Gamepad2, GraduationCap } from 'lucide-react';
import meImage from '../img/Me.png';
import supervisorImage from '../img/Supervisors/Supervisor Mr Aruna Ishara Gamage.jpeg';
import coSupervisorImage from '../img/Supervisors/Co-Supervisor Mr. Nushkan Nizmi.jpeg';

export function Identity() {
  return (
    <section id="about" className="relative z-20 py-32 overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-[#FF8F00] font-bold tracking-widest uppercase mb-4 text-sm">Project Identity</h2>
          <h3 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
            Fossil Hunt AR: <br className="hidden md:block"/>
            <span className="text-[#FFB300]">Reviving</span> the <span className="text-glow text-[#FF8F00]">Lost Wilderness</span>
          </h3>
          <p className="max-w-3xl mx-auto text-museum-wall/70 text-lg leading-relaxed font-bold text-xl">
            Bridging the Gap between Gaming and Paleontological Education.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Gamepad2,
              title: "Gamified Progression",
              desc: "Quiz-based progression, interactive treasure maps, and state persistence keep users cognitively engaged.",
              color: "text-[#FF8F00]"
            },
            {
              icon: Microscope,
              title: "AR Excavation",
              desc: "Use virtual brushes and shovels to uncover fossils anchored to real-world museum exhibits.",
              color: "text-[#FFB300]"
            },
            {
              icon: GraduationCap,
              title: "Active Learning",
              desc: "Moving beyond passive label-reading to hands-on skeleton reconstruction and contextual learning.",
              color: "text-white"
            }
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.2 }}
              className="bg-[#1a110b]/80 backdrop-blur-md rounded-3xl p-8 hover:-translate-y-2 transition-transform duration-300 border border-[#FFB300]/20 shadow-[0_0_20px_rgba(255,179,0,0.05)]"
            >
              <div className={`w-16 h-16 rounded-2xl bg-black/40 flex items-center justify-center mb-6 border border-[#FF8F00]/30 ${feature.color}`}>
                <feature.icon size={32} />
              </div>
              <h4 className="text-2xl font-bold text-[#FFB300] mb-4">{feature.title}</h4>
              <p className="text-museum-wall/70 leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
        
        {/* Team Section */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-display font-bold text-white uppercase tracking-widest">The Core Team</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#FF8F00] to-transparent mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {/* Supervisor Card */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group relative rounded-3xl overflow-hidden border border-[#8D6E63]/30 hover:border-[#FFB300] bg-[#1a110b] shadow-2xl transition-all hover:-translate-y-4 max-w-[320px] mx-auto w-full"
            >
              <div className="aspect-[4/5] w-full overflow-hidden relative">
                 <img src={supervisorImage} alt="Mr. Aruna Ishara Gamage" className="w-full h-full object-cover object-top filter grayscale-[40%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#1a110b] via-[#1a110b]/40 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 w-full p-8 text-center translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h4 className="text-[#FFB300] uppercase tracking-widest text-xs font-bold mb-2">Supervisor</h4>
                <h3 className="text-2xl font-display font-bold text-white mb-2 drop-shadow-lg">Mr. Aruna Ishara Gamage</h3>
                <div className="h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </motion.div>

            {/* Co-Supervisor Card */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group relative rounded-3xl overflow-hidden border border-[#8D6E63]/30 hover:border-[#FFB300] bg-[#1a110b] shadow-2xl transition-all hover:-translate-y-4 max-w-[320px] mx-auto w-full"
            >
              <div className="aspect-[4/5] w-full overflow-hidden relative">
                 <img src={coSupervisorImage} alt="Mr. Nushkan Nizmi" className="w-full h-full object-cover object-top filter grayscale-[40%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#1a110b] via-[#1a110b]/40 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 w-full p-8 text-center translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h4 className="text-[#FFB300] uppercase tracking-widest text-xs font-bold mb-2">Co-Supervisor</h4>
                <h3 className="text-2xl font-display font-bold text-white mb-2 drop-shadow-lg">Mr. Nushkan Nizmi</h3>
                <div className="h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </motion.div>

            {/* Lead Researcher Card */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="group relative rounded-3xl overflow-hidden border border-[#FFB300]/30 hover:border-[#FFB300] bg-[#1a110b] shadow-[0_0_30px_rgba(255,179,0,0.1)] transition-all hover:-translate-y-4 max-w-[320px] mx-auto w-full"
            >
              <div className="aspect-[4/5] w-full overflow-hidden relative">
                 <img src={meImage} alt="Sesath Wickramasinghe" className="w-full h-full object-cover object-top filter grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#1a110b] via-[#1a110b]/40 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 w-full p-8 text-center translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h4 className="text-[#FFB300] uppercase tracking-widest text-xs font-bold mb-2">Lead Researcher & Developer</h4>
                <h3 className="text-3xl font-display font-bold text-white mb-2 drop-shadow-lg">Sesath Wickramasinghe</h3>
                <p className="text-[#FF8F00]/90 font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Interactive Media Specialist</p>
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Download, Smartphone, X, Mail, Phone } from 'lucide-react';

import docThesis from '../img/Docs/Final Thiesis IT22249920.pdf';
import docProposal from '../img/Docs/IT22249920_Proposal Final.pdf';
import docPresentation from '../img/Docs/Proposal Presentation.pdf';

export function Resources() {
  const [showContactModal, setShowContactModal] = useState(false);

  const docs = [
    { title: "Final Thesis", type: "PDF Document", file: docThesis, icon: FileText, delay: 0.1, color: "text-[#FF8F00]" },
    { title: "Final Proposal", type: "PDF Document", file: docProposal, icon: FileText, delay: 0.2, color: "text-[#00E5FF]" },
    { title: "Proposal Presentation", type: "PDF Presentation", file: docPresentation, icon: FileText, delay: 0.3, color: "text-[#FFB300]" },
  ];

  return (
    <section id="download" className="relative py-32 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-[#FF8F00] font-bold tracking-widest uppercase mb-4 text-sm">Downloads & Links</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Resource Repository
          </h3>
          <p className="max-w-2xl mx-auto text-museum-wall/80 text-lg">
            Access the official documentation and request the playable Android prototype.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {docs.map((item, i) => (
            <motion.a
              key={i}
              href={item.file}
              download
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: item.delay, duration: 0.5 }}
              className="group bg-[#1a110b]/80 backdrop-blur-md rounded-2xl p-6 hover:bg-[#1a110b] transition-colors cursor-pointer border border-[#8D6E63]/30 hover:border-[#FFB300]/50 flex flex-col items-center text-center shadow-[0_0_15px_rgba(0,0,0,0.5)]"
            >
              <div className={`w-16 h-16 rounded-full bg-[#291b15] border border-[#5D4037] flex items-center justify-center mb-4 ${item.color} group-hover:scale-110 group-hover:bg-[#FFB300] group-hover:text-[#291b15] group-hover:border-[#FFB300] transition-all duration-300 shadow-md`}>
                <item.icon size={28} />
              </div>
              <h4 className="text-lg font-bold text-white mb-2 leading-tight">{item.title}</h4>
              <p className="text-sm text-museum-wall/60 mb-6">{item.type}</p>
              
              <div className="mt-auto w-full py-2.5 rounded-lg border border-[#8D6E63]/50 text-white text-sm font-bold group-hover:border-[#FFB300] group-hover:bg-[#FFB300]/10 group-hover:text-[#FFB300] transition-colors flex items-center justify-center gap-2">
                <Download size={16} />
                Download
              </div>
            </motion.a>
          ))}

          {/* Contact for Demo Card */}
          <motion.div
            onClick={() => setShowContactModal(true)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="group bg-gradient-to-b from-[#291b15] to-[#1a110b] backdrop-blur-md rounded-2xl p-6 hover:from-[#3E2723] hover:to-[#291b15] transition-colors cursor-pointer border border-[#00E5FF]/30 hover:border-[#00E5FF] flex flex-col items-center text-center shadow-[0_0_20px_rgba(0,229,255,0.1)] relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#00E5FF] rounded-full blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity pointer-events-none"></div>
            <div className="w-16 h-16 rounded-full bg-[#1a110b] border border-[#00E5FF]/50 flex items-center justify-center mb-4 text-[#00E5FF] group-hover:scale-110 group-hover:bg-[#00E5FF] group-hover:text-[#1a110b] transition-all duration-300 shadow-md relative z-10">
              <Smartphone size={28} />
            </div>
            <h4 className="text-lg font-bold text-white mb-2 leading-tight relative z-10">Playable Demo</h4>
            <p className="text-sm text-museum-wall/60 mb-6 relative z-10">Android APK Preview</p>
            
            <div className="mt-auto w-full py-2.5 rounded-lg border border-[#00E5FF]/50 text-[#00E5FF] text-sm font-bold group-hover:bg-[#00E5FF] group-hover:text-[#1a110b] transition-colors flex items-center justify-center gap-2 relative z-10">
              <Mail size={16} />
              Request Demo
            </div>
          </motion.div>
        </div>
      </div>

      {/* Contact Modal */}
      <AnimatePresence>
        {showContactModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-[#291b15] border border-[#00E5FF]/30 rounded-3xl p-8 max-w-md w-full shadow-[0_0_50px_rgba(0,229,255,0.15)] relative overflow-hidden"
            >
              <button 
                onClick={() => setShowContactModal(false)}
                className="absolute top-4 right-4 text-museum-wall/60 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>

              <div className="text-center mb-8 relative z-10">
                <div className="w-16 h-16 bg-[#00E5FF]/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-[#00E5FF]/30 text-[#00E5FF]">
                  <Smartphone size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Request a Demo</h3>
                <p className="text-museum-wall/80">
                  Fossil Hunt AR is currently an ongoing project. To get access to the latest Android APK and physical image targets, please contact the Lead Developer directly.
                </p>
              </div>

              <div className="space-y-4 relative z-10">
                <a 
                  href="mailto:sinsanduwickramasinghe@gmail.com"
                  className="w-full bg-[#1a110b] text-[#00E5FF] border border-[#00E5FF]/30 py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-[#00E5FF]/10 transition-colors"
                >
                  <Mail size={20} />
                  sinsanduwickramasinghe@gmail.com
                </a>

                <a 
                  href="tel:+94704244261"
                  className="w-full bg-[#1a110b] text-[#FFB300] border border-[#FFB300]/30 py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-[#FFB300]/10 transition-colors"
                >
                  <Phone size={20} />
                  +94 70 424 4261
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

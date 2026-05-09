import { motion } from 'framer-motion';
import { BarChart3, Clock, CheckCircle } from 'lucide-react';

export function Research() {
  const metrics = [
    { icon: Clock, label: "Increased Dwell Time", value: "3x", color: "text-[#FF8F00]" },
    { icon: CheckCircle, label: "Quiz Completion", value: "85%", color: "text-[#00E5FF]" },
    { icon: BarChart3, label: "Knowledge Retention", value: "High", color: "text-[#FFB300]" }
  ];

  return (
    <section id="research" className="relative py-32 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-[#00E5FF] font-bold tracking-widest uppercase mb-4 text-sm">Academic Grounding</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Research & Validation
          </h3>
          <p className="max-w-2xl mx-auto text-museum-wall/80 text-lg">
            Empirical validation proving the effectiveness of gamified augmented reality in educational settings.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-5xl mx-auto">
          {metrics.map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="bg-[#1a110b]/80 p-8 rounded-3xl border border-[#5D4037]/50 text-center shadow-[0_0_20px_rgba(255,179,0,0.05)] backdrop-blur-md hover:-translate-y-2 transition-transform duration-300"
            >
              <metric.icon size={40} className={`mx-auto mb-4 ${metric.color}`} />
              <h4 className={`text-4xl font-display font-bold mb-2 ${metric.color}`}>{metric.value}</h4>
              <p className="text-museum-wall/80 font-medium tracking-wide">{metric.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-[#1a110b]/90 to-[#291b15]/80 rounded-3xl p-8 md:p-12 border border-[#8D6E63]/30 shadow-2xl max-w-5xl mx-auto backdrop-blur-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Validation Details */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h4 className="text-2xl font-bold text-[#FFB300] mb-4 border-b border-[#8D6E63]/30 pb-4 flex items-center gap-2">
                <span>🔬</span> Field Validation
              </h4>
              <p className="text-museum-wall/90 text-lg leading-relaxed mb-4">
                The core mechanics were evaluated with <strong>30 active user sessions and A/B testing conducted on March 10th at the museum.</strong>
              </p>
              <p className="text-museum-wall/80 leading-relaxed mb-4">
                This testing directly compared:
              </p>
              <ul className="space-y-3 text-museum-wall/80">
                <li className="flex items-start gap-3">
                  <span className="text-red-400 font-bold">Group A:</span>
                  Traditional Labels-only (Passive Observation)
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#00E5FF] font-bold">Group B:</span>
                  AR-Quiz Experience (Active Gamified Learning)
                </li>
              </ul>
            </motion.div>

            {/* Key Findings */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h4 className="text-2xl font-bold text-[#00E5FF] mb-4 border-b border-[#8D6E63]/30 pb-4 flex items-center gap-2">
                <span>📈</span> Key Findings
              </h4>
              <p className="text-museum-wall/90 text-lg leading-relaxed mb-4">
                Success was strictly measured by empirical data, focusing on two primary telemetry metrics:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-museum-wall/80">
                  <span className="text-[#FFB300] mt-1">✓</span>
                  <strong>Dwell Time at Exhibits:</strong> Users spent significantly more time interacting with the subject matter compared to text labels.
                </li>
                <li className="flex items-start gap-3 text-museum-wall/80">
                  <span className="text-[#FFB300] mt-1">✓</span>
                  <strong>Completion Rates:</strong> High engagement led to a vast majority of users successfully completing the knowledge-locked quizzes and assembling the fossils.
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

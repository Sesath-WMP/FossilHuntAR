import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Play, Pause, Music } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
// @ts-ignore
import musicFile from '../img/Fossil Hunt.mp3';

export const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [isExpanded, setIsExpanded] = useState(false);
  
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const [audioData, setAudioData] = useState<Uint8Array>(new Uint8Array(0));
  const requestRef = useRef<number>();

  useEffect(() => {
    const handleFirstInteraction = () => {
      // Synchronously set up or resume audio context during the user gesture
      if (!audioContextRef.current) {
        setupAudioContext();
      } else if (audioContextRef.current.state === 'suspended') {
        audioContextRef.current.resume();
      }

      if (audioRef.current && audioRef.current.paused) {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise.then(() => {
            removeListeners();
          }).catch(() => {
            // Autoplay still blocked, wait for another interaction
          });
        }
      } else {
        removeListeners();
      }
    };

    const removeListeners = () => {
      document.removeEventListener('click', handleFirstInteraction, true);
      document.removeEventListener('pointerdown', handleFirstInteraction, true);
      document.removeEventListener('touchstart', handleFirstInteraction, true);
      document.removeEventListener('keydown', handleFirstInteraction, true);
      document.removeEventListener('scroll', handleFirstInteraction, true);
      document.removeEventListener('wheel', handleFirstInteraction, true);
      document.removeEventListener('touchmove', handleFirstInteraction, true);
    };

    // Use capture phase (true) to catch events before any React components can call stopPropagation
    document.addEventListener('click', handleFirstInteraction, true);
    document.addEventListener('pointerdown', handleFirstInteraction, true);
    document.addEventListener('touchstart', handleFirstInteraction, true);
    document.addEventListener('keydown', handleFirstInteraction, true);
    document.addEventListener('scroll', handleFirstInteraction, true);
    document.addEventListener('wheel', handleFirstInteraction, true);
    document.addEventListener('touchmove', handleFirstInteraction, true);

    // Initial explicit play attempt
    if (audioRef.current) {
      audioRef.current.volume = volume;
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.then(() => {
          removeListeners();
        }).catch(() => {
          console.log("Autoplay prevented by browser policy. Waiting for user interaction.");
        });
      }
    }

    return () => {
      removeListeners();
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
      if (audioContextRef.current && audioContextRef.current.state !== 'closed') {
        audioContextRef.current.close();
      }
    };
  }, []);

  const setupAudioContext = () => {
    if (!audioRef.current || audioContextRef.current) return;
    
    try {
      const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
      const audioContext = new AudioContext();
      audioContextRef.current = audioContext;

      const analyser = audioContext.createAnalyser();
      analyser.fftSize = 64; 
      analyserRef.current = analyser;

      const source = audioContext.createMediaElementSource(audioRef.current);
      source.connect(analyser);
      analyser.connect(audioContext.destination);

      updateVisualizer();
    } catch (e) {
      console.error("Audio routing error:", e);
    }
  };

  const updateVisualizer = () => {
    if (!analyserRef.current) return;
    
    const bufferLength = analyserRef.current.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    analyserRef.current.getByteFrequencyData(dataArray);
    
    setAudioData(new Uint8Array(dataArray));
    
    requestRef.current = requestAnimationFrame(updateVisualizer);
  };

  const togglePlay = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      if (!audioContextRef.current) {
        setupAudioContext();
      }
      audioRef.current.play().catch(e => console.error("Play failed:", e));
    }
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVol = parseFloat(e.target.value);
    setVolume(newVol);
    if (audioRef.current) {
      audioRef.current.volume = newVol;
    }
    if (newVol > 0 && isMuted) {
      if (audioRef.current) audioRef.current.muted = false;
      setIsMuted(false);
    } else if (newVol === 0 && !isMuted) {
      if (audioRef.current) audioRef.current.muted = true;
      setIsMuted(true);
    }
  };

  const bars = [1, 2, 3, 4].map((_, i) => {
    if (!isPlaying || audioData.length === 0) return 4;
    const val = audioData[i * 3] || 0; 
    return Math.max(4, (val / 255) * 16);
  });

  return (
    <>
      <audio 
        ref={audioRef}
        src={musicFile}
        autoPlay
        loop
        onPlay={() => {
          setIsPlaying(true);
          if (!audioContextRef.current) setupAudioContext();
        }}
        onPause={() => setIsPlaying(false)}
      />
      <div className="fixed bottom-6 left-6 z-50 flex items-center h-12" onMouseEnter={() => setIsExpanded(true)} onMouseLeave={() => setIsExpanded(false)}>
        <motion.div 
          layout
          className="bg-black/60 backdrop-blur-xl border border-white/10 rounded-full h-full flex items-center overflow-hidden shadow-2xl"
          initial={{ width: 48 }}
          animate={{ width: isExpanded ? 220 : 48 }}
          transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
        >
          <button 
            onClick={togglePlay}
            className="w-12 h-12 flex items-center justify-center shrink-0 group relative"
          >
            {isPlaying ? (
              <div className="flex items-end justify-center gap-[2px] h-4 w-4">
                {bars.map((height, i) => (
                  <motion.div
                    key={i}
                    className="w-1 bg-excavation-orange rounded-full group-hover:bg-white transition-colors"
                    animate={{ height: `${height}px` }}
                    transition={{ type: 'tween', duration: 0.05 }}
                  />
                ))}
              </div>
            ) : (
              <Music className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
            )}
          </button>

          <AnimatePresence>
            {isExpanded && (
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2, delay: 0.1 }}
                className="flex items-center px-2 gap-4 whitespace-nowrap"
              >
                <button 
                  onClick={togglePlay}
                  className="text-white hover:text-excavation-orange transition-colors"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
                </button>
                
                <div className="flex items-center gap-2">
                  <button 
                    onClick={toggleMute}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {isMuted || volume === 0 ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>
                  <input 
                    type="range" 
                    min="0" 
                    max="1" 
                    step="0.01" 
                    value={isMuted ? 0 : volume}
                    onChange={handleVolumeChange}
                    className="w-20 h-1 bg-white/20 rounded-full appearance-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:bg-excavation-orange [&::-webkit-slider-thumb]:rounded-full cursor-pointer hover:[&::-webkit-slider-thumb]:scale-125 [&::-webkit-slider-thumb]:transition-transform"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </>
  );
};

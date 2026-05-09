import { SmoothScroll } from './components/SmoothScroll';
import { Hero } from './sections/Hero';
import { Identity } from './sections/Identity';
import { Problem } from './sections/Problem';
import { Solution } from './sections/Solution';
import { Media } from './sections/Media';
import { Prototype } from './sections/Prototype';
import { Research } from './sections/Research';
import { Commercialization } from './sections/Commercialization';
import { Resources } from './sections/Resources';
import { Footer } from './sections/Footer';
import { CursorTrail } from './components/CursorTrail';
import { ParallaxBackground } from './components/ParallaxBackground';
import { MusicPlayer } from './components/MusicPlayer';

function App() {
  return (
    <>
      <CursorTrail />
      <ParallaxBackground />
      <MusicPlayer />
      <SmoothScroll>
        {/* Changed bg-fossil-dark to transparent because ParallaxBackground handles the background */}
        <main className="bg-transparent min-h-screen text-museum-wall selection:bg-excavation-orange selection:text-white overflow-x-hidden">
          <Hero />
          <Identity />
          <Problem />
          <Solution />
          <Media />
          <Prototype />
          <Research />
          <Commercialization />
          <Resources />
          <Footer />
        </main>
      </SmoothScroll>
    </>
  );
}

export default App;

import { Navigation } from "@/components/Navigation";
import { FadeIn } from "@/components/FadeIn";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight, Music, Mic2, Star } from "lucide-react";
import heroImg from "@assets/screenshot-1769429511627.png";
import soundwaveLogo from "/assets/soundwave-logo.png";
import soundwaveLogoMobile from "/assets/soundwave-logo-mobile.png";
import { useEffect } from "react";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scrollRotation = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const baseRotation = useMotionValue(0);
  const combinedRotation = useSpring(0, { stiffness: 30, damping: 25 });

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    let lastTime = performance.now();
    const frame = (time: number) => {
      const delta = (time - lastTime) / 1000;
      lastTime = time;
      
      // Very slow base rotation (2 degrees per second)
      baseRotation.set(baseRotation.get() + delta * 2); 
      
      // Subtle oscillation (-5 to +5 degrees) over 4 seconds
      const oscillation = Math.sin(time / 4000) * 5;
      
      // Combine base spin, oscillation, and scroll (disable scroll rotation on mobile)
      const scrollValue = isMobile ? 0 : scrollRotation.get();
      combinedRotation.set(baseRotation.get() + oscillation + scrollValue);
      
      requestAnimationFrame(frame);
    };
    const animId = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(animId);
  }, [baseRotation, scrollRotation, combinedRotation]);

  const handleApply = () => {
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSfxRvor4d6Z53P-3PQBWBzs5YHwicH9F0qzKenRSUBCAGgsVQ/viewform", "_blank");
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-black selection:text-white">
      <Navigation />
      {/* Radiant Spinning CD Element */}
      <div className="fixed -right-[150px] md:-right-[300px] top-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] pointer-events-none z-0 overflow-visible">
        <motion.div
          style={{ rotate: combinedRotation }}
          className="w-full h-full rounded-full opacity-80 md:opacity-80 bg-[conic-gradient(from_0deg,#ff00ff,#ff0000,#0000ff,#ff00ff)] shadow-[0_0_40px_rgba(255,0,255,0.4),inset_0_0_50px_rgba(255,255,255,0.3)] md:shadow-[0_0_80px_rgba(255,0,255,0.4),inset_0_0_100px_rgba(255,255,255,0.3)] relative group"
        >
          {/* Sketchy Structure Layers */}
          <div className="absolute inset-0 rounded-full border-[1px] md:border-[2px] border-black/40 mix-blend-multiply" />
          <div className="absolute inset-[10%] rounded-full border-[0.5px] md:border-[1px] border-black/20 mix-blend-multiply" />
          <div className="absolute inset-[20%] rounded-full border-[2px] md:border-[4px] border-black/30 mix-blend-multiply border-dashed" />
          <div className="absolute inset-[40%] rounded-full border-[0.5px] md:border-[1px] border-black/50 mix-blend-multiply" />
          
          {/* Glassy/CD Reflections */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/40 via-transparent to-white/10 mix-blend-screen" />
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_50%,transparent_30%,rgba(255,255,255,0.1)_70%)]" />
          
          {/* Center Hole for Structure */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40px] md:w-[80px] h-[40px] md:h-[80px] rounded-full bg-background border-[2px] md:border-[4px] border-black/20 shadow-inner" />
        </motion.div>
      </div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center items-center pt-32 pb-16 px-6 overflow-hidden">
        <div className="container max-w-5xl mx-auto text-center z-10 p-6 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl md:bg-transparent md:backdrop-blur-none md:border-none md:shadow-none md:p-0">
          <FadeIn delay={0.2}>
            <div className="w-full max-w-[400px] md:max-w-[600px] opacity-90 invert mx-auto mb-6">
              <img 
                src={soundwaveLogo} 
                alt="Soundwave Music Group" 
                className="hidden md:block w-full h-auto object-contain"
              />
              <img 
                src={soundwaveLogoMobile} 
                alt="Soundwave Music Group" 
                className="block md:hidden w-full h-auto object-contain"
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="text-xl md:text-2xl font-medium max-w-2xl mx-auto mb-10 leading-relaxed text-balance text-[#000000]">
              The official portal for artists, producers, and rappers to audition for Soundwave Music Group.
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="flex flex-col gap-8 justify-center items-center">
              <button
                onClick={handleApply}
                className="group relative px-8 py-4 rounded-full bg-foreground text-background font-semibold text-lg hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-black/20"
              >
                Apply Now
                <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </FadeIn>
        </div>

        {/* Abstract Background Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] opacity-[0.03] pointer-events-none z-0">
          <div className="absolute inset-0 bg-gradient-to-tr from-black via-transparent to-transparent rounded-full blur-3xl" />
        </div>
      </section>
      {/* Hero Image / Visual Break */}
      <section className="w-full px-6 md:px-12 lg:px-24 pb-24 -mt-20 hidden">
        <FadeIn delay={0.5} direction="up" className="w-full max-w-7xl mx-auto">
          <div className="relative aspect-video rounded-[2rem] overflow-hidden shadow-2xl border border-black/5">
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
            <img 
              src={heroImg} 
              alt="Mate Nation Studio Vibe" 
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-[1.5s] ease-out"
            />
          </div>
        </FadeIn>
      </section>
      {/* About Section */}
      <section className="relative py-32 px-6 bg-secondary/30 md:bg-secondary/30 z-10">
        <div className="container max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-16 text-center">
              Your Gateway to the Industry.
            </h2>
          </FadeIn>

          <div className="max-w-3xl mx-auto text-center">
            <FadeIn delay={0.2} className="space-y-6 p-6 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl md:bg-transparent md:backdrop-blur-none md:border-none md:shadow-none md:p-0">
              <p className="text-xl md:text-2xl leading-relaxed text-[#000000]">This is your chance to showcase your talent to the world's leading independent Music Group. Represent yourself to some of the top-class industry professionals. Get trained by top-class industry professionals and join an elite community of artists, producers, and rappers. Turn your passion into a career.</p>
            </FadeIn>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-32 px-6 bg-foreground text-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-soft-light"></div>
        <div className="container max-w-4xl mx-auto text-center relative z-10">
          <FadeIn className="p-8 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl md:bg-transparent md:backdrop-blur-none md:border-none md:shadow-none md:p-0">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8">
              Ready to be heard?
            </h2>
            <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">
              Showcase your talent to top industry professionals. Represent yourself on the world stage.
            </p>
            <button
              onClick={handleApply}
              className="px-10 py-5 rounded-full bg-white text-black font-bold text-xl hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg shadow-white/10"
            >
              Start Audition
            </button>
          </FadeIn>
        </div>
      </section>
      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border bg-background">
        <div className="container max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Mate Nation. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm font-medium text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-foreground transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

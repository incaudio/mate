import { motion } from "framer-motion";
import { Play } from "lucide-react";

export function OurWorks() {

  return (
    <section id="our-works" className="py-20 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <motion.div
              animate={{ scale: [1, 1.2, 1, 1, 1], rotate: [0, 360, 360, 360, 360] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", times: [0, 0.4, 0.5, 0.8, 1] }}
            >
              <Play className="w-8 h-8 text-pink-400" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-light text-white">Our Works</h2>
          </div>
          <motion.p 
            className="text-gray-300 text-lg max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Check out our latest music releases
          </motion.p>
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <iframe
            data-testid="embed-iframe"
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/playlist/6joDSN7KI3hwKk9gwJ8jNP?utm_source=generator&theme=0"
            width="100%"
            height="352"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="max-w-4xl mx-auto"
          />
        </motion.div>
      </div>
    </section>
  );
}

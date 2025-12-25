import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Instagram, Youtube } from "lucide-react";
import { SiBluesky, SiFacebook, SiX } from "react-icons/si";

export function ModernMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "Home", href: "#" },
    { label: "For Artists", href: "#for-artists" },
    { label: "Team", href: "#team" },
    { label: "Our Works", href: "#our-works" },
    { label: "Contact", href: "#contact" }
  ];

  const socialLinks = [
    { icon: Instagram, label: "Instagram", href: "https://instagram.com/matenations" },
    { icon: SiX, label: "X", href: "https://x.com/matenations" },
    { icon: Youtube, label: "YouTube", href: "https://www.youtube.com/@mateexclusives" },
    { icon: SiFacebook, label: "Facebook", href: "https://www.facebook.com/profile.php?id=61580036896615" },
    { icon: SiBluesky, label: "Bluesky", href: "https://bsky.app/profile/matenations.bsky.social" }
  ];

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 left-6 z-50 px-6 py-3 rounded-full transition-all flex items-center gap-2"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          color: 'white',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.2)'
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        <span>Menu</span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-md z-40"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ x: -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ type: "spring", damping: 20 }}
              className="absolute left-0 top-0 h-full w-80 p-8"
              style={{
                backgroundColor: 'rgba(26, 29, 61, 0.95)',
                backdropFilter: 'blur(32px)',
                WebkitBackdropFilter: 'blur(32px)',
                borderRight: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mt-20 flex flex-col h-[calc(100%-5rem)]">
                <nav className="space-y-4 flex-1">
                  {menuItems.map((item, index) => (
                    <motion.a
                      key={index}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="block text-2xl py-2 transition-colors"
                      style={{ color: 'white' }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = '#F472B6'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = 'white'; }}
                    >
                      • {item.label}
                    </motion.a>
                  ))}
                </nav>

                {/* Submit Demo Button */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="mt-6"
                >
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfxRvor4d6Z53P-3PQBWBzs5YHwicH9F0qzKenRSUBCAGgsVQ/viewform?usp=header"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="block w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white text-center py-4 rounded-full font-semibold shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50 transition-all transform hover:scale-105"
                  >
                    Apply for Audition
                  </a>
                </motion.div>

                {/* Social Links */}
                <motion.div 
                  className="border-t border-white/10 pt-6 mt-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  <p className="text-sm mb-4" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Follow us</p>
                  <div className="flex gap-3">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.8 + index * 0.1 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-3 rounded-full transition-all group"
                        style={{
                          backgroundColor: 'rgba(255, 255, 255, 0.1)',
                          backdropFilter: 'blur(24px)',
                          WebkitBackdropFilter: 'blur(24px)',
                          border: '1px solid rgba(255, 255, 255, 0.2)'
                        }}
                        aria-label={social.label}
                      >
                        <social.icon className="w-5 h-5 transition-colors" style={{ color: 'white' }} />
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

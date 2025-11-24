import { useTheme } from '@/contexts/theme-context';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 p-3 rounded-full transition-all duration-300 group"
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.2)'
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      <div className="relative w-6 h-6">
        <motion.div
          initial={{ opacity: 0, rotate: -90 }}
          animate={{ 
            opacity: theme === 'day' ? 1 : 0,
            rotate: theme === 'day' ? 0 : -90 
          }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0"
        >
          <Sun className="w-6 h-6" style={{ color: '#F59E0B' }} />
        </motion.div>
        <motion.div
          initial={{ opacity: 1, rotate: 0 }}
          animate={{ 
            opacity: theme === 'night' ? 1 : 0,
            rotate: theme === 'night' ? 0 : 90 
          }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0"
        >
          <Moon className="w-6 h-6" style={{ color: '#60A5FA' }} />
        </motion.div>
      </div>
    </motion.button>
  );
}

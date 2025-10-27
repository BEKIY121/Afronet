import { motion } from 'framer-motion'
import { Sparkles, Star, Heart, Zap } from 'lucide-react'

const FloatingElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Floating Sparkles */}
      <motion.div
        animate={{ 
          x: [0, 100, 0],
          y: [0, -50, 0],
          rotate: [0, 180, 360]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute top-20 left-10"
      >
        <Sparkles className="w-4 h-4 text-primary-400 opacity-60" />
      </motion.div>

      <motion.div
        animate={{ 
          x: [0, -80, 0],
          y: [0, 60, 0],
          rotate: [0, -180, -360]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute top-40 right-20"
      >
        <Star className="w-3 h-3 text-accent-400 opacity-50" />
      </motion.div>

      <motion.div
        animate={{ 
          x: [0, 60, 0],
          y: [0, -40, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 4
        }}
        className="absolute top-60 left-1/4"
      >
        <Heart className="w-2 h-2 text-pink-400 opacity-40" />
      </motion.div>

      <motion.div
        animate={{ 
          x: [0, -100, 0],
          y: [0, 80, 0],
          rotate: [0, 90, 180]
        }}
        transition={{ 
          duration: 12, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute top-80 right-1/3"
      >
        <Zap className="w-3 h-3 text-yellow-400 opacity-50" />
      </motion.div>

      <motion.div
        animate={{ 
          x: [0, 70, 0],
          y: [0, -60, 0],
          scale: [1, 0.8, 1]
        }}
        transition={{ 
          duration: 9, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 3
        }}
        className="absolute top-32 left-1/2"
      >
        <Sparkles className="w-2 h-2 text-blue-400 opacity-30" />
      </motion.div>

      <motion.div
        animate={{ 
          x: [0, -60, 0],
          y: [0, 40, 0],
          rotate: [0, -90, -180]
        }}
        transition={{ 
          duration: 7, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 5
        }}
        className="absolute top-96 left-20"
      >
        <Star className="w-2 h-2 text-purple-400 opacity-40" />
      </motion.div>
    </div>
  )
}

export default FloatingElements

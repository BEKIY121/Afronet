import { motion } from 'framer-motion'
import { Rocket, TrendingUp, FileText, Award, Sparkles, Zap } from 'lucide-react'

const LoadingScreen = () => {
  const icons = [Rocket, TrendingUp, FileText, Award]
  
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center justify-center z-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern"></div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ y: [-20, 20, -20], rotate: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-32 left-20 w-4 h-4 bg-accent-500 rounded-full shadow-glow"
        />
        <motion.div
          animate={{ y: [20, -20, 20], rotate: [0, -5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-48 right-32 w-3 h-3 bg-primary-500 rounded-full shadow-glow"
        />
        <motion.div
          animate={{ y: [-15, 15, -15], rotate: [0, 3, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-32 left-1/4 w-2 h-2 bg-accent-400 rounded-full shadow-glow"
        />
      </div>

      <div className="text-center relative z-10">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="relative mb-6">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-24 h-24 bg-gradient-to-r from-primary-600 to-accent-500 rounded-3xl flex items-center justify-center mx-auto shadow-glow-lg"
            >
              <span className="text-white font-bold text-3xl">A</span>
            </motion.div>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -top-2 -right-2 w-6 h-6 bg-accent-500 rounded-full flex items-center justify-center"
            >
              <Sparkles className="w-3 h-3 text-white" />
            </motion.div>
          </div>
          
          <h1 className="text-5xl font-bold gradient-text mb-4">Afronet</h1>
          <p className="text-primary-600 text-xl font-semibold">Business & Investment Consulting Firm</p>
        </motion.div>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex justify-center gap-4 mb-8"
        >
          {icons.map((Icon, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="glass-card p-4 hover-lift"
            >
              <Icon className="w-6 h-6 text-primary-600" />
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="w-80 h-2 bg-gradient-to-r from-primary-600 to-accent-500 rounded-full mx-auto shadow-glow"
        />
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-gray-600 mt-6 text-lg"
        >
          Loading your business success story...
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-4 text-sm text-gray-500"
        >
          Preparing strategic solutions for your success
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-6 flex justify-center"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-8 h-8 border-2 border-primary-600 border-t-transparent rounded-full"
          />
        </motion.div>
      </div>
    </div>
  )
}

export default LoadingScreen

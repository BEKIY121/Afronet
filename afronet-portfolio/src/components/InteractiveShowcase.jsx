import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { 
  ArrowRight, 
  ArrowLeft, 
  Play, 
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  Eye,
  Heart,
  Share2,
  Download
} from 'lucide-react'

const InteractiveShowcase = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)

  const showcaseItems = [
    {
      title: "Business Strategy Development",
      description: "Comprehensive strategic planning for business growth and market expansion",
      image: "/showcase/strategy.jpg",
      category: "Strategy",
      duration: "2-4 weeks",
      rating: 5,
      likes: 128
    },
    {
      title: "Investment Facilitation",
      description: "End-to-end support for foreign direct investment and local investment promotion",
      image: "/showcase/investment.jpg",
      category: "Investment",
      duration: "4-8 weeks",
      rating: 5,
      likes: 156
    },
    {
      title: "Digital Transformation",
      description: "Modernizing business operations with cutting-edge technology solutions",
      image: "/showcase/digital.jpg",
      category: "Technology",
      duration: "6-12 weeks",
      rating: 5,
      likes: 203
    }
  ]

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % showcaseItems.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + showcaseItems.length) % showcaseItems.length)
  }

  return (
    <section className="section bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-pattern opacity-10"></div>
      <div className="container relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="heading-2 mb-6 text-white">
            Our <span className="gradient-text">Premium</span> Showcase
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our most successful projects and transformative business solutions
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          {/* Main Showcase */}
          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative h-96 bg-gradient-to-br from-primary-600 to-accent-600"
            >
              {/* Placeholder for actual images */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-600/80 to-accent-600/80 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Eye className="w-16 h-16 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">{showcaseItems[currentIndex].title}</h3>
                  <p className="text-xl opacity-90 max-w-2xl mx-auto">{showcaseItems[currentIndex].description}</p>
                </div>
              </div>

              {/* Overlay Controls */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                    >
                      {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
                    </motion.button>
                    
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setIsMuted(!isMuted)}
                      className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                    >
                      {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                    </motion.button>
                  </div>

                  <div className="flex items-center gap-3">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                    >
                      <Heart className="w-5 h-5" />
                    </motion.button>
                    
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                    >
                      <Share2 className="w-5 h-5" />
                    </motion.button>
                    
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                    >
                      <Maximize className="w-5 h-5" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={prevSlide}
              className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <ArrowLeft className="w-6 h-6" />
            </motion.button>

            <div className="flex gap-3">
              {showcaseItems.map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentIndex === index 
                      ? 'bg-white scale-125' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={nextSlide}
              className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <ArrowRight className="w-6 h-6" />
            </motion.button>
          </div>

          {/* Project Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              { label: "Category", value: showcaseItems[currentIndex].category },
              { label: "Duration", value: showcaseItems[currentIndex].duration },
              { label: "Rating", value: `${showcaseItems[currentIndex].rating}/5` }
            ].map((info, index) => (
              <div key={info.label} className="glass-card p-4 text-center">
                <div className="text-sm text-gray-400 mb-1">{info.label}</div>
                <div className="text-lg font-semibold text-white">{info.value}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default InteractiveShowcase

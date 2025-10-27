import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useEffect } from 'react'
import { 
  ArrowRight, 
  Play, 
  CheckCircle, 
  Sparkles, 
  TrendingUp, 
  Users, 
  Award,
  Building2,
  Globe,
  Target,
  Lightbulb,
  Shield,
  Zap,
  Star,
  Heart,
  Eye,
  ArrowUpRight,
  Download,
  Calendar,
  Phone,
  Mail
} from 'lucide-react'
import { companyData } from '../data/companyData'

const Hero = () => {
  const [currentWord, setCurrentWord] = useState(0)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const { scrollYProgress } = useScroll()
  
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const words = ['Strategic Excellence', 'Innovation', 'Growth', 'Success']

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [words.length])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Ultra-Premium Background with Multiple Layers */}
      <div className="absolute inset-0">
        {/* Primary Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50 to-indigo-100"></div>
        
        {/* Animated Gradient Orbs */}
        <motion.div
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-primary-300/30 to-accent-300/30 rounded-full blur-3xl"
        />
        
        <motion.div
          animate={{ 
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.8, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 5 }}
          className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-accent-300/30 to-primary-300/30 rounded-full blur-3xl"
        />
        
        <motion.div
          animate={{ 
            x: [0, 60, 0],
            y: [0, -40, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut", delay: 10 }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-purple-300/20 to-pink-300/20 rounded-full blur-2xl"
        />

        {/* Geometric Patterns */}
        <div className="absolute inset-0 bg-pattern opacity-5"></div>
        
        {/* Floating Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20"></div>
      </div>

      {/* Ultra-Premium Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ 
              y: [0, -30, 0],
              x: [0, Math.sin(i) * 20, 0],
              rotate: [0, 180, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 8 + i * 2, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: i * 0.5
            }}
            className={`absolute w-2 h-2 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full shadow-glow ${
              i % 3 === 0 ? 'top-32 left-20' :
              i % 3 === 1 ? 'top-48 right-32' :
              i % 3 === 2 ? 'bottom-32 left-1/4' :
              i % 4 === 0 ? 'top-64 left-1/3' :
              i % 4 === 1 ? 'bottom-48 right-1/4' :
              i % 4 === 2 ? 'top-96 left-1/2' :
              'bottom-64 right-1/3'
            }`}
          />
        ))}
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Ultra-Premium Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="space-y-10"
          >
            {/* Premium Badge */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="inline-flex items-center gap-4 px-8 py-4 glass-card rounded-full text-sm border border-white/20 backdrop-blur-xl"
            >
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-primary-600" />
                <span className="text-primary-600 font-semibold">Leading Business & Investment Consulting</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary-600 rounded-full animate-pulse"></div>
                <span className="text-gray-600">ISO 9001:2015 Certified</span>
              </div>
            </motion.div>
            
            {/* Dynamic Heading */}
            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
              >
                Transform Your Business with{' '}
                <motion.span
                  key={currentWord}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="gradient-text bg-gradient-to-r from-primary-600 via-accent-500 to-purple-600 bg-clip-text text-transparent"
                >
                  {words[currentWord]}
                </motion.span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="text-xl text-gray-600 max-w-2xl leading-relaxed"
              >
                {companyData.description} We empower startups and investors to achieve sustainable growth through innovative strategies, data-driven insights, and proven methodologies that deliver measurable results.
              </motion.p>
            </div>

            {/* Premium CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="flex flex-wrap gap-6"
            >
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(37, 99, 235, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                className="group relative overflow-hidden bg-gradient-to-r from-primary-600 to-accent-500 text-white px-10 py-5 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Get Started Today
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-accent-500 to-primary-600"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '0%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
              
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)"
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsVideoPlaying(!isVideoPlaying)}
                className="group relative overflow-hidden glass-card border border-white/20 backdrop-blur-xl px-10 py-5 rounded-2xl font-semibold text-lg hover:bg-white/10 transition-all duration-300"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <Play className="w-5 h-5 text-primary-600" />
                  Watch Success Story
                </span>
              </motion.button>
            </motion.div>

            {/* Premium Key Features */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {[
                { icon: Target, text: "End-to-End Business Solutions" },
                { icon: TrendingUp, text: "Investment & FDI Support" },
                { icon: Shield, text: "Legal Compliance & Registration" },
                { icon: Lightbulb, text: "Market Research & Strategy" }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.3 + index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="flex items-center gap-3 p-4 glass-card rounded-xl hover-lift border border-white/10 backdrop-blur-xl"
                >
                  <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Premium Stats Preview */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="flex items-center gap-8 pt-6"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-1">{companyData.statistics[0].value}</div>
                <div className="text-sm text-gray-600">{companyData.statistics[0].label}</div>
              </div>
              <div className="w-px h-12 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-1">{companyData.statistics[1].value}</div>
                <div className="text-sm text-gray-600">{companyData.statistics[1].label}</div>
              </div>
              <div className="w-px h-12 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-1">{companyData.statistics[2].value}</div>
                <div className="text-sm text-gray-600">{companyData.statistics[2].label}</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Ultra-Premium Right Content - Hero Visual */}
          <motion.div
            initial={{ opacity: 0, x: 100, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative">
              {/* Main Hero Visual Container */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                <div className="glass-card p-12 relative overflow-hidden rounded-3xl border border-white/20 backdrop-blur-xl">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-accent-50/50"></div>
                  <div className="absolute inset-0 bg-pattern opacity-10"></div>
                  
                  {/* Animated Background Elements */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-r from-primary-300/20 to-accent-300/20 rounded-full blur-2xl"
                  />
                  
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-r from-accent-300/20 to-primary-300/20 rounded-full blur-2xl"
                  />

                  <div className="relative z-10">
                    <div className="w-full h-96 bg-gradient-to-br from-primary-100/20 to-accent-100/20 rounded-3xl flex items-center justify-center relative overflow-hidden border border-white/20">
                      {/* Central Logo */}
                      <motion.div
                        animate={{ 
                          scale: [1, 1.1, 1],
                          rotate: [0, 5, 0]
                        }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="w-40 h-40 bg-gradient-to-r from-primary-600 to-accent-500 rounded-3xl flex items-center justify-center shadow-2xl"
                      >
                        <Building2 className="w-20 h-20 text-white" />
                      </motion.div>
                      
                      {/* Floating Icons Around Logo */}
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0"
                      >
                        {[
                          { icon: TrendingUp, position: "top-8 right-8", color: "accent" },
                          { icon: Users, position: "bottom-8 left-8", color: "primary" },
                          { icon: Award, position: "top-1/2 left-4", color: "green" },
                          { icon: Globe, position: "top-1/2 right-4", color: "purple" }
                        ].map((item, index) => (
                          <motion.div
                            key={index}
                            animate={{ 
                              scale: [1, 1.2, 1],
                              rotate: [0, 180, 360]
                            }}
                            transition={{ 
                              duration: 3 + index, 
                              repeat: Infinity, 
                              ease: "easeInOut",
                              delay: index * 0.5
                            }}
                            className={`absolute ${item.position} w-12 h-12 bg-${item.color}-500 rounded-full flex items-center justify-center shadow-lg`}
                          >
                            <item.icon className="w-6 h-6 text-white" />
                          </motion.div>
                        ))}
                      </motion.div>
                      
                      {/* Success Metrics */}
                      <div className="absolute bottom-6 left-6 right-6">
                        <div className="grid grid-cols-3 gap-4">
                          {[
                            { value: "98%", label: "Success Rate" },
                            { value: "5+", label: "Years Experience" },
                            { value: "ISO", label: "Certified" }
                          ].map((metric, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 1.5 + index * 0.2, duration: 0.6 }}
                              className="text-center"
                            >
                              <div className="text-lg font-bold text-primary-600">{metric.value}</div>
                              <div className="text-xs text-gray-600">{metric.label}</div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Action Cards */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8, duration: 0.8 }}
                className="absolute -bottom-6 -left-6"
              >
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass-card p-4 rounded-2xl border border-white/20 backdrop-blur-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900">Free Consultation</div>
                      <div className="text-xs text-gray-600">30 min session</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.0, duration: 0.8 }}
                className="absolute -top-6 -right-6"
              >
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass-card p-4 rounded-2xl border border-white/20 backdrop-blur-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-accent-500 rounded-full flex items-center justify-center">
                      <Star className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900">Award Winning</div>
                      <div className="text-xs text-gray-600">Best 2023</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <div className="text-sm text-gray-500 font-medium">Scroll to explore</div>
          <div className="w-6 h-10 border-2 border-primary-600 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-3 bg-primary-600 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero

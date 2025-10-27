import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState, useEffect } from 'react'
import { 
  ArrowRight, 
  Play, 
  CheckCircle, 
  Star, 
  TrendingUp, 
  Users, 
  Award,
  Globe,
  Building2,
  Target,
  Lightbulb,
  Shield,
  Zap,
  Rocket,
  Briefcase,
  ChartBar,
  Handshake,
  Eye,
  Heart,
  Sparkles
} from 'lucide-react'
import Hero from '../components/Hero'
import Statistics from '../components/Statistics'
import AboutPreview from '../components/AboutPreview'
import ServicesPreview from '../components/ServicesPreview'
import TestimonialsPreview from '../components/TestimonialsPreview'
import CTASection from '../components/CTASection'
import FloatingElements from '../components/FloatingElements'
import InteractiveTimeline from '../components/InteractiveTimeline'
import InteractiveShowcase from '../components/InteractiveShowcase'
import { companyData } from '../data/companyData'

const HomePage = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const { scrollYProgress } = useScroll()
  
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  // Auto-rotate featured services
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const featuredServices = companyData.services.slice(0, 3)

  return (
    <div className="bg-white overflow-hidden">
      {/* Floating Elements for Premium Feel */}
      <FloatingElements />
      
      {/* Enhanced Hero Section */}
      <Hero />

      {/* Interactive Statistics with Parallax */}
      <motion.section 
        style={{ y }}
        className="relative py-20 bg-gradient-to-br from-primary-50 via-white to-accent-50"
      >
        <div className="absolute inset-0 bg-pattern opacity-5"></div>
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading-2 mb-6">
              Our <span className="gradient-text">Impact</span> in Numbers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transforming businesses and driving sustainable growth across Ethiopia and beyond
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {companyData.statistics.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-20 h-20 bg-gradient-to-r from-primary-600 to-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300"
                >
                  <span className="text-2xl">{stat.icon}</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className="text-4xl font-bold text-primary-600 mb-2"
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Premium Featured Services Carousel */}
      <section className="section bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-100/20 to-accent-100/20"></div>
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary-100 rounded-full text-sm mb-6">
              <Sparkles className="w-5 h-5 text-primary-600" />
              <span className="text-primary-600 font-semibold">Premium Services</span>
            </div>
            <h2 className="heading-2 mb-6">
              Our <span className="gradient-text">Flagship</span> Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions designed to accelerate your business growth and success
            </p>
          </motion.div>

          <div className="relative">
            <div className="flex overflow-hidden">
              {featuredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ 
                    opacity: currentSlide === index ? 1 : 0.3,
                    x: currentSlide === index ? 0 : 100,
                    scale: currentSlide === index ? 1 : 0.9
                  }}
                  transition={{ duration: 0.8 }}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="max-w-4xl mx-auto">
                    <div className="glass-card p-12 relative overflow-hidden group">
                      {/* Background Pattern */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-accent-50 opacity-50"></div>
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-200 to-accent-200 rounded-full blur-3xl opacity-30"></div>
                      
                      <div className="relative z-10">
                        <div className="flex items-start gap-8">
                          <div className="flex-shrink-0">
                            <motion.div
                              whileHover={{ scale: 1.1, rotate: 10 }}
                              className="w-24 h-24 bg-gradient-to-r from-primary-600 to-accent-500 rounded-2xl flex items-center justify-center shadow-lg"
                            >
                              <span className="text-4xl">{service.icon}</span>
                            </motion.div>
                          </div>
                          
                          <div className="flex-1">
                            <h3 className="heading-3 mb-4 text-primary-600">{service.title}</h3>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                              {service.features.slice(0, 4).map((feature, featureIndex) => (
                                <motion.div
                                  key={featureIndex}
                                  initial={{ opacity: 0, x: -20 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  transition={{ delay: featureIndex * 0.1 }}
                                  className="flex items-center gap-3"
                                >
                                  <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0" />
                                  <span className="text-gray-700">{feature}</span>
                                </motion.div>
                              ))}
                            </div>
                            
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-6">
                                <div className="text-center">
                                  <div className="text-2xl font-bold text-primary-600">{service.duration}</div>
                                  <div className="text-sm text-gray-600">Duration</div>
                                </div>
                                <div className="text-center">
                                  <div className="text-2xl font-bold text-accent-600">{service.startingPrice}</div>
                                  <div className="text-sm text-gray-600">Starting Price</div>
                                </div>
                              </div>
                              
                              <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-gradient-to-r from-primary-600 to-accent-500 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 inline-flex items-center gap-2"
                              >
                                Learn More
                                <ArrowRight className="w-5 h-5" />
                              </motion.button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Carousel Navigation */}
            <div className="flex justify-center gap-3 mt-8">
              {featuredServices.map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index 
                      ? 'bg-primary-600 scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Why Choose Us Section */}
      <section className="section bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-5"></div>
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading-2 mb-6">
              Why <span className="gradient-text">Choose</span> Afronet?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine local expertise with international best practices to deliver exceptional results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Building2,
                title: "Local Expertise",
                description: "Deep understanding of Ethiopian business landscape and regulatory environment",
                color: "primary",
                stat: "5+ Years"
              },
              {
                icon: Users,
                title: "Expert Team",
                description: "25+ experienced consultants with deep industry knowledge and proven track record",
                color: "accent",
                stat: "25+ Experts"
              },
              {
                icon: TrendingUp,
                title: "Proven Results",
                description: "98% client satisfaction rate with measurable outcomes and ROI",
                color: "green",
                stat: "98% Success"
              },
              {
                icon: Shield,
                title: "Quality Assured",
                description: "ISO 9001:2015 certified processes with rigorous quality standards",
                color: "purple",
                stat: "ISO Certified"
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="glass-card p-8 text-center hover-lift relative group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-16 h-16 bg-${feature.color}-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-all duration-300`}
                >
                  <feature.icon className={`w-8 h-8 text-${feature.color}-600`} />
                </motion.div>
                
                <h3 className="heading-4 mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                
                <div className={`text-sm font-semibold text-${feature.color}-600 bg-${feature.color}-50 px-4 py-2 rounded-full`}>
                  {feature.stat}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Video Section */}
      <section className="section bg-gradient-to-r from-primary-600 to-accent-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-white"
            >
              <h2 className="heading-2 mb-6">
                See Our <span className="text-yellow-300">Success</span> Stories
              </h2>
              <p className="text-xl mb-8 opacity-90 leading-relaxed">
                Watch how we've helped businesses transform and achieve remarkable growth through our strategic consulting services.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Real Results</h4>
                    <p className="text-white/80">Measurable outcomes and ROI</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Client Success</h4>
                    <p className="text-white/80">Stories from our satisfied clients</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Growth Strategies</h4>
                    <p className="text-white/80">Proven methodologies and approaches</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="glass-card p-8 relative overflow-hidden">
                <div className="w-full h-80 bg-gradient-to-br from-gray-900 to-gray-700 rounded-2xl flex items-center justify-center relative group cursor-pointer">
                  {/* Video Thumbnail */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-accent-600/20 rounded-2xl"></div>
                  
                  {/* Play Button */}
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsVideoPlaying(!isVideoPlaying)}
                    className="relative z-10 w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl group-hover:shadow-3xl transition-all duration-300"
                  >
                    <Play className="w-8 h-8 text-primary-600 ml-1" />
                  </motion.button>
                  
                  {/* Video Info */}
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h3 className="font-semibold text-lg mb-2">Afronet Success Stories</h3>
                    <p className="text-white/80 text-sm">Watch our clients achieve remarkable growth</p>
                  </div>
                  
                  {/* Floating Elements */}
                  <motion.div
                    animate={{ y: [-10, 10, -10] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute top-6 right-6 w-4 h-4 bg-accent-500 rounded-full"
                  />
                  <motion.div
                    animate={{ y: [10, -10, 10] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute top-12 right-12 w-3 h-3 bg-primary-500 rounded-full"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced About Preview */}
      <AboutPreview />

      {/* Interactive Timeline */}
      <InteractiveTimeline />

      {/* Premium Interactive Showcase */}
      <InteractiveShowcase />

      {/* Enhanced Services Preview */}
      <ServicesPreview />

      {/* Enhanced Testimonials Preview */}
      <TestimonialsPreview />

      {/* Interactive CTA Section */}
      <CTASection />
    </div>
  )
}

export default HomePage

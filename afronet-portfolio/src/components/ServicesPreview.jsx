import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { companyData } from '../data/companyData'

const ServicesPreview = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const previewServices = companyData.services.slice(0, 4)

  return (
    <section className="section bg-gray-50">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="heading-2 mb-6">Our <span className="gradient-text">Services</span></h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive business solutions tailored to your success
          </p>
        </motion.div>
        
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {previewServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 + index * 0.1 }}
              className="glass-card p-6 text-center group hover-scale"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-xl">{service.title.charAt(0)}</span>
              </div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900">{service.title}</h3>
              <p className="text-gray-600 text-sm mb-6">{service.description}</p>
              <div className="space-y-2">
                {service.features.slice(0, 2).map((feature, idx) => (
                  <div key={idx} className="text-xs text-gray-500">• {feature}</div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div className="text-center">
          <Link to="/services" className="btn btn-primary">
            View All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesPreview

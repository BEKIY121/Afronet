import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import { ArrowRight, Phone, Mail } from 'lucide-react'
import { companyData } from '../data/companyData'

const CTASection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="section bg-gradient-to-r from-primary-600 to-accent-500">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center text-white"
        >
          <h2 className="heading-2 mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Let's discuss how we can help you achieve your business goals with our comprehensive consulting services.
          </p>
          
          <motion.div className="flex flex-wrap gap-4 justify-center mb-12">
            <Link to="/contact" className="btn bg-white text-primary-600 hover:bg-gray-100">
              Get Started Today
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a href={`tel:${companyData.contact.phone}`} className="btn btn-outline text-white border-white hover:bg-white hover:text-primary-600">
              <Phone className="w-4 h-4" />
              Call Us Now
            </a>
            <a href={`mailto:${companyData.contact.email}`} className="btn btn-outline text-white border-white hover:bg-white hover:text-primary-600">
              <Mail className="w-4 h-4" />
              Send Email
            </a>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-card p-6 text-center">
              <h4 className="text-lg font-semibold mb-2">Free Consultation</h4>
              <p className="text-sm opacity-80">Get expert advice on your business strategy</p>
            </div>
            <div className="glass-card p-6 text-center">
              <h4 className="text-lg font-semibold mb-2">Quick Response</h4>
              <p className="text-sm opacity-80">We respond within 24 hours</p>
            </div>
            <div className="glass-card p-6 text-center">
              <h4 className="text-lg font-semibold mb-2">Proven Results</h4>
              <p className="text-sm opacity-80">Success stories from satisfied clients</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTASection

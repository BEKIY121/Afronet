import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Users, Target, Award } from 'lucide-react'
import { companyData } from '../data/companyData'

const AboutPreview = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="section">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="heading-2">About <span className="gradient-text">Afronet</span></h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600"
            >
              {companyData.mission}
            </motion.p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-primary-600" />
                <span className="text-gray-700">Comprehensive business solutions</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-primary-600" />
                <span className="text-gray-700">Expert team with 15+ years experience</span>
              </div>
              <div className="flex items-center gap-3">
                <Target className="w-5 h-5 text-primary-600" />
                <span className="text-gray-700">Data-driven strategic approach</span>
              </div>
            </div>
            
            <Link to="/about" className="btn btn-primary inline-flex">
              Learn More
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="glass-card p-8">
              <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8 text-center">
                <h4 className="text-xl font-semibold mb-4 text-primary-600">Our Vision</h4>
                <p className="text-gray-600 mb-6">{companyData.vision}</p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="font-semibold text-primary-600">Founded</div>
                    <div className="text-gray-600">{companyData.founded}</div>
                  </div>
                  <div>
                    <div className="font-semibold text-primary-600">Location</div>
                    <div className="text-gray-600">{companyData.location}</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutPreview

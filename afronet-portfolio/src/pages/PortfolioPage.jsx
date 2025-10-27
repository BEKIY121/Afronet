import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { companyData } from '../data/companyData'

const PortfolioPage = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <div className="bg-white">
      <section className="section-lg bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="container">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="heading-1 mb-6">Our <span className="gradient-text">Portfolio</span></h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Success stories and case studies from our clients
            </p>
          </motion.div>
        </div>
      </section>
      
      <section className="section">
        <div className="container">
          <div className="text-center">
            <motion.div className="glass-card p-12 max-w-2xl mx-auto">
              <h2 className="heading-3 mb-4 text-primary-600">Portfolio Coming Soon</h2>
              <p className="text-gray-600 mb-6">
                We're currently compiling our comprehensive portfolio of successful projects and case studies. Check back soon to see our work in action!
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                {companyData.statistics.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-primary-600 mb-2">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PortfolioPage

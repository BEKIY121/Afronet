import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import { ArrowRight, Star, Quote } from 'lucide-react'
import { companyData } from '../data/companyData'

const TestimonialsPreview = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const previewTestimonials = companyData.testimonials.slice(0, 2)

  return (
    <section className="section">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="heading-2 mb-6">What Our <span className="gradient-text">Clients Say</span></h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by entrepreneurs and investors across Ethiopia
          </p>
        </motion.div>
        
        <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {previewTestimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 + index * 0.1 }}
              className="glass-card p-8"
            >
              <div className="flex items-start gap-4">
                <Quote className="w-8 h-8 text-primary-600 flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.position}, {testimonial.company}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div className="text-center">
          <Link to="/portfolio" className="btn btn-primary">
            View More Success Stories
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default TestimonialsPreview

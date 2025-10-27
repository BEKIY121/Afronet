import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { CheckCircle, Award, TrendingUp, Users } from 'lucide-react'

const InteractiveTimeline = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const timelineData = [
    {
      year: "2018",
      title: "Company Founded",
      description: "Afronet Business Solution PLC established with vision to transform Ethiopian business landscape",
      icon: CheckCircle,
      color: "primary"
    },
    {
      year: "2019",
      title: "First 50 Clients",
      description: "Successfully served 50+ businesses with comprehensive consulting services",
      icon: Users,
      color: "accent"
    },
    {
      year: "2020",
      title: "ISO Certification",
      description: "Achieved ISO 9001:2015 certification for quality management systems",
      icon: Award,
      color: "green"
    },
    {
      year: "2021",
      title: "Regional Expansion",
      description: "Expanded services across East Africa with international partnerships",
      icon: TrendingUp,
      color: "purple"
    },
    {
      year: "2022",
      title: "Industry Recognition",
      description: "Awarded 'Best Business Consultancy Firm' by Ethiopian Business Awards",
      icon: Award,
      color: "yellow"
    },
    {
      year: "2023",
      title: "150+ Happy Clients",
      description: "Reached milestone of 150+ satisfied clients and 300+ successful projects",
      icon: Users,
      color: "primary"
    }
  ]

  return (
    <section className="section bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-pattern opacity-5"></div>
      <div className="container relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="heading-2 mb-6">
            Our <span className="gradient-text">Journey</span> to Excellence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From humble beginnings to becoming Ethiopia's leading business consultancy firm
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-600 to-accent-500"></div>

          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                {/* Content */}
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="glass-card p-6 hover-lift"
                  >
                    <div className={`inline-flex items-center gap-2 px-3 py-1 bg-${item.color}-100 rounded-full text-sm mb-4`}>
                      <item.icon className={`w-4 h-4 text-${item.color}-600`} />
                      <span className={`text-${item.color}-600 font-semibold`}>{item.year}</span>
                    </div>
                    <h3 className="heading-4 mb-3">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </motion.div>
                </div>

                {/* Timeline Dot */}
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.3 }}
                    className={`w-8 h-8 bg-gradient-to-r from-${item.color}-600 to-${item.color === 'primary' ? 'accent' : 'primary'}-600 rounded-full border-4 border-white shadow-lg`}
                  />
                </div>

                {/* Empty space for alignment */}
                <div className="w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default InteractiveTimeline

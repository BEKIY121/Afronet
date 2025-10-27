import { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Menu, 
  X, 
  Phone, 
  Mail, 
  ChevronDown, 
  Search,
  Globe,
  User,
  Settings,
  Bell,
  Sparkles,
  Building2,
  TrendingUp,
  Users,
  Award
} from 'lucide-react'
import { companyData } from '../data/companyData'

const Navbar = ({ isScrolled, currentPath }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false)
    setIsServicesOpen(false)
    setIsSearchOpen(false)
  }, [location.pathname])

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { 
      name: 'Services', 
      path: '/services',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Business Startup Consultation', path: '/services#startup', icon: '🚀' },
        { name: 'Investment Promotion & FDI Support', path: '/services#investment', icon: '📈' },
        { name: 'Business Proposal Packages', path: '/services#proposals', icon: '📋' },
        { name: 'Company Registration & Legal Compliance', path: '/services#legal', icon: '⚖️' },
        { name: 'Business Plan & Feasibility Studies', path: '/services#planning', icon: '📊' },
        { name: 'Market Entry & Marketing Strategy', path: '/services#marketing', icon: '🎯' },
        { name: 'End-to-End Implementation Support', path: '/services#implementation', icon: '⚙️' },
        { name: 'Accounting, Auditing & Tax Compliance', path: '/services#financial', icon: '💰' }
      ]
    },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' }
  ]

  const handleNavClick = (path) => {
    navigate(path)
    setIsOpen(false)
    setIsServicesOpen(false)
  }

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      // Implement search functionality
      console.log('Searching for:', searchQuery)
      setIsSearchOpen(false)
      setSearchQuery('')
    }
  }

  return (
    <>
      {/* Navbar Spacer to prevent content overlap */}
      <div className="h-20 lg:h-24"></div>
      
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-xl border-b border-gray-200/50 shadow-lg py-3' 
            : 'bg-white/90 backdrop-blur-lg border-b border-gray-200/30 py-4'
        }`}
      >
        <div className="container">
          <div className="flex items-center justify-between">
            {/* Modern Logo */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-3"
            >
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-accent-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -top-1 -right-1 w-3 h-3 bg-accent-500 rounded-full"
                />
              </div>
              <div className="hidden sm:block">
                <Link to="/" className="text-xl font-bold text-gray-900 hover:text-primary-600 transition-colors">
                  {companyData.name}
                </Link>
                <p className="text-xs text-gray-500 hidden lg:block">
                  {companyData.tagline}
                </p>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <div key={item.name} className="relative">
                  {item.hasDropdown ? (
                    <div
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                      className="relative"
                    >
                      <button className={`flex items-center gap-1 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                        currentPath === item.path
                          ? 'text-primary-600 bg-primary-50'
                          : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                      }`}>
                        {item.name}
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
                      </button>
                      
                      <AnimatePresence>
                        {isServicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-gray-200/50 p-4"
                          >
                            <div className="grid grid-cols-1 gap-2">
                              {item.dropdownItems.map((dropdownItem, index) => (
                                <motion.div
                                  key={index}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: index * 0.05 }}
                                >
                                  <Link
                                    to={dropdownItem.path}
                                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary-50 transition-all duration-200 group"
                                  >
                                    <span className="text-lg">{dropdownItem.icon}</span>
                                    <span className="text-sm font-medium text-gray-700 group-hover:text-primary-600 transition-colors">
                                      {dropdownItem.name}
                                    </span>
                                  </Link>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                        currentPath === item.path
                          ? 'text-primary-600 bg-primary-50'
                          : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Search */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <Search className="w-5 h-5 text-gray-600" />
              </motion.button>

              {/* Contact Info */}
              <motion.a
                href={`tel:${companyData.contact.phone}`}
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary-600 transition-colors px-3 py-2 rounded-lg hover:bg-gray-50"
              >
                <Phone className="w-4 h-4" />
                <span className="hidden xl:block">{companyData.contact.phone}</span>
              </motion.a>

              <motion.a
                href={`mailto:${companyData.contact.email}`}
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary-600 transition-colors px-3 py-2 rounded-lg hover:bg-gray-50"
              >
                <Mail className="w-4 h-4" />
                <span className="hidden xl:block">{companyData.contact.email}</span>
              </motion.a>

              {/* User Menu */}
              <div className="relative">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <User className="w-5 h-5 text-gray-600" />
                </motion.button>

                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute top-full right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-200/50 p-3"
                    >
                      <div className="space-y-1">
                        <button className="w-full text-left p-2 rounded-lg hover:bg-gray-50 transition-colors text-sm flex items-center gap-2">
                          <Settings className="w-4 h-4" />
                          Settings
                        </button>
                        <button className="w-full text-left p-2 rounded-lg hover:bg-gray-50 transition-colors text-sm flex items-center gap-2">
                          <Globe className="w-4 h-4" />
                          Language
                        </button>
                        <button className="w-full text-left p-2 rounded-lg hover:bg-gray-50 transition-colors text-sm flex items-center gap-2">
                          <Bell className="w-4 h-4" />
                          Notifications
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleNavClick('/contact')}
                className="bg-gradient-to-r from-primary-600 to-accent-500 text-white px-6 py-2 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-200"
              >
                Get Started
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>

          {/* Search Bar */}
          <AnimatePresence>
            {isSearchOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-4"
              >
                <form onSubmit={handleSearch} className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search for services, solutions, or information..."
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                  />
                  <button
                    type="submit"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 p-2 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    <Search className="w-4 h-4 text-gray-600" />
                  </button>
                </form>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden mt-4 bg-white rounded-xl shadow-lg border border-gray-200/50 p-4"
              >
                <div className="flex flex-col gap-2">
                  {navItems.map((item) => (
                    <div key={item.name}>
                      {item.hasDropdown ? (
                        <div>
                          <button
                            onClick={() => setIsServicesOpen(!isServicesOpen)}
                            className={`flex items-center justify-between w-full py-3 px-4 rounded-lg transition-colors text-left ${
                              currentPath === item.path
                                ? 'bg-primary-50 text-primary-600'
                                : 'hover:bg-gray-50'
                            }`}
                          >
                            <span className="font-medium">{item.name}</span>
                            <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                          </button>
                          
                          <AnimatePresence>
                            {isServicesOpen && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="ml-4 mt-2 space-y-1"
                              >
                                {item.dropdownItems.map((dropdownItem, index) => (
                                  <Link
                                    key={index}
                                    to={dropdownItem.path}
                                    className="flex items-center gap-3 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors text-sm"
                                  >
                                    <span className="text-lg">{dropdownItem.icon}</span>
                                    <span>{dropdownItem.name}</span>
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <button
                          onClick={() => handleNavClick(item.path)}
                          className={`w-full text-left py-3 px-4 rounded-lg transition-colors ${
                            currentPath === item.path
                              ? 'bg-primary-50 text-primary-600'
                              : 'hover:bg-gray-50'
                          }`}
                        >
                          {item.name}
                        </button>
                      )}
                    </div>
                  ))}
                  
                  <div className="border-t border-gray-200 pt-4 mt-4">
                    <div className="flex flex-col gap-3">
                      <a
                        href={`tel:${companyData.contact.phone}`}
                        className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary-600 transition-colors px-3 py-2 rounded-lg hover:bg-gray-50"
                      >
                        <Phone className="w-4 h-4" />
                        <span>{companyData.contact.phone}</span>
                      </a>
                      <a
                        href={`mailto:${companyData.contact.email}`}
                        className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary-600 transition-colors px-3 py-2 rounded-lg hover:bg-gray-50"
                      >
                        <Mail className="w-4 h-4" />
                        <span>{companyData.contact.email}</span>
                      </a>
                      <button
                        onClick={() => handleNavClick('/contact')}
                        className="bg-gradient-to-r from-primary-600 to-accent-500 text-white px-6 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-200"
                      >
                        Get Started
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
    </>
  )
}

export default Navbar

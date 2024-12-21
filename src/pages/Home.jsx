import { Link } from 'react-router-dom'
import { FaMoneyBillWave, FaMobile, FaCreditCard } from 'react-icons/fa'
import FeatureCard from '../components/home/FeatureCard'

function Home() {
  const features = [
    {
      icon: FaMoneyBillWave,
      title: "Instant Transfers",
      description: "Send money instantly to anyone, anywhere, anytime"
    },
    {
      icon: FaMobile,
      title: "Mobile First",
      description: "Designed for the best mobile experience"
    },
    {
      icon: FaCreditCard,
      title: "Secure Payments",
      description: "Bank-grade security for all your transactions"
    }
  ]

  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Send Money Instantly with PayPro
            </h1>
            <p className="text-xl mb-8">
              Fast, secure, and convenient payments at your fingertips
            </p>
            <Link
              to="/dashboard"
              className="bg-white text-secondary px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>

      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose PayPro?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
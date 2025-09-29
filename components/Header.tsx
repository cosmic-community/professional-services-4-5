import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-primary">
            Professional Services
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <a href="/#services" className="text-gray-700 hover:text-primary transition-colors">
              Services
            </a>
            <a href="/#team" className="text-gray-700 hover:text-primary transition-colors">
              Team
            </a>
            <a href="/#testimonials" className="text-gray-700 hover:text-primary transition-colors">
              Testimonials
            </a>
            <a href="/#case-studies" className="text-gray-700 hover:text-primary transition-colors">
              Case Studies
            </a>
          </div>
          
          <a
            href="#services"
            className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition-colors"
          >
            Get Started
          </a>
        </div>
      </nav>
    </header>
  )
}
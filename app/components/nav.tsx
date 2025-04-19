import Link from 'next/link'

const navItems = [
  { path: '/', name: 'Home' },
  { path: '/about', name: 'About Me' },
  { path: '/contacts', name: 'Contacts' }
]

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-6">
        <nav className="flex items-center justify-between py-4">
          {/* Logo/Nome */}
          <div className="flex items-center space-x-4">
            <span className="text-xl font-semibold text-gray-900">Giuseppe Tardi</span>
          </div>
          
          {/* Menu Items */}
          <div className="flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className="relative text-gray-600 hover:text-gray-900 transition-colors duration-300 font-medium text-sm uppercase tracking-wider"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  )
}
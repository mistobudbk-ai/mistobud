import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Building2 } from 'lucide-react'
import { COMPANY_INFO } from '../config/company'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { label: 'Головна', path: '/' },
    { label: 'Про нас', path: '/about' },
    { label: 'Послуги', path: '/services' },
    { label: 'Портфоліо', path: '/portfolio' },
    { label: 'Контакти', path: '/contact' },
  ]

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container-custom py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-primary">
            <Building2 size={32} />
            <span>{COMPANY_INFO.name}</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-secondary hover:text-primary transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <a href={`tel:${COMPANY_INFO.phone}`} className="hidden md:block btn-primary">
            Замовити консультацію
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden mt-4 flex flex-col gap-4 pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-secondary hover:text-primary transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a href={`tel:${COMPANY_INFO.phone}`} className="btn-primary w-full text-center block">
              Замовити консультацію
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}

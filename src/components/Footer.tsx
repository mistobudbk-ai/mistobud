import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-secondary text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">БК Містобуд</h3>
            <p className="text-gray-300 mb-4">
              Провідна будівельна компанія з багаторічним досвідом у реалізації сучасних проектів.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Навігація</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/" className="hover:text-primary transition-colors">Головна</a></li>
              <li><a href="/about" className="hover:text-primary transition-colors">Про нас</a></li>
              <li><a href="/services" className="hover:text-primary transition-colors">Послуги</a></li>
              <li><a href="/portfolio" className="hover:text-primary transition-colors">Портфоліо</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Контакти</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center gap-2">
                <Phone size={18} />
                <a href="tel:+380XXXXXXXXX" className="hover:text-primary transition-colors">+38 (0XX) XXX-XX-XX</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} />
                <a href="mailto:info@mistobud.ua" className="hover:text-primary transition-colors">info@mistobud.ua</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={18} className="mt-1" />
                <span>м. Київ, вул. Прикладна, 123</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Соцмережі</h4>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary transition-colors"><Facebook size={24} /></a>
              <a href="#" className="hover:text-primary transition-colors"><Instagram size={24} /></a>
              <a href="#" className="hover:text-primary transition-colors"><Linkedin size={24} /></a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-300 text-sm">
            <p>&copy; 2024 БК Містобуд. Всі права захищені.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-primary transition-colors">Політика конфіденційності</a>
              <a href="#" className="hover:text-primary transition-colors">Умови користування</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

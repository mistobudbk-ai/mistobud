import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Дякуємо! Ми звернемось до вас найближчим часом.')
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-secondary text-white py-16 md:py-24">
        <div className="container-custom">
          <h1 className="text-5xl font-bold mb-4">Контакти</h1>
          <p className="text-xl text-gray-300">Зв\'яжіться з нами для консультації</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-light">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold mb-6 text-secondary">Відправити повідомлення</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-secondary font-semibold mb-2">Ваше ім\'я</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-primary outline-none transition-colors"
                    placeholder="Іван Петренко"
                  />
                </div>
                <div>
                  <label className="block text-secondary font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-primary outline-none transition-colors"
                    placeholder="ivan@example.com"
                  />
                </div>
                <div>
                  <label className="block text-secondary font-semibold mb-2">Телефон</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-primary outline-none transition-colors"
                    placeholder="+38 (0XX) XXX-XX-XX"
                  />
                </div>
                <div>
                  <label className="block text-secondary font-semibold mb-2">Повідомлення</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-primary outline-none transition-colors resize-none"
                    placeholder="Опишіть ваш проект..."
                  ></textarea>
                </div>
                <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                  <Send size={20} />
                  Відправити
                </button>
              </form>
            </div>

            {/* Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-secondary">Інформація</h2>
              </div>
              
              <div className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-sm">
                <Phone className="text-primary flex-shrink-0" size={28} />
                <div>
                  <h3 className="font-bold text-secondary mb-1">Телефон</h3>
                  <a href="tel:+380XXXXXXXXX" className="text-primary hover:underline">+38 (0XX) XXX-XX-XX</a>
                  <p className="text-gray-600 mt-1">Пн-Пт: 09:00 - 18:00</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-sm">
                <Mail className="text-primary flex-shrink-0" size={28} />
                <div>
                  <h3 className="font-bold text-secondary mb-1">Email</h3>
                  <a href="mailto:info@mistobud.ua" className="text-primary hover:underline">info@mistobud.ua</a>
                  <p className="text-gray-600 mt-1">Відповідаємо протягом 24 годин</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-sm">
                <MapPin className="text-primary flex-shrink-0" size={28} />
                <div>
                  <h3 className="font-bold text-secondary mb-1">Адреса офісу</h3>
                  <p className="text-gray-600">м. Київ, вул. Прикладна, 123</p>
                  <p className="text-gray-600 mt-1">Офіс №201</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-secondary mb-4">Години роботи</h3>
                <div className="space-y-2 text-gray-600">
                  <p><span className="font-semibold">Понеділок - Пятниця:</span> 09:00 - 18:00</p>
                  <p><span className="font-semibold">Субота:</span> 10:00 - 14:00</p>
                  <p><span className="font-semibold">Неділя:</span> Вихідний</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-96 bg-gray-400">
        <iframe
          title="map"
          className="w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.9477456950307!2d30.3753928!3d50.4501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cdf7e0b0b0b1%3A0x0b0b0b0b0b0b0b0b!2z0JzQtdC00YDQsNC90LjQtQ!5e0!3m2!1suk!2sua!4v0000000000"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  )
}
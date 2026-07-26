import { ArrowRight, CheckCircle, Zap, Users, Award } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-secondary to-accent text-white py-20 md:py-32">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Будуємо майбутнє разом
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                Надаємо послуги в будівництві, реконструкції та проектуванні з понад 15-ти років досвіду.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn-primary bg-orange-500 hover:bg-orange-600">
                  Розпочати проект
                </Link>
                <Link to="/services" className="btn-outline border-white text-white hover:bg-white hover:text-secondary">
                  Дізнатись більше
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="bg-white bg-opacity-10 rounded-lg p-8 backdrop-blur-sm">
                <div className="aspect-video bg-white bg-opacity-5 rounded-lg flex items-center justify-center">
                  <span className="text-white text-lg">Фото проектів</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-light">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '150+', label: 'Завершених проектів' },
              { number: '500+', label: 'Задоволених клієнтів' },
              { number: '15+', label: 'Років досвіду' },
              { number: '50+', label: 'Спеціалістів команди' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-secondary font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="section-title text-center">Наші послуги</h2>
          <p className="section-subtitle text-center">
            Повний спектр будівельних послуг для ваших потреб
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: 'Нове будівництво',
                description: 'Проектування та будівництво сучасних об\'єктів з нуля'
              },
              {
                icon: Users,
                title: 'Реконструкція',
                description: 'Оновлення та модернізація існуючих будівель'
              },
              {
                icon: Award,
                title: 'Дизайн інтер\'єру',
                description: 'Створення унікальних та функціональних просторів'
              },
            ].map((service, i) => {
              const Icon = service.icon
              return (
                <div key={i} className="bg-light p-8 rounded-lg hover:shadow-lg transition-shadow">
                  <Icon className="text-primary mb-4" size={40} />
                  <h3 className="text-xl font-bold mb-3 text-secondary">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <a href="#" className="text-primary font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                    Дізнатись більше <ArrowRight size={20} />
                  </a>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-light">
        <div className="container-custom">
          <h2 className="section-title text-center">Чому вибирають нас</h2>
          <div className="grid md:grid-cols-2 gap-12 mt-12">
            <div>
              <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500&h=500&fit=crop" alt="" className="rounded-lg shadow-lg" />
            </div>
            <div className="space-y-6">
              {[
                'Професійна команда з багаторічним досвідом',
                'Використання сучасних матеріалів та технологій',
                'Прозорі ціни та чіткі графіки',
                'Гарантія на всі виконані роботи',
                'Індивідуальний підхід до кожного клієнта',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <CheckCircle className="text-primary flex-shrink-0" size={24} />
                  <p className="text-lg text-secondary">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-6">Готові розпочати?</h2>
          <p className="text-xl mb-8 text-orange-100">Зв\'яжіться з нами для безкоштовної консультації</p>
          <Link to="/contact" className="btn-secondary bg-secondary hover:bg-opacity-90">
            Замовити консультацію
          </Link>
        </div>
      </section>
    </div>
  )
}
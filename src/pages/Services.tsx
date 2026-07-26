export default function Services() {
  const services = [
    {
      id: 1,
      title: 'Нове будівництво',
      description: 'Повний цикл проектування та будівництво жилих та комерційних об\'єктів',
      features: ['Архітектурне проектування', 'Будівельні роботи', 'Внутрішнє оздоблення', 'Комунікації']
    },
    {
      id: 2,
      title: 'Реконструкція',
      description: 'Модернізація та оновлення існуючих будівель',
      features: ['Капітальний ремонт', 'Зміцнення конструкцій', 'Оновлення фасадів', 'Теплоізоляція']
    },
    {
      id: 3,
      title: 'Дизайн інтер\'єру',
      description: 'Створення унікальних та функціональних внутрішніх просторів',
      features: ['Концептуальний дизайн', 'Вибір матеріалів', 'Меблювання', 'Освітлення']
    },
    {
      id: 4,
      title: 'Благоустрій',
      description: 'Облаштування прилеглих територій та ландшафтні роботи',
      features: ['Озеленення', 'Мощення', 'Малі архітектурні форми', 'Освітлення território']
    },
    {
      id: 5,
      title: 'Консультації',
      description: 'Експертні консультації на всіх етапах проекту',
      features: ['Техдосмотр', 'Кошторисування', 'Планування проекту', 'Керування проектом']
    },
    {
      id: 6,
      title: 'Гарантійне обслуговування',
      description: 'Повна гарантія на всі виконані роботи та матеріали',
      features: ['Гарантія до 5 років', 'Технічне обслуговування', 'Поточний ремонт', 'Цілодобова підтримка']
    },
  ]

  return (
    <div>
      {/* Hero */}
      <section className="bg-secondary text-white py-16 md:py-24">
        <div className="container-custom">
          <h1 className="text-5xl font-bold mb-4">Наші послуги</h1>
          <p className="text-xl text-gray-300">Повний спектр будівельних та дизайнерських услуг</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-light">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold mb-3 text-secondary">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-secondary">
                      <span className="text-primary font-bold">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="section-title text-center mb-16">Як ми працюємо</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { step: '01', title: 'Консультація', desc: 'Обговорення ваших потреб та ідей' },
              { step: '02', title: 'Проектування', desc: 'Розробка детального плану проекту' },
              { step: '03', title: 'Реалізація', desc: 'Виконання робіт за графіком' },
              { step: '04', title: 'Завершення', desc: 'Здача проекту та гарантійне обслуговування' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="text-5xl font-bold text-primary mb-4">{item.step}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
                {i < 3 && <div className="hidden md:block absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 text-primary text-2xl">→</div>}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
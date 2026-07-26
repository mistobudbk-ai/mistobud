import { Award, Target, Users, Lightbulb } from 'lucide-react'

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-secondary text-white py-16 md:py-24">
        <div className="container-custom">
          <h1 className="text-5xl font-bold mb-4">Про компанію БК Містобуд</h1>
          <p className="text-xl text-gray-300">Провідна будівельна компанія з традиціями та інноваціями</p>
        </div>
      </section>

      {/* History */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Наша історія</h2>
              <p className="text-lg text-gray-600 mb-4">
                Компанія БК Містобуд була заснована у 2008 році з метою створювати найякісніші будівельні проекти в Україні.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                За 15+ років роботи ми реалізували більше 150 проектів, від приватних будинків до комерційних комплексів.
              </p>
              <p className="text-lg text-gray-600">
                Наша команда складається з найдосвідченіших фахівців, які завжди прагнуть до досконалості.
              </p>
            </div>
            <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&h=500&fit=crop" alt="" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-light">
        <div className="container-custom">
          <h2 className="section-title text-center mb-16">Наші цінності</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Award, title: 'Якість', description: 'Найвищі стандарти у всьому' },
              { icon: Target, title: 'Надійність', description: 'Виконуємо обіцяння завжди' },
              { icon: Users, title: 'Команда', description: 'Найкращі фахівці галузі' },
              { icon: Lightbulb, title: 'Інновація', description: 'Сучасні підходи та технології' },
            ].map((value, i) => {
              const Icon = value.icon
              return (
                <div key={i} className="bg-white p-8 rounded-lg text-center shadow-sm hover:shadow-lg transition-shadow">
                  <Icon className="text-primary mx-auto mb-4" size={48} />
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="section-title text-center mb-16">Наша команда</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { name: 'Іван Петренко', role: 'Генеральний директор', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop' },
              { name: 'Марія Кравець', role: 'Головний архітектор', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop' },
              { name: 'Олег Сідоров', role: 'Керівник проектів', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop' },
            ].map((member, i) => (
              <div key={i} className="text-center">
                <img src={member.image} alt={member.name} className="w-full aspect-square object-cover rounded-lg mb-4" />
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-primary font-semibold">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
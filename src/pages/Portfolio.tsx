import { useState } from 'react'

export default function Portfolio() {
  const [filter, setFilter] = useState('all')

  const projects = [
    { id: 1, title: 'Житловий комплекс "Современ"', category: 'residential', image: 'https://images.unsplash.com/photo-1486525531359-e3d47b94aaea?w=500&h=400&fit=crop', year: 2023 },
    { id: 2, title: 'Торговий центр "Метро"', category: 'commercial', image: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?w=500&h=400&fit=crop', year: 2022 },
    { id: 3, title: 'Офісна будівля "Tech Park"', category: 'commercial', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&h=400&fit=crop', year: 2023 },
    { id: 4, title: 'Приватний будинок в Озеріївці', category: 'residential', image: 'https://images.unsplash.com/photo-1570129477492-45ba003d79a5?w=500&h=400&fit=crop', year: 2021 },
    { id: 5, title: 'Готель "Grand Plaza"', category: 'hospitality', image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=500&h=400&fit=crop', year: 2022 },
    { id: 6, title: 'Навчальний заклад', category: 'public', image: 'https://images.unsplash.com/photo-1509868872897-9efd4fcb3ee3?w=500&h=400&fit=crop', year: 2023 },
  ]

  const categories = [
    { id: 'all', label: 'Всі проекти' },
    { id: 'residential', label: 'Житлові' },
    { id: 'commercial', label: 'Комерційні' },
    { id: 'hospitality', label: 'Готелі' },
    { id: 'public', label: 'Громадські' },
  ]

  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.category === filter)

  return (
    <div>
      {/* Hero */}
      <section className="bg-secondary text-white py-16 md:py-24">
        <div className="container-custom">
          <h1 className="text-5xl font-bold mb-4">Портфоліо проектів</h1>
          <p className="text-xl text-gray-300">Переглядайте наші найкращі роботи</p>
        </div>
      </section>

      {/* Filter */}
      <section className="py-12 bg-light">
        <div className="container-custom">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                  filter === cat.id
                    ? 'bg-primary text-white'
                    : 'bg-white text-secondary border-2 border-primary hover:bg-primary hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map(project => (
              <div key={project.id} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                    <button className="opacity-0 group-hover:opacity-100 btn-primary transition-opacity duration-300">
                      Переглянути проект
                    </button>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-primary font-semibold">{project.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary text-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">150+</div>
              <p className="text-lg">Завершених проектів</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">500+</div>
              <p className="text-lg">Задоволених клієнтів</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">98%</div>
              <p className="text-lg">Рівень задоволення</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
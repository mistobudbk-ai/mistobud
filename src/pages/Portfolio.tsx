import { useState } from 'react'
import { PROJECTS } from '../config/projects'

export default function Portfolio() {
  const [filter, setFilter] = useState('all')

  const categories = [
    { id: 'all', label: 'Всі проекти' },
    { id: 'residential', label: 'Житлові' },
    { id: 'commercial', label: 'Комерційні' },
    { id: 'public', label: 'Громадські' },
  ]

  const filteredProjects = filter === 'all' ? PROJECTS : PROJECTS.filter(p => p.category === filter)

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
                <div className="relative overflow-hidden rounded-lg mb-4 h-64 bg-gray-300">
                  <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-400 flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-gray-600 font-semibold">{project.title}</p>
                      <p className="text-gray-500 text-sm mt-2">Фото проекту</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                    <button className="opacity-0 group-hover:opacity-100 btn-primary transition-opacity duration-300">
                      Переглянути проект
                    </button>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-secondary">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{project.location}</p>
                  <p className="text-gray-700 mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-primary font-semibold">{project.year}</span>
                    <a href="#" className="text-primary hover:text-orange-600 text-sm font-semibold">Детальніше →</a>
                  </div>
                </div>
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
              <div className="text-5xl font-bold mb-2">{PROJECTS.length}+</div>
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

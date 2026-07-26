import { Award, Target, Users, Lightbulb } from 'lucide-react'
import { ABOUT_INFO } from '../config/about'

export default function About() {
  const icons: { [key: string]: any } = {
    Award,
    Target,
    Users,
    Lightbulb
  }

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
                {ABOUT_INFO.description}
              </p>
              <p className="text-lg text-gray-600 mb-4">
                {ABOUT_INFO.history}
              </p>
              <p className="text-lg text-gray-600">
                Наша команда складається з найдосвідченіших фахівців, які завжди прагнуть до досконалості.
              </p>
            </div>
            <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&h=500&fit=crop" alt="" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-light">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">{ABOUT_INFO.founded}</div>
              <div className="text-secondary font-medium">Рік заснування</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">{ABOUT_INFO.experience}</div>
              <div className="text-secondary font-medium">Років досвіду</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">{ABOUT_INFO.completedProjects}</div>
              <div className="text-secondary font-medium">Завершених проектів</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">{ABOUT_INFO.team}</div>
              <div className="text-secondary font-medium">Спеціалістів команди</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="section-title text-center mb-16">Наші цінності</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {ABOUT_INFO.values.map((value, i) => {
              const Icon = icons[value.icon]
              return (
                <div key={i} className="bg-light p-8 rounded-lg text-center shadow-sm hover:shadow-lg transition-shadow">
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
      <section className="py-20 bg-light">
        <div className="container-custom">
          <h2 className="section-title text-center mb-16">Наша команда</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {ABOUT_INFO.team_members.map((member, i) => (
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

import Card from '../components/Card.jsx'
import TypingAnimation from '../components/TypingAnimation.jsx'

const skillGroups = [
  {
    title: 'Systems & OS',
    items: [],
  },
  {
    title: 'Infrastructure',
    items: [],
  },
  {
    title: 'Languages',
    items: [],
  },
  {
    title: 'Tools & Workflow',
    items: [],
  },
]

function Skills() {
  return (
    <section>
      <p style={{ color: '#4ec9b0', fontSize: '0.875rem', fontWeight: 'bold', letterSpacing: '0.05em', marginBottom: '2rem' }}>
        <TypingAnimation text="$ ls ~/skills" speed={60} />
      </p>
      <h2>Skills</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
        {skillGroups.map((group) => (
          <Card key={group.title} title={group.title}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              {group.items.map((item) => (
                <span key={item} className="skill-tag">
                  {item}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default Skills

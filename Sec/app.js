import React from 'react';
import './index.css';

const Portfolio = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.6' }}>
      {/* Navigation */}
      <nav style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        right: 0, 
        zIndex: 50,
        background: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid #e5e7eb',
        padding: '1rem 2rem'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h3 style={{ margin: 0, color: '#10b981', fontWeight: 'bold' }}>Portfolio</h3>
          <div style={{ display: 'flex', gap: '2rem' }}>
            {['Home', 'Experience', 'Skills', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#6b7280',
                  cursor: 'pointer',
                  padding: '0.5rem 1rem',
                  borderRadius: '9999px',
                  transition: 'all 0.2s ease'
                }}
                onMouseOver={(e) => e.target.style.background = 'rgba(0,0,0,0.05)'}
                onMouseOut={(e) => e.target.style.background = 'none'}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" style={{
        background: 'radial-gradient(at 53% 78%, hsla(60,100%,50%,0.3) 0px, transparent 50%), radial-gradient(at 71% 91%, hsla(108,100%,50%,0.3) 0px, transparent 50%)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '7rem 1.5rem 3rem'
      }}>
        <div style={{ maxWidth: '800px' }}>
          <h1 style={{ fontSize: 'clamp(2.25rem, 5vw, 4.5rem)', fontWeight: '700', color: '#003720', marginBottom: '1rem' }}>
            Professional Portfolio
          </h1>
          <h2 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: '600', color: '#0d7916', marginBottom: '1rem' }}>
            Gen AI Engineer & Mathematics Expert
          </h2>
          <p style={{ fontSize: 'clamp(1.125rem, 2.5vw, 1.25rem)', color: '#83928c', maxWidth: '600px', margin: '0 auto 2rem' }}>
            Motivated professional with expertise in Mathematics, Statistics, and Data Science, complemented by hands-on experience as a Gen AI Engineer. Proficient in leveraging Generative AI, LLMs, and multi-agent frameworks.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
            <button
              onClick={() => scrollToSection('experience')}
              style={{
                background: 'linear-gradient(to bottom right, #8FEC78, #81DD67)',
                color: 'white',
                border: 'none',
                borderRadius: '9999px',
                padding: '14px 24px',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                minHeight: '48px'
              }}
            >
              View My Work
            </button>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', fontSize: '0.875rem', color: '#83928c', marginTop: '2rem' }}>
              <span>📧 contact@email.com</span>
              <span>📍 Hyderabad, India</span>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" style={{ padding: '4rem 1.5rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: 'clamp(1.875rem, 4vw, 3rem)', fontWeight: '600', color: '#003720', marginBottom: '0.75rem' }}>
            Professional Experience
          </h2>
          <p style={{ fontSize: 'clamp(1.125rem, 2.5vw, 1.25rem)', color: '#83928c' }}>
            From academia to cutting-edge AI engineering
          </p>
        </div>

        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {/* Current Role */}
          <div style={{
            background: '#ffffff',
            border: '1px solid rgba(0,0,0,0.1)',
            borderLeft: '4px solid #8FEC78',
            borderRadius: '12px',
            padding: '24px',
            marginBottom: '1.5rem',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#003720', marginBottom: '0.5rem' }}>
              Software Engineer (Gen AI Engineer)
            </h3>
            <div style={{ color: '#0d7916', fontWeight: '600', marginBottom: '0.5rem' }}>
              🏢 DataEconomy
            </div>
            <div style={{ color: '#83928c', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              📅 Feb 2024 – Present
              <span style={{ background: 'rgba(148, 242, 127, 0.1)', color: '#0d7916', padding: '2px 8px', borderRadius: '12px', fontSize: '0.75rem' }}>
                Current
              </span>
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {[
                'Built Legacy Modernization Framework using AutoGen multi-agentic system',
                'Implemented ETL Extraction Automation with bidirectional data processing',
                'Automated Legacy Platform Integration for Tableau, Alteryx systems',
                'Designed Multi-Agent ETL Pipeline with intelligent agent collaboration',
                'Enhanced system scalability, reducing modernization time by 60%'
              ].map((achievement, index) => (
                <li key={index} style={{ display: 'flex', alignItems: 'start', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#8FEC78', marginTop: '0.5rem', flexShrink: 0 }}></div>
                  <span style={{ color: '#0e0f0c' }}>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Previous Role */}
          <div style={{
            background: '#ffffff',
            border: '1px solid rgba(0,0,0,0.1)',
            borderRadius: '12px',
            padding: '24px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#003720', marginBottom: '0.5rem' }}>
              Assistant Professor of Mathematics
            </h3>
            <div style={{ color: '#0d7916', fontWeight: '600', marginBottom: '0.5rem' }}>
              🏢 Nalla Malla Reddy Engineering College
            </div>
            <div style={{ color: '#83928c', marginBottom: '1rem' }}>
              📅 Jul 2015 – Sep 2022
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {[
                'Taught Mathematics and Statistics to B.Tech and MBA students',
                'Designed interactive teaching materials, improving retention by 20%',
                'Conducted placement training achieving 95% placement rate',
                'Coordinated academic schedules and edited college publications'
              ].map((achievement, index) => (
                <li key={index} style={{ display: 'flex', alignItems: 'start', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#8FEC78', marginTop: '0.5rem', flexShrink: 0 }}></div>
                  <span style={{ color: '#0e0f0c' }}>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" style={{ padding: '4rem 1.5rem', background: 'rgba(0,0,0,0.02)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: 'clamp(1.875rem, 4vw, 3rem)', fontWeight: '600', color: '#003720', marginBottom: '0.75rem' }}>
              Skills & Expertise
            </h2>
            <p style={{ fontSize: 'clamp(1.125rem, 2.5vw, 1.25rem)', color: '#83928c' }}>
              Comprehensive toolkit spanning AI engineering and data science
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
            {[
              { title: 'Programming', skills: ['Python', 'SQL'], icon: '💻' },
              { title: 'AI & Frameworks', skills: ['AutoGen Framework', 'Multi-agent Systems', 'Generative AI', 'LLMs'], icon: '🤖' },
              { title: 'Tools & Platforms', skills: ['Power BI', 'Tableau', 'Alteryx', 'ETL Tools'], icon: '🔧' },
              { title: 'Domains', skills: ['Legacy Modernization', 'ETL Automation', 'Data Science', 'Machine Learning'], icon: '🧠' }
            ].map((category, index) => (
              <div key={index} style={{
                background: '#ffffff',
                border: '1px solid rgba(0,0,0,0.1)',
                borderRadius: '12px',
                padding: '20px',
                boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '1.5rem' }}>{category.icon}</span>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#003720', margin: 0 }}>
                    {category.title}
                  </h3>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {category.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} style={{
                      background: 'rgba(148, 242, 127, 0.1)',
                      color: '#0d7916',
                      padding: '4px 12px',
                      borderRadius: '20px',
                      fontSize: '0.875rem',
                      fontWeight: '500'
                    }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ padding: '4rem 1.5rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: 'clamp(1.875rem, 4vw, 3rem)', fontWeight: '600', color: '#003720', marginBottom: '0.75rem' }}>
            Get In Touch
          </h2>
          <p style={{ fontSize: 'clamp(1.125rem, 2.5vw, 1.25rem)', color: '#83928c' }}>
            Let's discuss opportunities in Gen AI, data science, or academic collaborations
          </p>
        </div>

        <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
            <div style={{ padding: '1rem', background: '#ffffff', border: '1px solid rgba(0,0,0,0.1)', borderRadius: '12px' }}>
              <strong>📧 Email:</strong> contact@email.com
            </div>
            <div style={{ padding: '1rem', background: '#ffffff', border: '1px solid rgba(0,0,0,0.1)', borderRadius: '12px' }}>
              <strong>📞 Phone:</strong> +91-XXXXXXXXXX
            </div>
            <div style={{ padding: '1rem', background: '#ffffff', border: '1px solid rgba(0,0,0,0.1)', borderRadius: '12px' }}>
              <strong>📍 Location:</strong> Hyderabad, India
            </div>
          </div>
          
          <button
            style={{
              background: 'linear-gradient(to bottom right, #8FEC78, #81DD67)',
              color: 'white',
              border: 'none',
              borderRadius: '9999px',
              padding: '14px 24px',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              minHeight: '48px'
            }}
          >
            📧 Send Message
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: 'rgba(0,0,0,0.02)', padding: '2rem', textAlign: 'center', borderTop: '1px solid rgba(0,0,0,0.1)' }}>
        <p style={{ color: '#83928c', fontSize: '0.875rem', margin: 0 }}>
          © 2024 Professional Portfolio. Built with AI agents and React.
        </p>
      </footer>
    </div>
  );
};

function App() {
  return <Portfolio />;
}

export default App;

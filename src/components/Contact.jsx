import { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Thank you for your message, ${formData.name}! We'll get back to you soon.`)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div className="page">
      <h1>Contact Us</h1>
      <div className="card">
        <h2>Get in Touch</h2>
        <p>Have questions or suggestions? We'd love to hear from you!</p>
        
        <form onSubmit={handleSubmit} style={{ maxWidth: '500px', margin: '0 auto' }}>
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem' }}>
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '0.5rem',
                border: '1px solid #ccc',
                borderRadius: '4px'
              }}
            />
          </div>
          
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem' }}>
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '0.5rem',
                border: '1px solid #ccc',
                borderRadius: '4px'
              }}
            />
          </div>
          
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="message" style={{ display: 'block', marginBottom: '0.5rem' }}>
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              style={{
                width: '100%',
                padding: '0.5rem',
                border: '1px solid #ccc',
                borderRadius: '4px',
                resize: 'vertical'
              }}
            />
          </div>
          
          <button 
            type="submit"
            style={{
              backgroundColor: '#646cff',
              color: 'white',
              border: 'none',
              padding: '0.75rem 1.5rem',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '1rem'
            }}
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact 
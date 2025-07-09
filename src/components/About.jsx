function About() {
  return (
    <div className="page">
      <h1>About Lyons on Track</h1>
      <div className="card">
        <h2>Project Information</h2>
        <p>
          This is a React application built with Vite that demonstrates routing capabilities
          using React Router DOM.
        </p>
        <p>
          The project showcases:
        </p>
        <ul style={{ textAlign: 'left', maxWidth: '400px', margin: '0 auto' }}>
          <li>React Router for navigation</li>
          <li>Component-based architecture</li>
          <li>Modern React patterns</li>
          <li>Responsive design</li>
        </ul>
      </div>
      
      <div className="card">
        <h3>Technologies Used</h3>
        <p>
          <strong>Frontend:</strong> React, Vite, React Router DOM
        </p>
        <p>
          <strong>Styling:</strong> CSS3 with modern features
        </p>
        <p>
          <strong>Deployment:</strong> GitHub Pages
        </p>
      </div>
    </div>
  )
}

export default About 
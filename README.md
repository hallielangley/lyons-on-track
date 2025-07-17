# Lyons on Track

A React-based web application built with Vite, featuring Material-UI components and React Router for navigation.

## Features

- 🚀 Built with React 19 and Vite for fast development
- 🎨 Material-UI components for modern, responsive design
- 🧭 React Router for client-side navigation
- 📱 Responsive design that works on all devices
- 🚀 Optimized for production with Vite build system

## Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (version 18 or higher)
- **npm** (comes with Node.js) or **yarn**

You can check your versions with:

```bash
node --version
npm --version
```

## Local Development

### 1. Clone the Repository

```bash
git clone https://github.com/hallielangley/lyons-on-track.git
cd lyons-on-track
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or another port if 5173 is busy).

### 4. Development Features

- **Hot Module Replacement (HMR)**: Changes are reflected immediately in the browser
- **ESLint**: Code linting is configured for React best practices
- **Fast Refresh**: React components update without losing state

### 5. Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

## Deployment

This project is configured to deploy to GitHub Pages.

### Automatic Deployment (Recommended)

1. **Push to GitHub**: Make sure your code is pushed to the main branch
2. **Deploy**: Run the deployment command:
   ```bash
   npm run deploy
   ```
   This will:
   - Build the project for production
   - Deploy to the `gh-pages` branch
   - Make the site available at `https://hallielangley.github.io/lyons-on-track`

### Manual Deployment

If you prefer to deploy manually:

1. **Build the project**:

   ```bash
   npm run build
   ```

2. **Deploy the `dist` folder** to your hosting provider of choice

### Deployment Configuration

The project is configured with:

- **Homepage**: Set to `https://hallielangley.github.io/lyons-on-track` in `package.json`
- **Build output**: The `dist` folder contains the production build
- **GitHub Pages**: Configured to serve from the `gh-pages` branch

## Project Structure

```
lyons-on-track/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── Home.jsx     # Home page component
│   │   ├── About.jsx    # About page component
│   │   ├── Contact.jsx  # Contact page component
│   │   └── Navigation.jsx # Navigation component
│   ├── assets/          # Images and other assets
│   ├── App.jsx          # Main App component
│   ├── App.css          # App styles
│   ├── index.css        # Global styles
│   └── main.jsx         # Entry point
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration
└── README.md           # This file
```

## Technologies Used

- **React 19** - UI library
- **Vite** - Build tool and dev server
- **Material-UI** - Component library
- **React Router** - Client-side routing
- **ESLint** - Code linting
- **GitHub Pages** - Hosting

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Troubleshooting

### Common Issues

**Port already in use**: If port 5173 is busy, Vite will automatically use the next available port.

**Build errors**: Make sure all dependencies are installed with `npm install`.

**Deployment issues**: Ensure you have write access to the repository and the `gh-pages` package is installed.

### Getting Help

If you encounter any issues:

1. Check the console for error messages
2. Ensure all dependencies are properly installed
3. Try clearing the `node_modules` folder and running `npm install` again

## License

This project is open source and available under the [MIT License](LICENSE).

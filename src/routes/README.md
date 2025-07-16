# Routing Layer

This directory contains the routing layer implementation following the pattern described in the Semaphore article. The routing layer separates routing logic from the main application components.

## Structure

- `index.jsx` - Main router configuration using `createBrowserRouter`
- `pages.jsx` - Page route definitions with lazy loading
- `utils.jsx` - Routing utilities and custom hooks
- `README.md` - This documentation

## Key Features

### 1. Router Configuration (`index.jsx`)
- Uses `createBrowserRouter` for better performance
- Implements error boundaries for route errors
- Includes Suspense for lazy loading support
- Centralized routing logic

### 2. Page Definitions (`pages.jsx`)
- Lazy-loaded components for better performance
- Centralized route definitions
- Easy to add new routes

### 3. Routing Utilities (`utils.jsx`)
- Custom `useAppNavigation` hook for enhanced navigation
- Route constants for maintainability
- Route metadata for additional information

## Usage

### Adding New Routes

1. Add the component to `pages.jsx`:
```jsx
const NewPage = lazy(() => import('../components/NewPage'))

export const pages = [
  // ... existing routes
  {
    path: '/new-page',
    element: <NewPage />,
  },
]
```

2. Add route constants to `utils.jsx`:
```jsx
export const ROUTES = {
  // ... existing routes
  NEW_PAGE: '/new-page',
}
```

### Using Navigation Utilities

```jsx
import { useAppNavigation, ROUTES } from '../routes/utils'

function MyComponent() {
  const { goTo, goBack, goHome, isActiveRoute } = useAppNavigation()
  
  return (
    <div>
      <button onClick={() => goTo(ROUTES.ABOUT)}>Go to About</button>
      <button onClick={goBack}>Go Back</button>
      <button onClick={goHome}>Go Home</button>
    </div>
  )
}
```

## Benefits

- **Separation of Concerns**: Routing logic is separated from components
- **Performance**: Lazy loading reduces initial bundle size
- **Maintainability**: Centralized route definitions and constants
- **Error Handling**: Built-in error boundaries for route errors
- **Type Safety**: Route constants prevent typos in route paths 
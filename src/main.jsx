import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './pages/About';
import App from './App';
import Restaurants from './pages/Restaurants';
import RestaurantDetails from './pages/RestaurantDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/restaurants',
    element: <Restaurants />,
  },
  {
    path: "restaurantDetails/:restaurantsId",
    element: <RestaurantDetails/>
  }
]);

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

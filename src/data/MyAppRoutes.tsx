import { Home } from '../components/Home';
import { About } from '../components/About';

export const MyAppRoutes = [
    {
      name: "Home", path: "/", element: <Home />,
    },
    { name: "About", path: "/about", element: <About /> },
  ]
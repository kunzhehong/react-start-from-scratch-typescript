import { Home } from '../components/Home';
import { About } from '../components/About';
import { Users } from '../components/Users';

export const MyAppRoutes = [
    { name: "Home", path: "/", element: <Home /> },
    { name: "About", path: "/about", element: <About name='Anonymous' /> },
    { name: "Users", path: "/users", element: <Users /> },
  ]
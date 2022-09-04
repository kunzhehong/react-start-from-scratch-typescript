import { useRoutes } from 'react-router-dom';
import { MyAppRoutes } from '../data/MyAppRoutes'

export function MyRoute() {
  // by using useRoutes hook, we don't need to declare react Class Component, but instead by function Component
  /* hook limitation: only can use in first layer of Component
  console.log({MyAppRoutes})
  let element = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    { path: "/about", element: <About /> },
  ]);
*/
  let element = useRoutes(MyAppRoutes);

  return element;
}

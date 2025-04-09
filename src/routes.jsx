import App from './App';
import ErrorPage from './pages/ErrorPage';
import Passions from './pages/Passions'
import Projects from './pages/Projects'
import About from './pages/About'
import Test from './pages/Test';
import { Children } from 'react';
// import components^

const routes = [
  {
    path: "test",
    element: <Test />
  },
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "passions", element: <Passions /> },
      { path: "projects", element: <Projects /> },
      { path: "about", element: <About /> },
    ],
  },


];

export default routes;
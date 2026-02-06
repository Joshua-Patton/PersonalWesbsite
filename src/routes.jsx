import App from './App';
import ErrorPage from './pages/ErrorPage';

import About from './pages/About';
import Test from './pages/Test';
import { Projects, Mathematics, Programming, Data} from './pages/Projects';
import { Blog, Writings, Reviews, Art } from './pages/Blog';
import Learning from './pages/Learning'


import { Navigate } from 'react-router-dom';
import { Children } from 'react';
import { MarkdownPage } from './components/Markdown';


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
      { path: "about", element: <About /> },
      {
        path: "Blog",
        element: <Blog />,
        children: [
          { index: true, element: <Navigate to="Writings" /> },
          { path: "writings", element: <Writings /> },
          { path: "writings/:name", element: <MarkdownPage /> },
          { path: "Reviews", element: <Reviews /> },
          { path: "Reviews/:name", element: <MarkdownPage /> },
          { path: "Art", element: <Art /> },
        ]
      },
      {
        path: "projects",
        element: <Projects />,
        children: [
          { index: true, element: <Navigate to="Mathematics" /> },
          { path: "Mathematics", element: <Mathematics /> },
          { path: "Programming", element: <Programming /> },
          { path: "Data", element: <Data /> },
          { path: ":category/:name", element: <MarkdownPage /> }
        ]
      },
      {
        path: "Learning",
        element: <Learning />,
      }
    ],
  },


];

export default routes;
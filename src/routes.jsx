import App from './App';
import ErrorPage from './pages/ErrorPage';

import About from './pages/About';
import Test from './pages/Test';
import { Projects } from './pages/Projects';
import { Blog, Writings, Reviews, Art } from './pages/Blog';
import Learning from './pages/Learning'

import DisplayProject from './components/DisplayProject';
import { Navigate } from 'react-router-dom';
import { Children } from 'react';
import { MarkdownPage } from './components/Markdown';
import { DisplaySummaries } from './components/DisplaySummaries';


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
        element: <Projects />, // the wrapper with filter & grid
        children: [
          { index: true, element: <DisplayProject /> }, // default child: show all projects
          { path: ":name", element: <MarkdownPage /> }  // show a single project when clicked
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
import App from './App';
import ErrorPage from './pages/ErrorPage';

import About from './pages/About';
import Test from './pages/Test';
import { Projects, Mathematics, WebDesign, SoftwareDev, DataScience } from './pages/Projects';
import { Passions, Writings, Summaries, Personal, Notes } from './pages/Passions';
import Learning from './pages/Learning'
// import components^

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
        path: "passions",
        element: <Passions />,
        children: [
          { index: true, element: <Navigate to="Writings" /> },
          { path: "writings", element: <Writings /> },
          { path: "writings/:name", element: <MarkdownPage /> },
          { path: "summaries", element: <Summaries /> },
          { path: "summaries/:name", element: <MarkdownPage /> },
          { path: "personal", element: <Personal /> },
          { path: "notes", element: <Notes /> }
        ]
      },
      {
        path: "projects",
        element: <Projects />,
        children: [
          { index: true, element: <Navigate to="Mathematics" /> },
          { path: "Mathematics", element: <Mathematics /> },
          { path: "Webdesign", element: <WebDesign /> },
          { path: "softwaredev", element: <SoftwareDev /> },
          { path: "DataScience", element: <DataScience /> },
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
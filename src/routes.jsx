import App from './App';
import ErrorPage from './pages/ErrorPage';

import About from './pages/About'
import Test from './pages/Test';
import {Projects, Mathematics, WebDesign, SoftwareDev, DataScience} from './pages/Projects';
import {Passions, Writings, Adventures, Personal, LearningMaterials} from './pages/Passions'
// import components^


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
      { path: "passions",
        element: <Passions />,
        children:[
          {path: "writings", element: <Writings />},
          {path: "adventures", element: <Adventures />},
          {path: "personal", element: <Personal />},
          {path: "learningMaterials", element: <LearningMaterials />}
        ]
      },
      { path: "projects", 
        element: <Projects />,
        children: [
          {path: "mathematics", element: <Mathematics />},
          {path: "Webdesign", element: <WebDesign />},
          {path: "softwaredev", element: <SoftwareDev />},
          {path: "DataScience", element: <DataScience />},
          {path: ":category/:name",element: <MarkdownPage />}
        ]
      }
    ],
  },


];

export default routes;
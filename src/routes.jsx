import App from './pages/App';
import ErrorPage from './pages/ErrorPage';
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
      { path: "passions", element: <ErrorPage /> },
    ],
  },


];

export default routes;
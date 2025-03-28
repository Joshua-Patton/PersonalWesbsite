import Homepage from './components/Homepage';
import ErrorPage from './components/ErrorPage';
// import components^

const routes = [
  {
    path: "/",
    element: <Homepage />,
    errorElement: <ErrorPage />,
  }
];

export default routes;
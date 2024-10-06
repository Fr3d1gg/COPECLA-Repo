import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './Routers/Home';
import About from './Routers/About';
import Services from './Routers/Services'
import Contact from './Routers/Contact';

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>Error</h1>
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <h1>Error</h1>
  },
  {
    path: "/services",
    element: <Services />,
    errorElement: <h1>Error</h1>
  },
  {
    path: "/contact",
    
    element: <Contact />,
    errorElement: <h1>Error</h1>
  },
])

function App() {
  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HomeCards from './components/HomeCards';
import JobsListings from './components/JobsListings';
import ViewAllJobs from './components/ViewAllJobs';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route index element={<h1>Hello World</h1>} />
  )
);

const App = () => {
  return <RouterProvider router={router} />
}

export default App


import { createBrowserRouter, RouteObject } from 'react-router-dom';
import RootLayout from '../layouts/RootLayout';
import Home from '../pages/Home';
import Blogs from '../pages/Blogs';
import ContactUs from '../pages/ContactUs';
import Services from '../pages/Services';
import FAQ from '../pages/FAQ';
import Gallery from '../pages/gallery/Gallery';
import Family from '../components/blogs/Family';
import Kids from '../components/blogs/Kids';
import ClassicalDance from '../components/blogs/ClassicalDance';
import Bussiness from '../components/blogs/Bussiness';
import BlogsLayout from '../layouts/BlogsLayout';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: 'blogs',
        element: <BlogsLayout />,
        children: [
           { index: true, element: <Blogs /> },
          { path: 'family-photo-shoot', element: <Family /> },
          { path: 'baby-portrait-shoot', element: <Kids /> },
          { path: 'classical-dance-photo-shoot', element: <ClassicalDance /> },
          { path: 'business-portrait-photography', element: <Bussiness /> },
        ],
      },
      { path: 'contact-us', element: <ContactUs /> },
      { path: 'services', element: <Services /> },
      { path: 'faq', element: <FAQ /> },
      { path: 'gallery/:category', element: <Gallery /> },
    ],
  },
  {
    path: '*',
    element: <div>404 - Page Not Found</div>,
  },
];
const router = createBrowserRouter(routes);

export default router;

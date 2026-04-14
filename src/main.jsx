import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router/dom';
import { createBrowserRouter } from 'react-router';
import RootLayout from './layout/RootLayout';
import Apps from './pages/apps/Apps';
import InstallApps from './pages/installApps/InstallApps';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import Homepage from './pages/homepage/Homepage';
import AppDetails from './pages/appDetails/AppDetails';
import InstalledAppsProvider from './context/InstalledAppsContext';
import Dashboard from './pages/dashboard/Dashboard';

const router = createBrowserRouter(
  [
    {
      path: '/',
      // Component: RootLayout
      element: <RootLayout></RootLayout>,
      children: [
        {
          // path: '/',
          index: true,
          element: <Homepage></Homepage>,
          loader: () => fetch('/data.json')
        },
        {
          path: '/apps',
          element: <Apps></Apps>
          
        },
        {
          path: '/apps/:id',
          element: <AppDetails></AppDetails>
        },
        {
          path: '/installedApps',
          element: <InstallApps></InstallApps>
        },
        {
          path: '/dashboard',
          element: <Dashboard></Dashboard>
        }
      ],
      errorElement: <NotFoundPage></NotFoundPage>
    },
   
  ]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <InstalledAppsProvider>
      <RouterProvider router={router} />
    </InstalledAppsProvider>
    
  </StrictMode>,
)

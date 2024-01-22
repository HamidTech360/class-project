import { createBrowserRouter } from 'react-router-dom'
import AppLayout from '../layout/appLayout'
import Dashboard from '../screens/dashboard'


const AllRoutes = createBrowserRouter([
 

  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '',
        element: <Dashboard/>,
      },
      {
        path: 'accounts',
        element: <h1>Accounts</h1>,
      },
      {
        path: 'settings',
        element: <h1>Settings</h1>,
      },
    
    ],
  },
])

export default AllRoutes

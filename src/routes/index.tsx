import { createBrowserRouter } from 'react-router-dom'
import AppLayout from '../layout/appLayout'
import Dashboard from '../screens/dashboard'
import Accounts from '../screens/accounts'


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
        element: <Accounts/>,
      },
      {
        path: 'settings',
        element: <h1>Settings</h1>,
      },
    
    ],
  },
])

export default AllRoutes

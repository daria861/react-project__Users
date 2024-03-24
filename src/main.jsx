import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import User from './Pages/User/User'
import AuthForm from './Pages/AuthForm/AuthForm'
import Users from './Pages/Users/Users'
import { CreateUserModal } from './components/CreateUserModal/CreateUserModal'
import RemoveUserModal from './components/RemoveUserModal/RemoveUserModal'
import { Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import ErrorPage from './Pages/ErrorPage/ErrorPage'


const Root = () => {
  return (
    <div className="container">
      <Outlet />
    </div>
  )
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />} >
      <Route index element={<AuthForm />} />
      <Route path='/users' element={<Users />} />
      <Route path='/userId' element={<User />} />
      <Route path='*' element={ErrorPage} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

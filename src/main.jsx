import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import User from './Pages/User/User'
import AuthForm from './Pages/AuthForm/AuthForm'
import Users from './Pages/Users/Users'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthForm/>
    <Users />
    <User />
  </React.StrictMode>
)

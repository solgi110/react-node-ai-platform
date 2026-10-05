import React, { useState } from 'react'
import { createBrowserRouter, Outlet, Navigate, useNavigate } from 'react-router-dom'
import Headers from '../components/Headers'
import Home from '../pages/Home'
import CreateAccount from '../auth/CreateAccount'
import SigninPage from '../auth/SigninPage'
import Login from '../auth/Login'
import Footer from '../components/Footer'
import PasswordRequest from '../auth/PasswordRequest'
import ConfirmPassword from '../auth/ConfirmPassword'
import Overview from '../pages/products/Overview'
import styled from 'styled-components'
import { Btn } from '../pages/Scale'
import { HomeContainer } from '../pages/Home'
import Feathers from '../pages/products/Feathers'
import Integration from '../pages/products/Integration'

export const router = createBrowserRouter(
  [
    {
      element: <AppLayout />,
      children: [
        { index: true, element: <Navigate to="/home" replace /> },
        { path: 'home', element: <Home /> }
      ]
    },
    {
      element: <FooterLayout />,
      children: [
        {
          path: 'product',
          children: [
            { path: 'overview', element: <Overview /> },
            { path: 'features', element: <Feathers /> },
            { path: 'integrations', element: <Integration /> },
            { path: 'automation', element: '' },
            { path: 'analytics', element: '' },
            { path: 'security', element: '' }
          ]
        },
        {
          path: 'solotion',
          children: [
            { path: 'sales', element: '' },
            { path: 'marketing', element: '' },
            { path: 'customer-service', element: '' },
            { path: 'finance', element: '' },
            { path: 'it', element: '' },
            { path: 'ecommerce', element: '' },
            { path: 'startups', element: '' }
          ]
        }
      ]
    },
    {
      element: <CreateAccount />,
      children: [
        { path: 'login', element: <Login /> },
        { path: 'new_password', element: <PasswordRequest /> },
        { path: 'confirm_password', element: <ConfirmPassword /> },
        { path: 'signup', element: <SigninPage /> }
      ]
    }
  ],

  {
    basename:  import.meta.env.BASE_URL,
  }
)

export default function AppLayout() {
  const [viewPort, setViewPort] = useState('')

  return (
    <>
      <Headers />
      <main>
        <Outlet context={{ setViewPort, viewPort }} />
      </main>
      {/* we need the secon Layout for its Componnents */}
      <Footer columns="1fr 1fr 1fr 1fr " viewPort={{ viewPort, setViewPort }} />
    </>
  )
}

export function FooterLayout() {
  const navigate = useNavigate()
  return (
    <HomeContainer>
      <Outlet />

      <Btn onClick={() => navigate('home')}>Home</Btn>
    </HomeContainer>
  )
}

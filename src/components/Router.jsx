import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Home'
import Shop from './Shop'
import ShoppingCart from './ShoppingCart'
import useProducts from '../hooks/useProducts'

function Router() {
  const { data, error, loading } = useProducts()
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: 'shop',
      element: <Shop data={data} error={error} loading={loading} />
    },
    {
      path: 'shop/shopping-cart',
      element: <ShoppingCart />
    }
  ])

  return <RouterProvider router={router} />
}

export default Router

import 'bootstrap/dist/css/bootstrap.min.css'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'

import { Reservations } from './components'

const queryClient = new QueryClient()

export const App = () => (
  <QueryClientProvider client={queryClient}>
    <Reservations />
  </QueryClientProvider>
)

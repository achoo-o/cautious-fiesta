import { createRoot } from 'react-dom/client'
import { router } from './components/router'
import { RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'


const root = createRoot(document.getElementById('app') as HTMLElement)
const queryClient = new QueryClient()

document.addEventListener('DOMContentLoaded', () => {
  root.render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
    <ReactQueryDevtools/>
  </QueryClientProvider>
  
)})
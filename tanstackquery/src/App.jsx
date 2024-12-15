import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainLayout } from './components/Layout/MainLayout';
import { Home,FetchData,FetchRQ , FetchIndu } from './pages';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { FetchOld } from './pages/FetchOld';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const router = createBrowserRouter([
  {
    path : '/',
    element : <MainLayout /> ,
    children : [
      {
        path : '/',
        element : <Home/>,

      },
      {
        path : "/tred",
        element : <FetchData/>
      },
      {
        path : '/data/using/old',
        element :  <FetchRQ/>
      },
      {
        path : '/data/using/rq',
        element : <FetchOld/>
      },
      {
        path : '/data/using/rq:id',
        element : <FetchIndu/>
      }
    ]
  }
])

function App() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient} >
    <RouterProvider router={router} >
    </RouterProvider>
    <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}


export default App

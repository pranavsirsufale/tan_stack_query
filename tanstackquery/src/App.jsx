import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainLayout } from './components/Layout/MainLayout';
import { Home,FetchData,FetchRQ } from './pages';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { FetchOld } from './pages/FetchOld';

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
        path : '/rq',
        element :  <FetchRQ/>
      },
      {
        path : '/data/fetch',
        element : <FetchOld/>
      }
    ]
  }
])

function App() {

  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient} >
    <RouterProvider router={router} >
      <h1>Hi there !I'm Pranav Sirsufale </h1>
    </RouterProvider>
    </QueryClientProvider>
  )
}

export default App

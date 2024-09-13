import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Error from './routes/Error/error.tsx'
import Cadastro from './routes/Cadastro/cadastro.tsx'
import Home from './routes/Home/index.tsx'
import Login from './routes/Login/login.tsx'
import SobreNos from './routes/SobreNos/sobre.tsx'
import ChatBot from './routes/Chatbot/chatbot.tsx'

import GlobalStyle from './global-styled.ts'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <Error/>,
    children:[
      {
        path:'/',
        element: <Home/>,
      },
      {
        path:'/sobre-nos',
        element: <SobreNos/>,
      },
      {
        path:'/login',
        element: <Login/>
      },
      {
        path:'/cadastro',
        element: <Cadastro/>
      },
      {
        path:'/chatbot',
        element: <ChatBot/>
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router = {router}/>
    <GlobalStyle/>
  </StrictMode>,
)


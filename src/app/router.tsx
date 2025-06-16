import { createBrowserRouter } from 'react-router'
import { MainPage } from '../pages/main'
import Layout from './layouts/Layout'
import { QuestionPage } from '../pages/question'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <MainPage /> },
      {
        path: '/questions/:id',
        element: <QuestionPage />,
      },
    ],
  },
])

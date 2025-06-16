import { Outlet } from 'react-router'
import { Header } from '../../widgets/header/ui'

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default Layout

import React from 'react'
import Footer from './Footer'
import NavigationBar from './NavigationBar'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <NavigationBar />
      <div className="flex justify-center bg-orange-50 mb-auto ">{children}</div>
      <Footer />
    </>
  )
}

export default Layout
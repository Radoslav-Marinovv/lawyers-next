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
      <main className="flex flex-col">{children}</main>
      <Footer />
    </>
  )
}

export default Layout
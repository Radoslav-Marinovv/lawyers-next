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
      <main className="flex flex-col min-h-full h-full w-full m-auto">{children}</main>
      <Footer />
    </>
  )
}

export default Layout
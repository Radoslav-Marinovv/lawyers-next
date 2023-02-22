import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import GPLogo from '../public/gp-nav.png'

const NavigationBar = () => {
  return (
    <div className="navbar bg-neutral-100 text-amber-200-content sticky top-0 z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link href={"/"}>За нас</Link></li>
            <li><Link href={"/legal-services"}>Сфери на дейност</Link></li>
            <li><Link href={"/news"}>Новини и публикации</Link></li>
            <li><Link href={"/contacts"}>Контакти</Link></li>
          </ul>
        </div>
        <Link href={"/"} className="btn btn-ghost normal-case text-xl lg:w-64 "><Image alt='Грошев и партньори' src={GPLogo} width={195} /></Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link href={"/"}>За нас</Link></li>
          <li><Link href={"/legal-services"}>Сфери на дейност</Link></li>
          <li><Link href={"/news"}>Новини и публикации</Link></li>
          <li><Link href={"/contacts"}>Контакти</Link></li>
        </ul>
      </div>
      <div className="navbar-end">
        <ul className="menu menu-horizontal px-1">
          <li tabIndex={0}>
            <a>
              Език
              <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
            </a>
            <ul className="p-2 bg-base-100">
              <li><a>Български</a></li>
              <li><a>English</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default NavigationBar
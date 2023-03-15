import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import GPLogo from '../public/gp-nav.png'

const NavigationBar = () => {
  return (
    <nav
      className="navbar text-amber-200-content sticky top-0 border-b-2 border-[#c7c0be] z-10  bg-gradient-to-r from-base-200  via-base-300 to-base-200">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <div tabIndex={0}
            className="menu menu-compact dropdown-content dropdown-bottom mt-3 px-4 py-2 shadow rounded-box w-52 bg-gradient-to-t from-base-200 via-base-300 to-base-200">
            <div className="py-2">
              <Link href="/">За нас</Link>
            </div>
            <hr />
            <div className="py-2">
              <Link href="/legal-services/#1" scroll={false}>Сфери на дейност</Link>
              <ul className="py-1 px-2">
                <li>
                  <Link href="/legal-services/#1" scroll={false}>Търговско право и несъстоятелност</Link>
                </li>
                <li>
                  <Link href="/legal-services/#2" scroll={false}>Търговски сделки</Link>
                </li>
                <li>
                  <Link href="/legal-services/#3" scroll={false}>Вещно право, недвижими имоти и строителство</Link>
                </li>
                <li>
                  <Link href="/legal-services/#4" scroll={false}>Семейно и наследствено право</Link>
                </li>
                <li>
                  <Link href="/legal-services/#5" scroll={false}>Банково и финансово право</Link>
                </li>
                <li>
                  <Link href="/legal-services/#6" scroll={false}>Застрахователно право</Link>
                </li>
                <li>
                  <Link href="/legal-services/#7" scroll={false}>Трудово право</Link>
                </li>
              </ul>
            </div>
            <hr />
            <div className="py-2">
              <Link href="/news">Новини и публикации</Link>
            </div>
            <hr />
            <div className="py-2">
              <Link href="/calculator">Калкулатор</Link>
            </div>
            <hr />
            <div className="py-2">
              <Link href="/contacts">Контакти</Link>
            </div>
          </div>
        </div>
        <Link href="/" className="btn btn-ghost normal-case text-xl lg:w-64 ">
          <Image alt='Грошев и партньори' src={GPLogo} width={195} />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li
            className='transition-all hover:scale-105 hover:font-semibold'>
            <Link href="/">За нас</Link>
          </li>
          <li
            tabIndex={0}
            className='transition-all'>
            <Link className='hover:font-semibold hover:scale-105' href="/legal-services/#1">
              Сфери на дейност
              <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
            </Link>
            <ul
              className="p-2 bg-base-100 bg-gradient-to-t from-base-200  via-base-300 to-base-200">
              <li className='transition-all hover:scale-105 hover:font-semibold'>
                <Link href="/legal-services/#1" scroll={false}>Търговско право и несъстоятелност</Link>
              </li>
              <li className='transition-all hover:scale-105 hover:font-semibold'>
                <Link href="/legal-services/#2" scroll={false}>Търговски сделки</Link>
              </li>
              <li className='transition-all hover:scale-105 hover:font-semibold'>
                <Link href="/legal-services/#3" scroll={false}>Вещно право, недвижими имоти и строителство</Link>
              </li>
              <li className='transition-all hover:scale-105 hover:font-semibold'>
                <Link href="/legal-services/#4" scroll={false}>Семейно и наследствено право</Link>
              </li>
              <li className='transition-all hover:scale-105 hover:font-semibold' >
                <Link href="/legal-services/#5" scroll={false}>Банково и финансово право</Link>
              </li>
              <li className='transition-all hover:scale-105 hover:font-semibold'>
                <Link href="/legal-services/#6" scroll={false}>Застрахователно право</Link>
              </li>
              <li className='transition-all hover:scale-105 hover:font-semibold'>
                <Link href="/legal-services/#7" scroll={false}>Трудово право</Link>
              </li>
            </ul>
          </li>
          <li
            className='transition-all hover:scale-105 hover:font-semibold'>
            <Link href="/news">Новини и публикации</Link>
          </li>
          <li
            className='transition-all hover:scale-105 hover:font-semibold'>
            <Link href="/calculator">Калкулатор</Link>
          </li>
          <li
            className='transition-all hover:scale-105 hover:font-semibold'>
            <Link href="/contacts">Контакти</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {/* <ul className="menu menu-horizontal px-1">

        </ul> */}
      </div>
    </nav>
  )
}

export default NavigationBar
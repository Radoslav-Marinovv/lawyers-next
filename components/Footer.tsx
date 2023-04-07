import Image from 'next/image'
import React from 'react'
import GPfooter from '../public/gp-footer.png'
import ContactsLinks from './ContactsLinks'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="footer p-10 text-amber-200-content mt-auto border-t-2 border-[#c7c0be] bg-blend-lighten md:bg-blend-darken bg-gradient-to-r from-base-200  via-base-300 to-base-200">
      <div>
        <ContactsLinks address={true} phone={true} email={true} />
      </div>
      <div>
        <Image alt='Groshev & Partners' src={GPfooter} width={200} className="fill-current" />
      </div>
      <div>
        <span className="footer-title">Social</span>
        <div className="grid grid-flow-col gap-4">
          <Link href='https://www.facebook.com/profile.php?id=100064201354907' target='_blank'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
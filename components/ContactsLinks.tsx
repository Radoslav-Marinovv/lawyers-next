import Link from 'next/link'
import React from 'react'

const ContactsLinks = () => {
  return (
    <>
      <p>България, София 1000, ул. &quot;Княз Борис I&quot; 85</p>
      <p>телефон за контакти
        <Link href='tel:+35929819687'>
          : 02 981 9687
        </Link>
      </p>
      <p>e-mail
        <Link href='mailto:office@legalbg.net'>
          : office@legalbg.net
        </Link>
      </p>
    </>
  )
}

export default ContactsLinks
import Link from 'next/link'
import React from 'react'

type Props = {
  address?: boolean;
  phone?: boolean;
  email?: boolean;
  large?: boolean;
  padding?: boolean;
}

const ContactsLinks = ({ address, phone, email, large, padding }: Props) => {

  const textStyle = large ? 'text-lg font-medium' : "text-base font-medium"
  const paddingStyle = padding ? 'p-2' : ''
  return (
    <>
      {address ?
        <div className={textStyle}>
          <p className={paddingStyle}>
            България, София 1000, ул. &quot;Княз Борис I&quot; 85
          </p>
        </div>
        : <div></div>
      }
      {phone ?
        <div className={textStyle}>
          <p className={paddingStyle}>Телефон за контакти:
            <Link
              href='tel:+35929819687'
              className='underline px-1'>
              02 981 9687
            </Link>
          </p>
        </div>
        : <div></div>
      }
      {email ?
        <div className={textStyle}>
          <p className={paddingStyle}>e-mail:
            <Link
              href='mailto:office@legalbg.net'
              className='underline px-1'>
              office@legalbg.net
            </Link>
          </p>
        </div>
        : <div></div>
      }
    </>
  )
}

export default ContactsLinks
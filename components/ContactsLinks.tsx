import Link from 'next/link'
import React from 'react'

type Props = {
  address?: boolean;
  phone?: boolean;
  email?: boolean;
}

const ContactsLinks = ({ address, phone, email }: Props) => {


  return (
    <>
      {address ?
        <div className='text-lg font-medium'>
          <p className='p-2'>
            България, София 1000, ул. &quot;Княз Борис I&quot; 85
          </p>
        </div>
        : <div></div>
      }
      {phone ?
        <div className='text-lg font-medium'>
          <p className='p-2 '>Телефон за контакти:
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
        <div className='text-lg font-medium'>
          <p className='p-2'>e-mail:
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
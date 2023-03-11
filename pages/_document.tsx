import Layout from '@/components/Layout'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html className='h-full w-full scroll-py-16 scroll-smooth overscroll-contain' lang="en">
      <Head />
      <body className='flex flex-col justify-between items-center min-h-full min-w-full'>
        <Layout>
          <Main />
          <NextScript />
        </Layout>
      </body>
    </Html>
  )
}

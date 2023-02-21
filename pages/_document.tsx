import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html className='min-h-full flex flex-col' lang="en">
      <Head />
      <body className='flex flex-col min-h-full text-center w-full'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

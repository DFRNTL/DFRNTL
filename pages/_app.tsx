import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import NavBarSide from '@/components/Navbar';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className='flex flex-row w-screen h-screen'>
      <NavBarSide/>
      <Component {...pageProps} />
    </div>
  )
}

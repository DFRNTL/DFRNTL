import Head from 'next/head';
import Image from 'next/image';
import NavBarSide from '@/components/Navbar';
import Hero from '@/components/hero';
import styles from '../styles/Home.module.css';

export default function Home () {
  return (
    <div className='snap-y w-full overflow-y-auto overflow-x-hidden snap-mandatory bg-black flex flex-col justify-start items-start'>
      <Hero />
    </div>
  )
}
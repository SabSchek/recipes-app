import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home({children}) {
  return (
    <>
      <Head></Head>
        {children}
      <footer></footer>
    </>
  )
}
s
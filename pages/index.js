import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Link href="/doctors/doctor"><h1>Doctor Page</h1></Link>
    </div>
  )
}

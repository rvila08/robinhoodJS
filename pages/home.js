import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <img src= "https://freesvg.org/img/ProfitChartCurve-Simpletutorials.net.png" alt= "Robinhood Logo" height = "200" width = "200"/> 
        <h1 className={styles.title}>
          Welcome to Robin's Hood!
        </h1>
        <div className='h-20'></div>
        <Link className= {styles.link} href="/sign-in">
          <a className={styles.button}>Click Here to Sign In</a>
        </Link>
       </main>
    </div>
  )
}

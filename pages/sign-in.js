import { useState }  from 'react';
import styles from '../styles/Home.module.css'

import { supabase } from '../client'

export default function SignIn(){
    const [email, setEmail] = useState('')
    const [submitted, setSubmitted] = useState(false)

    async function signIn(){
        if (!email) return 
        const {error, data } = await supabase.auth.signIn({
            email 
        })
        if(error) {
            console.log({ error })
        } else {
            setSubmitted(true)
        }
    }
    if (submitted) {
        return (
            <div style={{height: '100vh'}}> 
                <h1>Please check your email </h1>
            </div>
        )
    }
    return (
        <div className={styles.container}>
          <main className={styles.main}>
          <img src= "https://freesvg.org/img/ProfitChartCurve-Simpletutorials.net.png" alt= "Robinhood Logo" height = "200" width = "200"/> 
          <div className = {styles.div}></div>
            <h1 className={styles.title}>
              Type your email here
            </h1>
            <div className = {styles.div}></div>
            <input
              onChange={e => setEmail(e.target.value)}
              style={{ margin: 10 }}
            />
            <div className = {styles.div}></div>
            <button className={styles.button}onClick={() => signIn()}>Sign In</button>
           </main>
        </div>
      )

}
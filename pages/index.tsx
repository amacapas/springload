import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Contact Form</title>
        <meta name="description" content="Springload Contact Form" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Contact <span>Form</span>
        </h1>

        <div className={styles.grid}>
          <form action="/send-data-here" method="post">
            <div className={styles.inputGroup}>
              <label htmlFor={'email'}>Email:</label>
              <input type="text" id="email" name="email" placeholder={'Enter your email...'} />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" placeholder={'Enter your password...'} />
            </div>
            <div className={styles.inputGroup}>
              <label>Colour:</label>
              <div className={styles.radioGroup}>
                <div className={styles.radioGroupItems}>
                  <input type="radio" name="colour" value="blue" id="blue" /><label htmlFor="blue">Blue</label>
                </div>
                <div className={styles.radioGroupItems}>
                  <input type="radio" name="colour" value="green" id="green" /><label htmlFor="green">Green</label>
                </div>
                <div className={styles.radioGroupItems}>
                  <input type="radio" name="colour" value="red" id="red" /><label htmlFor="red">Red</label>
                </div>
                <div className={styles.radioGroupItems}>
                  <input type="radio" name="colour" value="black" id="black" /><label htmlFor="black">Black</label>
                </div>
              </div>
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="animals">Animals:</label>
              <div className={styles.radioGroup}>
                <div className={styles.radioGroupItems}>
                  <input type="checkbox" name="animals" value="bear" id="bear" /><label htmlFor="bear">Bear</label>
                </div>
                <div className={styles.radioGroupItems}>
                  <input type="checkbox" name="animals" value="tiger" id="tiger" /><label htmlFor="tiger">Tiger</label>
                </div>
                <div className={styles.radioGroupItems}>
                  <input type="checkbox" name="animals" value="snake" id="snake" /><label htmlFor="snake">Snake</label>
                </div>
                <div className={styles.radioGroupItems}>
                  <input type="checkbox" name="animals" value="black" id="donkey" /><label htmlFor="donkey">Donkey</label>
                </div>
              </div>
            </div>
            {/* if Tiger */}
            <div className={styles.inputGroup}>
              <label htmlFor={'tiger'}>Type of Tiger:</label>
              <input type="text" id="tiger" name="tiger" placeholder={'Enter type of Tiger...'} />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
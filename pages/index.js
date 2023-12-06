import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';
const Home = () => {
  return (
    <div className={styles.container}>
    <Layout>
        <main className={styles.main}>
            <h1 className={styles.title}>
                We'll be here soon
            </h1>
        </main>
        
    </Layout>
    </div>
  )
}

export default Home;
import styles from '../styles/Nav.module.css'

function Nav() {
  return (
    <div className={styles.container}>
        <div className={styles.subContainer}>
            <div className={styles.logo}></div>
            <div className={styles.posts}>home</div>
            <div className={styles.posts}>posts</div>
            <div className={styles.works}>works</div>
        </div>
        <div className={styles.lightDarkMode}>moon</div>
    </div>
  )
}

export default Nav
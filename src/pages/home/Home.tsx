import styles from './Home.module.scss';
function Home() {

  return (
    <>
      <header className="header">
        <div className="container">
          <nav className="nav">
            <div><a className="logotype">ROLIN</a></div>
            <ul className={styles.nav__list}>
              <li><a className="nav__item">О себе</a></li>
              <li><a className="nav__item">Навыки</a></li >
              <li><a className="nav__item">Примеры работ</a></li >
            </ul >
          </nav >
        </div >
      </header >
      <footer className="footer">
      </footer>
    </>
  )
}

export default Home

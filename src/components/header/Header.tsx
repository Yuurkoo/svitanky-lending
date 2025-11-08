import './Header.css'
import headerPhoto from '../../assets/header-photo.jpg'

function Header() {
  return (
    <header className="header">
      <div className="header-background">
        <img src={headerPhoto} alt="Хлопець з сонцем" className="header-image" />
        <div className="header-overlay"></div>
      </div>
      <div className="header-content">
        <h1 className="header-title">СВІТАНКИ ЗАПАЛЮЄШ ТИ!</h1>
        <h2 className="header-subtitle">Подаруй дитині зі Сходу надію</h2>
        <p className="header-text">
          Війна забирає дім, але не може забрати дитинство. Допоможіть нам створити безпечний простір для дітей, які втратили все. Ваш внесок — це їхній шанс на зцілення, дружбу та нове майбутнє.
        </p>
        <button className="header-button">ПОДАРУВАТИ НАДІЮ</button>
        <div className="scroll-arrow" onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </header>
  )
}

export default Header


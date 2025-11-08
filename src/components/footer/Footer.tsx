import './Footer.css'
import logo from "../../assets/logo.png"

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Ліва секція: Логотип та інформація */}
          <div className="footer-section footer-left">
            <div className="footer-logo">
         
              <div className="logo-text">
              <img src={logo} alt="Хлопець з сонцем" className="header-image" />
              </div>
            </div>
            <p className="footer-description">
              Благодійний фонд підтримки дітей та молоді зі Сходу України
            </p>
            <div className="footer-details">
              <p>Благодійний фонд "Світанки України"</p>
              <p>ЄДРПОУ: 12345678</p>
              <p>Дніпропетровська область, місто Верхньодніпровськ</p>
            </div>
          </div>

          {/* Середня секція: Контакти */}
          <div className="footer-section footer-center">
            <h3 className="footer-section-title">Контакти</h3>
            <div className="contact-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <a href="mailto:info@svitanky.ua" className="contact-link">info@svitanky.org.ua</a>
            </div>
            <div className="contact-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7292C21.7209 20.9842 21.5573 21.2128 21.3522 21.3992C21.1472 21.5856 20.9053 21.7257 20.6421 21.8105C20.3789 21.8952 20.1005 21.9226 19.825 21.8907C16.7426 21.4556 13.787 20.3136 11.19 18.5507C8.77381 16.9566 6.72533 14.9081 5.13127 12.4919C3.26797 9.89234 2.12674 6.93535 1.69293 3.85189C1.66105 3.57644 1.68844 3.29806 1.77315 3.03488C1.85786 2.77171 1.99794 2.52978 2.18434 2.32473C2.37074 2.11968 2.59929 1.95611 2.85428 1.84453C3.10928 1.73295 3.38501 1.67594 3.6635 1.67702H6.6635C7.19405 1.67664 7.70197 1.887 8.08329 2.26189C8.4646 2.63677 8.68843 3.14643 8.7135 3.67702C8.80702 5.00689 9.06756 6.31886 9.4885 7.58692C9.61913 7.96587 9.63874 8.37735 9.54479 8.76704C9.45083 9.15673 9.24688 9.50849 8.9585 9.77702L7.3285 11.407C9.30639 14.6645 12.3355 17.6936 15.593 19.6715L17.223 18.0415C17.4915 17.7531 17.8433 17.5492 18.233 17.4552C18.6227 17.3613 19.0342 17.3809 19.4131 17.5115C20.6812 17.9324 21.9932 18.193 23.3231 18.2865C23.8537 18.3116 24.3633 18.5354 24.7382 18.9167C25.1131 19.298 25.3235 19.806 25.3231 20.3365V23.3365H25.3231Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <a href="tel:+380123456789" className="contact-link">+38 (012) 345-67-89</a>
            </div>
          </div>

          {/* Права секція: Соціальні мережі */}
          <div className="footer-section footer-right">
            <h3 className="footer-section-title">Соціальні мережі</h3>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-button" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-button" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5932 15.1514 13.8416 15.5297C13.0901 15.9079 12.2385 16.0396 11.4078 15.9059C10.5771 15.7723 9.80976 15.3801 9.21484 14.7852C8.61993 14.1902 8.22774 13.4229 8.09408 12.5922C7.96042 11.7615 8.09209 10.9099 8.47034 10.1584C8.84859 9.40685 9.45419 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87659 12.63 8C13.4789 8.12588 14.2649 8.52146 14.8717 9.1283C15.4785 9.73515 15.8741 10.5211 16 11.37Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Роздільна лінія */}
        <div className="footer-divider"></div>

        {/* Копірайт */}
        <div className="footer-copyright">
          <p>© 2025 Світанки України. Всі права захищені.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer


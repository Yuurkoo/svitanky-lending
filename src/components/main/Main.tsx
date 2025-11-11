import { useState, useEffect } from 'react'
import './Main.css'

// Placeholder images - замініть на реальні шляхи до фото
// Ви можете додати фото в папку src/assets/images/ і імпортувати їх тут
const images = [
  'https://via.placeholder.com/800x500/2a4a4a/ffffff?text=Фото+1', // Placeholder для першого фото
  'https://via.placeholder.com/800x500/66b2ff/ffffff?text=Фото+2', // Placeholder для другого фото
  'https://via.placeholder.com/800x500/1e3a3a/ffffff?text=Фото+3', // Placeholder для третього фото
  'https://via.placeholder.com/800x500/2a4a4a/ffffff?text=Фото+4', // Placeholder для четвертого фото
]

function Main() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [selectedAmount, setSelectedAmount] = useState<number | null>(2000)
  const [customAmount, setCustomAmount] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length)
    }, 7000) // Автоматична зміна слайдів кожні 5 секунд

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, observerOptions)

    // Спостерігаємо за всіма елементами, які потребують анімації
    const animatedElements = document.querySelectorAll(`
      .about-card,
      .about-title,
      .slider-container,
      .home-block,
      .fundraising-title,
      .fundraising-subtitle,
      .fundraising-card,
      .values-title,
      .value-card,
      .donation-title,
      .donation-description,
      .donation-card
    `)
    
    animatedElements.forEach((element) => observer.observe(element))

    return () => {
      animatedElements.forEach((element) => observer.unobserve(element))
    }
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <>
    <section className="about-section">
      <div className="about-container">
        <h2 className="about-title">Хто ми? Спільнота, що стає домом</h2>
        
        <div className="slider-container">
          <div className="slider-wrapper">
            <button className="slider-button slider-button-prev" onClick={prevSlide} aria-label="Попередній слайд">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
            <div 
              className="slider"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {images.map((img, index) => (
                <div key={index} className="slide">
                  <img src={img} alt={`Слайд ${index + 1}`} />
                </div>
              ))}
            </div>
            
            <button className="slider-button slider-button-next" onClick={nextSlide} aria-label="Наступний слайд">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          
          <div className="slider-dots">
            {images.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Перейти до слайду ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="about-cards">
          <div className="about-card about-card-left">
            <p>
              «Світанки України» — це не просто організація. Це спільнота, яка збирає дітей і молодь зі Сходу України, даруючи їм простір для дружби, розвитку й духовного зростання.
            </p>
          </div>
          <div className="about-card about-card-right">
            <p>
              Наша історія почалася в селі Муратове на Луганщині. Через війну ми були змушені переїжджати: Покровськ, Добропілля... аж доки не знайшли новий дім у самому серці України — місті Верхньодніпровську.
            </p>
          </div>
          <div className="about-card about-card-left">
            <p>
              Тут ми отримали будівлю колишньої ораторії, в якій колись жив владика Андрій Сапеляк. Ми хочемо вдихнути в неї нове життя і зробити це місце справжнім домом для дітей, які втратили все.
            </p>
          </div>
        </div>

        <div className="home-block">
          <h3 className="home-block-title">Ми створюємо не просто прихисток, а дім, де:</h3>
          <ul className="home-block-list">
            <li>Діти зростають у спільноті з виховниками, як у великій родині.</li>
            <li>Є постійні кімнати для проживання, де панує затишок і безпека.</li>
            <li>Проходять літні табори, формаційні зустрічі та тематичні школи.</li>
            <li>Формується нова генерація лідерів, які стануть світлом для України.</li>
            <li>Щоденне життя сповнене сенсу: молитва, спільні трапези, обов'язки, ігри та щирі розмови.</li>
          </ul>
        </div>
      </div>
    </section>

      {/* Секція збору коштів */}
      <section className="fundraising-section">
        <div className="fundraising-container">
          <h2 className="fundraising-title">На що ми збираємо кошти?</h2>
          <p className="fundraising-subtitle">Кожен ваш донат — це конкретна допомога, яка змінює життя</p>
          
          <div className="fundraising-cards">
            {/* Картка 1: Світанкові Вікенди */}
            <div className="fundraising-card">
              <div className="card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 2V6M16 2V6M3 10H21M5 4H19C20.1046 4 21 4.89543 21 6V20C21 21.1046 20.1046 22 19 22H5C3.89543 22 3 21.1046 3 20V6C3 4.89543 3.89543 4 5 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="card-title">Світанкові Вікенди</h3>
              <div className="card-description">
                <p>Регулярні зустрічі на вихідних для дітей з різних куточків України.</p>
                <p>Це час для відпочинку, навчання та духовного збагачення.</p>
                <p>Програма включає молитву, ігри, творчі майстер-класи, спортивні змагання та добрі справи.</p>
              </div>
              <div className="card-benefits">
                <div className="benefits-header">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M8 11V8M8 5H8.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  <span>Що це дає дитині?</span>
                </div>
                <ul className="benefits-list">
                  <li>Відчуття спільноти та нормального життя.</li>
                  <li>Можливість відновити сили, знайти нових друзів і знову навчитися довіряти світу.</li>
                </ul>
              </div>
            </div>

            {/* Картка 2: Облаштування дому Світанків */}
            <div className="fundraising-card">
              <div className="card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 12L5 10M5 10L12 3L19 10M5 10V20C5 20.5523 5.44772 21 6 21H9M19 10L21 12M19 10V20C19 20.5523 18.5523 21 18 21H15M9 21C9.55228 21 10 20.5523 10 20V16C10 15.4477 10.4477 15 11 15H13C13.5523 15 14 15.4477 14 16V20C14 20.5523 14.4477 21 15 21H9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="card-title">Облаштування дому Світанків</h3>
              <div className="card-description">
                <p>Ремонт та облаштування приміщень для комфортного проживання дітей.</p>
                <p>Створення безпечного простору з усіма необхідними умовами для життя та навчання.</p>
                <p>Облаштування спальних кімнат, навчальних просторів, кухні та загальних зон.</p>
              </div>
              <div className="card-benefits">
                <div className="benefits-header">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M8 11V8M8 5H8.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  <span>Що це дає дитині?</span>
                </div>
                <ul className="benefits-list">
                  <li>Стабільне місце проживання з усіма зручностями.</li>
                  <li>Відчуття дому, де можна відпочити, вчитися та розвиватися.</li>
                </ul>
              </div>
            </div>

            {/* Картка 3: Організація зимових/літніх таборів */}
            <div className="fundraising-card">
              <div className="card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="card-title">Організація зимових/літніх таборів</h3>
              <div className="card-description">
                <p>Організація навчально-виховних таборів для дітей різного віку.</p>
                <p>Програми розвитку лідерських якостей, духовного зростання та відпочинку на природі.</p>
                <p>Творчі майстер-класи, спортивні активності, молитва та спільні трапези.</p>
              </div>
              <div className="card-benefits">
                <div className="benefits-header">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M8 11V8M8 5H8.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  <span>Що це дає дитині?</span>
                </div>
                <ul className="benefits-list">
                  <li>Незабутні спогади та досвід спільної роботи.</li>
                  <li>Розвиток навичок спілкування, лідерства та самостійності.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Секція наших цінностей */}
      <section className="values-section">
        <div className="values-container">
          <h2 className="values-title">НАШІ ЦІННОСТІ</h2>
          
          <div className="values-grid">
            {/* Картка 1: ДИТИНА */}
            <div className="value-card">
              <div className="value-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88M13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="value-card-title">ДИТИНА</h3>
              <p className="value-card-description">
                Кожна дитина — це унікальний дар. Ми створюємо середовище, де її голос почутий, а майбутнє підтримане.
              </p>
            </div>

            {/* Картка 2: ГІДНІСТЬ */}
            <div className="value-card">
              <div className="value-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L4 5V11C4 16.55 7.16 21.74 12 23C16.84 21.74 20 16.55 20 11V5L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="12" r="2" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="value-card-title">ГІДНІСТЬ</h3>
              <p className="value-card-description">
                Кожна людина заслуговує на повагу, свободу вибору та відчуття власної цінності.
              </p>
            </div>

            {/* Картка 3: МИЛОСЕРДЯ */}
            <div className="value-card">
              <div className="value-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.84 4.61C20.3292 4.099 19.7228 3.69364 19.0554 3.41708C18.3879 3.14052 17.6725 2.99817 16.95 2.99817C16.2275 2.99817 15.5121 3.14052 14.8446 3.41708C14.1772 3.69364 13.5708 4.099 13.06 4.61L12 5.67L10.94 4.61C9.9083 3.57831 8.50903 2.99871 7.05 2.99871C5.59096 2.99871 4.19169 3.57831 3.16 4.61C2.12831 5.64169 1.54871 7.04097 1.54871 8.5C1.54871 9.95903 2.12831 11.3583 3.16 12.39L4.22 13.45L12 21.23L19.78 13.45L20.84 12.39C21.351 11.8792 21.7564 11.2728 22.0329 10.6054C22.3095 9.93789 22.4518 9.22248 22.4518 8.5C22.4518 7.77752 22.3095 7.0621 22.0329 6.39464C21.7564 5.72718 21.351 5.12075 20.84 4.61Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="value-card-title">МИЛОСЕРДЯ</h3>
              <p className="value-card-description">
                Ми любимо не на словах, а діями, творячи простір співчуття, підтримки й взаємної допомоги.
              </p>
            </div>

            {/* Картка 4: ВІДПОВІДАЛЬНІСТЬ */}
            <div className="value-card">
              <div className="value-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 12L14 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10 12L12 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 10V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10 14L8 12L10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14 14L16 12L14 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3 className="value-card-title">ВІДПОВІДАЛЬНІСТЬ</h3>
              <p className="value-card-description">
                Ми вірні своїм обов'язкам і є надійною опорою для спільноти та одне для одного.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Секція форми пожертвування */}
      <section className="donation-section">
        <div className="donation-container">
          <h2 className="donation-title">Підтримати фонд</h2>
          <div className="donation-title-underline"></div>
          <p className="donation-description">
            Кожна ваша пожертва – це новий світанок для тих, хто цього потребує
          </p>

          <div className="donation-card">
            <h3 className="donation-card-title">Зробити внесок</h3>
            <p className="donation-instruction">Виберіть суму або введіть свою</p>

            <div className="donation-amounts">
              <button
                type="button"
                className={`amount-button ${selectedAmount === 100 ? 'selected' : ''}`}
                onClick={() => {
                  setSelectedAmount(100)
                  setCustomAmount('')
                }}
              >
                100 грн
              </button>
              <button
                type="button"
                className={`amount-button ${selectedAmount === 500 ? 'selected' : ''}`}
                onClick={() => {
                  setSelectedAmount(500)
                  setCustomAmount('')
                }}
              >
                500 грн
              </button>
              <button
                type="button"
                className={`amount-button ${selectedAmount === 1000 ? 'selected' : ''}`}
                onClick={() => {
                  setSelectedAmount(1000)
                  setCustomAmount('')
                }}
              >
                1000 грн
              </button>
              <button
                type="button"
                className={`amount-button ${selectedAmount === 2000 ? 'selected' : ''}`}
                onClick={() => {
                  setSelectedAmount(2000)
                  setCustomAmount('')
                }}
              >
                2000 грн
              </button>
            </div>

            <div className="custom-amount-group">
              <label htmlFor="custom-amount" className="form-label">Своя сума</label>
              <input
                type="number"
                id="custom-amount"
                className="custom-amount-input"
                placeholder="Введіть суму в грн"
                min="0"
                step="1"
                value={customAmount}
                onChange={(e) => {
                  const value = e.target.value
                  // Забороняємо мінусові значення
                  if (value === '' || (parseFloat(value) >= 0)) {
                    setCustomAmount(value)
                    setSelectedAmount(null)
                  }
                }}
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name" className="form-label">Ім'я</label>
                <input
                  type="text"
                  id="name"
                  className="form-input"
                  placeholder="Ваше ім'я"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  id="email"
                  className="form-input"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <button
              type="button"
              className="donation-submit-button"
              onClick={() => {
                const amount = customAmount ? parseInt(customAmount) : selectedAmount
                console.log('Donation:', { amount, name, email })
                // Тут буде логіка відправки форми
              }}
            >
              Підтримати зараз
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Main


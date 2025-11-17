import { useState, useEffect } from 'react'
import './Modal.css'

interface ModalSlide {
  image: string
  title?: string
  description?: string
}

interface ModalData {
  title: string
  slides: ModalSlide[]
  description: string[]
  menuPoints: string[]
}

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  data: ModalData | null
}

function Modal({ isOpen, onClose, data }: ModalProps) {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    if (isOpen) {
      setCurrentSlide(0)
      // Зберігаємо поточну позицію скролу
      const scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop
      
      // Блокуємо скрол на body
      document.body.style.position = 'fixed'
      document.body.style.top = `-${scrollY}px`
      document.body.style.left = '0'
      document.body.style.right = '0'
      document.body.style.width = '100%'
      document.body.style.overflow = 'hidden'
      document.body.style.height = '100%'
      
      // Блокуємо скрол на html для повної сумісності
      document.documentElement.style.overflow = 'hidden'
      document.documentElement.style.position = 'relative'
      document.documentElement.style.height = '100%'
      
      // Зберігаємо позицію в data-атрибуті для подальшого відновлення
      document.body.setAttribute('data-scroll-y', scrollY.toString())
      
      return () => {
        // Відновлюємо скрол
        const savedScrollY = document.body.getAttribute('data-scroll-y')
        document.body.style.position = ''
        document.body.style.top = ''
        document.body.style.left = ''
        document.body.style.right = ''
        document.body.style.width = ''
        document.body.style.overflow = ''
        document.body.style.height = ''
        document.body.removeAttribute('data-scroll-y')
        
        document.documentElement.style.overflow = ''
        document.documentElement.style.position = ''
        document.documentElement.style.height = ''
        
        // Відновлюємо позицію скролу
        if (savedScrollY) {
          window.scrollTo(0, parseInt(savedScrollY, 10))
        }
      }
    }
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      window.addEventListener('keydown', handleEscape)
    }

    return () => {
      window.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])

  const nextSlide = () => {
    if (!data) return
    setCurrentSlide((prev) => (prev + 1) % data.slides.length)
  }

  const prevSlide = () => {
    if (!data) return
    setCurrentSlide((prev) => (prev - 1 + data.slides.length) % data.slides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  if (!isOpen || !data) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Закрити">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <div className="modal-header">
          <h2 className="modal-title">{data.title}</h2>
        </div>

        <div className="modal-body">
          <div className="modal-slider-container">
            <div className="modal-slider-wrapper">
              <button 
                className="modal-slider-button modal-slider-button-prev" 
                onClick={prevSlide}
                aria-label="Попередній слайд"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              
              <div 
                className="modal-slider"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {data.slides.map((slide, index) => (
                  <div key={index} className="modal-slide">
                    <img src={slide.image} alt={slide.title || `Слайд ${index + 1}`} />
                    {slide.title && (
                      <div className="modal-slide-caption">
                        <h3>{slide.title}</h3>
                        {slide.description && <p>{slide.description}</p>}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              
              <button 
                className="modal-slider-button modal-slider-button-next" 
                onClick={nextSlide}
                aria-label="Наступний слайд"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            
            {data.slides.length > 1 && (
              <div className="modal-slider-dots">
                {data.slides.map((_, index) => (
                  <button
                    key={index}
                    className={`modal-dot ${index === currentSlide ? 'active' : ''}`}
                    onClick={() => goToSlide(index)}
                    aria-label={`Перейти до слайду ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>

          <div className="modal-description">
            {data.description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {data.menuPoints.length > 0 && (
            <div className="modal-menu-points">
              <h3 className="modal-menu-title">Основні пункти програми:</h3>
              <ul className="modal-menu-list">
                {data.menuPoints.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Modal


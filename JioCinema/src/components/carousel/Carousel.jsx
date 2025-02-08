import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './Carousel.module.css';

const slides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1',
    title: 'Experience Entertainment',
    description: 'Watch the latest movies and TV shows in stunning quality'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1585951237318-9ea5e175b891',
    title: 'Stream Anywhere',
    description: 'Your favorite content, available on any device'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1594909122845-11baa439b7bf',
    title: 'Premium Content',
    description: 'Exclusive shows and movies you wont find anywhere else'
  }
];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    let interval;
    
    if (isAutoPlaying) {
      interval = setInterval(() => {
        nextSlide();
      }, 5000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isAutoPlaying, nextSlide]);

  return (
    <div 
      className={styles.carousel}
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div 
        className={styles.slideContainer}
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className={styles.slide}>
            <img
              src={slide.image}
              alt={slide.title}
              className={styles.slideImage}
            />
            <div className={styles.slideContent}>
              <h2 className={styles.title}>{slide.title}</h2>
              <p className={styles.description}>{slide.description}</p>
            </div>
          </div>
        ))}
      </div>

      <button 
        className={`${styles.arrow} ${styles.prevArrow}`}
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>

      <button 
        className={`${styles.arrow} ${styles.nextArrow}`}
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      <div className={styles.navigation}>
        {slides.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${
              currentSlide === index ? styles.dotActive : ''
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
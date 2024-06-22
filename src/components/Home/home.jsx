import React, { useState } from 'react'
import Heading from '../all_shared/Heading'
import Hero_Section from './hero-section'
import Instructor from './instructor/instructor'
import Contenmporay from './contemporary'
import TestimonialCarousel from './testimonial/testimonial'
import Pricing_package from './pricing-package'
import { createContext } from 'react';
import ContactForm from './contact_form/ContactForm'


export const ThemeContext = createContext('light');

const Homecomponent = () => {
  const [theme, setTheme] = useState('transparent');
  return (
    <div className='header-container'>
      <ThemeContext.Provider value={theme}>
        <Hero_Section />
        <Instructor />
        <Contenmporay />
        <Pricing_package />
        <TestimonialCarousel />
        <ContactForm />
      </ThemeContext.Provider>
        
    </div>
  )
}

export default Homecomponent
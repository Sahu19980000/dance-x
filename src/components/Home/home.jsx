import React, { useEffect, useState, createContext } from 'react';
import Hero_Section from './hero-section';
import Instructor from './instructor/instructor';
import Contenmporay from './contemporary';
import TestimonialCarousel from './testimonial/testimonial';
import Pricing_package from './pricing-package';
import ContactForm from './contact_form/ContactForm';
import axios from 'axios';
import Loader from "../../assets/loading.gif";

export const ThemeContext = createContext('light');

const Homecomponent = () => {
  const [theme, setTheme] = useState('transparent');
  const [api_data, setApi_data] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const get_data = async () => {
      try {
        const { data } = await axios.get('https://dancex.in/api/courses/4BHwWEDe87vUoRG4NThx');
        setApi_data(data);
        setLoading(false);
        console.log(data);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };
    get_data();
  }, []);

  if (loading) {
    return <div className='loader-part'>
         <img src={Loader} />
    </div>;
  }

  if (!api_data) {
    return <div>Error loading data</div>;
  }

  return (
    <div className='header-container'>
      <ThemeContext.Provider value={[theme]}>
        <Hero_Section 
          creatorname={api_data.creatorName} 
          title={api_data.title} 
          para={api_data.description} 
        />
        <Instructor 
          creatorname={api_data.creatorName} 
          feature_data={api_data.keyLearnings} 
        />
        <Contenmporay />
        <Pricing_package />
        <TestimonialCarousel video={api_data.coursePreviewUrl}/>
        <ContactForm />
      </ThemeContext.Provider>
    </div>
  );
}

export default Homecomponent;

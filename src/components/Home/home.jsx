import React, { useEffect, useState, createContext } from 'react';
import Hero_Section from './hero-section';
import Instructor from './instructor/instructor';
import Contenmporay from './contemporary';
import TestimonialCarousel from './testimonial/testimonial';
import Pricing_package from './pricing-package';
import ContactForm from './contact_form/ContactForm';
import axios from 'axios';
import Loader from "../../assets/loader.gif";

export const ThemeContext = createContext('light');

const Homecomponent = () => {
  const [theme, setTheme] = useState('transparent');
  const [api_data, setApi_data] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const get_data = async () => {
      try {
        const { data } = await axios.get('https://dancex.in/api/courses/wm4rscT6Ly8JWq9EiFfV');
        setApi_data(data);
        setLoading(false);
        console.log('home data',api_data);
        console.log('home data',data);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };

    get_data();

  }, []);

  if (loading) {
    return <div className='loader-part'>
         <img src={Loader} width="450" height="350"/>
    </div>;
  }

  if (!api_data) {
    return <div>Error loading data</div>;
  }

  return (
    <div className='header-container'>
      <ThemeContext.Provider value={[theme]}>
        <Hero_Section 
          rating={api_data.ratings}
          creatorname={api_data.creatorName} 
          title={api_data.title} 
          para={api_data.description} 
        />
        <Instructor 
          creatorname={api_data.creatorName} 
          feature_data={api_data.keyLearnings} 
          video={api_data.coursePreviewUrl}
        />
        <Contenmporay rating={api_data.ratings} />
        <Pricing_package 
        title={api_data.packages[0].type}
        content={api_data.packages[0].subtitle}
        discountprice={api_data.packages[0].discountedPrice}
        price={api_data.packages[0].price}
        
        title2={api_data.packages[1].type}
        content2={api_data.packages[1].subtitle}
        discountprice2={api_data.packages[1].discountedPrice}
        price2={api_data.packages[1].price}
        />

        <TestimonialCarousel 
        video={api_data.coursePreviewUrl} 
        poster={api_data.courseThumbnailUrl}
        />

        <ContactForm />
      </ThemeContext.Provider>
    </div>
  );
}

export default Homecomponent;

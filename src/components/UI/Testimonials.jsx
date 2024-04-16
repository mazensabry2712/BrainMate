import React from 'react';
import "../../styles/testimonials.css";
import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Sliderimgs from './Sliderimgs.jsx';
// import CarouselRef from 'react';


const Testimonials = () => {
    const CarouselRef = useRef();
    const [width, setWidth] = useState(0);
    useEffect(() => {
        setWidth(CarouselRef.current.scrollWidth - CarouselRef.current.offsetWidth)
    }, [])
    return <div className="container" id='testimonials' >

         <h1 className='mate'> Choose your mate</h1> 
        <motion.div ref={CarouselRef} className="carousel" whileTap={{ cursor: 'grabbing' }} data-aos='fade-up'  data-aos-duration="1500">
            <motion.div drag='x' dragConstraints={{ right: 0, left: -width }} className='inner-carousel'>
                {Sliderimgs.map((Sliderimg) => (
                    <motion.div className='item' key={Sliderimg}>
                        <div className="slider__content">
                            <img src={Sliderimg} alt='carousel-img' />
                            <h2 className="slider__title">Facilities name</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                            <button className="choos__btn">Get Started</button>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    </div>
}

export default Testimonials

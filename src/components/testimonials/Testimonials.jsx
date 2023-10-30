import React from 'react'
import './testimonials.css'


import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



const Testimonials = () => {
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });




  return (
    <section id='testimonials'>
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <swiper className="container testimonials__container">

        <swiper-slide className="testimonial">

          <div className="client__avatar">
            {/****import your clients image here */}
            {/****generate this items dynamically */}
            {/******us e swiper js here also ay 2;30 up */}

            <img src="" alt="clients image" />

            
          </div>

          
            <h5 className='client__name'>Ernest</h5>
            <small className="client__review">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, eius pariatur. Omnis possimus explicabo, voluptatum hic mollitia voluptatibus quasi dicta!
            </small>
        
        </swiper-slide>
        <swiper-slide className="testimonial">

          <div className="client__avatar">
            {/****import your clients image here */}
            {/****generate this items dynamically */}
            {/******us e swiper js here also ay 2;30 up */}

            <img src="" alt="clients image" />

            
          </div>

          
            <h5 className='client__name'>Ernest</h5>
            <small className="client__review">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, eius pariatur. Omnis possimus explicabo, voluptatum hic mollitia voluptatibus quasi dicta!
            </small>
        
        </swiper-slide>

       

      </swiper>
    </section>
  )
}

export default Testimonials
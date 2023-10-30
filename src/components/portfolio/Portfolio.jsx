import React from 'react'
import profile from '../../Assets/profile.jpg'
import "./portfolio.css"



const Portfolio = () => {
  return (
   <section id='portfolio'>
    <h5>My recent Works</h5>
    <h2>Portfolio</h2>

    <div className="container portfolio__container">

      <article className="portfolio__item">

        <div className="portfolio__item-image">
          <img src={profile} alt="images1" />
        </div>
          <h3>This ia A portfoio item Title</h3>

         <div className="portfolio__item cta">
            <a href="github url" target="_blank" className='btn'>GitHub</a>
            <a href="use dribble url"  className='btn btn-primary'>live Demo</a>
         </div>

        
        </article>
        
      <article className="portfolio__item">

        <div className="portfolio__item-image">
          <img src="" alt="images1" />
        </div>
          <h3>This ia A portfoio item Title</h3>

         <div className="portfolio__item cta">
            <a href="github url" target="_blank" className='btn'>GitHub</a>
            <a href="use dribble url"  className='btn btn-primary'>live Demo</a>
         </div>

        
        </article>
        
      <article className="portfolio__item">

        <div className="portfolio__item-image">
          <img src="" alt="images1" />
        </div>
          <h3>This ia A portfoio item Title</h3>

         <div className="portfolio__item cta">
            <a href="github url" target="_blank" className='btn'>GitHub</a>
            <a href="use dribble url"  className='btn btn-primary'>live Demo</a>
         </div>

        
      </article>
      
      <article className="portfolio__item">

<div className="portfolio__item-image">
  <img src="" alt="images1" />
</div>
  <h3>This ia A portfoio item Title</h3>

 <div className="portfolio__item cta">
    <a href="github url" target="_blank" className='btn btn-primary'>GitHub</a>
    <a href="use dribble url"  className='btn'>live Demo</a>
 </div>


     </article>

     <article className="portfolio__item">

        <div className="portfolio__item-image">
          <img src="" alt="images1" />
        </div>
          <h3>This ia A portfoio item Title</h3>

         <div className="portfolio__item cta">
            <a href="github url" target="_blank" className='btn'>GitHub</a>
            <a href="use dribble url"  className='btn btn-primary'>live Demo</a>
         </div>

        
      </article>
      <article className="portfolio__item">

        <div className="portfolio__item-image">
          <img src="" alt="images1" />
        </div>
          <h3>This ia A portfoio item Title</h3>

         <div className="portfolio__item cta">
            <a href="github url" target="_blank" className='btn'>GitHub</a>
            <a href="use dribble url"  className='btn btn-primary'>live Demo</a>
         </div>

        
      </article>
      <article className="portfolio__item">

        <div className="portfolio__item-image">
          <img src="" alt="images1" />
        </div>
          <h3>This ia A portfoio item Title</h3>

         <div className="portfolio__item cta">
            <a href="github url" target="_blank" className='btn'>GitHub</a>
            <a href="use dribble url"  className='btn btn-primary'>live Demo</a>
         </div>

        
      </article>
      <article className="portfolio__item">

        <div className="portfolio__item-image">
          <img src="" alt="images1" />
        </div>
          <h3>This ia A portfoio item Title</h3>

         <div className="portfolio__item cta">
            <a href="github url" target="_blank" className='btn'>GitHub</a>
            <a href="use dribble url"  className='btn-primary'>live Demo</a>
         </div>

        
      </article>
      <article className="portfolio__item">

        <div className="portfolio__item-image">
          <img src="" alt="images1" />
        </div>
          <h3>This ia A portfoio item Title</h3>

         <div className="portfolio__item cta">
            <a href="github url" target="_blank" className='btn'>GitHub</a>
            <a href="use dribble url"  className='btn btn-primary'>live Demo</a>
         </div>

      </article>
     
    </div>
   </section>
  )
}

export default Portfolio
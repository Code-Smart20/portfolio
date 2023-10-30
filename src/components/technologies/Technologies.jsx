import React from 'react'
import "./technologies.css"

const Technologies = () => {
  return (
      <section id="technology">
          <h5>What Skills I Have</h5>
          <h2>My Experience</h2>

          <div className="container technology__container">
              <div className="technology__frontend">
                  <h3>Front End Development</h3>
                  <div className="technology__content">

                      <article className='technology__details'>
                          {/****check icon should come here */}
                          <div>
                              <h4>HTML</h4>
                              <small className='text-align'>
                                  Experienced
                              </small>

                          </div>
                      </article>

                      <article className='technology__details'>
                          {/****check icon should come here */}
                          <div>
                              <h4>CSS</h4>
                              <small className='text-align'>
                                  Experienced
                              </small>

                          </div>

                      </article>

                      <article className='technology__details'>
                          {/****check icon should come here */}
                          <div>
                              <h4>JAvAvscript</h4>
                              <small className='text-align'>
                                  Experienced
                              </small>

                          </div>

                      </article>
                      <article className='technology__details'>
                          {/****check icon should come here */}
                          <div>
                              <h4>HTML</h4>
                              <small className='text-align'>
                                  Experienced
                              </small>

                          </div>

                      </article>
                      <article className='technology__details'>
                          {/****check icon should come here */}
                          <div>
                              <h4>REACT</h4>
                              <small className='text-align'>
                                  Experienced
                              </small>

                          </div>

                      </article>
                      <article className='technology__details'>
                          {/****check icon should come here */}
                          <div>
                              <h4>HTML</h4>
                              <small className='text-align'>
                                  Experienced
                              </small>

                          </div>
                      </article>

                  </div>
              </div>

          </div>

      </section>

  )
}

export default Technologies
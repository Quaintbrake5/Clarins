/* eslint-disable no-unused-vars */
import React from 'react'
import '../components/styles/services.css'

const Services = () => {
  return (
    <>
      <section className='service-section' id='spa'>
        <div className='service-experience'>
            <div className='beauty-header'>
                <h1>Our exclusive services</h1>
            </div>

            <div className='beauty-subtext'>
                <p>CREATED TO MAKE YOUR LIFE MORE BEAUTIFUL</p>
            </div>

            <div className='services-container'>
                <ul className='services'>
                    <li className='service'>
                        <div className='service-tile-image'>
                            <a href='https://www.clarinsusa.com/en/gift-cards/'>
                                <img src='https://www.clarinsusa.com/on/demandware.static/-/Library-Sites-clarins-v3/default/dw7f5635b9/Homepage_CBA/Pushs_carousel/Dec_23/CBA_Services_Carousel_Gift_Card_01.jpg'></img>
                            </a>
                        </div>

                        <div className='service-image-text'>
                            <span>Gift Cards</span>
                        </div>

                        <div className='service-image-subtext'>
                            <span>Take the guesswork out of gifting, and let them choose their favorites</span>
                        </div>

                        <div className='service-link'>
                            <a href='https://www.clarinsusa.com/en/gift-cards/'>SHOP NOW</a>
                        </div>
                    </li>

                    <li className='service'>
                        <div className='service-tile-image'>
                            <a href='https://www.clarinsusa.com/en/rewards/'>
                                <img src='https://www.clarinsusa.com/on/demandware.static/-/Library-Sites-clarins-v3/default/dw23c486a4/Homepage_CBA/Pushs_carousel/CBA_HP_Pushs-Carousel-292x292_CLUB-CLARINS-2_INTE.jpg'></img>
                            </a>
                        </div>

                        <div className='service-image-text'>
                            <span>Club Clarins</span>
                        </div>

                        <div className='service-image-subtext'>
                            <span>Earn 10 points per dollar and redeem for rewards.</span>
                        </div>

                        <div className='service-link'>
                            <a href='https://www.clarinsusa.com/en/rewards/'>LEARN MORE</a>
                        </div>
                    </li>

                    <li className='service'>
                        <div className='service-tile-image'>
                            <a href='https://www.clarinsusa.com/en/rewards/'>
                                <img src='https://www.clarinsusa.com/on/demandware.static/-/Library-Sites-clarins-v3/default/dw113f36f0/Homepage_CBA/Pushs_carousel/Auto_Replenish-292x292.gif'></img>
                            </a>
                        </div>

                        <div className='service-image-text'>
                            <span>Subscription Service</span>
                        </div>

                        <div className='service-image-subtext'>
                            <span>Enjoy 10% off, free shipping, and 3 free samples with recurring orders.</span>
                        </div>

                        <div className='service-link'>
                            <a href='https://www.clarinsusa.com/en/rewards/'>LEARN MORE</a>
                        </div>
                    </li>

                    <li className='service'>
                        <div className='service-tile-image'>
                            <a href='https://www.clarinsusa.com/en/live-consultation/'>
                                <img src='https://www.clarinsusa.com/on/demandware.static/-/Library-Sites-clarins-v3/default/dwa29c9b69/Homepage_CBA/Pushs_carousel/live-consultation-homepage.jpg'></img>
                            </a>
                        </div>

                        <div className='service-image-text'>
                            <span>Live Consultation</span>
                        </div>

                        <div className='service-image-subtext'>
                            <span>Connect with a Beauty Coach for a complimentary consultation</span>
                        </div>

                        <div className='service-link'>
                            <a href='https://www.clarinsusa.com/en/live-consultation/'>BOOK NOW</a>
                        </div>
                    </li>
                </ul>

            </div>

        </div>
      </section>
    </>
  )
}

export default Services

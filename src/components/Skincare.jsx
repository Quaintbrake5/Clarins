/* eslint-disable no-unused-vars */
import React from 'react'
import '../components/styles/skincare.css'
import '../assets/Skincare1.webp'
import '../assets/Skincare2.jpg'

const Skincare = () => {
  return (
    <>
      <section className='skincare' id='skincare'>
        <div className='skincare-container'>
            <div className='skincare-header'>
                <h2>Your skin. Our expertise.</h2>
            </div>

            <div className='skincare-subheader'>
                <span>DISCOVER OUR PLANT-POWERED FORMULAS</span>
            </div>

            <div className='skincare-tiles'>
              <div className='tile-section'>
                <div className='tile-image'>
                  <a className='tile-link' href='https://www.clarinsusa.com/en/skincare-face/200/'>
                    <div>
                      <img src='https://www.clarinsusa.com/on/demandware.static/-/Library-Sites-clarins-v3/default/dw9d9d09ca/Homepage_CBA/Highlights/TRADE_ANIMATION/2024_ANTI_AGEING/CBA_HP_Highlight_ANTI-AGEING_2024_Multi-Active.jpg' alt='Face'></img>
                    </div>

                    <div className='tile-header'>
                      <span>FACE</span>
                      <p>SHOP NOW</p>
                    </div>
                  </a>
                </div>
                <br/>

                <div className='tile-image'>
                  <a className='tile-link' href='https://www.clarinsusa.com/en/makeup/600/'>
                    <div>
                      <img src='https://www.clarinsusa.com/on/demandware.static/-/Library-Sites-clarins-v3/default/dwadd9a1ed/Homepage_CBA/Highlights/PRODUCT_LAUNCH/2024_%20LIP_OIL_BALM/CBA_HP_Highlight_LIP-OIL-BALM_2024_Cherry.jpg' alt='Make Up'></img>
                    </div>

                    <div className='tile-header'>
                      <span>MAKE UP</span>
                      <p>SHOP NOW</p>
                    </div>
                  </a>
                </div>
                <br/>

                <div className='tile-image'>
                  <a className='tile-link' href='https://www.clarinsusa.com/en/skincare-body/300/'>
                    <div>
                      <img src='https://www.clarinsusa.com/on/demandware.static/-/Library-Sites-clarins-v3/en_US/dw83d274ca/homepage/Body-Fit-Active-Highlight.jpg' alt='Body'></img>
                    </div>

                    <div className='tile-header'>
                      <span>BODY</span>
                      <p>SHOP NOW</p>
                    </div>
                  </a>
                </div>
                <br/>

                <div className='tile-image'>
                  <a className='tile-link' href='https://www.clarinsusa.com/en/skincare-sun/400/'>
                    <div>
                      <img src='https://www.clarinsusa.com/on/demandware.static/-/Library-Sites-clarins-v3/default/dw47a2ce81/Homepage_CBA/Highlights/BRAND_CONTENT/2023_Body_and_Sun/CBA_HP_Highlights_Lifestyle_Body_Sun3.jpg' alt='Sun'></img>
                    </div>

                    <div className='tile-header'>
                      <span>SUN</span>
                      <p>SHOP NOW</p>
                    </div>
                  </a>
                </div>

              </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Skincare

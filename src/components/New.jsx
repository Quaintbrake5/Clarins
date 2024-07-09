/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import '../components/styles/new.css'
import '../assets/Image.webp'


const New = (props) => {
  return (
    <>
      <section className='new'>
        <div id='new' className='whats-new'>
          <div className='whats-new-inner'>
            <ul className='new-slider'>
              <li className='true'>
                <a href='https://www.clarinsusa.com/en/body-fit-active-skin-smoothing-expert/CS00952477.html' className='top-page'>
                  <div className='media-content'>
                    <img src={props.image} className='media-content-image' alt='Body Fit Active' title='Body Fit Active'></img>
                  </div>
                </a>

                <div className='page-comp'>
                  <div className='page-comp-container'>
                    <div className='page-comp-body'>
                      <div className='badge'>
                        <span>NEW</span>
                      </div>

                      <div className='badge-title'>
                        <span>Body Fit Active</span>
                        <br/>
                        <span>Skin Smoothing Expert</span>
                      </div>

                      <div className='badge-description'>
                        <p>Visibly lifts, tightens + tones.</p>
                      </div>

                      <div className='badge-experience'>
                        <a href='https://www.clarinsusa.com/en/body-fit-active-skin-smoothing-expert/CS00952477.html' className='badge-link'>
                          <span>Discover</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

              </li>
            </ul>
          </div>
        </div>

        <br/>

        <div className='experience'>
          <div className='homePage'>
            <div className='observer'>
              <div className='experience-region'>
                <ul className='region-slider'>
                  <li className='slide'>
                    <a className='link-outline' href='https://www.clarinsusa.com/en/offers/specialoffers/'>
                      <div className='reassurance'>
                        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <g fill="none" fillRule="evenodd">
                              <path fill="none" d="M0 24h24V0H0z"/>
                              <path d="M12 2c2.395 0 3.906 1.439 3.996 3.778L16 6v1h3c.51 0 .935.388.993.884L20 8v12c0 1.05-.82 1.918-1.851 1.994L18 22H6c-1.05 0-1.918-.82-1.994-1.851L4 20v-1.5c0-.28.22-.5.5-.5.249 0 .45.174.492.41L5 18.5V20c0 .51.388.935.884.993L6 21h12c.51 0 .935-.388.993-.884L19 20V8h-3v1.5c0 .28-.22.5-.5.5a.494.494 0 0 1-.492-.41L15 9.5V8h-3.5c-.28 0-.5-.22-.5-.5 0-.249.174-.45.41-.492L11.5 7H15V6c0-1.93-1.07-3-3-3-1.861 0-2.922.995-2.996 2.797L9 6v.5c0 .28-.22.5-.5.5a.494.494 0 0 1-.492-.41L8 6.5V6c0-2.47 1.53-4 4-4zM7.5 15c.28 0 .5.22.5.5 0 .249-.174.45-.41.492L7.5 16h-2c-.28 0-.5-.22-.5-.5 0-.249.174-.45.41-.492L5.5 15h2zm0-3c.28 0 .5.22.5.5 0 .249-.174.45-.41.492L7.5 13h-4c-.28 0-.5-.22-.5-.5 0-.249.174-.45.41-.492L3.5 12h4zm0-3c.28 0 .5.22.5.5 0 .249-.174.45-.41.492L7.5 10h-6c-.28 0-.5-.22-.5-.5 0-.249.174-.45.41-.492L1.5 9h6z" fill="#333"/>
                          </g>
                        </svg>

                      </div>

                      <div className='reassurance-text'>
                        <p>Free shipping with any $50 order</p>
                      </div>
                    </a>
                  </li>

                  <li className='slide'>
                    <a className='link-outline' href='https://www.clarinsusa.com/en/rewards/'>
                      <div className='reassurance'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.9601 16.6467C11.7629 16.3878 12.5065 15.9727 13.1482 15.4253C13.4785 15.1742 13.6402 15.7418 13.3374 16.1237C12.7147 16.8737 10.4578 18.3875 8.96468 17.5618C8.6516 17.3932 7.73302 16.6501 7.93256 14.8749C7.96719 14.5871 8.03058 14.3036 8.12178 14.0285C8.90275 11.603 10.0931 10.1443 11.6895 9.75899C11.8847 9.70755 12.0888 9.69969 12.2874 9.73596C12.486 9.77222 12.6741 9.85174 12.8386 9.96886C13.6574 10.564 13.4819 11.8129 13.1826 12.556C13.0897 12.8381 12.8867 12.6902 12.7216 12.5216C12.6906 12.4803 12.7216 12.3909 12.7216 12.3909C12.761 12.1891 12.7817 11.9841 12.7835 11.7785C12.811 9.65578 11.7204 10.0755 10.6126 11.4345C9.62523 12.8966 9.12294 14.7923 9.23991 15.6145C9.37064 16.5297 10.1069 16.9184 10.9601 16.6467Z" fill="#333333"/>
                          <path fillRule="evenodd" clipRule="evenodd" d="M20.1034 2.15142C19.474 1.95774 18.8034 1.94969 18.1696 2.12826L18.1663 2.12919C16.6883 2.557 15.0192 3.81201 13.6698 4.99558C12.6215 5.91508 11.7219 6.8322 11.1987 7.37538C10.3336 6.23299 9.14507 5.37729 7.93388 4.86291C6.57959 4.28777 5.11811 4.10802 4.00348 4.5239L3.99255 4.52797L3.98184 4.53258C3.56909 4.71006 3.20239 4.981 2.90926 5.32401C2.61658 5.6665 2.40487 6.07188 2.28955 6.50909C1.51341 9.3692 2.37952 12.6376 3.91305 15.4052C5.44669 18.1731 7.70681 20.548 9.87038 21.605L9.88589 21.6129C10.1022 21.7229 10.3047 21.8259 10.487 21.8947C10.6826 21.9685 10.8963 22.02 11.1329 21.9925C11.3691 21.9651 11.5744 21.8653 11.767 21.7336C11.9554 21.6048 12.1582 21.4267 12.389 21.2105C12.8798 20.7507 14.9424 18.3941 17.0199 15.547C18.0625 14.1181 19.1172 12.5545 19.9861 11.0311C20.8515 9.51396 21.5485 8.0095 21.854 6.70406L21.8562 6.6939C22.4701 3.78532 20.9696 2.43806 20.1131 2.15449L20.1034 2.15142ZM14.2979 5.71156C15.6453 4.52967 17.1745 3.40835 18.4294 3.0445C18.8846 2.9166 19.3657 2.92198 19.818 3.06003C20.1915 3.18703 21.4405 4.04215 20.9254 6.49215C20.6504 7.66389 20.0067 9.07281 19.1588 10.5593C18.3132 12.0417 17.2803 13.5743 16.2506 14.9856C14.1834 17.8187 12.1625 20.1176 11.7378 20.5155C11.511 20.728 11.3533 20.8628 11.2296 20.9474C11.1101 21.0291 11.0516 21.0432 11.023 21.0465C10.9949 21.0497 10.9431 21.0489 10.8233 21.0037C10.6955 20.9554 10.5393 20.8767 10.2985 20.7543L10.2915 20.7508C8.35469 19.8058 6.2185 17.601 4.74609 14.9437C3.27305 12.2852 2.52337 9.2816 3.20911 6.75695L3.21009 6.75329C3.28909 6.45301 3.43407 6.17585 3.63328 5.94274C3.82991 5.71265 4.07416 5.53154 4.34739 5.41213C5.14821 5.11828 6.3365 5.21924 7.5616 5.73952C8.77915 6.25659 9.95553 7.15716 10.7141 8.34451L10.7327 8.37349L10.7551 8.39951C10.8029 8.45471 10.8621 8.49961 10.9294 8.53061C10.9967 8.56161 11.0702 8.57782 11.1447 8.57782C11.2193 8.57782 11.2928 8.56161 11.36 8.53061C11.4207 8.50268 11.4748 8.46345 11.5199 8.41555C11.5668 8.36717 11.6249 8.30661 11.6932 8.23538C12.1685 7.73986 13.1387 6.72826 14.2979 5.71156Z" fill="#333333"/>
                        </svg>
                      </div>

                      <div className='reassurance-text'>
                        <p>Earn 10 points per dollar and redeem for rewards</p>
                      </div>
                    </a>
                  </li>

                  <li className='slide'>
                    <a className='link-outline' href='https://www.clarinsusa.com/en/samples/'>
                      <div className='reassurance'>
                        <img src='https://www.clarinsusa.com/on/demandware.static/-/Library-Sites-clarins-v3/default/dw1820564d/CLP%20-%20Template/Products%20Samples.png'></img>
                      </div>

                      <div className='reassurance-text'>
                        <p>Choose 3 free samples with any order</p>
                      </div>
                    </a>
                  </li>

                  <li className='slide'>
                    <a className='link-outline' href='https://www.clarinsusa.com/en/subscription-service/'>
                      <div className='reassurance'>
                        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <g fill="none" fillRule="evenodd">
                              <path fill="none" d="M0 24h24V0H0z"/>
                              <path d="M12 1.5c5.79 0 10.5 4.71 10.5 10.5 0 2.495-.877 4.857-2.468 6.745l-.221.255H21.5a.5.5 0 0 1 .09.992L21.5 20h-3a.5.5 0 0 1-.492-.41L18 19.5v-3a.5.5 0 0 1 .992-.09l.008.09v1.908A9.44 9.44 0 0 0 21.5 12c0-5.238-4.262-9.5-9.5-9.5S2.5 6.762 2.5 12s4.262 9.5 9.5 9.5a.5.5 0 0 1 0 1C6.21 22.5 1.5 17.79 1.5 12S6.21 1.5 12 1.5zM14.386 5a1 1 0 0 1 1 .99l-.006.117L14.25 16.5H14v1.929c0 .284-.181.52-.42.564L13.5 19h-3c-.249 0-.455-.207-.494-.478l-.007-.093V16.5h-.25L8.62 6.107a1 1 0 0 1 .877-1.1L9.614 5h4.771zM13 16.5h-2V18h2v-1.5zM14.385 6H9.614l1.033 9.5h2.704L14.386 6z" fill="#333"/>
                          </g>
                        </svg>
                      </div>

                      <div className='reassurance-text'>
                        <p>Subscribe for 10% off and free shipping</p>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default New;

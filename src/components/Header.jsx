/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, {useState} from 'react'
import '../components/styles/header.css'
// Please edit the code so that the menu button, when clicked can open a side nav

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    setIsSidePanelOpen(!isSidePanelOpen);
  };

  return (
    <>
      {/* Header Bar */}
      <section className='header-section' id='main-header'>
        <div className='header'>
          <div className='header-content'>
            <ul className='list'>
              {/* Hamburger button */}
              <li>
                <div className='hamburger' tabIndex= '-1'>
                  <div className='header-menu-burger-icon'>
                    <button className='hamburger-menu' onClick={handleToggle} title='Menu'>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" tabIndex="-1">
                        <title>Menu</title>
                        <path fillRule="evenodd" clipRule="evenodd" d="M20 19C20.276 19 20.5 19.224 20.5 19.5C20.5 19.7453 20.323 19.9496 20.0898 19.9919L20 20H4C3.724 20 3.5 19.776 3.5 19.5C3.5 19.2547 3.67699 19.0504 3.91016 19.0081L4 19H20ZM20 11.5C20.276 11.5 20.5 11.724 20.5 12C20.5 12.2453 20.323 12.4496 20.0898 12.4919L20 12.5H4C3.724 12.5 3.5 12.276 3.5 12C3.5 11.7547 3.67699 11.5504 3.91016 11.5081L4 11.5H20ZM20 4C20.276 4 20.5 4.224 20.5 4.5C20.5 4.74533 20.323 4.94958 20.0898 4.99194L20 5H4C3.724 5 3.5 4.776 3.5 4.5C3.5 4.25467 3.67699 4.05042 3.91016 4.00806L4 4H20Z" fill="#333333"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </li>

              {/* Search Box */}
              <li>
                <div className='search-box'>
                  <form className='search-form' role='search' action=''>
                      {/* <label className='hidden'>Search</label> */}
                      <input id='search' type='search' className='search-query' aria-label='Search'  role='button' autoComplete='off' placeholder='Search...'></input>
                      <button type='button' className='search-button' aria-label='Search' role='button'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <title>Search</title>
                          <path fillRule="evenodd" clipRule="evenodd" d="M10 17C6.141 17 3 13.859 3 10C3 6.141 6.141 3 10 3C13.859 3 17 6.141 17 10C17 13.859 13.859 17 10 17ZM21.854 21.146L15.993 15.286C17.238 13.876 18 12.029 18 10C18 5.582 14.418 2 10 2C5.582 2 2 5.582 2 10C2 14.418 5.582 18 10 18C12.029 18 13.876 17.238 15.286 15.993L21.146 21.854C21.244 21.951 21.372 22 21.5 22C21.628 22 21.756 21.951 21.854 21.854C22.049 21.658 22.049 21.342 21.854 21.146Z" fill="#333333"></path>
                        </svg>
                      </button>
                  </form>
                </div>
              </li>

              {/* Logo */}
              <li>
                <div className='header-logo-wrapper'>
                  <div className='header-logo'>
                    <a className='logo' href='/'>
                      <img alt='Clarins' src='https://www.clarinsusa.com/on/demandware.static/-/Library-Sites-clarins-v3/default/dw7e25df34/images/logo-cba-70years.svg'></img>
                    </a>
                  </div>
                </div>
              </li>

              <div className='right'>
              {/* Contact Us */}
              <li>
                <div className='header-contact-us'>
                  <div className='contact'>
                    <a href='https://www.clarinsusa.com/en/customer-service-contact' title='Help'>
                      <div className='contact-icon'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M16 2C17.0538 2 17.9181 2.8164 17.9945 3.85081L18 4V20C18 21.0538 17.1836 21.9181 16.1492 21.9945L16 22H8C6.94618 22 6.08188 21.1836 6.00549 20.1492L6 20V4C6 2.94618 6.8164 2.08188 7.85081 2.00549L8 2H16ZM16 3H8C7.48743 3 7.06453 3.38715 7.00673 3.88362L7 4V20C7 20.5116 7.38629 20.9353 7.88343 20.9933L8 21H16C16.5126 21 16.9355 20.6129 16.9933 20.1164L17 20V4C17 3.48836 16.6137 3.06466 16.1166 3.00675L16 3ZM12 18C12.256 18 12.512 18.098 12.707 18.293C13.098 18.684 13.098 19.316 12.707 19.707C12.512 19.902 12.256 20 12 20C11.744 20 11.488 19.902 11.293 19.707C10.902 19.316 10.902 18.684 11.293 18.293C11.488 18.098 11.744 18 12 18ZM14.5 4C14.776 4 15 4.224 15 4.5C15 4.74533 14.823 4.94958 14.5898 4.99194L14.5 5H9.5C9.224 5 9 4.776 9 4.5C9 4.25467 9.17699 4.05042 9.41016 4.00806L9.5 4H14.5Z" fill="#333333" stroke="black" strokeWidth="0"></path>
                        </svg>
                      </div>

                      <div className='contact-text'>HELP</div>
                    </a>
                  </div>
                </div>
              </li>

              {/* Log In */}
              <li>
                <div className='header-login'>
                  <div className='login' role='menu'>
                    <a href='https://www.clarinsusa.com/en/account' role='menuitem' title='Log In'>
                      <div className='login-icon'>
                        <div className='login-icon-wrap'>
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M17 7C17 9.757 14.757 12 12 12C9.243 12 7 9.757 7 7C7 4.243 9.243 2 12 2C14.757 2 17 4.243 17 7ZM16 7C16 4.794 14.206 3 12 3C9.794 3 8 4.794 8 7C8 9.206 9.794 11 12 11C14.206 11 16 9.206 16 7Z" fill="#333333" stroke="black" strokeWidth="0"></path>
                            <path d="M4 22C4 16.701 7.29 13 12 13C16.71 13 20 16.701 20 22C20 22.276 19.776 22.5 19.5 22.5C19.224 22.5 19 22.276 19 22C19 17.29 16.121 14 12 14C7.879 14 5 17.29 5 22C5 22.276 4.776 22.5 4.5 22.5C4.224 22.5 4 22.276 4 22Z" fill="#333333" stroke="black" strokeWidth="0"></path>
                          </svg>
                        </div>
                      </div>

                      <div className='login-text'>LOG IN</div>
                    </a>
                  </div>
                </div>
              </li>

              {/* Bag */}
              <li>
                <div className='header-mini-bag' role='menu'>
                <a href='https://www.clarinsusa.com/en/my-shopping-bag' role='menuitem' className='minibag' aria-controls='minibag-flyout-items'>
                  <div className='minibag-icon'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M19 20C19 20.551 18.552 21 18 21H6C5.448 21 5 20.551 5 20V8H8V9.5C8 9.776 8.224 10 8.5 10C8.776 10 9 9.776 9 9.5V8H15V9.5C15 9.776 15.224 10 15.5 10C15.776 10 16 9.776 16 9.5V8H19V20ZM9 6C9 4.065 10.065 3 12 3C13.935 3 15 4.065 15 6V7H9V6ZM19 7H16V6C16 3.532 14.468 2 12 2C9.532 2 8 3.532 8 6V7H5C4.447 7 4 7.447 4 8V20C4 21.104 4.896 22 6 22H18C19.104 22 20 21.104 20 20V8C20 7.447 19.553 7 19 7Z" fill="#333333" stroke="black" strokeWidth="0"></path>
                    </svg>
                  </div>

                  <div className='minibag-text'>BAG</div>
                </a>
                </div>
              </li>
              </div>

            </ul>
            <nav>
              <ul className='nav'>
                <li className='nav-link'>
                    <a href='#new'>WHAT'S NEW</a>
                </li>

                <li className='nav-link'>
                    <a href='#skincare'>SKINCARE</a>
                </li>

                <li className='nav-link'>
                    <a href='#makeup'>MAKEUP</a>
                </li>

                <li className='nav-link'>
                    <a href='#gifts'>GIFTS</a>
                </li>

                <li className='nav-link'>
                    <a href='#offer'>OFFERS</a>
                </li>

                <li className='nav-link'>
                    <a href='#spa'>SPA & SERVICES</a>
                </li>

                <li className='nav-link'>
                    <a href='#value'>OUR VALUES</a>
                </li>
              </ul>
            </nav>
            

            <div className={'page-content'}>           

              {/* Side Panel */}
              <div className={`side-panel ${isSidePanelOpen? 'open' : 'collapsed'}`}>
                <div className='side-panel-content'>
                  {/* Add your side panel content here */}
                  <div id='hamburger' className={`hamburger-nav ${isOpen ? 'open' : ''}`}>
                    <div className='hamburger-content'>
                      <ul>
                        <li>
                          <div className='hamburger-content-header'>
                            <div className='content-upper'>
                              <a href='#' className='btnClose' onClick={handleToggle}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                                  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                                </svg>

                                <span className='content-upper-text'>Menu</span>
                              </a>
                            </div>
                          </div>
                        </li>

                        <li>
                          <div className='hamburger-content-body'>
                            <div className='content-body-inner'>
                              <div className='content-upper'>
                                <div className='content-upper-element'>
                                  <div className='upper-element'>
                                    <a href='https://www.clarinsusa.com/on/demandware.store/Sites-clarinsus-Site/en_US/Stores-Find'>
                                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
                                        <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
                                        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                                      </svg>

                                      <span className='content-text'>Find a Store</span>
                                    </a>
                                  </div>
                                </div>

                              </div>
                            </div>
                          </div>
                        </li>

                        <li>
                          <div className='hamburger-content-body'>
                            <div className='content-body-inner'>
                              <div className='content-upper'>
                                <div className='content-upper-element'>
                                  <div className='upper-element'>
                                    <a href='https://www.clarinsusa.com/en/account'>
                                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
                                      </svg>

                                      <span className='content-text'>Log In</span>
                                    </a>
                                  </div>
                                </div>

                              </div>
                            </div>
                          </div>
                        </li>

                      
                        <li>
                          <div className='hamburger-content-body'>
                            <div className='content-body-inner'>
                              <div className='content-upper'>
                                <div className='content-upper-element'>
                                  <div className='upper-element'>
                                    <a href='https://www.clarinsusa.com/en/rewards/' className='reward'>
                                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.9601 16.6467C11.7629 16.3878 12.5065 15.9727 13.1482 15.4253C13.4785 15.1742 13.6402 15.7418 13.3374 16.1237C12.7147 16.8737 10.4578 18.3875 8.96468 17.5618C8.6516 17.3932 7.73302 16.6501 7.93256 14.8749C7.96719 14.5871 8.03058 14.3036 8.12178 14.0285C8.90275 11.603 10.0931 10.1443 11.6895 9.75899C11.8847 9.70755 12.0888 9.69969 12.2874 9.73596C12.486 9.77222 12.6741 9.85174 12.8386 9.96886C13.6574 10.564 13.4819 11.8129 13.1826 12.556C13.0897 12.8381 12.8867 12.6902 12.7216 12.5216C12.6906 12.4803 12.7216 12.3909 12.7216 12.3909C12.761 12.1891 12.7817 11.9841 12.7835 11.7785C12.811 9.65578 11.7204 10.0755 10.6126 11.4345C9.62523 12.8966 9.12294 14.7923 9.23991 15.6145C9.37064 16.5297 10.1069 16.9184 10.9601 16.6467Z" fill="#333333"/>
                                        <path fillRule="evenodd" clipRule="evenodd" d="M20.1034 2.15142C19.474 1.95774 18.8034 1.94969 18.1696 2.12826L18.1663 2.12919C16.6883 2.557 15.0192 3.81201 13.6698 4.99558C12.6215 5.91508 11.7219 6.8322 11.1987 7.37538C10.3336 6.23299 9.14507 5.37729 7.93388 4.86291C6.57959 4.28777 5.11811 4.10802 4.00348 4.5239L3.99255 4.52797L3.98184 4.53258C3.56909 4.71006 3.20239 4.981 2.90926 5.32401C2.61658 5.6665 2.40487 6.07188 2.28955 6.50909C1.51341 9.3692 2.37952 12.6376 3.91305 15.4052C5.44669 18.1731 7.70681 20.548 9.87038 21.605L9.88589 21.6129C10.1022 21.7229 10.3047 21.8259 10.487 21.8947C10.6826 21.9685 10.8963 22.02 11.1329 21.9925C11.3691 21.9651 11.5744 21.8653 11.767 21.7336C11.9554 21.6048 12.1582 21.4267 12.389 21.2105C12.8798 20.7507 14.9424 18.3941 17.0199 15.547C18.0625 14.1181 19.1172 12.5545 19.9861 11.0311C20.8515 9.51396 21.5485 8.0095 21.854 6.70406L21.8562 6.6939C22.4701 3.78532 20.9696 2.43806 20.1131 2.15449L20.1034 2.15142ZM14.2979 5.71156C15.6453 4.52967 17.1745 3.40835 18.4294 3.0445C18.8846 2.9166 19.3657 2.92198 19.818 3.06003C20.1915 3.18703 21.4405 4.04215 20.9254 6.49215C20.6504 7.66389 20.0067 9.07281 19.1588 10.5593C18.3132 12.0417 17.2803 13.5743 16.2506 14.9856C14.1834 17.8187 12.1625 20.1176 11.7378 20.5155C11.511 20.728 11.3533 20.8628 11.2296 20.9474C11.1101 21.0291 11.0516 21.0432 11.023 21.0465C10.9949 21.0497 10.9431 21.0489 10.8233 21.0037C10.6955 20.9554 10.5393 20.8767 10.2985 20.7543L10.2915 20.7508C8.35469 19.8058 6.2185 17.601 4.74609 14.9437C3.27305 12.2852 2.52337 9.2816 3.20911 6.75695L3.21009 6.75329C3.28909 6.45301 3.43407 6.17585 3.63328 5.94274C3.82991 5.71265 4.07416 5.53154 4.34739 5.41213C5.14821 5.11828 6.3365 5.21924 7.5616 5.73952C8.77915 6.25659 9.95553 7.15716 10.7141 8.34451L10.7327 8.37349L10.7551 8.39951C10.8029 8.45471 10.8621 8.49961 10.9294 8.53061C10.9967 8.56161 11.0702 8.57782 11.1447 8.57782C11.2193 8.57782 11.2928 8.56161 11.36 8.53061C11.4207 8.50268 11.4748 8.46345 11.5199 8.41555C11.5668 8.36717 11.6249 8.30661 11.6932 8.23538C12.1685 7.73986 13.1387 6.72826 14.2979 5.71156Z" fill="#333333"/>
                                      </svg>

                                      <span className='content-text'>Club Clarins</span>
                                    </a>
                                  </div>
                                </div>

                              </div>
                            </div>
                          </div>
                        </li>


                        <li>
                          <div className='hamburger-content-lower'>
                            <div className='content-lower-wrapper'>
                              <div>
                                <a href='https://www.clarinsusa.com/en/whats-new/' role='menuitem'>
                                  <span className='content-text'>What's New</span>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                                  </svg>
                                </a>
                              </div>
                            </div>

                            <div className='content-lower-wrapper'>
                              <div>
                                <a href='https://www.clarinsusa.com/en/skincare/skincare/' role='menuitem'>
                                  <span className='content-text'>Skincare</span>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                                  </svg>
                                </a>
                              </div>
                            </div>

                            <div className='content-lower-wrapper'>
                              <div>
                                <a href='https://www.clarinsusa.com/en/makeup/600/' role='menuitem'>
                                  <span className='content-text'>Makeup</span>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                                  </svg>
                                </a>
                              </div>
                            </div>

                            <div className='content-lower-wrapper'>
                              <div>
                                <a href='https://www.clarinsusa.com/en/gifts/700/' role='menuitem'>
                                  <span className='content-text'>Gifts</span>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                                  </svg>
                                </a>
                              </div>
                            </div>
                            
                            <div className='content-lower-wrapper'>
                              <div>
                                <a href='https://www.clarinsusa.com/en/gifts/700/' role='menuitem'>
                                  <span className='content-text'>Gifts</span>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                                  </svg>
                                </a>
                              </div>
                            </div>

                            <div className='content-lower-wrapper'>
                              <div>
                                <a href='https://www.clarinsusa.com/en/offers/specialoffers/' role='menuitem'>
                                  <span className='content-text'>Offers</span>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                                  </svg>
                                </a>
                              </div>
                            </div>

                            <div className='content-lower-wrapper'>
                              <div>
                                <a href='https://www.clarinsusa.com/en/spa-and-virtual-services/' role='menuitem'>
                                  <span className='content-text'>Spa & Services</span>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                                  </svg>
                                </a>
                              </div>
                            </div>

                            <div className='content-lower-wrapper'>
                              <div>
                                <a href='https://www.clarinsusa.com/en/about-clarins/' role='menuitem'>
                                  <span className='content-text'>Our values</span>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                                  </svg>
                                </a>
                              </div>
                            </div>

                            <div className='content-lower-wrapper'>
                              <div>
                                <a href='https://www.clarinsusa.com/en/customer-service-contact'role='menuitem'>
                                  <span className='content-text'>Help</span>
                                </a>
                              </div>
                            </div>
                          </div> 
                        </li>

                        <li>
                          <div className='hamburger-clarins-club'>
                            <div>
                              <img src='https://www.clarinsusa.com/on/demandware.static/-/Library-Sites-clarins-v3/default/dw4563f830/rewards_boutique/club-clarins-logo-standard.png' alt='Club Clarins'></img>
                              <div className='clarins-club-text'>
                                <p>Enter a World</p>
                                <br/>
                                <p>of Beauty Rewards</p>
                              </div>

                              <div className='clarins-club description'>
                                <p>Exciting benefits await -</p>
                                <br/>
                                <p>full size products, Club Clarins Dollars and more!</p>
                              </div>

                              <div className='link-font'>
                                <a href='https://www.clarinsusa.com/en/rewards/'>JOIN NOW</a>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>

                    </div>
                  </div>                
                </div>
              </div>


            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Header
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
                      <label className='hidden'>Search</label>
                      <input id='search' type='search' className='search-query' aria-label='Search'  role='button' autoComplete='off'></input>
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

                      <div className='contact-text'>Help</div>
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

                      <div className='login-text'>Log in</div>
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

                  <div className='minibag-text'>Bag</div>
                </a>
                </div>
              </li>
              </div>


            </ul>

            <div className='page-content'>           

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
                              <a href='/' className='btnClose' onClick={handleToggle}>
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
                                    <a href='https://www.clarinsusa.com/en/rewards/'>
                                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bag" viewBox="0 0 16 16">
                                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
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
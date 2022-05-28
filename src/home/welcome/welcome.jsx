import './welcome.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { GiShoppingCart } from 'react-icons/gi';
export default function Welcome(){
    return(
        <div className="home-wrapper" id="home">
                <div className="welcome-container">
                    <h1><span className="welcome-one">WELCOME TO </span><br></br> <span className="letter-color">B</span>OTTLES <span className="letter-color">H</span>EAVEN</h1>
                    <div className="welcome-text">
                        <p>Bottles Heaven is a Home Grown brand.<br></br> We have HOMEMADE <span className="letter-color welcome-color">SKINCARE</span>&<span className="letter-color welcome-color">BATHING</span> Range of Products,<br></br> which are <span className="letter-color welcome-color">SLS</span>&<span className="letter-color welcome-color">PARABEN FREE</span></p>
                    </div>
                    <div className="social-links-container welcome-links-container">
                        <ul>
                            <li><a href="https://wa.me/message/CPSJ4HNG5RPKG1" target="_blank" rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="0.88em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 448 512" className="social-icons whatsapp welcome-home-links"><path fill="currentColor" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222c0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222c0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4l-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2c0-101.7 82.8-184.5 184.6-184.5c49.3 0 95.6 19.2 130.4 54.1c34.8 34.9 56.2 81.2 56.1 130.5c0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18c-5.1-1.9-8.8-2.8-12.5 2.8c-3.7 5.6-14.3 18-17.6 21.8c-3.2 3.7-6.5 4.2-12 1.4c-32.6-16.3-54-29.1-75.5-66c-5.7-9.8 5.7-9.1 16.3-30.3c1.8-3.7.9-6.9-.5-9.7c-1.4-2.8-12.5-30.1-17.1-41.2c-4.5-10.8-9.1-9.3-12.5-9.5c-3.2-.2-6.9-.2-10.6-.2c-3.7 0-9.7 1.4-14.8 6.9c-5.1 5.6-19.4 19-19.4 46.3c0 27.3 19.9 53.7 22.6 57.4c2.8 3.7 39.1 59.7 94.8 83.8c35.2 15.2 49 16.5 66.6 13.9c10.7-1.6 32.8-13.4 37.4-26.4c4.6-13 4.6-24.1 3.2-26.4c-1.3-2.5-5-3.9-10.5-6.6z"/></svg></a></li>
                            <li><a href="https://www.facebook.com/Bottlesheaven" traget ="_blank" rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512" className="social-icons facebook welcome-home-links"><path fill="currentColor" d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48c27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/></svg></a></li>
                            <li><a href ="https://www.instagram.com/bottles_heaven/" target = "_blank" rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="0.88em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 448 512" className="social-icons instagram welcome-home-links"><path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9S287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7s74.7 33.5 74.7 74.7s-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8c-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8s26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9c-26.2-26.2-58-34.4-93.9-36.2c-37-2.1-147.9-2.1-184.9 0c-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9c1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0c35.9-1.7 67.7-9.9 93.9-36.2c26.2-26.2 34.4-58 36.2-93.9c2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6c-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6c-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6c29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6c11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg></a></li>
                            <li><a href = "https://www.youtube.com/channel/UC3pTYvBRotT47Xb3E9bR5rA" target ="_blank" rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1.13em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 576 512" className="social-icons youtube welcome-home-links"><path fill="currentColor" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597c-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821c11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205l-142.739 81.201z"/></svg></a></li>
                            <li><a href="https://www.linkedin.com/company/bottles-heaven" target ="_blank" rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="0.88em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 448 512" className="social-icons linkedin welcome-home-links"><path fill="currentColor" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5c0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7c-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5c67.2 0 79.7 44.3 79.7 101.9V416z"/></svg></a></li>
                            <li><a href="#" target ="_blank" rel="noreferrer"><FontAwesomeIcon icon={ faEnvelope }  className="social-icons mail icon welcome-home-links"/></a></li>
                        </ul>
                    </div>
                    <div className="shoplink-container">
                        <a href="#shop"><GiShoppingCart  className="shop-icon"/>shop today</a>
                        
                    </div>
                    

                </div>
                <div className="home-image-wrapper">
                    
                    <div></div>
                    <div className = "image-container left-part"></div>
                    <div></div>
                    <div className = "image-container left-part"></div>
                    <div></div>
                    <div className = "image-container right-part"></div>
                    <div></div>
                    <div className = "image-container right-part"></div>
                    
                    
                    
                    <div className = "image-container left-part"></div>
                    <div className = "bridge left-part"></div>
                    <div className = "image-container left-part selected"></div>
                    <div className = "bridge left-part"></div>
                    <div className = "image-container right-part selected"></div>
                    <div className = "bridge right-part"></div>
                    <div className = " right-part  one"></div>
                    <div></div>

                    <div></div>
                    <div className = "image-container left-part selected"></div>
                    <div></div>
                    <div className='image-container left-part'></div>
                    <div></div>
                    <div className='image-container right-part'></div>
                    <div className='bridge right-part'></div>
                    <div className = "image-container right-part"></div>
                    
                    
                    <div className = "image-container left-part"></div>
                    <div className='bridge left-part'></div>
                    <div className = "image-container left-part"></div>
                    <div></div>
                    <div className = "image-container right-part"></div>
                    <div></div>
                    <div className = "image-container right-part selected"></div>
                    <div></div>

                    <div></div>
                    <div className = "image-container left-part selected"></div>
                    <div className='bridge left-part'></div>
                    <div className = "image-container left-part selected"></div>
                    <div className='bridge right-part'></div>
                    <div className = "image-container right-part selected"></div>
                    <div className='two right-part'></div>
                    <div className = "image-container right-part"></div>
                   
                    
                    <div className = "image-container left-part"></div>
                    <div className='bridge left-part'></div>
                    <div className = "image-container left-part selected"></div>
                    <div className='bridge left-part'></div>
                    <div className = "image-container right-part selected"></div>
                    <div className='bridge right-part'></div>
                    <div className = "right-part three"></div>
                    <div></div>

                   
                    <div></div>
                    <div className = "image-container left-part selected"></div>
                    <div></div>
                    <div className = "image-container left-part"></div>
                    <div></div>
                    <div className="image-container right-part"></div>
                    <div className="bridge right-part"></div>
                    <div className = "image-container right-part"></div>
                    
                    <div className = "image-container left-part"></div>
                    <div className='bridge left-part'></div>
                    <div className = "image-container left-part"></div>
                    <div></div>
                    <div className = "image-container right-part"></div>
                    <div></div>
                    <div className = "image-container right-part selected"></div>
                    <div></div>
                    
                    <div></div>
                    <div className = "image-container left-part selected"></div>
                    <div className='bridge left-part'></div>
                    <div className = "image-container left-part selected"></div>
                    <div className='bridge right-part'></div>
                    <div className = "image-container right-part selected"></div>
                    <div className="four right-part"></div>
                    <div className = "image-container right-part"></div>


                    <div className = "image-container left-part"></div>
                    <div></div>
                    <div className = "image-container left-part"></div>
                    <div></div>
                    <div className = "image-container right-part"></div>
                    <div></div>
                    <div className = "image-container right-part"></div>
                    <div></div>
                    

                </div>
            </div>
    )
}
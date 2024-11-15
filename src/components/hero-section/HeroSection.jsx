import React from 'react'
import Header from '../header/Header'
import hero_image from '../../assets/hero_image.png';
import hero_image_back from '../../assets/hero_image_back.png';
import Heart from '../../assets/heart.png';
import Calories from '../../assets/calories.png';
import NumberCounter from 'number-counter'
import './HeroSection.css'

import {motion} from 'framer-motion'

const HeroSection = () => {

    const transition = {type: 'spring', duration: 3}
    const mobile = window.innerWidth <= 768 ? true : false;

    return (
        <div className="hero" id="home">
            <div className="blur hero-blur"></div>
            <div className="left-h">
                <Header />
                <div className="the-best-ad">
                    <motion.div
                        initial={{left: mobile ? "165px" : "238px"}}
                        whileInView={{left: '8px'}}
                        transition={{...transition, type: "tween"}}
                    ></motion.div>
                    <span>A gym management applicaiton</span>
                </div>

                <div className="hero-text">
                    <div>
                        <span className="stroke-text">Streamline</span>
                        {/* <span> Your Gym</span> */}
                    </div>
                    <div>
                        <span>Your Gym and Empower Your  Business!</span>
                    </div>
                    <div>
                        <span>
                        We'll help you track progress, manage memberships, and optimize your experience
                        </span>
                    </div>
                </div>
                <div className="figures">
                    <div>
                        <span>
                            <NumberCounter 
                                end={140} 
                                start={69} 
                                delay="3"
                                preFix="+" 
                            />
                        </span>
                        <span>Successful Gyms</span>
                    </div>
                    <div>
                        <span>
                            <NumberCounter 
                                end={978} 
                                start={779} 
                                delay="3"
                                preFix="+" 
                            />
                        </span>
                        <span>members</span>
                    </div>
                    <div>
                        <span>
                            <NumberCounter 
                                end={50} 
                                start={10} 
                                delay="3"
                                preFix="+" 
                            />
                        </span>
                        <span>fitness programs</span>
                    </div>
                </div>
                <div className="hero-buttons">
                    {/* <buttons className="btn">Get Started</buttons>
                    <buttons className="btn">Learn More</buttons> */}
                </div>
            </div>

            <div className="right-h">
                <button className="btn">Your Dashboard</button>
                <motion.div 
                    initial={{ right: "-1rem" }}
                    whileInView={{ right: "4rem" }}
                    transition={transition}
                    className="heart-rate"
                >
                    <img src={Heart} alt="" />
                    <span>Wellcome</span>
                    {/* <span>116 bpm</span> */}
                </motion.div>
                <img src={hero_image} alt="" className="hero-image" />
                <motion.img 
                    initial={{ right: '11rem' }}
                    whileInView={{ right: "28rem" }}
                    transition={transition}
                    src={hero_image_back} 
                    alt=""
                    className="hero-image-back" 
                />
                <motion.div 
                    initial={{ right: "37rem" }}
                    whileInView={{ right: "28rem" }}
                    transition={transition}
                    className="calories"
                >
                    <img src={Calories} alt=""/>
                    <div>
                        <span>Active Users</span>
                        <span>220</span>
                    </div>
                </motion.div>  
            </div>
        </div>
  )
}

export default HeroSection

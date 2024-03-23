import React from 'react';
import bgImage from "../../../public/assets/img/about/about-solution.jpg";
import image from "../../../public/assets/img/about/about-9.jpg";
import shape from "../../../public/assets/img/shape/about-solution.png";
import Count from '../common/count';
import Link from 'next/link';

const WhoWeAre = () => {
    return (
        <>
            <div className="company__two section-padding pt-0">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-6 col-lg-7 lg-mb-30">
                            <div className="company__two-left">
                                <div className="company__two-left-title">
                                    <span className="subtitle-one">Who we are</span>
                                    <h2>best company Especially in Business</h2>
                                    <p>Aenean ac vulputate nibh, sed fringilla metus. Pellentesque porttitor felis eu nunc feugiat, nec condimentum magna ultricies. Nam vitae est accumsan nunc</p>
                                </div>
                                <div className="company__two-left-skill">
                                    <div className="company__two-left-skill-item">
                                        <h2><Count number={89} />k</h2>
                                        <h6>Project Completed Last Years</h6>
                                    </div>
                                    <div className="company__two-left-skill-item">
                                        <h2><Count number={73} />k</h2>
                                        <h6>happy customer worldwide</h6>
                                    </div>
                                </div>
                                <Link className="btn-two" href="/about">Discover more<i className="far fa-chevron-double-right"></i></Link>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-5">
                            <div className="company__two-right dark__image t-right">
                                <img className="img__full" src={image.src} alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
            <div className="about__solution" style={{backgroundImage: `url(${bgImage.src})`}}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-8">
                            <div className="about__solution-left xl-t-center">
                                <h2>implement solutions & achieve goals.</h2>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className="about__solution-right t-right xl-t-center">						
                                <Link className="btn-one" href="/contact">Get Free Consultations<i className="far fa-chevron-double-right"></i></Link>
                                <img className="about__solution-right-shape left-right-animate" src={shape.src} alt="shape" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>        
        </>
    );
};

export default WhoWeAre;
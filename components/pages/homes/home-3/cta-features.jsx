import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ctaBg from "../../../../public/assets/img/shape/features.png";
import image from "../../../../public/assets/img/pages/1.jpg";

const CtaFeatures = () => {
    return (
    <div className="features__two section-padding pt-0" style={{backgroundImage: `url(${ctaBg.src})`}}>
        <div className="cta__two-area section-padding pt-0">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="cta__two">
                            <div className="cta__two-item">
                                <div className="cta__two-item-info">
                                    <div className="cta__two-item-info-icon">
                                        <i className="flaticon-customer-service"></i>
                                        <i className="flaticon-24-hours"></i>
                                    </div>
                                    <h4><Link href="/contact">Dedicated Free Online 24/7 Support</Link></h4>
                                </div>
                                <Link href="/contact"><i className="fal fa-long-arrow-right"></i></Link>
                            </div>
                            <div className="cta__two-item">
                                <div className="cta__two-item-info">
                                    <div className="cta__two-item-info-icon">
                                        <i className="flaticon-seller"></i>
                                        <i className="flaticon-businessman"></i>
                                    </div>
                                    <h4><Link href="/contact">Guidance From Our Office Agents</Link></h4>
                                </div>
                                <Link href="/contact"><i className="fal fa-long-arrow-right"></i></Link>
                            </div>
                        </div>                
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-xl-6 col-lg-7 lg-mb-30">
                    <div className="features__two-left">
                        <div className="features__two-left-title">
                            <span className="subtitle-three">Core Features</span>
                            <h2>Global Customers Share Their Stories with Us</h2>
                            <p>Welcome to our website, where we take pride in delivering exceptional products services that have earned us recognition from customers around the world. Our commitment to quality and customer..</p>
                        </div>
                        <div className="features__two-left-bottom">
                            <div className="features__two-left-bottom-item">
                                <div className="features__two-left-bottom-item-icon">
                                    <i className="flaticon-insurance"></i>
                                </div>
                                <h5>There are ways to get money fast</h5>
                            </div>                            
                            <div className="features__two-left-bottom-item">
                                <div className="features__two-left-bottom-item-icon">
                                    <i className="flaticon-piggy-bank"></i>
                                </div>
                                <h5>Simple processes in Everyday life</h5>
                            </div>                            
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-5">
                    <div className="features__two-right dark__image">
                        <Image src={image} alt="features-image" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default CtaFeatures;
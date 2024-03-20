"use client"
import React from 'react';
import HeaderOne from '../../layout/headers/header-one';
import BreadCrumb from '../common/breadcrumb';
import FooterOne from '../../layout/footers/footer-one';
import SEO from '../../seo';
import Link from 'next/link';
import DarkRtl from '../common/dark-light';

const ContactTwo = () => {
    const switchClass = { class: "switch__tab-area-icon" };
    return (
        <>
            <SEO pageTitle='Contact Two' />
            <DarkRtl switchClass={switchClass} />
            <HeaderOne />
            <BreadCrumb title='Contact Two' innerTitle='Contact Two' />
            <div className="contact__two section-padding pb-0">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 lg-mb-30">
                            <div className="contact__two-info">
                                <h2 className="mb-60 lg-mb-30">Get In Touch</h2>
                                <div className="contact__two-info-item">
                                    <h6>Office Address<span>:</span></h6>
                                    <span>3891 Ranchview Dr. Richardson, California 62639</span>
                                </div>
                                <div className="contact__two-info-item">
                                    <h6>Email Address <span>:</span></h6>
                                    <span>
                                        <Link href="mailto:hello.info.me@gmail.com">hello.info.me@gmail.com</Link>
                                        <Link href="mailto:info.info.me@gmail">support@gmail.com</Link>
                                    </span>
                                </div>
                                <div className="contact__two-info-item">
                                    <h6>Phone Number<span>:</span></h6>
                                    <span>
                                        <Link href="tel:(+106)935-0120">(+106) 935-0120</Link>
                                        <Link href="tel:(+107)605-0133">(+107) 605-0133</Link>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="contact__two-form">
                                <h3 className="mb-30">Contact Us</h3>
                                <form action="#">	
                                    <div className="row">
                                        <div className="col-sm-12 mb-20"> 
                                            <div className="contact__two-form-item contact-item">
                                                <span className="fal fa-user"></span>
                                                <input type="text" name="name" placeholder="Full Name" required="required" />
                                            </div>										
                                        </div>
                                        <div className="col-sm-12 mb-20">
                                            <div className="contact__two-form-item contact-item">
                                                <span className="far fa-envelope-open"></span>
                                                <input type="email" name="email" placeholder="Email Address" required="required" />											
                                            </div>									
                                        </div>
                                        <div className="col-sm-12 mb-30"> 
                                            <div className="contact__two-form-item contact-item">
                                                <span className="far fa-comments"></span>
                                                <textarea name="message" placeholder="Type your comments...."></textarea>
                                            </div>										
                                        </div>
                                        <div className="col-lg-12">										
                                            <div className="contact__two-form-item">
                                                <button className="btn-one" type="submit">Submit Now</button>
                                            </div>										
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contact__two-map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830894606!2d-74.11976383964463!3d40.69766374865767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1652012644726!5m2!1sen!2sbd" loading="lazy"></iframe>
            </div>     
            <FooterOne />         
        </>
    );
};

export default ContactTwo;
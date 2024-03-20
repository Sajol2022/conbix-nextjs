"use client"
import React from 'react';
import HeaderOne from "../../layout/headers/header-one";
import BreadCrumb from "../common/breadcrumb";
import FooterOne from "../../layout/footers/footer-one";
import SEO from '../../seo';
import Link from 'next/link';
import DarkRtl from '../common/dark-light';

const ContactThree = () => {
    const switchClass = { class: "switch__tab-area-icon" };
    return (
        <> 
            <SEO pageTitle='Contact Three' />
            <DarkRtl switchClass={switchClass} />
            <HeaderOne />
            <BreadCrumb title='Contact Three' innerTitle='Contact Three' />
            <div className="contact__three section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-6 lg-mb-30 wow fadeInUp" data-wow-delay=".4s">
                            <div className="contact__three-info">
                                <div className="contact__three-info-icon">
                                    <img src="/assets/img/icon/locationss.png" alt="locations" />
                                </div>
                                <h4>Office Location</h4>
                                <span>You are most welcome to visit office.</span>
                                <p>8502 Preston Rd. Inglewood,<br/> Maine 98380</p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 md-mb-30 wow fadeInUp" data-wow-delay=".8s">
                            <div className="contact__three-info">
                                <div className="contact__three-info-icon">
                                    <img src="/assets/img/icon/phone-call.png" alt="phone-call" />
                                </div>
                                <h4>Tell With US</h4>
                                <span>Keeping you always better connected.</span>
                                <p><Link href="tel:+125(895)658568">+125 (895) 658 568</Link></p>
                                <p><Link href="tel:+125(874)452645">+125 (874) 452 645</Link></p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="1.2s">
                            <div className="contact__three-info">
                                <div className="contact__three-info-icon">
                                    <img src="/assets/img/icon/emails.png" alt="email" />
                                </div>
                                <h4>Quick Email</h4>
                                <span>Drop us a mail we will answer you asap.</span>
                                <p><Link href="mailto:support@gmail.com">support@gmail.com</Link></p>
                                <p><Link href="mailto:info.me@gmail.com">info.me@gmail.com</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contact__three">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="contact__three-form t-center">
                                <div className="contact__three-form-title">	
                                    <span className="subtitle-four">Get in Contact</span>
                                    <h2>We are always Ready for your solution</h2>
                                </div>
                                <form action="#">
                                    <div className="row">
                                        <div className="col-md-6 mb-30">
                                            <div className="contact__two-right-form-item contact-item">
                                                <span className="fal fa-user"></span>
                                                <input type="text" name="name" placeholder="Full Name" required="required" />
                                            </div>
                                        </div>
                                        <div className="col-md-6 md-mb-30">
                                            <div className="contact__two-right-form-item contact-item">
                                                <span className="far fa-envelope-open"></span>
                                                <input type="email" name="email" placeholder="Email Address" required="required" />											
                                            </div>
                                        </div>
                                        <div className="col-md-12 mb-30">
                                            <div className="contact__two-right-form-item contact-item">
                                                <span className="fal fa-book"></span>
                                                <input type="text" name="subject" placeholder="Subject" />
                                            </div>
                                        </div>
                                        <div className="col-md-12 mb-30">
                                            <div className="contact__two-right-form-item contact-item">
                                                <span className="far fa-comments"></span>
                                                <textarea name="message" placeholder="Message"></textarea>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="contact__two-right-form-item">
                                                <button className="btn-one" type="submit">Submit Message </button>
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

export default ContactThree;
"use client"
import React from 'react';
import HeaderOne from '../../layout/headers/header-one';
import BreadCrumb from '../common/breadcrumb';
import FooterOne from '../../layout/footers/footer-one';
import SEO from '../../seo';
import Link from 'next/link';
import DarkRtl from '../common/dark-light';

const ContactOne = () => {
    const switchClass = { class: "switch__tab-area-icon" };
    return (
        <>
            <SEO pageTitle='Contact Us' />
            <DarkRtl switchClass={switchClass} />
            <HeaderOne />
            <BreadCrumb title='Contact Us' innerTitle='Contact Us' />
            <div className="contact__page section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-md-6 xl-mb-30">
                            <div className="contact__page-item">
                                <img src="/assets/img/icon/map.png" alt="map" />
                                <h4>Office Locations</h4>
                                <p>4140 Parker Rd. Allentown, New Mexico 31134</p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 md-mb-30">
                            <div className="contact__page-item">
                                <img src="/assets/img/icon/email.png" alt="email" />
                                <h4>Email Address</h4>
                                <p><Link href="mailto:support@gmail.com">support@gmail.com</Link></p>
                                <p><Link href="mailto:info.me@gmail.com">info.me@gmail.com</Link></p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 md-mb-30">
                            <div className="contact__page-item">
                                <img src="/assets/img/icon/phone.png" alt="phone" />
                                <h4>Quick Helpline</h4>
                                <p><Link href="tel:(+106)935-0120">(+106) 935-0120</Link></p>
                                <p><Link href="tel:(+107)605-0133">(+107) 605-0133</Link></p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                            <div className="contact__page-item">
                                <img src="/assets/img/icon/opening-hours.png" alt="hours" />
                                <h4>Opening Hours</h4>
                                <p>Monday - Friday</p>
                                <p>09:00AM - 05:00PM</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contact__page-map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830894606!2d-74.11976383964463!3d40.69766374865767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1652012644726!5m2!1sen!2sbd" loading="lazy"></iframe>
            </div>
            <div className="contact__three page section-padding pt-0">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="contact__three-form t-center">
                                <div className="contact__three-form-title">	
                                    <span className="subtitle-four">Drop a Message</span>
                                    <h2>We are always ready to solve your problems</h2>
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
            <FooterOne />
        </>
    );
};

export default ContactOne;
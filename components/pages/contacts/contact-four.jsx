"use client"
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header-one";
import BreadCrumb from "../common/breadcrumb";
import FooterTwo from "@/components/layout/footers/footer-two";
import Form from "./form";
import Social from "@/components/data/social";
import ScrollToTop from "../common/scroll/scroll-to-top";

const ContactFour = () => {
    return (
        <>
            <SEO pageTitle="Contact Four" />
            <HeaderOne />
            <BreadCrumb title="Contact Four" innerTitle="Contact Four" />
            <div className="contact__two section-padding pb-0">
                <div className="container">
                    <div className="row contact__two-box">
                        <div className="col-xl-4 col-lg-5 lg-mb-30">
                            <div className="contact__two-left">
                                <h3>Contact Us</h3>
                                <p className="mb-30">On the other hand we moralized bite the HR charms of pleasure.</p>                       
                                <div className="contact__two-left-item">
                                    <div className="contact__two-left-item-icon">
                                        <img src="/assets/img/icon/call.png" alt="icon" />
                                    </div>
                                    <div className="contact__two-left-item-info">
                                        <span>Tell With US</span>
                                        <p><a href="tel:+123-568-4758">+123-568-4758</a></p>
                                    </div>
                                </div>
                                <div className="contact__two-left-item">
                                    <div className="contact__two-left-item-icon">
                                        <img src="/assets/img/icon/email.png" alt="icon" />
                                    </div>
                                    <div className="contact__two-left-item-info">
                                        <span>Quick Email</span>
                                        <p><a href="mailto:conbix.com@gmail.com">conbix.com@gmail.com</a></p>
                                    </div>
                                </div>
                                <div className="contact__two-left-item">
                                    <div className="contact__two-left-item-icon">
                                        <img src="/assets/img/icon/locations.png" alt="icon" />
                                    </div>
                                    <div className="contact__two-left-item-info">
                                        <span>Office Address</span>
                                        <p><a href="#">Birkbeck Court, Birkbeck Rd, London W3 6BQ, UK</a></p>
                                    </div>
                                </div>
                                <div className="contact__two-left-item-socialIcon">
                                    <h6>Follow  Us</h6>
                                    <Social />
                                </div>
                            </div>                    
                        </div>
                        <div className="col-xl-8 col-lg-7">
                            <div className="contact__two-right">
                                <h3>Get In Touch</h3> 
                                <p>On the other hand we denounce righteous indignation moralized bite the HR charms of pleasure.</p>                       
                                <div className="contact__two-right-form">
                                    <Form />
                                </div>
                            </div>                    
                        </div>
                    </div>
                </div>
            </div>
            <div className="contact__two-map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830894606!2d-74.11976383964463!3d40.69766374865767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1652012644726!5m2!1sen!2sbd" loading="lazy"></iframe>
            </div> 
            <div className='all-footer'>
                <FooterTwo />
            </div>
            <ScrollToTop />
        </>
    );
};

export default ContactFour;
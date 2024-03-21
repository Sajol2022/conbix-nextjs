"use client"
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header-one";
import BreadCrumb from "../common/breadcrumb";
import FooterTwo from "@/components/layout/footers/footer-two";
import Form from "./form";
import ScrollToTop from "../common/scroll/scroll-to-top";

const ContactTwo = () => {
    return (
        <>
            <SEO pageTitle="Contact Two" />
            <HeaderOne />
            <BreadCrumb title="Contact Two" innerTitle="Contact Two" />
            <div className="contact__four section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-6 lg-mb-30">
                            <div className="contact__four-info">
                                <div className="contact__four-info-icon">
                                    <img src="/assets/img/icon/locationss.png" alt="icon" />
                                </div>
                                <h4>Office Location</h4>
                                <span>You are most welcome to visit office.</span>
                                <p>8502 Preston Rd. Inglewood,<br/> Maine 98380</p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 md-mb-30">
                            <div className="contact__four-info">
                                <div className="contact__four-info-icon">
                                    <img src="/assets/img/icon/phone-call.png" alt="icon" />
                                </div>
                                <h4>Tell With US</h4>
                                <span>Keeping you always better connected.</span>
                                <p><a href="tel:+125(895)658568">+125 (895) 658 568</a></p>
                                <p><a href="tel:+125(874)452645">+125 (874) 452 645</a></p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="contact__four-info">
                                <div className="contact__four-info-icon">
                                    <img src="/assets/img/icon/emails.png" alt="icon" />
                                </div>
                                <h4>Quick Email</h4>
                                <span>Drop us a mail we will answer you asap.</span>
                                <p><a href="mailto:info.conbix@gmail.com">info.conbix@gmail.com</a></p>
                                <p><a href="mailto:conbix@gmail.com">conbix@gmail.com</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contact__four">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="contact__four-form t-center">
                                <div className="contact__four-form-title">	
                                    <span className="subtitle-one">Get in Touch</span>
                                    <h2>We are always Ready for your solution</h2>
                                </div>
                                <Form />
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

export default ContactTwo;
import Social from "@/components/data/social";
import logo1 from "../../../public/assets/img/logo-6.png";
import logo2 from "../../../public/assets/img/logo-7.png";
import footerBg from "../../../public/assets/img/shape/footer-bg-2.png";
import Link from "next/link";

const FooterThree = () => {
    return (
        <>
            <div className="subscribe">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-6 col-lg-6">
                            <div className="subscribe-title">
                                <h2>Stay informed, subscribe to our newsletter</h2>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="subscribe-form">
                                <form action="#">
                                    <input type="text" name="email" placeholder="Email Address" required />
                                    <button className="btn-seven" type="submit">Subscribe Now</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer__three">
                <img className="footer__three-shape" src={footerBg.src} alt="shape" />
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-5 col-md-7 md-mb-30">
                            <div className="footer__three-widget">
                                <div className="footer__three-widget-about">
                                    <Link href="/">
                                        <img className="dark-n" src={logo1.src} alt="logo" />
                                        <img className="light-n" src={logo2.src} alt="logo" />
                                    </Link>
                                    <p>Proin pretium sem libero, nec aliquet augue lobortis in. Phasellus nibh quam, molestie id est sit amet, luctus pulvinar </p>							
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-5 col-sm-7 xl-mb-30">
                            <div className="footer__three-widget">
                                <h4>Head Office</h4>
                                <div className="footer__three-widget-location">
                                    <div className="footer__three-widget-location-item">
                                        <div className="footer__three-widget-location-item-icon">
                                            <i className="far fa-map-marker-alt"></i>
                                        </div>
                                        <div className="footer__three-widget-location-item-info">
                                            <Link href="https://google.com/maps">2972 Westheimer Rd. Santa Ana, Illinois 85486</Link>
                                        </div>
                                    </div>
                                    <h6>Branch Office</h6>
                                    <div className="footer__three-widget-location-item">
                                        <div className="footer__three-widget-location-item-icon">
                                            <i className="far fa-map-marker-alt"></i>
                                        </div>
                                        <div className="footer__three-widget-location-item-info">
                                            <Link href="https://google.com/maps">8502 Preston Rd. Inglewood, Maine 98380</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-5 sm-mb-30">
                            <div className="footer__three-widget">
                                <h4>Company</h4>
                                <div className="footer__three-widget-solution">
                                    <ul>
                                        <li><a href="#"><i className="far fa-chevron-double-right"></i>Help Center</a></li>
                                        <li><a href="#"><i className="far fa-chevron-double-right"></i>terms & conditions</a></li>
                                        <li><a href="#"><i className="far fa-chevron-double-right"></i>privacy policy</a></li>
                                        <li><a href="#"><i className="far fa-chevron-double-right"></i>Consulting</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-5">
                            <div className="footer__three-widget border-one tow">
                                <h4>Working Time</h4>
                                <div className="footer__three-widget-hour">
                                    <p>Mon - fri : 9:00 AM - 5:00 PM</p>
                                    <p>sat : 10:00 AM - 6:00 PM</p>
                                    <p>Sunday Close</p>
                                    <div className="footer__three-widget-hour-social">
                                        <Social />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright__three">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <p>Copyright 2024  <Link href="/">Conbix</Link> - All Rights Reserved By <a href="https://themeforest.net/user/themeori/portfolio" target="_blank">ThemeOri</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>            
        </>
    );
};

export default FooterThree;
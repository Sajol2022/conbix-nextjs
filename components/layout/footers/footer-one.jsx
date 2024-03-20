import servicesData from "@/components/data/services-data";
import Social from "@/components/data/social";
import Link from "next/link";
import logo from "../../../public/assets/img/logo-2.png";

const FooterOne = () => {
    const servicesD = servicesData.slice(0, 4);
    return (
        <>
            <div className="footer__one">
                <img className="footer__one-shape" src="assets/img/shape/footer-bg.png" alt="shape" />
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-md-6 col-sm-7 xl-mb-30">
                            <div className="footer__one-widget">
                                <div className="footer__one-widget-about">
                                    <Link href="/"><img src={logo.src} alt="logo" /></Link>
                                    <p>Donec quis viverra enim. Integer mi felis, auctor eget magna</p>
                                    <div className="footer__one-widget-about-social">
                                        <Social />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 col-sm-5 sm-mb-30">
                            <div className="footer__one-widget border-one">
                                <h4>Our Solution</h4>
                                <div className="footer__one-widget-solution">
                                    <ul>
                                        {servicesD.map((data, id) => (
                                            <li key={id}><Link href={`/services/${data.id}`}><i className="far fa-chevron-double-right"></i>{data.title}</Link></li>
                                        ))}                                        
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 col-sm-6 sm-mb-30">
                            <div className="footer__one-widget border-one">
                                <h4>Head Office</h4>
                                <div className="footer__one-widget-location">
                                    <div className="footer__one-widget-location-item">
                                        <div className="footer__one-widget-location-item-icon">
                                            <i className="far fa-map-marker-alt"></i>
                                        </div>
                                        <div className="footer__one-widget-location-item-info">
                                            <Link href="https://google.com/maps">2972 Westheimer Rd. Santa Ana, Illinois 85486</Link>
                                        </div>
                                    </div>
                                    <h6>Branch Office</h6>
                                    <div className="footer__one-widget-location-item">
                                        <div className="footer__one-widget-location-item-icon">
                                            <i className="far fa-map-marker-alt"></i>
                                        </div>
                                        <div className="footer__one-widget-location-item-info">
                                            <Link href="https://google.com/maps">8502 Preston Rd. Inglewood, Maine 98380</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 col-sm-6">
                            <div className="footer__one-widget border-one tow">
                                <h4>Subscribe</h4>
                                <div className="footer__one-widget-subscribe">
                                    <p>Join over <span>68,000</span> people getting our emails</p>
                                    <form action="#">
                                        <input type="text" name="email" placeholder="Email Address" required />
                                        <button type="submit"><i className="fas fa-paper-plane"></i></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright__one">
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

export default FooterOne;
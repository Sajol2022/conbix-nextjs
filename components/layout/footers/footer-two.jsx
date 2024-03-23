
import Social from "@/components/data/social";
import Link from "next/link";
import logo1 from "../../../public/assets/img/logo-4.png";
import logo2 from "../../../public/assets/img/logo-2.png";
import blogData from "@/components/data/blog-data";
import footerBg from "../../../public/assets/img/pages/subscribe.jpg";

const FooterTwo = () => {
    const blogPost = blogData.slice(0, 2);
    return (
        <>
            <div className="footer__two" data-background="assets/img/shape/footer-bg-1.png">
                <div className="subscribe__area">
                    <div className="container">
                        <div className="row align-items-center subscribe__area-bg" style={{backgroundImage: `url(${footerBg.src})`}}>
                            <div className="col-xl-5 col-lg-5 lg-mb-40">
                                <div className="subscribe__area-left">
                                    <h2>Stay Connected</h2>
                                    <div className="subscribe__area-left-notification">
                                        <h6>get all notifications</h6>
                                        <div className="subscribe__area-left-notification-icon icon-animation video-pulse">
                                            <i className="far fa-bell"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-7 col-lg-7">
                                <div className="subscribe__area-form">
                                    <form>
                                        <input type="email" name="email" placeholder="Email address" />
                                        <button type="submit">Subscribe Now</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>                
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-6 lg-mb-30">
                            <div className="footer__two-widget">
                                <div className="footer__two-widget-about">
                                    <Link href="/">
                                        <img className="f_logo" src={logo1.src} alt="logo" />
                                        <img className="all_f_logo" src={logo2.src} alt="logo" />
                                    </Link>
                                    <p>Proin pretium sem libero, nec aliquet augue lobortis in. Phasellus nibh quam, molestie id est sit amet, luctus pulvinar</p>
                                    <div className="footer__two-widget-about-social">
                                        <Social />
                                    </div>							
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 md-mb-30">
                            <div className="footer__two-widget footer-border">
                                <h4>Head Office</h4>
                                <div className="footer__two-widget-location">
                                    <div className="footer__two-widget-location-item">
                                        <div className="footer__two-widget-location-item-icon">
                                            <i className="far fa-map-marker-alt"></i>
                                        </div>
                                        <div className="footer__two-widget-location-item-info">
                                            <Link href="https://google.com/maps">2972 Westheimer Rd. Santa Ana, Illinois 85486</Link>
                                        </div>
                                    </div>
                                    <h6>Branch Office</h6>
                                    <div className="footer__two-widget-location-item">
                                        <div className="footer__two-widget-location-item-icon">
                                            <i className="far fa-map-marker-alt"></i>
                                        </div>
                                        <div className="footer__two-widget-location-item-info">
                                            <Link href="https://google.com/maps">8502 Preston Rd. Inglewood, Maine 98380</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="footer__two-widget footer-border">
                                <h4>Recent Post</h4>
                                {blogPost.map((data, id) => (
                                    <div className="post__item" key={id}>
                                        <div className="post__item-image">
                                            <Link href={`/blog/${data.id}`}><img src={data.image.src} alt="" /></Link>
                                        </div>
                                        <div className="post__item-title">
                                            <span><i className="far fa-calendar-alt"></i>Mar {data.date}, 2024</span>
                                            <h6><Link href={`/blog/${data.id}`}>{data.title}</Link></h6>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright__two">
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

export default FooterTwo;
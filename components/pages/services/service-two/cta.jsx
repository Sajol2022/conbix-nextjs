import Link from "next/link";
import ctaBg from ".././../../../public/assets/img/pages/getInTouchThree.jpg";

const ServiceCta = () => {
    return (
        <div className="cta__two" style={{backgroundImage: `url(${ctaBg.src})`}}>
            <img className="cta__two-shape left-right-animate2" src="assets/img/shape/getInTouch.png" alt="shape" />
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-6 col-lg-5 lg-mb-30">
                        <div className="cta__two-title">
                            <span className="subtitle-one">Need any Help?</span>
                            <h2>Have Questions? Let's Connect</h2>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-7">
                        <div className="cta__two-info">
                            <div className="cta__two-info-item">
                                <div className="cta__two-info-item-icon">
                                    <i className="fal fa-phone-alt icon-animation"></i>
                                </div>
                                <div>
                                    <span>Call us 24/7</span>
                                    <h6><Link href="tel:+125(895)658568">+125 (895) 658 568</Link></h6>
                                </div>
                            </div>
                            <div className="cta__two-info-item">
                                <div className="cta__two-info-item-icon">
                                    <i className="fal fa-envelope"></i>
                                </div>
                                <div>
                                    <span>Mail us anytime</span>
                                    <h6><Link href="mailto:conbix@gmail.com">conbix@gmail.com</Link></h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCta;
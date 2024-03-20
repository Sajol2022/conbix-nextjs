import Link from "next/link";
import Count from "../../common/count";
import image1 from "../../../../public/assets/img/about/about-5.jpg";
import image2 from "../../../../public/assets/img/about/about-6.jpg";

const About = () => {
    const aboutData = {
        count: 149,
        exp: 'Years Experience Our Company',
        subtitle: 'About Us',
        title: 'Our Company Innovative Solutions',
        description: 'Pellentesque eget dictum est. Pellentesque blandit eget mauris ac faucibus. Curabitur varius a quam sit amet placerat. Pellentesque ut venenatis felis.Proin malesuada porttitor eros.',
        btn_title: 'Read More',
        btn_link: '/about-us',
    }
    return (
        <div className="about__three section-padding">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-5 col-lg-6 lg-mb-30">
                        <div className="about__three-title">
                            <span className="subtitle-three">{aboutData?.subtitle}</span>
                            <h2>{aboutData?.title}</h2>
                            <p>{aboutData?.description}</p>
                            <div className="about__three-title-faq">
                                <div className="about__three-title-faq-icon">
                                    <img className="icon-animation" src="assets/img/icon/question.png" alt="icon" />
                                </div>
                                <div className="about__three-title-faq-text">
                                    <span className="text-one">Have queries? Click below link</span>
                                    <h6><img className="dark-n" src="assets/img/icon/hand.png" alt="icon" />
                                        <img className="light-n" src="assets/img/icon/hand-light.png" alt="icon" /><Link href="/faq">FAQ</Link></h6>
                                </div>
                            </div>
                            <Link className="btn-seven" href={aboutData?.btn_link}>{aboutData?.btn_title}<i className="far fa-chevron-double-right"></i></Link>
                        </div>
                    </div>
                    <div className="col-xl-7 col-lg-6">
                        <div className="about__three-right">
                            <div className="about__three-right-image dark__image">
                                <div className="about__three-right-image-one">
                                    <img src={image1.src} alt="image" />
                                </div>
                                <img className="about__three-right-image-two" src={image2.src} alt="image" />
                            </div>
                            <div className="about__three-right-content">
                                <div className="about__three-right-content-counter">
                                    <h1><Count number={aboutData?.count}/>k</h1>
                                </div>
                                <p>clients satisfaction survey in consulting organization</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
import Link from "next/link";
import Count from "../common/count";


const AboutMain = () => {
    const aboutContent = {
        image_1: '/assets/img/about/about-7.jpg',
        image_2: '/assets/img/about/about-8.jpg',
        subtitle: 'Our Company',
        title: 'Find out more about our business consulting',
        description: 'Fusce quis lacus laoreet, dignissim quam eu, scelerisque tortor. Cras volutpat aliquet efficitur. Quisque dignissim justo ac erat tincidunt tristique. Curabitur id tortor ipsum. Suspendisse suscipit commodo turpis eu interdum',
        btn_text: 'Discover More',
        btn_href: '/about-us',
        shape_1: '/assets/img/shape/about-1.png',
        shape_2: '/assets/img/shape/about-2.png',
    }
    return (
        <>
            <div className="about__company section-padding">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xxl-7 col-xl-6 xl-mb-30">
                            <div className="about__company-left">
                                <div className="about__company-left-image dark__image">
                                    <img src={aboutContent.image_1} alt="image" />
                                    <img src={aboutContent.image_2} alt="image" />
                                </div>
                                <div className="about__company-left-experience">
                                    <h2><Count number={180} />+</h2>
                                    <h6>Get national Award</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-5 col-xl-6">
                            <div className="about__company-right">
                                <div className="about__company-right-title">							
                                    <span className="subtitle-one">{aboutContent.subtitle}</span>
                                    <h2>{aboutContent.title}</h2>
                                    <p>{aboutContent.description}</p>
                                    <Link className="btn-one" href={aboutContent.btn_href}>{aboutContent.btn_text}</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img className="about__one-shape-1" src={aboutContent.shape_1} alt="shape" />
                <img className="about__one-shape-2" src={aboutContent.shape_2} alt="shape" />
            </div>
        </>
    );
};

export default AboutMain;
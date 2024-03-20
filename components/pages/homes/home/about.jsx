import shape1 from "../../../../public/assets/img/shape/about-1.png";
import shape2 from "../../../../public/assets/img/shape/about-1-dark.png";
import shape3 from "../../../../public/assets/img/shape/about-2.png";
import shape4 from "../../../../public/assets/img/shape/about-2-dark.png";
import image1 from "../../../../public/assets/img/about/about-1.jpg";
import image2 from "../../../../public/assets/img/about/about-2.jpg";
import avatar from "../../../../public/assets/img/avatar/avatar-1.jpg";
import Count from "../../common/count";
import Link from "next/link";

const About = () => {
    const aboutData = {
        count: 32,
        exp: 'Years Experience Our Company',
        subtitle: 'About Company',
        title: 'Our Skilled Team Grow Your Business.',
        description: 'Aliquam volutpat diam a orci euismod ornare. Suspendisse quis massa justo. Suspendisse tortor lacus, tincidunt ut ex a, pretium lobortis sapien. Vestibulum rutrum pharetra ex,',
        author_name: 'Nguyen, Shane',
        author_sub: 'Founder CEO',
        btn_title: 'Discover More',
        btn_link: '/about'
    }
    return (
        <div className="about__one dark__image section-padding">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-6 col-lg-6 lg-mb-30">
                        <div className="about__one-left">
                            <div className="about__one-left-image">
                                <img className="one" src={image1.src} alt="about-image" />
                                <img className="two" src={image2.src} alt="about-image" />
                            </div>
                            <div className="about__one-left-experience">
                                <h1><Count number={aboutData?.count}/>+</h1>
                                <h6>{aboutData?.exp}</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="about__one-right">
                            <div className="about__one-right-title">
                                <span className="subtitle-one">{aboutData?.subtitle}</span>
                                <h2>{aboutData?.title}</h2>
                                <p>{aboutData?.description}</p>
                            </div>
                            <div className="about__one-right-btn">
                                <div>
                                    <Link className="btn-one" href={aboutData?.btn_link}>{aboutData?.btn_title}<i className="far fa-chevron-double-right"></i></Link>
                                </div>
                                <div className="about__one-right-btn-author">
                                    <div className="about__one-right-btn-author-avatar">
                                        <img src={avatar.src} alt="about-avatar" />
                                    </div>
                                    <div className="about__one-right-btn-author-name">
                                        <span className="text-one">{aboutData?.author_name}</span>
                                        <h6>{aboutData?.author_sub}</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="about__one-right-bottom">
                                <div className="about__one-right-bottom-list">
                                    <span><i className="far fa-check"></i>Performing market research.</span>
                                    <span><i className="far fa-check"></i>Providing information to a client.</span>
                                    <span><i className="far fa-check"></i>Strategic planning.</span>
                                </div>
                                <div className="about__one-right-bottom-experience">
                                    <h3><span className="counter">150</span>+</h3>
                                    <h6>Expert Team members</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img className="about__one-shape-1 dark-n" src={shape1?.src} alt="about-shape" />
            <img className="about__one-shape-1 light-n" src={shape2?.src} alt="about-shape" />
            <img className="about__one-shape-2 dark-n" src={shape3?.src} alt="about-shape" />
            <img className="about__one-shape-2 light-n" src={shape4?.src} alt="about-shape" />
        </div>
    );
};

export default About;
import React from 'react';
import Count from '../../common/count';
import Image from 'next/image';
import shape1 from "../../../../public/assets/img/shape/about-4.png";
import shape2 from "../../../../public/assets/img/shape/about-3.png";
import image from "../../../../public/assets/img/about/about-4.jpg";

const aboutData = {
    subtitle: 'Company Focused',
    title: 'Innovative Insurance Solutions for You',
    des: "Innovative insurance solutions refer to the use of new or advanced methods and technologies to provide",
    listItems: [
        {title: "Our Company Mission", icon: <i className="flaticon-mission"></i>, des: "Our company mission is to provide innovative and customer-centric insurance solutions."},
        {title: "Our Company Vision", icon: <i className="flaticon-vision"></i>, des: "Our company vision is to be the leading insurance provider, recognized for our innovative."}
    ],
}

const { subtitle, title, des, listItems } = aboutData;

const About = () => {
    return (
        <div className="about__three section-padding">
            <Image className="about__three-shape" src={shape1} alt="about-shape" />
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-7 col-lg-6 lg-mb-30">
                        <div className="about__three-left">
                            <Image className="about__three-left-shape dark-n" src={shape2} alt="about-image" />
                            <img className="about__three-left-shape light-n" src="/assets/img/shape/about-3-dark.png" alt="about-image" />
                            <div className="about__three-left-image">
                                <div className="image-overlay dark__image">
                                    <Image src={image} alt="about-image" />
                                </div>
                                <div className="about__three-left-image-experience" style={{backgroundImage: `url(/assets/img/shape/experience.png)`}}>
                                    <h1><span className="counter"><Count number={'25'} /></span>+</h1>
                                    <h5>Years Of Experience</h5>
                                    <p>Experience that delivers every time.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-6">
                        <div className="about__three-right">
                            <div className="about__three-right-title">
                                <span className="subtitle-three">{subtitle}</span>
                                <h2>{title}</h2>
                                <p>{des}</p>
                            </div>
                            <div className="about__three-right-list">
                                {listItems?.map((data, id) => (
                                    <div className="about__three-right-list-item" key={id}>
                                        <div className="about__three-right-list-item-icon">
                                            {data.icon}
                                        </div>
                                        <div className="about__three-right-list-item-content">
                                            <h4>{data.title}</h4>
                                            <p>{data.des}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
import Link from "next/link";
import image1 from "../../../../public/assets/img/pages/experience-1.jpg";
import image2 from "../../../../public/assets/img/pages/experience-2.jpg";
import SkillBar from "../../common/skill-bar";
import SkillBarItem from "../../common/skill-bar";

const Experience = () => {
    const experienceContent = {
        subtitle: 'Brand Success',
        title: 'Empowering Brand Growth Together',
        des: 'Phasellus vel sollicitudin velit. Fusce consequat pretium ligula vel aliquam. Vestibulum molestie luctus sapien et euismod. Cras convallis, purus in elementum lacinia,',
        btn_text: 'Get Consulting',
        btn_link: '/request-quote',
        progress1: '60',
        progress2: '85',
    }
    return (
        <>
            <div className="experience__area dark__image section-padding">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-6 col-lg-6 lg-mb-30">
                            <div className="experience__area-image">
                                <img className="experience__area-image-shape left-right-animate" src="assets/img/shape/dots.png" alt="" />
                                <div className="experience__area-image-item">
                                    <img src={image1.src} alt="image" />
                                </div>
                                <div className="experience__area-image-item mt-65">
                                    <img src={image2.src} alt="image" />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="experience__area-right">
                                <div className="experience__area-right-title">
                                    <span className="subtitle-one">{experienceContent.subtitle}</span>
                                    <h2>{experienceContent.title}</h2>		
                                    <p>{experienceContent.des}</p>
                                </div>
                                <div className="skill__area mt-30">
                                    <div className="skill__area-item">
                                        <div className="skill__area-item-content">
                                            <span className="text-two">Business Consulting</span>
                                        </div>
                                        <div className="skill__area-item-inner">
                                            <SkillBarItem countUp={experienceContent?.progress1} />
                                        </div>
                                    </div>
                                    <div className="skill__area-item">
                                        <div className="skill__area-item-content">
                                            <span className="text-two">Human Resource</span>
                                        </div>
                                        <div className="skill__area-item-inner">
                                            <SkillBarItem countUp={experienceContent?.progress2} />
                                        </div>
                                    </div>
                                </div>
                                <Link className="btn-two" href={experienceContent.btn_link}>{experienceContent.btn_text}<i className="far fa-chevron-double-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Experience;
import Link from "next/link";
import SkillBarItem from "../../common/skill-bar";

const TeamSingleMain = ({teamDetails}) => {
    
    return (
        <div className="team__single section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-xl-5 col-lg-5 lg-mb-30">
                        <div className="team__single-left">
                            <div className="team__single-left-thumb dark__image">
                                <img src={teamDetails.image.src} alt="image" />
                                <div className="team__single-left-thumb-social">
                                    <ul>
                                        {teamDetails?.social_link.map((social, id) => (
                                            <li key={id}><Link href={social.link} target={social.target}>{social.icon}</Link></li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="team__single-left-info">
                                <span>{teamDetails?.position}</span>
                                <h3>{teamDetails?.name}</h3>
                                <div className="team__single-left-info-contact">
                                    <div className="team__single-left-info-contact-item">
                                        <i className="far fa-envelope"></i>
                                        <div className="team__single-left-info-contact-item-info">
                                            <span>Quick Email</span>
                                            <h5><Link href={`mailto:${teamDetails?.mail}`}>{teamDetails?.mail}</Link></h5>
                                        </div>
                                    </div>
                                    <div className="team__single-left-info-contact-item">
                                        <i className="fal fa-phone-alt"></i>
                                        <div className="team__single-left-info-contact-item-info">
                                            <span>Tell With US</span>
                                            <h5><Link href={`tel:${teamDetails?.phone}`}>{teamDetails?.phone}</Link></h5>
                                        </div>
                                    </div>
                                    <div className="team__single-left-info-contact-item mb-45">
                                        <i className="far fa-map-marker-alt"></i>
                                        <div className="team__single-left-info-contact-item-info">
                                            <span>Office Location</span>
                                            <h5><Link href="https://www.google.com/maps" target="_blank">PV3M+X68, United Kingdom</Link></h5>
                                        </div>
                                    </div>
                                </div>
                            </div>						
                        </div>
                    </div>
                    <div className="col-xl-7 col-lg-7">
                        <div className="team__single-right">
                            <div className="team__single-right-experience">
                                <h3>Career Guidelines</h3>
                                <p>This involves assessing one's skills, interests, values, and personality traits to identify suitable career paths. Self-assessment can be done through career tests, online resources, or working with a career counselor.</p>
                                <p>Employers look for candidates with specific skills and abilities. Individuals should focus on developing the skills and competencies needed for their desired career through education, training, and work experience.</p>
                                <p>Different careers require different levels of education and training. Individuals should research the educational requirements for their desired career and develop a plan to acquire the necessary education and credentials. Continuing education and professional development.</p>
                            </div>
                            <div className="team__single-right-skill">
                                <h3>Professional Skills</h3>
                                <p>These are the skills required to operate specific tools, software, or equipment in a particular field. For example, a web developer needs to have technical skills in programming languages like HTML, CSS, and JavaScript.</p>
                                <div className="skill__area">
                                    <div className="skill__area-item">
                                        <div className="skill__area-item-content">
                                            <span className="text-two">Business Consulting</span>
                                        </div>
                                        <div className="skill__area-item-inner">
                                            <SkillBarItem countUp={78} />
                                        </div>
                                    </div>
                                    <div className="skill__area-item">
                                        <div className="skill__area-item-content">
                                            <span className="text-two">Human Resource</span>
                                        </div>
                                        <div className="skill__area-item-inner">
                                            <SkillBarItem countUp={65} />
                                        </div>
                                    </div>
                                    <div className="skill__area-item">
                                        <div className="skill__area-item-content">
                                            <span className="text-two">Web Application</span>
                                        </div>
                                        <div className="skill__area-item-inner">
                                            <SkillBarItem countUp={80} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="team__single-right-form">
                                <form action="#">
                                    <div className="row">
                                        <div className="col-md-6 mb-30">
                                            <div className="contact__two-right-form-item contact-item">
                                                <span className="fal fa-user"></span>
                                                <input type="text" name="name" placeholder="Full Name" />
                                            </div>
                                        </div>
                                        <div className="col-md-6 md-mb-30">
                                            <div className="contact__two-right-form-item contact-item">
                                                <span className="far fa-envelope-open"></span>
                                                <input type="email" name="email" placeholder="Email Address" />
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-30">
                                            <div className="contact__two-right-form-item contact-item">
                                                <span className="fal fa-phone-alt"></span>
                                                <input type="text" name="number" placeholder="Phone Number" />
                                            </div>
                                        </div>
                                        <div className="col-md-6 md-mb-30">
                                            <div className="team__single-right-form-select">
                                                <select>
                                                    <option value="Select Service">Select Service</option>
                                                    <option value="home-insurance">Home Insurance</option>
                                                    <option value="life-insurance">Health Insurance</option>
                                                    <option value="car-insurance">Car Insurance</option>
                                                    <option value="health-insurance">Health Insurance</option>
                                                    <option value="family-insurance">Family Insurance</option>
                                                    <option value="fire-insurance">Fire Insurance</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-12 mb-30">
                                            <div className="contact__two-right-form-item contact-item">
                                                <span className="far fa-comments"></span>
                                                <textarea name="message" placeholder="Message"></textarea>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="contact__two-right-form-item">
                                                <button className="btn-one" type="submit">Submit Message</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamSingleMain;
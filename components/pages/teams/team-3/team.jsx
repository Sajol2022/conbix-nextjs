import Link from "next/link";
import teamData from "@/components/data/team-data";
import FaqArea from "../../faq/faq";

const TeamMain = () => {
    return (
        <>
            <div className="team__area section-padding-two pb-0 dark__image">
                <div className="container">
                    <div className="row">
                        {teamData?.map((data, id) => (
                            <div className="col-lg-4 col-md-6 mt-25" key={id}>
                                <div className="team__three-item">
                                    <div className="team__three-item-image">
                                        <img src={data.image.src} alt="image" />
                                        <div className="team__three-item-image-info">
                                            <div className="team__three-item-image-info-name">
                                                <span className='text-eight'>{data.position}</span>
                                                <h4><Link href={`/team/${data.id}`}>{data.name}</Link></h4>
                                            </div>
                                            <div className="team__three-item-image-info-icon">
                                                <div className="team__three-item-image-info-social">
                                                    <ul>
                                                        {data.social_link.map((social, id) => (
                                                            <li key={id}><Link href={social.link} target={social.target}>{social.icon}</Link></li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                <span><i className="fas fa-share-alt"></i></span>
                                            </div> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="row">
                        <div className="col-xl-12 mt-50 t-center">
                            <h6>Consulting With Our Expert Team Members <Link href="/team">Schedule Meeting</Link></h6>
                        </div>
                    </div>
                </div>
            </div>
            <div className="faq-area section-padding">
                <div className="container">
                    <div className="row mb-60">
                        <div className="col-xl-12">
                            <div className="faq-area-title t-center">
                                <span className="subtitle-one">Faq Questions</span>
                                <h2>What Does Conbix Do?</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <FaqArea />
            </div>
        </>
    );
};

export default TeamMain;
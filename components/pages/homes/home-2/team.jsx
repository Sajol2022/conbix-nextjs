import teamData from "@/components/data/team-data";
import Link from "next/link";


const Team = () => {
    const teamsItem = teamData.slice(0, 4);
    const teamContent = {
        subtitle: 'Our Team Member',
        title: 'Our Specialist',
    }
    return (
        <div className="team__area dark__image section-padding pb-0">
            <div className="container">
                <div className="row mb-35">
                    <div className="team__area-title t-center">
                        <span className="subtitle-two">{teamContent.subtitle}</span>
                            <h2>{teamContent.title}</h2>
                    </div>
                </div>
                <div className="row">
                    {teamsItem?.map((data, id) => (
                    <div className="col-xl-3 col-md-6 mt-25" key={id}>
                        <div className="team__area-item">
                            <div className="team__area-item-image">
                                    <img src={data.image.src} alt="image" />
                                <div className="team__area-item-image-icon">
                                    <div className="team__area-item-image-social">
                                        <ul>
                                            {data.social_link.map((social, id) => (
                                                <li key={id}><Link href={social.link} target={social.target}>{social.icon}</Link></li>
                                            ))}
                                        </ul>
                                    </div>
                                    <span><i className="fas fa-share-alt"></i></span>
                                </div>
                            </div>
                            <div className="team__area-item-content">
                                <h5><Link href={`/team/${data.id}`}>{data.name}</Link></h5>
                                <span>{data.position}</span>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Team;
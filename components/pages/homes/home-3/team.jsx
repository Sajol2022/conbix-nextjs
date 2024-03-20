import React from 'react';
import teamData from '../../../data/team-data';
import Link from 'next/link';
import Image from 'next/image';

const Team = () => {
    const teamsItem = teamData.slice(0, 4);
    const teamContent = {
        subtitle: 'Our Team Member',
        title: 'Our Specialist',
    }
    return (
        <div className="team__two section-padding pt-0">
            <div className="container">
                <div className="row mb-30">
                    <div className="team__two-title t-center">
                        <span className="subtitle-three">{teamContent.subtitle}</span>
                        <h2>{teamContent.title}</h2>
                    </div>
                </div>
                <div className="row">
                    {teamsItem?.map((data, id) => (
                        <div className="col-xl-3 col-md-6" key={id}>
                            <div className="team__two-item">
                                <div className="team__two-item-image">
                                    <Image src={data.image} alt="team-image" />
                                    <div className="team__two-item-image-icon">
                                        <div className="team__two-item-image-social">
                                            <ul>
                                                {data.social_link.map((social, id) => (
                                                    <li key={id}><Link href={social.link} target={social.target}>{social.icon}</Link></li>
                                                ))}
                                            </ul>
                                        </div>
                                        <span><i className="fas fa-share-alt"></i></span>
                                    </div>
                                </div>
                                <div className="team__two-item-content">
                                    <span>{data.position}</span>
                                    <h4><Link href={`/team/${data.id}`}>{data.name}</Link></h4>
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
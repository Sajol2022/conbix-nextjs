
import teamData from '@/components/data/team-data';
import Link from 'next/link';
import React, { useState } from 'react';

const filters = [
    { id: 1, name: "All", filterData: "all", },
    { id: 2, name: "Founder", filterData: "founder", },
    { id: 3, name: "Designer", filterData: "designer", },
    { id: 4, name: "Manager", filterData: "manager", },
    { id: 5, name: "Writer", filterData: "writer", },
];

const getFilteredProjects = (filterData) => filterData === "all" ? teamData : teamData.filter((project) => project.category === filterData);

const TeamFilter = () => {
    const [filter, setFilter] = useState("all");
    const filteredProjects = getFilteredProjects(filter);

    return (
        <>
            <div className="team__three section-padding-two">
                <div className="container">
                    <div className="row mb-30">
                        <div className="col-xl-12">
                            <div className="filter_button">
                                {filters.map(({ id, name, filterData }) => (
                                    <button key={id} onClick={() => setFilter(filterData)}
                                    className={filter === filterData ? "active" : ""}
                                    >{name}</button>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {filteredProjects?.map((data, id) => (
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
                </div>
            </div>
        </>
    );
};

export default TeamFilter;
import React, { useState } from 'react';
import Link from 'next/link';
import portfolioData from '../../../data/portfolio-data';

const filters = [
    { id: 1, name: "All", filterData: "all", },
    { id: 2, name: "Marketing", filterData: "marketing", },
    { id: 3, name: "Business", filterData: "business", },
    { id: 4, name: "Corporate", filterData: "corporate", },
];

const getFilteredProjects = (filterData) => {
    if (filterData === "all") {
        return portfolioData.filter((project) => project);
    }
    return portfolioData.filter((project) => project.category === filterData && project);
};
  
const PortfolioFilter = () => {
    const [filter, setFilter] = useState("all");
    const filteredProjects = getFilteredProjects(filter);
    
    return (
        <>
            <div className="team__three section-padding">
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
                            <div className="col-xl-4 col-md-6 mt-30" key={id}>
                                <div className="project__one-item">
                                    <img src={data.image.src} alt="image" />
                                    <div className="project__one-item-content">
                                        <span>{data.subtitle}</span>
                                        <h4><Link href={`/portfolio/${data.id}`}>{data.title}</Link></h4>
                                    </div>
                                    <div className="project__one-item-icon">
                                        <Link href={`/portfolio/${data.id}`}><i className="fal fa-long-arrow-up"></i></Link>
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

export default PortfolioFilter;
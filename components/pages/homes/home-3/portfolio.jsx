import portfolioData from '@/components/data/portfolio-data';
import portfolioBg from "../../../../public/assets/img/portfolio/portfolio.jpg";
import React from 'react';
import Link from 'next/link';

const Portfolio = () => {
    return (
        <>
            <div className="portfolio__three" style={{backgroundImage: `url(${portfolioBg.src})`}}>
                <div className="container-fluid">
                    <div className="row">
                        {portfolioData?.slice(0, 4)?.map((data, id) => (
                            <div className="col-xl-3 col-md-6 portfolio-border" key={id}>
                                <div className="project__area-item">
                                    <div className="project__area-item-content">
                                        <h4><Link href={`/portfolio/${data.id}`}>{data.title}</Link></h4>
                                        <span>{data.subtitle}</span>
                                    </div>                        
                                    <div className="project__area-item-icon">
                                        <Link href={`/portfolio/${data.id}`}><i className="far fa-arrow-right"></i></Link>
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

export default Portfolio;
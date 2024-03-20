import React, { useState } from 'react';
import portfolioData from '../../../data/portfolio-data';
import Link from 'next/link';
import Image from 'next/image';

const Portfolio = () => {
    const portfolioIdsToDisplay = ['travel-insurance', 'car-insurance', 'home-insurance', 'flood-insurance'];
    const portfolioItem = portfolioData.filter(portfolio => portfolioIdsToDisplay.includes(portfolio.id));
    const portfolioContent = {
        subtitle: 'Our Portfolio',
        title: 'Our Latest Case Study',
    }
  const [active, setActive] = useState(2);
  const handelActive = (index) => {
    setActive(index);
  };
    return (
        <div className="portfolio__three section-padding">
            <div className="container">
                <div className="row mb-60">
                    <div className="col-xl-12">
                        <div className="portfolio__three-title t-center">
                            <span className="subtitle-three">{portfolioContent.subtitle}</span>
                            <h2>{portfolioContent.title}</h2>                         
                        </div>
                    </div>
                </div>
            </div>
            <div className="portfolio">
                {portfolioItem?.map((data, index) => (
                    <div
                    onClick={() => handelActive(index)}
                        className={`portfolio__three-item ${ active === index ? "active" : "" }`}
                        key={index}
                    >
                        <Image src={data.image} alt="car-insurance" />
                        <div className="portfolio__three-item-content vertical">
                            <div>
                                <span>Property</span>
                                <h4><Link href={`/portfolio/${data.id}`}>{data.title}</Link></h4>
                            </div>
                            <div className="portfolio__three-item-content-icon vertical">
                                <Link href={`/portfolio/${data.id}`}><i className="flaticon-right-up"></i></Link>
                            </div>
                        </div>
                        <div className="portfolio__three-item-content transition">
                            <div>
                                <span>Property</span>
                                <h4><Link href={`/portfolio/${data.id}`}>{data.title}</Link></h4>
                            </div>
                            <div className="portfolio__three-item-content-icon">
                                <Link href={`/portfolio/${data.id}`}><i className="flaticon-right-up"></i></Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>  
        </div>  
    );
};

export default Portfolio;
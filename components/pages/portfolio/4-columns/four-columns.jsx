import React, { useState } from 'react';
import portfolioData from '../../../data/portfolio-data';
import Link from 'next/link';
import Image from 'next/image';

const showPortfolioItem = 8;

const FourColumns = () => {
    const portfolioItem = portfolioData.filter(portfolio => portfolio.inner == portfolio.home_1);
    const [items, setItems] = useState(portfolioItem);
    const [next, setNext] = useState(showPortfolioItem);
    const handleLoadData = () => {
        setNext(value => value + 2)
    }
    return (
        <div className="portfolio__one section-padding-two">
            <div className="container-fluid">
                <div className="row">
                    {items?.slice(0, next)?.map((data, id) => (
                        <div className="col-xl-3 col-lg-4 col-md-6 mt-30" key={id}>
                            <div className="project__one-item">
                                <Image src={data.image1} alt="image" />
                                <div className="project__one-item-content">
                                    <span>{data.subtitle} Coverage</span>
                                    <h4><Link href={`/portfolio/${data.id}`}>{data.title}</Link></h4>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {next < items.length && (
                    <div className="row mt-70">
                        <div className="col-xl-12 t-center">
                            <button onClick={handleLoadData} className="btn-one">Load More</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default FourColumns;
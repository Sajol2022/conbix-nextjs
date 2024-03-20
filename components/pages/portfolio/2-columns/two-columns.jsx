import React, { useState } from 'react';
import portfolioData from '../../../data/portfolio-data';
import Link from 'next/link';
import Image from 'next/image';

const showPortfolioItem = 4;

const TwoColumns = () => {
    const portfolioItem = portfolioData.filter(portfolio => portfolio.inner == portfolio.home_1);
    const [items, setItems] = useState(portfolioItem);
    const [next, setNext] = useState(showPortfolioItem);
    const handleLoadData = () => {
        setNext(value => value + 2)
    }
    return (
        <div className="portfolio__one section-padding-two">
            <div className="container">
                <div className="row">
                    {portfolioItem?.slice(0, next)?.map((data, id) => (
                        <div className="col-lg-6 mt-30" key={id}>
                            <div className="portfolio__one-item page">
                                <Image src={data.image1} alt="image" />
                                <div className="portfolio__one-item-content">
                                    <div className="portfolio__one-item-content-left">
                                        <Link href={`/portfolio/${data.id}`}><i className="flaticon-arrows"></i></Link>
                                    </div>
                                    <div className="portfolio__one-item-content-right">
                                        <span>{data.subtitle} Coverage</span>
                                        <h4><Link href={`/portfolio/${data.id}`}>{data.title}</Link></h4>
                                    </div>
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

export default TwoColumns;
import React, { useState } from 'react';
import portfolioData from '../../../data/portfolio-data';
import Link from 'next/link';

const showPortfolioItem = 4;

const TwoColumns = () => {
    const portfolioItem = portfolioData;
    const [items, setItems] = useState(portfolioItem);
    const [next, setNext] = useState(showPortfolioItem);
    const handleLoadData = () => {
        setNext(value => value + 2)
    }
    return (
        <div className="project__one section-padding-two">
            <div className="container">
                <div className="row">
                    {portfolioItem?.slice(0, next)?.map((data, id) => (
                        <div className="col-lg-6 mt-25" key={id}>
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
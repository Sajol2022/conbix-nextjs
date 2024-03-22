import React, { useState } from 'react';
import portfolioData from '../../../data/portfolio-data';
import Link from 'next/link';

const showPortfolioItem = 6;

const ThreeColumns = () => {
    const portfolioItem = portfolioData;
    const [items, setItems] = useState(portfolioItem);
    const [next, setNext] = useState(showPortfolioItem);
    const handleLoadData = () => {
        setNext(value => value + 2)
    }
    return (
        <div className="project__area-page section-padding-two">
            <div className="container">
                <div className="row">
                    {portfolioItem?.slice(0, next)?.map((data, id) => (
                        <div className="col-xl-4 col-lg-4 col-md-6 mt-30" key={id}>
                            <div className="project__area-item">
                                <img src={data.image.src} alt="image" />
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

export default ThreeColumns;
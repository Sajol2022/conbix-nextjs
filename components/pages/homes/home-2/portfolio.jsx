import { useState } from 'react';
import Link from 'next/link';
import portfolioData from '@/components/data/portfolio-data';

const Portfolio = () => {
    const portfolioItem = portfolioData.slice(0, 4);
    const [active, setActive] = useState(2);
    const handelActive = (index) => {
        setActive(index);
    };

    return (
        <div className="portfolio dark__image">
        {portfolioItem?.map((data, index) => (
            <div
            onMouseEnter={() => handelActive(index)}
                className={`portfolio-item ${ active === index ? "active" : "" }`}
                key={index}
            >            
                <img src={data.image.src} alt="image" />
                <div className="portfolio-item-inner">
                    <div className="portfolio-item-inner-title">
                        <h4><Link href={`/portfolio/${data.id}`}>{data.title}</Link></h4>
                        <span>{data.subtitle}</span>
                    </div>
                    <div className="portfolio-item-inner-icon">
                        <Link href={`/portfolio/${data.id}`}><i className="fal fa-long-arrow-up"></i></Link>
                    </div>
                </div>
            </div>
            ))}
        </div>
    );
};

export default Portfolio;
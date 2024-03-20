import React from 'react';
import servicesData from '../../../data/services-data';
import Link from 'next/link';
import serviceBg from "../../../../public/assets/img/shape/services-5.png";

const Services = () => {
    const serviceIdsToDisplay = ['01', '02', '03', '04'];
    const servicesItem = servicesData.filter(service => serviceIdsToDisplay.includes(service.number));
    const servicesContent = {
        subtitle: 'Reliable Insurance',
        title: 'Protection You Can Trust',
    }

    return (
        <div className="services__three section-padding pt-0">
            <div className="container">
                <div className="row mb-30">
                    <div className="col-xl-12">
                        <div className="services__three-title t-center">
                            <span className="subtitle-three">{servicesContent.subtitle}</span>
                            <h2>{servicesContent.title}</h2>
                        </div>                    
                    </div>
                </div>
                <div className="row">
                    {servicesItem?.map((data, id) => (
                    <div className="col-xl-3 col-lg-4 col-md-6" key={id}>
                        <div className="services__three-items">                        
                            <div className="two" style={{backgroundImage: `url(${serviceBg.src})`}}>
                                <span>{data.number}</span>
                                <div className="services__three-item-icon">
                                    {data.icon}
                                </div>
                                <div className="services__three-item-content">
                                    <h4><Link href={`/services/${data.id}`}>{data.title}</Link></h4>
                                    <p>{data.description}</p>
                                </div>
                            </div>
                            <div className="services__three-item">
                                <span>{data.number}</span>
                                <div className="services__three-item-icon">
                                    {data.icon}
                                </div>
                                <div className="services__three-item-content">
                                    <h4>{data.title}</h4>
                                    <p>{data.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
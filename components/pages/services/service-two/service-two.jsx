import React from 'react';
import servicesData from '../../../data/services-data';
import FaqTwo from '../../faq/faq-two';
import Features from './features';
import Link from 'next/link';

const servicesItem = servicesData.filter(service => service.inner !== service.home_page);

const ServicesMain = () => {
    const faqClass = {subtitle: 'subtitle-four',class: "faq__one-page section-padding"}
    return (
        <>
            <div className="services__page-two section-padding-two">
                <div className="container">
                    <div className="row">
                        {servicesItem?.map((data, id) => (
                            <div className="col-lg-4 col-md-6" key={id}>
                                <div className="services__three-items">                        
                                    <div className="two" style={{backgroundImage: `url(/assets/img/shape/services-5.png)`}}>
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
                                            <h4><Link href={`/services/${data.id}`}>{data.title}</Link></h4>
                                            <p>{data.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Features />
            <FaqTwo faqClass={faqClass} />
        </>
    );
};

export default ServicesMain;
import React from 'react';
import Link from 'next/link';
import servicesData from '@/components/data/services-data';

const Services = () => {
    const servicesItem = servicesData.slice(0, 4);
    const servicesContent = {
        subtitle: 'OUR SOLUTIONS',
        title: 'Consulting Services',
        btn_text: 'ALL SERVICES',
        btn_link: '/services'
    }
    return (
        <div className="services__one section-padding pt-0">
            <div className="container">
                <div className="row align-items-end mb-45">
                    <div className="col-xl-7 col-lg-8 lg-mb-30">
                        <div className="services__one-title lg-t-center">
                            <span className="subtitle-one">{servicesContent.subtitle}</span>
                            <h2>{servicesContent.title}</h2>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-4 t-right lg-t-center">
                        <Link className="btn-one" href={servicesContent.btn_link}>{servicesContent.btn_text}<i className="far fa-chevron-double-right"></i></Link>
                    </div>
                </div>
                <div className="row">
                    {servicesItem?.map((data, id) => (
                        <div className="col-xl-3 col-lg-4 col-md-6 mt-25" key={id}>
                            <div className="services__one-item">
                                <div className="services__one-item-icon">
                                    {data.icon}
                                </div>
                                <h4><Link href={`/services/${data.id}`}>{data.title}</Link></h4>
                                <p>{data.description}</p>
                                <Link className="simple-btn-2" href={`/services/${data.id}`}>Read More<i className="far fa-chevron-double-right"></i></Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
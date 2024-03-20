import React from 'react';
import Video from './video';
import servicesData from '../../../data/services-data';
import Link from 'next/link';
import Testimonial from '../../homes/home-2/testimonial';
import Image from 'next/image';

const servicesItem = servicesData.filter(service => service.inner !== service.home_page);

const ServicesMain = () => {
    const testimonialClass = {subtitle: 'subtitle-four',class: "testimonial__one page section-padding"}
    return (
        <>
            <div className="services__page section-padding-two">
                <div className="container">
                    <div className="row">
                        {servicesItem?.map((data, id) => (
                            <div className="col-lg-4 col-md-6 md-mb-30" key={id}>
                                <div className="services__one-item">
                                    <div className="services__one-item-image">
                                        <Image src={data.singleImage} alt="liability-insurance" width={600} height={600} />
                                    </div>
                                    <div className="services__one-item-content">
                                        <div className="services__one-item-content-icon">
                                            {data.icon}
                                        </div>
                                        <h4><Link href={`/services/${data.id}`}>{data.title}</Link></h4>
                                        <p>{data.description}</p>
                                        <Link href={`/services/${data.id}`}>Read More<i className="fas fa-long-arrow-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Video />
            <Testimonial testimonialClass={testimonialClass} />
        </>
    );
};

export default ServicesMain;
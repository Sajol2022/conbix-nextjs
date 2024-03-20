import servicesData from '@/components/data/services-data';
import Link from 'next/link';
import Testimonial from '../../homes/home/testimonial';
import ServiceCta from './cta';

const ServicesMain = () => {
    const servicesItem = servicesData;
    return (
        <>
        <div className="services__page section-padding-two">
            <div className="container">
                <div className="row">
                    {servicesItem?.map((data, id) => (
                        <div className="col-lg-4 col-md-6 mt-25" key={id}>
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
            <ServiceCta />
            <Testimonial />
        </>
    );
};

export default ServicesMain;
import Link from 'next/link';
import CtaArea from '../../homes/home/cta';
import Solution from './solution';
import Testimonial from '../../homes/home/testimonial';
import servicesData from '@/components/data/services-data';

const ServicesMain = () => {
    return (
        <>
        <div className="services__page section-padding-two">
            <div className="container">
                <div className="row">
                    {servicesData?.map((data, id) => (
                        <div className="col-xl-4 col-lg-4 col-md-6 mt-25" key={id}>
                            <div className="services__three-item page">
                                <img src={data.image.src} alt="image" />
                                <div className="services__three-item-content page">
                                    <div className="services__three-item-content-icon">
                                        {data.icon}
                                    </div>
                                    <h4><Link href={`/services/${data.id}`}>{data.title}</Link></h4>
                                    <p>{data.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
            <CtaArea />    
            <Solution />
            <Testimonial />
        </>
    );
};

export default ServicesMain;
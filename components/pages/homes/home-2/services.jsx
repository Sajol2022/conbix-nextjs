import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Navigation} from 'swiper/modules';
import servicesData from '@/components/data/services-data';

const Services = () => {
    const slideControl = {
        slidesPerView: 4,
        spaceBetween: 30,
        loop: true,
        speed: 1500,
        autoplay: {
            delay: 6000,
            reverseDirection: false,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.services__two-arrow-next',
            prevEl: '.services__two-arrow-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1400: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
        }
    };
    const serviceIdsToDisplay = ['6', '1', '2', '3', '4'];
    const servicesItem = servicesData.filter(service => serviceIdsToDisplay.includes(service.number));

    return (
        <div className="services__two section-padding pb-0">
            <div className="container">
                <div className="row mb-70 align-items-end">
                    <div className="col-xl-8 col-sm-8 lg-mb-30">
                        <div className="services__two-title sm-t-center">
                            <span className="subtitle-two">Our Solutions</span>
                            <h2>Popular Services</h2>						
                        </div>
                    </div>
                    <div className="col-xl-4 col-sm-4">
                        <div className="services__two-arrow t-right sm-t-center">
                            <div className="services__two-arrow-prev mr-10"><i className="fal fa-long-arrow-left"></i></div>
                            <div className="services__two-arrow-next"><i className="fal fa-long-arrow-right"></i></div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12">
                    <Swiper modules={[EffectFade, Autoplay, Navigation]} {...slideControl} >
                        {servicesItem?.map((data, id) => (                    
                            <SwiperSlide key={id}>
                                <div className="services__two-item" style={{backgroundImage: `url(${data.image.src})`}}>
                                    <div className="services__two-item-content">
                                        <div className="services__two-item-content-icon">
                                            {data.icon}
                                        </div>
                                        <h4><Link href={`/services/${data.id}`}>{data.title}</Link></h4>
                                        <p>{data.description.split(' ').slice(0, 6).join(' ')}</p>
                                        <Link className="simple-btn-2" href={`/services/${data.id}`}>Read More<i className="far fa-chevron-double-right"></i></Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>				
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
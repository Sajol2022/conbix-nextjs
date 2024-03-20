import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Navigation} from 'swiper/modules';
import servicesData from '@/components/data/services-data';

const Services = () => {
    const slideControl = {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        speed: 1500,
        autoplay: {
            delay: 6000,
            reverseDirection: false,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.services__three-arrow-next',
            prevEl: '.services__three-arrow-prev',
        },
		breakpoints: {
			0: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			992: {
				slidesPerView: 3,
			},
		}
    };
    return (
        <>
            <div className="services__three section-padding">
                <div className="container">
                    <div className="row mb-70">
                        <div className="col-xl-12">
                            <div className="services__three-title">
                                <span className="subtitle-three">Timely Solutions</span>
                                <h2>Consulting Services</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-12 slider">
                            <div className="services__three-arrow">
                                <div className="services__three-arrow-prev mr-10"><i className="fal fa-long-arrow-left"></i></div>
                                <div className="services__three-arrow-next"><i className="fal fa-long-arrow-right"></i></div>
                            </div>
                            <Swiper modules={[EffectFade, Autoplay, Navigation]} {...slideControl} >
                                {servicesData?.map((data, id) => (                    
                                    <SwiperSlide key={id}>
                                        <div className="services__three-item">
                                            <img src={data.image.src} alt="image" />
                                            <div className="services__three-item-content">
                                                <div className="services__three-item-content-icon">
                                                    {data.icon}
                                                </div>
                                                <h4><Link href={`/services/${data.id}`}>{data.title}</Link></h4>
                                                <p>{data.description}</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>            
        </>
    );
};

export default Services;
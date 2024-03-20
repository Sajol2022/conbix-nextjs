import testimonialData from "@/components/data/testimonial-data";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Navigation} from 'swiper/modules';

const testimonialItem = testimonialData.slice(0, 4);
const slideControl = {
    loop: true,
	speed: 2000,
	spaceBetween: 30,
	autoplay: {
		delay: 4500,
		reverseDirection: false,
		disableOnInteraction: false,
	},
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    }
};

const Testimonial = () => {

    return (
        <div className="testimonial__area section-padding">
            <img className="testimonial__area-shape dark-n" src="assets/img/shape/testimonial.png" alt="shape" />
            <img className="testimonial__area-shape light-n" src="assets/img/shape/testimonial-dark.png" alt="shape" />
            <div className="container">
                <div className="row mb-70 align-items-end">
                    <div className="col-xl-8 col-lg-8 lg-mb-30">
                        <div className="testimonial__area-title lg-t-center">
                            <span className="subtitle-one">Real Client Stories</span>
                            <h2>Customer Experiences</h2>						
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4">
                        <div className="testimonial__area-button t-right lg-t-center">
                            <div className="testimonial__area-button-prev swiper-button-prev"><i className="fal fa-long-arrow-left"></i></div>
                            <div className="testimonial__area-button-next swiper-button-next"><i className="fal fa-long-arrow-right"></i></div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12">
                        <Swiper modules={[EffectFade, Autoplay, Navigation]} {...slideControl} >
                            {testimonialItem?.map((data, id) => (
                                <SwiperSlide key={id}>
                                    <div className="testimonial__area-item swiper-slide">
                                        <div className="testimonial__area-item-client">
                                            <div className="testimonial__area-item-icon">
                                                <i className="fal fa-quote-right"></i>
                                            </div>
                                            <div className="testimonial__area-item-client-image">
                                                <img src={data.avatar.src} alt="avatar" />
                                            </div>
                                            <div className="testimonial__area-item-client-title">
                                                <h5>{data.name}</h5>
                                                <span className="text-eight">{data.position}</span>
                                            </div>
                                        </div>
                                        <p>{data.des}</p>
                                        <div className="testimonial__area-item-reviews">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
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

export default Testimonial;
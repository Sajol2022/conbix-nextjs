import portfolioData from "@/components/data/portfolio-data";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay} from 'swiper/modules';
import Link from "next/link";

const portfolioItem = portfolioData.slice(0, 5);
const slideControl = {
    loop: true,
	speed: 2000,
	spaceBetween: 30,
	autoplay: {
		delay: 4500,
		reverseDirection: false,
		disableOnInteraction: false,
	},
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        750: {
            slidesPerView: 2
        },
        1138: {
            slidesPerView: 3
        },
        1600: {
            slidesPerView: 4
        },
    }
};

const Portfolio = () => {

    return (
        <div className="portfolio__area dark__image section-padding pb-0 overflow-hidden">
            <div className="container-fluid p-0">
                <div className="row mb-60">
                    <div className="col-xl-12">
                        <div className="portfolio__area-title t-center">
                            <span className="subtitle-one">Company Case Study</span>
                            <h2>Our Consulting Success</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12">
                        <Swiper modules={[EffectFade, Autoplay]} {...slideControl} >
                            {portfolioItem?.map((data, id) => (
                                <SwiperSlide key={id}>
                                    <div className="portfolio__area-item swiper-slide">
                                        <img src={data.image.src} alt="image" />
                                        <div className="portfolio__area-item-content">
                                            <div className="portfolio__area-item-content-title">
                                                <h4><Link href={`/portfolio/${data.id}`}>{data.title}</Link></h4>
                                                <span className="text-eight">{data.subtitle}</span>
                                            </div>
                                            <div className="portfolio__area-item-content-icon">
                                                <Link href={`/portfolio/${data.id}`}><img src="assets/img/icon/up-arrow.png" alt="icon" /></Link>
                                            </div>
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

export default Portfolio;
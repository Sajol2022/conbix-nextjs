import { Swiper, SwiperSlide } from 'swiper/react';
import ModalVideo from "react-modal-video";
import { EffectFade, Autoplay, Pagination} from 'swiper/modules';
import Link from 'next/link';
import bannerBg from "../../../../public/assets/img/shape/banner-bg-3.jpg";
import { useState } from 'react';

const BannerThree = () => {
    const slideControl = {
        loop: true,
        slidesPerView: 2,
		spaceBetween: 20,
        autoplay: {
            delay: 4000,
            reverseDirection: false,
            disableOnInteraction: false,
        }, 
        pagination: {
            el: ".banner_pagination",
            clickable: true,
        },
    };
    const [openVideo, setOpenVideo] = useState(false);
    const openVideoModal = () => {
      setOpenVideo(true);
    }; 

  	return (
		<>
            <div className="banner__three" style={{backgroundImage: `url(${bannerBg.src})`}}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-5 col-lg-6 lg-mb-30">
                            <div className="banner__three-title">
                                <span>Success is Our Priority</span>
                                <h1>Consulting for Your Business</h1>
                                <p>Our experienced team provides solutions and guidance to help you achieve your business goals and drive success.</p>
                                <div className="banner__three-title-bottom">
                                    <div className="banner__three-title-bottom-btn">
                                        <Link className="btn-seven" href="/services">Read More<i className="far fa-chevron-double-right"></i></Link>                                
                                    </div>
                                    <div className="banner__three-title-bottom-video">
                                        <div className="banner__three-title-bottom-video-icon">
                                            <span onClick={openVideoModal}><i className="fas fa-play"></i></span>
                                        </div>
                                        <h6>Watch the Consulting Video</h6>
                                    </div>
                                </div>
                                <div className="banner_pagination"></div>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-6">
                            <div className="banner__three-image dark__image">
                            <Swiper modules={[EffectFade, Autoplay, Pagination]} {...slideControl} >				
                                <SwiperSlide><img src="assets/img/banner/banner-7.jpg" alt="image" /></SwiperSlide>
                                <SwiperSlide><img src="assets/img/banner/banner-8.jpg" alt="image" /></SwiperSlide>
                                <SwiperSlide><img src="assets/img/banner/banner-9.jpg" alt="image" /></SwiperSlide>
                                <SwiperSlide><img src="assets/img/banner/banner-10.jpg" alt="image" /></SwiperSlide>
                            </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ModalVideo className='video-modal' channel="youtube" autoplay isOpen={openVideo} videoId="SZEflIVnhH8" onClose={() => setOpenVideo(false)} />       
		</>
	);
};

export default BannerThree;

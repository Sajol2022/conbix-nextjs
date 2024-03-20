import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Pagination} from 'swiper/modules';
import bannerBg1 from "../../../../public/assets/img/banner/banner-1.jpg";
import bannerBg2 from "../../../../public/assets/img/banner/banner-2.jpg";
import ModalVideo from "react-modal-video";
import Link from "next/link";

const slideControl = {
    loop: true,
    slidesPerView: 1,
    effect: "fade",
 
    pagination: {
        el: ".banner_pagination",
        clickable: true,
    },
};

const BannerOne = () => {
    const [openVideo, setOpenVideo] = useState(false);
    const openVideoModal = () => {
      setOpenVideo(true);
    }; 
    return (
            <>
            <div className="banner__one">
                <Swiper modules={[EffectFade, Autoplay, Pagination]} {...slideControl} >
                    <SwiperSlide>
                    <div className="banner__one-image" style={{backgroundImage: `url(${bannerBg1.src})`}}>
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="banner__one-content"> 
                                        <span>Welcome to Conbix</span>
                                        <h1>Business consulting advice</h1>
                                        <div className="banner__one-content-button">
                                            <div className="banner__one-content-button-item">
                                                <Link className="btn-one" href="/about">Read More<i className="far fa-chevron-double-right"></i></Link>
                                            </div>
                                            <div className="banner__one-content-video-icon">
                                                <span onClick={openVideoModal}><i className="fas fa-play"></i></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>                    
                    <SwiperSlide>
                    <div className="banner__one-image" style={{backgroundImage: `url(${bannerBg2.src})`}}>
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="banner__one-content"> 
                                        <span>Welcome to Conbix</span>
                                        <h1>Inspire experience program</h1>
                                        <div className="banner__one-content-button">
                                            <div className="banner__one-content-button-item">
                                                <Link className="btn-one" href="/about">Read More<i className="far fa-chevron-double-right"></i></Link>
                                            </div> 
                                            <div className="banner__one-content-video-icon">
                                                <span onClick={openVideoModal}><i className="fas fa-play"></i></span>
                                            </div> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>
                </Swiper>
                <div className="banner__one-pagination">
                    <div className="container">
                        <div className="area">
                            <div className="banner_pagination"></div>
                        </div>
                    </div>
                </div>
            </div>
            <ModalVideo className='video-modal' channel="youtube" autoplay isOpen={openVideo} videoId="SZEflIVnhH8" onClose={() => setOpenVideo(false)} />
        </>

    );
};

export default BannerOne;
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import ModalVideo from "react-modal-video";
import { EffectFade, Autoplay, Pagination} from 'swiper/modules';
import bannerData from '../../../data/banner-data';
import Link from 'next/link';
import Image from 'next/image';
import shape from "../../../../public/assets/img/shape/banner-4.jpg";

const bannerThreeData = bannerData.filter((banner) => banner.banner_3);
const slideControl = {
    loop: true,
    effect: "fade",
    autoplay: {
		delay: 5500,
		reverseDirection: false,
		disableOnInteraction: false,
    },
};


const Banner = () => {
    const [openVideo, setOpenVideo] = useState(false);
    const openVideoModal = () => {
      setOpenVideo(true);
    };  
    return (
        <>
            <div className="banner__three">
                <Swiper
				modules={[EffectFade, Autoplay, Pagination]}
                {...slideControl}
                >
                    {bannerThreeData?.map((data, id) => (
                        <SwiperSlide key={id}>                            
                        <div className="banner__three-image"  style={{backgroundImage: `url(${data.image.src})`}}>
                            <Image className="banner__three-shape" src={shape} alt="banner-shape" />
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-12">
                                        <div className="banner__three-content">
                                            <span>{data.subtitle}</span>
                                            <h1>{data.title}</h1>
                                            <p>{data.des}</p>
                                            <div className="banner__three-content-button">
                                                <Link className="btn-one" href="/about">{data.button}</Link>
                                                <div onClick={openVideoModal} className="banner__three-content-button-video video-pulse">
                                                    <i className="fas fa-play"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <ModalVideo className='video-modal' channel="youtube" autoplay isOpen={openVideo} videoId="SZEflIVnhH8" onClose={() => setOpenVideo(false)} />            
        </>
    );
};

export default Banner;
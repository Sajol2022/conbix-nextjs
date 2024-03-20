import React, { useState } from 'react';
import ModalVideo from "react-modal-video";
import videoBg from "../../../../public/assets/img/pages/video.jpg";

const Video = () => {
    const [openVideo, setOpenVideo] = useState(false);
    const openVideoModal = () => {
        setOpenVideo(true);
    };  
    return (
        <>
            <div className="video__area" style={{backgroundImage: `url(${videoBg.src})`}}>
                <img className="video__area-shape-one" src="assets/img/shape/video.png" alt="video-shape" />
                <img className="video__area-shape-two left-right-animate" src="assets/img/shape/video-2.png" alt="video-shape" />
                <img className="video__area-shape-three" src="assets/img/shape/video-3.png" alt="video-shape" />
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="video__area-play video video-pulse" onClick={openVideoModal}>
                                <i className="fas fa-play"></i>
                            </div>
                            <h2>Protecting your Investment, Securing Your Property</h2>
                        </div>
                    </div>
                </div>
            </div>
            <ModalVideo className='video-modal' channel="youtube" autoplay isOpen={openVideo} videoId="SZEflIVnhH8" onClose={() => setOpenVideo(false)} />            
        </>
    );
};

export default Video;
import React, { useState } from 'react';
import ModalVideo from 'react-modal-video'

const Video = () => {
    const [openVideo, setOpenVideo] = useState(false)
    const openVideoModal = () => {
        setOpenVideo(true)
    }   
    return (
        <div className="video__two-bg" style={{backgroundImage: `url(/assets/img/pages/video.jpg)`}}>
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="video__two-area">
                            <span onClick={openVideoModal} className="video-popup video-pulse"><i className="fas fa-play"></i></span>
                        </div>
                    </div>
                </div>
            </div>
            <ModalVideo className='video-modal' channel="youtube" autoplay isOpen={openVideo} videoId="SZEflIVnhH8" onClose={() => setOpenVideo(false)} />
        </div>
    );
};

export default Video;
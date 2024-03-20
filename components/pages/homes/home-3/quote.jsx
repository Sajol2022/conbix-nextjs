import React, { useState } from 'react';
import quoteBg from "../../../../public/assets/img/pages/getInTouchThree.jpg";
import ModalVideo from 'react-modal-video';

const Quote = () => {
    const [openVideo, setOpenVideo] = useState(false);
    const openVideoModal = () => {
        setOpenVideo(true);
    }; 
    return (
        <>
            <div className="getIn__touch-three section-padding pb-0" style={{backgroundImage: `url(${quoteBg.src})`}}>
                <img className="getIn__touch-three-shape left-right-animate2" src="assets/img/shape/getInTouchThree.png" alt="shape" />
                <div className="container">
                    <div className="row">
                        <div className="col-xl-7 col-lg-7 lg-mb-50">
                            <div className="getIn__touch-three-left">
                                <div className="getIn__touch-three-left-title">
                                    <span className="subtitle-three">Request a Quote</span>
                                    <h2>Experience the Evolution of your Business</h2>	
                                    <p>he world is changing, and so is your business. To stay relevant and successful, you need to evolve. </p>
                                </div>
                                <div className="getIn__touch-three-left-video">
                                    <div className="getIn__touch-three-left-video-icon video video-pulse">
                                        <span onClick={openVideoModal}><i className="fas fa-play"></i></span>
                                    </div>
                                    <div className="getIn__touch-three-left-video-text">
                                        <h4>Watch Consulting Video</h4>
                                    </div>
                                    <div className="getIn__touch-three-left-video-shape">
                                        <img src="assets/img/icon/getInTouchThree.png" alt="icon" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-5">
                            <div className="getIn__touch-three-right">
                                <h3>Free Consulting</h3>
                                <div className="getIn__touch-three-right-form">
                                    <form action="#">	
                                        <div className="mt-25">
                                            <input type="text" name="name" placeholder="Full Name" required="required" />
                                        </div>
                                        <div className="mt-25">
                                            <input type="email" name="email" placeholder="Email Address" required="required" />											
                                        </div>
                                        <div className="mt-25">
                                            <textarea name="comments" placeholder="Massage..."></textarea>
                                        </div>
                                        <div className="mt-25">
                                            <button className="btn-seven" type="submit">Submit Now<i className="far fa-chevron-double-right"></i></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ModalVideo className='video-modal' channel="youtube" autoplay isOpen={openVideo} videoId="SZEflIVnhH8" onClose={() => setOpenVideo(false)} />
        </>
    );
};

export default Quote;
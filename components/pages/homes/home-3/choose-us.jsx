import React from 'react';

const ChooseUs = () => {
    return (
        <>
            <div className="chooseUs__area section-padding">
                <div className="container">
                    <div className="row align-items-center mb-70">
                        <div className="col-xl-6 col-lg-7 lg-mb-20">
                            <div className="chooseUs__area-title">
                                <span className="subtitle-three">Why Choose Us</span>
                                <h2>consultant's reputation is extremely important.</h2>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-5">
                            <div className="chooseUs__area-right">
                                <div className="chooseUs__area-right-counter">
                                    <h1><span className="counter">180</span>+</h1>
                                    <h6>Get International Award our company</h6>
                                </div>
                                <div className="chooseUs__area-right-shape">
                                    <img className="left-right-animate dark-n" src="/assets/img/shape/choose-us.png" alt="shape" />
                                    <img className="left-right-animate light-n" src="/assets/img/shape/choose-us-dark.png" alt="shape" />
                                </div>
                            </div>                    
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-6 xl-mb-30 dark__image">
                            <img className="img-full" src="assets/img/pages/choose-us.jpg" alt="image" />
                        </div>
                        <div className="col-xl-6">
                            <div className="row">
                                <div className="col-sm-6 sm-mb-30">
                                    <div className="chooseUs__area-item">
                                        <div className="chooseUs__area-item-icon">
                                            <img src="assets/img/icon/choose-us-1.png" alt="icon" />
                                        </div>
                                        <h4>Strategic Planning</h4>
                                        <p>Praesent non varius leo. Cras est nisi, tincidunt vel ligula eu,</p>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="chooseUs__area-item">
                                        <div className="chooseUs__area-item-icon">
                                            <img src="assets/img/icon/choose-us-2.png" alt="icon" />
                                        </div>
                                        <h4>Data Analytics</h4>
                                        <p>Praesent non varius leo. Cras est nisi, tincidunt vel ligula eu,</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>            
        </>
    );
};

export default ChooseUs;
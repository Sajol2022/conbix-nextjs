import React from 'react';

const Work = () => {
    return (
        <div className="work__area section-padding pb-0">
            <div className="container">
                <div className="row mb-70">
                    <div className="col-xl-12">
                        <div className="work__area-title t-center">
                            <span className="subtitle-two">Work Process</span>
                            <h2>Our Solution Process</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-3 col-sm-6 xl-mb-30">
                        <div className="work__area-item">
                            <span>01</span>
                            <h6>Identifying problems</h6>
                            <p>Aenean pretium condimentum ornare. Curabitur</p>
                            <img className="work__area-item-arrow sm-display-n dark-n" src="assets/img/icon/arrow-1.png" alt="shape" />
                            <img className="work__area-item-arrow sm-display-n light-n" src="assets/img/icon/arrow-1-dark.png" alt="shape" />
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 sm-mb-30">
                        <div className="work__area-item">
                            <span>02</span>
                            <h6>Research your Problem</h6>
                            <p>Aenean pretium condimentum ornare. Curabitur</p>
                            <img className="work__area-item-arrow xl-display-n dark-n" src="assets/img/icon/arrow-2.png" alt="shape" />
                            <img className="work__area-item-arrow xl-display-n light-n" src="assets/img/icon/arrow-2-dark.png" alt="shape" />
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 sm-mb-30">
                        <div className="work__area-item">
                            <span>03</span>
                            <h6>Solutions your Problem</h6>
                            <p>Aenean pretium condimentum ornare. Curabitur</p>
                            <img className="work__area-item-arrow xl-display-n dark-n" src="assets/img/icon/arrow-1.png" alt="shape" />
                            <img className="work__area-item-arrow xl-display-n light-n" src="assets/img/icon/arrow-1-dark.png" alt="shape" />
                            <img className="work__area-item-arrow display-n xl-display-b sm-display-n dark-n" src="assets/img/icon/arrow-2.png" alt="shape" />
                            <img className="work__area-item-arrow display-n xl-display-b sm-display-n light-n" src="assets/img/icon/arrow-2-dark.png" alt="shape" />
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6">
                        <div className="work__area-item">
                            <span>04</span>
                            <h6>Consultation with experts</h6>
                            <p>Aenean pretium condimentum ornare. Curabitur</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Work;
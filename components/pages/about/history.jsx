import React from 'react';
import image1 from "../../../public/assets/img/about/history-1.jpg";
import image2 from "../../../public/assets/img/about/history-2.jpg";
import image3 from "../../../public/assets/img/about/history-3.jpg";
import image4 from "../../../public/assets/img/about/history-4.jpg";
import image5 from "../../../public/assets/img/about/history-5.jpg";

const History = () => {
    return (
        <div className="company__history section-padding">
            <div className="container">
                <div className="row mb-70">
                    <div className="col-xl-12">
                        <div className="company__history-title t-center">
                            <span className="subtitle-one">Our History</span>
                            <h2>Our Company History</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12">
                        <div className="company__history-area dark__image">
                            <div className="company__history-area-item">
                                <div className="company__history-area-item-left">
                                    <img src={image1.src} alt="image" />
                                </div>
                                <div className="company__history-area-item-right">
                                    <div className="company__history-area-item-right-content mb-50 xl-mb-30">
                                        <div className="company__history-area-item-right-content-date">
                                            <span>2003</span>
                                            <h5>Start Company</h5>
                                        </div>
                                        <p>Aliquam sit amet massa quis augue porta consequat eu eu lectus. Praesent a ipsum a sem tristique</p>
                                    </div>
                                </div>
                            </div>
                            <div className="company__history-area-items">
                                <div className="company__history-area-items-left order-last order-lg-first">
                                    <div className="company__history-area-items-left-content mb-50 xl-mb-30">
                                        <div className="company__history-area-items-left-content-date">
                                            <span>2008</span>
                                            <h5>Opening Office</h5>
                                        </div>
                                        <p>Aliquam sit amet massa quis augue porta consequat eu eu lectus. Praesent a ipsum a sem tristique</p>
                                    </div>
                                </div>
                                <div className="company__history-area-items-right">
                                    <div className="company__history-area-items-right-image">
                                        <img src={image2.src} alt="image" />
                                    </div>
                                </div>
                            </div>
                            <div className="company__history-area-item">
                                <div className="company__history-area-item-left">
                                    <div className="company__history-area-item-left-image">
                                        <img src={image3.src} alt="image" />
                                    </div>
                                </div>
                                <div className="company__history-area-item-right">
                                    <div className="company__history-area-item-right-content mb-50 xl-mb-30">
                                        <div className="company__history-area-item-right-content-date">
                                            <span>2013</span>
                                            <h5>Improve Management</h5>
                                        </div>
                                        <p>Aliquam sit amet massa quis augue porta consequat eu eu lectus. Praesent a ipsum a sem tristique</p>
                                    </div>
                                </div>
                            </div>
                            <div className="company__history-area-items">
                                <div className="company__history-area-items-left order-last order-lg-first">
                                    <div className="company__history-area-items-left-content mb-50 xl-mb-30">
                                        <div className="company__history-area-items-left-content-date">
                                            <span>2018</span>
                                            <h5>Open Research Team</h5>
                                        </div>
                                        <p>Aliquam sit amet massa quis augue porta consequat eu eu lectus. Praesent a ipsum a sem tristique</p>
                                    </div>
                                </div>
                                <div className="company__history-area-items-right">
                                    <div className="company__history-area-items-right-image">
                                        <img src={image4.src} alt="imafe" />
                                    </div>
                                </div>
                            </div>
                            <div className="company__history-area-item">
                                <div className="company__history-area-item-left">
                                    <div className="company__history-area-item-left-image">
                                        <img src={image5.src} alt="imafe" />
                                    </div>
                                </div>
                                <div className="company__history-area-item-right">
                                    <div className="company__history-area-item-right-content">
                                        <div className="company__history-area-item-right-content-date">
                                            <span>2024</span>
                                            <h5>Winning Award</h5>
                                        </div>
                                        <p>Aliquam sit amet massa quis augue porta consequat eu eu lectus. Praesent a ipsum a sem tristique</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default History;
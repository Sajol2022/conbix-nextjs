import testimonialData from '@/components/data/testimonial-data';
import React from 'react';

const TestimonialMain = () => {
    return (
        <div className="testimonial__two section-padding-two">
            <div className="container">
                <div className="row">
                    {testimonialData?.map((data, id) => (
                        <div className="col-xl-4 col-md-6 mt-25" key={id}>
                            <div className="testimonial__two-item">
                                <div className="testimonial__two-item-top">
                                    <img src="assets/img/icon/quotes.png" alt="icon" />
                                    <div className="testimonial__two-item-top-reviews">
                                        <h6>{data.service}</h6>
                                        <ul>
                                            <li><i className="fas fa-star"></i></li>
                                            <li><i className="fas fa-star"></i></li>
                                            <li><i className="fas fa-star"></i></li>
                                            <li><i className="fas fa-star"></i></li>
                                            <li><i className="fas fa-star"></i></li>
                                        </ul>
                                    </div>
                                </div>
                                <p>{data.des}</p>
                                <div className="testimonial__two-item-bottom">
                                    <img src={data.avatar.src} alt="avaatar-image" />
                                    <div className="testimonial__two-item-bottom-name">
                                        <h5>{data.name}</h5>
                                        <span>{data.position}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TestimonialMain;
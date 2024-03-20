import Link from 'next/link';
import React from 'react';
import ctaBg from "../../../../public/assets/img/shape/cta.png";

const Cta = () => {
    return (
        <div className="cta__area" style={{backgroundImage: `url(${ctaBg.src})`}}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-6 col-lg-8 lg-mb-20">
                        <div className="cta__area-title lg-t-center">
                            <h2>Working Together for Property Safely</h2>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-4">
                        <div className="cta__area-btn t-right lg-t-center">
                            <Link className="btn-two" href="/request-quote">Get Appointment</Link>						
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cta;
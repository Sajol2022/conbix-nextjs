import React from 'react';
import PricingPlansMain from '../../pricing-plans/pricing-plans';

const Pricing = () => {
    return (
        <>
            <div className='pricing__area section-padding'>
                <div className="container">
                    <div className="row mb-70">
                        <div className="col-xl-12">
                            <div className="pricing__area-title t-center">
                                <span className="subtitle-three">Pricing Plan</span>
                                <h2>Best Pricing Plan</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <PricingPlansMain />
            </div>       
        </>
    );
};

export default Pricing;
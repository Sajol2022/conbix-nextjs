import Link from 'next/link';
import React from 'react';

const PricingPlansMain = () => {
	return (
		<>
		<div className="container">
			<div className="row">
				<div className="col-xl-4 col-lg-6 col-md-6 xl-mb-30">
					<div className="pricing__area-item">
						<div className="pricing__area-item-price">
							<h4>$<span>29</span>.00</h4>
							<span className="text-two">Per Month</span>
						</div>
						<div className="pricing__area-item-title">
							<span className="text-two">Start package</span>
							<h3>Basic Plan</h3>
						</div>
						<div className="pricing__area-item-list">
							<ul>
								<li><i className="fal fa-check"></i>Business consulting</li>
								<li><i className="fal fa-check"></i>24/7 Customer Support</li>
								<li><i className="fal fa-check"></i>Business Planning</li>
								<li><i className="fal fa-times"></i>Digital Business Solution</li>
								<li><i className="fal fa-times"></i>Human Research</li>                                
							</ul>
						</div>
						<Link className="btn-eight" href="/request-quote">Get Started</Link>
					</div>
				</div>
				<div className="col-xl-4 col-lg-6 col-md-6 md-mb-30">
					<div className="pricing__area-item">
						<div className="pricing__area-item-price">
							<h4>$<span>59</span>.00</h4>
							<span className="text-two">Per Month</span>
						</div>
						<div className="pricing__area-item-title">
							<span className="text-two">Start package</span>
							<h3>Standard Plan</h3>
						</div>
						<div className="pricing__area-item-list">
							<ul>
								<li><i className="fal fa-check"></i>Business consulting</li>
								<li><i className="fal fa-check"></i>24/7 Customer Support</li>
								<li><i className="fal fa-check"></i>Business Planning</li>
								<li><i className="fal fa-times"></i>Digital Business Solution</li>
								<li><i className="fal fa-check"></i>Human Research</li>                                
							</ul>
						</div>
						<Link className="btn-eight" href="/request-quote">Get Started</Link>
					</div>
				</div>
				<div className="col-xl-4 col-lg-6 col-md-6">
					<div className="pricing__area-item">
						<div className="pricing__area-item-price">
							<h4>$<span>89</span>.00</h4>
							<span className="text-two">Per Month</span>
						</div>
						<div className="pricing__area-item-title">
							<span className="text-two">Start package</span>
							<h3>Premium Plan</h3>
						</div>
						<div className="pricing__area-item-list">
							<ul>
								<li><i className="fal fa-check"></i>Business consulting</li>
								<li><i className="fal fa-check"></i>24/7 Customer Support</li>
								<li><i className="fal fa-check"></i>Business Planning</li>
								<li><i className="fal fa-check"></i>Digital Business Solution</li>
								<li><i className="fal fa-check"></i>Human Research</li>                                
							</ul>
						</div>
						<Link className="btn-eight" href="/request-quote">Get Started</Link>
					</div>
				</div>
			</div>
		</div>
		</>
	);
};

export default PricingPlansMain;
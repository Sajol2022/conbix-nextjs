import React from 'react';

const RequestQuoteMain = () => {
    return (
        <div className="request__quote section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <form action="#">
                            <div className="row">
                                <div className="col-md-6 mb-30">
                                    <div className="request__quote-item">
                                        <label>Name<span> *</span></label>
                                        <input type="text" name="name" placeholder="First" required />
                                    </div>
                                </div>
                                <div className="col-md-6 mt-30 md-mt-0 lg-mb-30">
                                    <div className="request__quote-item">
                                        <input type="text" name="name" placeholder="Last" required />
                                    </div>
                                </div>
                                <div className="col-md-6 mb-30">
                                    <div className="request__quote-item">
                                        <label>Email Address<span> *</span></label>
                                        <input type="email" name="email" placeholder="email" required />
                                    </div>
                                </div>
                                <div className="col-md-6 lg-mb-30">
                                    <div className="request__quote-item">
                                        <label>Number<span> *</span></label>
                                        <input type="number" name="number" required />
                                    </div>
                                </div>
                                <div className="col-md-6 mb-30">
                                    <div className="request__quote-item">
                                        <label>Company/Organization<span> *</span></label>
                                        <input type="text" required />
                                    </div>
                                </div>
                                <div className="col-md-6 lg-mb-30">
                                    <div className="request__quote-item">
                                        <label>Website<span> *</span></label>
                                        <input type="text" placeholder="https://" required />
                                    </div>
                                </div>
                                <div className="col-md-12 mb-30">
                                    <p className="mb-10">What services can we provide you?<span> *</span></p>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="request__quote-services">
                                                <label><input className="mr-10" type="checkbox" />Optimization (SEO)</label>
                                                <label><input className="mr-10" type="checkbox" />Web Design</label>
                                                <label><input className="mr-10" type="checkbox" />Web Hosting / Maintenance</label>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="request__quote-services">
                                                <label><input className="mr-10" type="checkbox" />Content Writing</label>
                                                <label><input className="mr-10" type="checkbox" />Search Engine Marketing</label>
                                                <label><input className="mr-10" type="checkbox" />Social Media</label>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="request__quote-services">
                                                <label><input className="mr-10" type="checkbox" />ADA Compliance</label>
                                                <label><input className="mr-10" type="checkbox" />Photography / Video</label>
                                                <label><input className="mr-10" type="checkbox" />Email Marketing</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 mb-30">
                                    <div className="request__quote-item">
                                        <label>Message<span> *</span></label>
                                        <textarea name="message"></textarea>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <p className="mb-10">Join our email list?</p>
                                    <label><input className="mr-10" type="radio" />Yes, Please!</label><br />
                                    <label><input className="mr-10" type="radio" />Not yet, thanks</label>
                                    <p className="description">Join our mailing list to get our blog updates. You can unsubscribe at any time. We respect your privacy and will never share your information.</p>
                                    <button className="btn-one mt-30" type="submit">Submit <i className="far fa-chevron-double-right"></i></button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RequestQuoteMain;
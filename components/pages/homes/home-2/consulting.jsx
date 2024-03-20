import Link from 'next/link';

const Consulting = () => {
    return (
        <div className="consulting__area section-padding">
            <img className="consulting__area-shape dark-n" src="assets/img/shape/consulting.png" alt="shape" />
            <img className="consulting__area-shape light-n" src="assets/img/shape/consulting-dark.png" alt="shape" />
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-7 col-lg-6 lg-mb-30">
                        <div className="consulting__area-image dark__image">
                            <img src="assets/img/pages/consulting.jpg" alt="image" />
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-6">
                        <div className="consulting__area-right">
                            <div className="consulting__area-right-title">
                                <span className="subtitle-two">Premium Services</span>
                                <h2>Sharing expertise Building relationships</h2>
                                <p>Maecenas vitae lacinia arcu, nec dignissim metus. In consequat odio elit, at dapibus sapien suscipit in. Nam fringilla mi at mollis laoreet.</p>
                            </div>
                            <div className="consulting__area-right-list">
                                <span><i className="far fa-check"></i>Teaching and training employees.</span>
                                <span><i className="far fa-check"></i>Project management consulting.</span>
                            </div>
                            <Link className="btn-six" href="contact">Contact Us<i className="far fa-chevron-double-right"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Consulting;
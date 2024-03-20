import React from 'react';

const Features = () => {
    const featuresData = {
        subtitle: 'Core Features',
        title: 'Global Customers Share Their Stories with Us',
        des: 'Welcome to our website, where we take pride in delivering exceptional products services that have earned us recognition from customers around the world. Our commitment to quality and customer..',
        list: [
            {icon: <i className="flaticon-insurance"></i>,title:'There are ways to get money fast'},
            {icon: <i className="flaticon-piggy-bank"></i>,title:'Simple processes in Everyday life'},
        ],
    }
    return (
        <div className="features__two page services section-padding" style={{backgroundImage: `url(/assets/img/shape/features.png)`}}>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-7 lg-mb-30">
                        <div className="features__two-left">
                            <div className="features__two-left-title">
                                <span className="subtitle-four">{featuresData?.subtitle}</span>
                                <h2>{featuresData?.title}</h2>
                                <p>{featuresData?.des}</p>
                            </div>
                            <div className="features__two-left-bottom">
                                {featuresData?.list.map((data, id) => (
                                    <div className="features__two-left-bottom-item" key={id}>
                                        <div className="features__two-left-bottom-item-icon">
                                            {data.icon}
                                        </div>
                                        <h5>{data.title}</h5>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-5">
                        <div className="features__two-right dark__image">
                            <img src="/assets/img/pages/1.jpg" alt="features-image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;
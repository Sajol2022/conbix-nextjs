import React from 'react';
import Link from 'next/link';
import servicesData from '@/components/data/services-data';

const ServicesSingleMain = ({serviceDetails}) => {
    const servicesD = servicesData.slice(0, 5);
    return (
        <>
            <div className="services__details section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 order-last order-lg-first">
                            <div className="all__sidebar">
                                <div className="all__sidebar-item">
                                    <h4>Our Solutions</h4>
                                    <div className="all__sidebar-item-solution">
                                        <ul>
                                            {servicesD.map((data, id) => (
                                                <li key={id}><Link href={`/services/${data.id}`}><i className="far fa-chevron-double-right"></i>{data.title}<span>({data.number})</span></Link></li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="all__sidebar-item">
                                    <h4>Company Profile</h4>
                                    <div className="all__sidebar-item-download">
                                        <ul>
                                            <li><Link href="#"><div><i className="fa-light fa-file-word"></i>Download File</div><span className="fal fa-arrow-to-bottom"></span></Link></li>
                                            <li><Link href="#"><div><i className="fa-light fa-file-pdf"></i>Download Pdf</div><span className="fal fa-arrow-to-bottom"></span></Link></li>
                                        </ul>                            
                                    </div>
                                </div>
                                <div className="all__sidebar-help">
                                    <div className="all__sidebar-help-image">
                                        <img className="img__full" src="../assets/img/pages/help.jpg" alt="image" />
                                        <div className="all__sidebar-help-image-content">
                                            <img src="../assets/img/favicon-1.png" alt="icon" />
                                            <h4>We're Always ready for help You</h4>
                                            <Link className="btn-one" href="/contact">Need Help<i className="far fa-chevron-double-right"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-8 col-lg-8 lg-mb-50">
                            <div className="services__details-left">
                                <div className="services__details-left-image dark__image">
                                    <img src={serviceDetails?.image.src} alt="image" />
                                </div>
                                <div className="services__details-left-content">
                                    <h2>{serviceDetails?.title}</h2>
                                    <p className="mb-25">Proin molestie nunc id scelerisque facilisis. Nunc efficitur mollis nunc, ac facilisis orci viverra vel. Aliquam rutrum libero sit amet justo consectetur luctus. Duis dolor augue, euismod a accumsan at, commodo a lorem. Donec sit amet nibh condimentum libero</p>
                                    <p className="mb-25">Nunc efficitur mollis nunc, ac facilisis orci viverra vel. Aliquam rutrum libero sit amet justo consectetur luctus. Duis dolor augue, euismod a accumsan at, commodo a lorem.</p>                        
                                    <div className="services__details-left-content-list">
                                        <span><i className="far fa-check"></i>It's essential to work with business consultants who have</span>
                                        <span><i className="far fa-check"></i>Business consultants may charge by the project or hour, or you may need to pay daily or monthly retainers.</span>
                                        <span><i className="far fa-check"></i>Meet with the board of directors and employees.</span>
                                    </div>
                                    <h3 className="mb-30">Working challenge</h3>
                                    <p className="mb-25">Fusce ornare mauris arcu, eget placerat erat porttitor at. Cras non justo consectetur, tempus lectus a, tempor arcu. Proin luctus sagittis augue,</p>
                                    <div className="services__details-left-content-list bold">
                                        <div className="row">
                                            <div className="col-sm-6 sm-mb-15">
                                                <span><i className="far fa-check"></i>Accounting consulting.</span>
                                                <span><i className="far fa-check"></i>Read all company materials</span>
                                                <span><i className="far fa-check"></i>Financial consultants</span>
                                            </div>
                                            <div className="col-sm-6">
                                                <span><i className="far fa-check"></i>Marketing consultants</span>
                                                <span><i className="far fa-check"></i>Operations consultants</span>
                                                <span><i className="far fa-check"></i>Implementation</span>
                                            </div>
                                        </div>
                                    </div>  
                                    <h3>frequently asked questions</h3>
                                    <div className="faq__area mt-35" id="accordionExample">
                                        <div className="faq__area-item">
                                            <h6 className="icon page collapsed" data-bs-toggle="collapse" data-bs-target="#collapseOne">How do you manage consulting effectively?</h6>
                                            <div id="collapseOne" className="faq__area-item-body collapse" data-bs-parent="#accordionExample">
                                                <p>Pellentesque eget dui tellus. Donec semper tincidunt egestas. Vivamus lectus ipsum, tempor quis mattis in, ornare ut tortor. Praesent condimentum eu turpis ut hendrerit.</p>
                                            </div>
                                        </div>
                                        <div className="faq__area-item">
                                            <h6 className="icon page" data-bs-toggle="collapse" data-bs-target="#collapseTwo">How do consultants solve problems?</h6>
                                            <div id="collapseTwo" className="faq__area-item-body collapse show" data-bs-parent="#accordionExample">
                                                <p>Pellentesque eget dui tellus. Donec semper tincidunt egestas. Vivamus lectus ipsum, tempor quis mattis in, ornare ut tortor. Praesent condimentum eu turpis ut hendrerit.</p>
                                            </div>
                                        </div>
                                        <div className="faq__area-item">
                                            <h6 className="icon page collapsed" data-bs-toggle="collapse" data-bs-target="#collapseThree">What is required of a consultant?</h6>
                                            <div id="collapseThree" className="faq__area-item-body collapse" data-bs-parent="#accordionExample">
                                                <p>Pellentesque eget dui tellus. Donec semper tincidunt egestas. Vivamus lectus ipsum, tempor quis mattis in, ornare ut tortor. Praesent condimentum eu turpis ut hendrerit.</p>
                                            </div>
                                        </div>
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

export default ServicesSingleMain;
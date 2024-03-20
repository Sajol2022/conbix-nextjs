import faqData from '@/components/data/faq';

const FaqArea = () => {
    const { faqOne, faqTwo } = faqData;

    return (
        <div className="container">
            <div className="row">
                <div className="col-xl-6 xl-mb-20">
                    <div id="accordionExamplePage">
                        {faqOne?.map((data, id) => (
                            <div className="faq__area-item" key={id}>
                                <h6 className={data.class} data-bs-toggle="collapse" data-bs-target={`#${data.id}`}>{data.title}</h6>
                                <div id={data.id} className={data.class2} data-bs-parent="#accordionExamplePage">
                                    <p>{data.des}</p>
                                </div>
                            </div>
                        ))}
                    </div> 
                </div>
                <div className="col-xl-6">
                    <div id="accordionExampleAbout">
                        {faqTwo?.map((data, id) => (
                            <div className="faq__area-item" key={id}>
                                <h6 className={data.class} data-bs-toggle="collapse" data-bs-target={`#${data.id}`}>{data.title}</h6>
                                <div id={data.id} className={data.class2} data-bs-parent="#accordionExampleAbout">
                                    <p>{data.des}</p>
                                </div>
                            </div>
                        ))}
                    </div> 
                </div>
            </div>
        </div>
    );
};

export default FaqArea;
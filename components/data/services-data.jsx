import image1 from "../../public/assets/img/service/service-1.jpg";
import image2 from "../../public/assets/img/service/service-2.jpg";
import image3 from "../../public/assets/img/service/service-3.jpg";
import image4 from "../../public/assets/img/service/service-4.jpg";
import image5 from "../../public/assets/img/service/service-5.jpg";
import image6 from "../../public/assets/img/service/service-6.jpg";

const servicesData = [
    {
        id: 'business-model',
        icon: <i className="flaticon-corporate"></i>,
        title: 'Business Model',
        description: 'We conduct a thorough analysis of your existing business model',
        number: '1',
        image: image1,
    },
    {
        id: 'digital-solutions',
        icon: <i className="flaticon-consultant-services"></i>,
        title: 'Digital Solutions',
        description: 'Streamline operations and improve collaboration with cloud',
        number: '2',
        image: image2,
    },
    {
        id: 'machine-learning',
        icon: <i className="flaticon-data-science"></i>,
        title: 'Machine Learning',
        description: 'Machine Learning leverages the power of algorithms',
        number: '3',
        image: image3,
    },
    {
        id: 'audit-marketing',
        icon: <i className="flaticon-analysis"></i>,
        title: 'Audit Marketing',
        description: 'We map out the customer journey to understand how your target',
        number: '4',
        image: image4,
    },
    {
        id: 'business-consulting',
        icon: <i className="flaticon-creative"></i>,
        title: 'Business Consulting',
        description: 'Our team of seasoned consultants collaborates closely',
        number: '5',
        image: image5,
    },
    {
        id: 'human-research',
        icon: <i className="flaticon-resource"></i>,
        title: 'Human research',
        description: 'This can involve orientation for new hires, skill development,',
        number: '6',
        image: image6,
    },
];

export default servicesData;
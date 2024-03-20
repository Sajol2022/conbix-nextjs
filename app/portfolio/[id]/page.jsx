"use client"
import { useParams, useRouter } from "next/navigation";
import ServicesSingle from '@/components/pages/services/service-single';
import portfolioData from "@/components/data/portfolio-data";

const PortfolioDetail = () => {
    const params = useParams();
    const serviceDetails = portfolioData?.find((service) => service.id === params.id);
    const router = useRouter();
    if (!serviceDetails) {
        return router.push("/404-error");
    }
    return (
        <>
            {/* <ServicesSingle serviceDetails={serviceDetails} />
             */}
             <h1>{serviceDetails?.title}</h1>
        </>
    );
};

export default PortfolioDetail;
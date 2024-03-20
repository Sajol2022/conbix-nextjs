"use client"
import { useParams, useRouter } from "next/navigation";
import portfolioData from "@/components/data/portfolio-data";

const PortfolioDetail = () => {
    const params = useParams();
    const portfolioDetails = portfolioData?.find((portfolio) => portfolio.id === params.id);
    const router = useRouter();
    if (!portfolioDetails) {
        return router.push("/404-error");
    }
    return (
        <>
            {/* <portfoliosSingle portfolioDetails={portfolioDetails} />
             */}
             <h1>{portfolioDetails?.title}</h1>
        </>
    );
};

export default PortfolioDetail;
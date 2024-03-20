"use client"
import { useParams, useRouter } from "next/navigation";
import portfolioData from '@/components/data/portfolio-data';
import React from 'react';

const PortfolioPage = () => {
    const params = useParams();
    const singleData = portfolioData?.find((portfolio) => portfolio.id === params.id);
    const router = useRouter();
    if (!singleData) {
        return router.push("/404-error");
    }
    return (
        <>
            
        </>
    );
};

export default PortfolioPage;
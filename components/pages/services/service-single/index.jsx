"use client"
import HeaderOne from "@/components/layout/headers/header-one";
import BreadCrumb from "../../common/breadcrumb";
import ServicesSingleMain from "./services-single";
import SEO from "@/components/data/seo";

const ServicesSingle = ({serviceDetails}) => {
    return (
        <>
            <SEO pageTitle={serviceDetails?.title} />
            <HeaderOne />
            <BreadCrumb title={serviceDetails?.title} innerTitle={serviceDetails?.title} />
            <ServicesSingleMain serviceDetails={serviceDetails}/>
        </>
    );
};

export default ServicesSingle;
"use client"
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header-one";
import BreadCrumb from "../common/breadcrumb";
import FooterTwo from "@/components/layout/footers/footer-two";
import PricingPlansMain from "./pricing-plans";

const PricingPages = () => {
    return (
        <>
            <SEO pageTitle='Pricing Plan' />
            <HeaderOne />
            <BreadCrumb title='Pricing Plan' innerTitle='Pricing Plan' />
            <div className='pricing__area page'>
                <PricingPlansMain />
            </div>
            <div className='all-footer'>
                <FooterTwo />
            </div>            
        </>
    );
};

export default PricingPages;
"use client"
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header-one";
import BreadCrumb from "../common/breadcrumb";
import FooterTwo from "@/components/layout/footers/footer-two";
import PricingPlansMain from "./pricing-plans";
import ScrollToTop from "../common/scroll/scroll-to-top";

const PricingPages = () => {
    return (
        <>
            <SEO pageTitle='Pricing Plan' />
            <HeaderOne />
            <BreadCrumb title='Pricing Plan' innerTitle='Pricing Plan' />
            <div className='pricing__area page section-padding'>
                <PricingPlansMain />
            </div>
            <div className='all-footer'>
                <FooterTwo />
            </div>    
            <ScrollToTop />        
        </>
    );
};

export default PricingPages;
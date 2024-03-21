"use client"
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header-one";
import BreadCrumb from "../../common/breadcrumb";
import FooterTwo from "@/components/layout/footers/footer-two";
import ServicesMain from "./service-two";
import ScrollToTop from "../../common/scroll/scroll-to-top";

const ServicePageTwo = () => {
    return (
        <>
            <SEO pageTitle="Services Two" />
            <HeaderOne />
            <BreadCrumb title="Services Two" innerTitle="Services Two" />
            <ServicesMain />
            <div className='all-footer'>
                <FooterTwo />
            </div>
            <ScrollToTop />
        </>
    );
};

export default ServicePageTwo;
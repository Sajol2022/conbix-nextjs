"use client"
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header-one";
import BreadCrumb from "../../common/breadcrumb";
import ServicesMain from "./services";
import FooterTwo from "@/components/layout/footers/footer-two";

const ServicePage = () => {
    return (
        <>
            <SEO pageTitle="Our Services" />
            <HeaderOne />
            <BreadCrumb title="Our Services" innerTitle="Our Services" />
            <ServicesMain />
            <div className='all-footer'>
                <FooterTwo />
            </div>
        </>
    );
};

export default ServicePage;
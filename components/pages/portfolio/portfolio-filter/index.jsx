"use client"

import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header-one";
import BreadCrumb from "../../common/breadcrumb";
import PortfolioFilter from "./portfolio-filter";
import FooterTwo from "@/components/layout/footers/footer-two";
import ScrollToTop from "../../common/scroll/scroll-to-top";

const PortfolioFilterPage = () => {
    return (
        <>
            <SEO pageTitle='Portfolio Filter' />
            <HeaderOne />
            <BreadCrumb title="Portfolio Filter" innerTitle="Portfolio Filter" />
            <PortfolioFilter />
            <div className='all-footer'>
                <FooterTwo />
            </div>
            <ScrollToTop />
        </>
    );
};

export default PortfolioFilterPage;
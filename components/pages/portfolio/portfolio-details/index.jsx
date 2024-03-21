"use client"
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header-one";
import BreadCrumb from "../../common/breadcrumb";
import PortfolioDetailsMain from "./portfolio-details";
import FooterTwo from "@/components/layout/footers/footer-two";
import ScrollToTop from "../../common/scroll/scroll-to-top";

const PortfolioDetails = ({singleData}) => {
    return (
        <>
            <SEO pageTitle={singleData?.title} />
            <HeaderOne />
            <BreadCrumb title={singleData?.title} innerTitle={singleData?.title} />
            <PortfolioDetailsMain singleData={singleData} />
            <div className='all-footer'>
                <FooterTwo />
            </div>
            <ScrollToTop />
        </>
    );
};

export default PortfolioDetails;
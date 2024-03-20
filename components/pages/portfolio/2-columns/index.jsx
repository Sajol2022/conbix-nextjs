"use client"
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header-one";
import BreadCrumb from "../../common/breadcrumb";
import FooterTwo from "@/components/layout/footers/footer-two";
import TwoColumns from "./two-columns";

const PortfolioTowColumns = () => {
    return (
        <>
            <SEO pageTitle='Portfolio Grid - 02 Columns' />
            <HeaderOne />
            <BreadCrumb title="02 Columns" innerTitle="Portfolio Grid" />
            <TwoColumns />        
            <div className='all-footer'>
                <FooterTwo />
            </div>          
        </>
    );
};

export default PortfolioTowColumns;
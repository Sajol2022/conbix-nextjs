"use client"
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header-one";
import BreadCrumb from "../../common/breadcrumb";
import FooterTwo from "@/components/layout/footers/footer-two";
import ThreeColumns from "./three-columns";

const PortfolioThreeColumns = () => {
    return (
        <>
            <SEO pageTitle='Portfolio Grid - 03 Columns' />
            <HeaderOne />
            <BreadCrumb title="03 Columns" innerTitle="Portfolio Grid" />
            <ThreeColumns />        
            <div className='all-footer'>
                <FooterTwo />
            </div>          
        </>
    );
};

export default PortfolioThreeColumns;
"use client"
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header-one";
import BreadCrumb from "../../common/breadcrumb";
import TeamMain from "./team";
import FooterTwo from "@/components/layout/footers/footer-two";
import ScrollToTop from "../../common/scroll/scroll-to-top";

const TeamPageThree = () => {
    return (
        <>
            <SEO pageTitle='Team Three' />
            <HeaderOne />
            <BreadCrumb title='Team Three' innerTitle='Team Three'/>
            <TeamMain />
            <div className='all-footer'>
                <FooterTwo />
            </div>
            <ScrollToTop />
        </>
    );
};

export default TeamPageThree;
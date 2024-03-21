"use client"
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header-one";
import BreadCrumb from "../../common/breadcrumb";
import TeamMain from "./team";
import FooterTwo from "@/components/layout/footers/footer-two";
import ScrollToTop from "../../common/scroll/scroll-to-top";

const TeamPageTwo = () => {
    return (
        <>
            <SEO pageTitle='Team Two' />
            <HeaderOne />
            <BreadCrumb title='Team Two' innerTitle='Team Two'/>
            <TeamMain />
            <div className='all-footer'>
                <FooterTwo />
            </div>
            <ScrollToTop />
        </>
    );
};

export default TeamPageTwo;
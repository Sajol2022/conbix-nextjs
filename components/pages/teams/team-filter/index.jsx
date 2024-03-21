"use client"
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header-one";
import BreadCrumb from "../../common/breadcrumb";
import FooterTwo from "@/components/layout/footers/footer-two";
import TeamFilter from "./team-filter";
import ScrollToTop from "../../common/scroll/scroll-to-top";

const TeamFilterPage = () => {
    return (
        <>
            <SEO pageTitle='Team Filter' />
            <HeaderOne />
            <BreadCrumb title='Team Filter' innerTitle='Team Filter'/>
            <TeamFilter />
            <div className='all-footer'>
                <FooterTwo />
            </div>
            <ScrollToTop />
        </>
    );
};

export default TeamFilterPage;
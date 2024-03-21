"use client"
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header-one";
import BreadCrumb from "../../common/breadcrumb";
import TeamSingleMain from "./team-single";
import FooterTwo from "@/components/layout/footers/footer-two";
import ScrollToTop from "../../common/scroll/scroll-to-top";

const TeamSingle = ({teamDetails}) => {
    return (
        <>
            <SEO pageTitle={teamDetails?.name} />
            <HeaderOne />
            <BreadCrumb title={teamDetails?.name} innerTitle={teamDetails?.name} />
            <TeamSingleMain teamDetails={teamDetails}/>
            <div className='all-footer'>
                <FooterTwo />
            </div>
            <ScrollToTop />
        </>
    );
};

export default TeamSingle;
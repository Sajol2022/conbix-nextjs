"use client"
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header-one";
import BreadCrumb from "../common/breadcrumb";
import FaqArea from "./faq";
import FooterTwo from "@/components/layout/footers/footer-two";

const Faq = () => {
    return (
        <>        
            <SEO pageTitle='FAQ' />
            <HeaderOne />
            <BreadCrumb title='Question & Ans.' innerTitle="FAQ's" />
            <div className='section-padding'>
                <FaqArea />
            </div>
            <div className='all-footer'>
                <FooterTwo />
            </div>
        </>
    );
};

export default Faq;
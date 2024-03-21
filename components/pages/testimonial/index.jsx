"use client"
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header-one";
import BreadCrumb from "../common/breadcrumb";
import FooterTwo from "@/components/layout/footers/footer-two";
import TestimonialMain from "./testimonial";
import ScrollToTop from "../common/scroll/scroll-to-top";

const Testimonial = () => {
    return (
        <>
            <SEO pageTitle='Testimonials' />
            <HeaderOne />
            <BreadCrumb title='Testimonials' innerTitle='Testimonials' />
            <div className='pricing__area page'>
                <TestimonialMain />
            </div>
            <div className='all-footer'>
                <FooterTwo />
            </div>   
            <ScrollToTop />         
        </>
    );
};

export default Testimonial;
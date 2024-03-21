"use client"

import BlogSingleMain from "./blog-details";
import BreadCrumb from "../../common/breadcrumb";
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header-one";
import FooterTwo from "@/components/layout/footers/footer-two";
import ScrollToTop from "../../common/scroll/scroll-to-top";

const BlogDetails = ({singleData}) => {
    const firstThreeWords = singleData?.title.split(' ').slice(0, 3).join(' ') + '...';
    return (
        <>
            <SEO pageTitle={singleData?.title} />
            <HeaderOne />
            <BreadCrumb title={firstThreeWords} innerTitle={singleData?.title} />
            <BlogSingleMain singleData={singleData}/>
            <div className='all-footer'>
                <FooterTwo />
            </div>
            <ScrollToTop />
        </>
    );
};

export default BlogDetails;
"use client"

import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header-one";
import BreadCrumb from "../../common/breadcrumb";
import BlogStandardMain from "./blog-standard";
import FooterTwo from "@/components/layout/footers/footer-two";


const BlogStandardPage = () => {
    return (
        <>
            <SEO pageTitle='Blog Standard' />
            <HeaderOne />
            <BreadCrumb title="Blog Standard" innerTitle="Blog Standard" />
            <BlogStandardMain />
            <div className='all-footer'>
                <FooterTwo />
            </div>
        </>
    );
};

export default BlogStandardPage;
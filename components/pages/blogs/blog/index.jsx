"use client"

import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header-one";
import BreadCrumb from "../../common/breadcrumb";
import BlogGridMain from "./blog-grid";
import FooterTwo from "@/components/layout/footers/footer-two";


const BlogGrid = () => {
    return (
        <>
            <SEO pageTitle='Blog Grid' />
            <HeaderOne />
            <BreadCrumb title="Blog Grid" innerTitle="Blog Grid" />
            <BlogGridMain />
            <div className='all-footer'>
                <FooterTwo />
            </div>
        </>
    );
};

export default BlogGrid;
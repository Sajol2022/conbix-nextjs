"use client"

import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header-one";
import BreadCrumb from "../common/breadcrumb";
import AboutMain from "./about";
import FooterTwo from "@/components/layout/footers/footer-two";

const AboutUs = () => {
    return (
      <>
        <SEO pageTitle="About Us" />
        <HeaderOne />
        <BreadCrumb title="About Us" innerTitle="Company About" />
        <AboutMain />
        <div className='all-footer'>
            <FooterTwo />
        </div>
      </>
    );
};

export default AboutUs;
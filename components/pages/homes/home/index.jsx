"use client";
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header-one";
import About from "./about";
import Services from "./services";
import CtaArea from "./cta";
import Experience from "./experience";
import Portfolio from "./portfolio";
import Testimonial from "./testimonial";
import GetInTouch from "./get-in-touch";
import Blog from "./blog";
import FooterOne from "@/components/layout/footers/footer-one";
import BannerOne from "./banner";
import ScrollToTop from "../../common/scroll/scroll-to-top";

const HomeOne = () => {
    return (
        <div>
            <SEO pageTitle='Main Business' />
            <HeaderOne />
            <BannerOne />
            <About />
            <Services />
            <CtaArea />
            <Experience />
            <Portfolio />
            <Testimonial />
            <GetInTouch />
            <Blog />
            <FooterOne />
            <ScrollToTop />
        </div>
    );
};

export default HomeOne;
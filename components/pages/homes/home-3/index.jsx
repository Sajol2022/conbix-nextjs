"use client"
import SEO from "@/components/data/seo";
import HeaderThree from "@/components/layout/headers/header-three";
import SwitchTab from "../../common/dark-light";
import FooterThree from "@/components/layout/footers/footer-three";
import About from "./about";
import Services from "./services";
import ChooseUs from "./choose-us";
import Portfolio from "./portfolio";
import Pricing from "./pricing";
import Quote from "./quote";
import Blog from "./blog";
import BannerThree from "./banner";
import ScrollToTop from "../../common/scroll/scroll-to-top";

const HomeThree = ({addClass}) => {
    return (
        <>
            <SwitchTab addClass={addClass} />
            <SEO pageTitle="Business Solutions" />
            <HeaderThree />
            <BannerThree />
            <About />
            <Services />
            <ChooseUs />
            <Portfolio />
            <Pricing />
            <Quote />
            <Blog />
            <FooterThree />
            <ScrollToTop addClass={addClass} />
        </>
    );
};

export default HomeThree;

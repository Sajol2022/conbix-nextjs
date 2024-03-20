"use client"
import SEO from "@/components/data/seo";
import HeaderTwo from "@/components/layout/headers/header-two";
import FooterTwo from "@/components/layout/footers/footer-two";
import BannerTwo from "./banner";
import SwitchTab from "../../common/dark-light";
import Services from "./services";
import About from "./about";
import Video from "./video";
import Work from "./work";
import Consulting from "./consulting";
import Portfolio from "./portfolio";
import Team from "./team";
import Blog from "./blog";

const HomeTwo = ({addClass}) => {
    return (
        <>
            <SEO pageTitle="Consulting Business" />
            <SwitchTab addClass={addClass} />
            <HeaderTwo />
            <BannerTwo />
            <Services />
            <About />
            <Video />
            <Work />
            <Consulting />
            {/* <Portfolio /> */}
            <Team />
            <Blog />
            <FooterTwo />
        </>
    );
};

export default HomeTwo;
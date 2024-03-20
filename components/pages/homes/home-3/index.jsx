"use client"
import SEO from "@/components/data/seo";
import HeaderThree from "@/components/layout/headers/header-three";
import SwitchTab from "../../common/dark-light";

const HomeThree = ({addClass}) => {
    return (
        <>
            <SwitchTab addClass={addClass} />
            <SEO pageTitle="Business Solutions" />
            <HeaderThree />
        </>
    );
};

export default HomeThree;

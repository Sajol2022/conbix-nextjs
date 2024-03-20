"use client"
import React from 'react';
import HeaderOne from '../../../layout/headers/header-one';
import FooterOne from '../../../layout/footers/footer-one';
import BreadCrumb from '../../common/breadcrumb';
import ThreeColumns from './three-columns';
import SEO from '../../../seo';
import DarkRtl from '../../common/dark-light';

const PortfolioThreeColumns = () => {
    const switchClass = { class: "switch__tab-area-icon" };
    return (
        <>
            <SEO pageTitle='3 Columns' />
            <DarkRtl switchClass={switchClass} />
            <HeaderOne />
            <BreadCrumb title="3 Columns" innerTitle="Portfolio Grid" />
            <ThreeColumns />
            <FooterOne />            
        </>
    );
};

export default PortfolioThreeColumns;
"use client"
import React from 'react';
import HeaderOne from '../../../layout/headers/header-one';
import FooterOne from '../../../layout/footers/footer-one';
import BreadCrumb from '../../common/breadcrumb';
import FourColumns from './four-columns';
import SEO from '../../../seo';
import DarkRtl from '../../common/dark-light';

const PortfolioFourColumns = () => {
    const switchClass = { class: "switch__tab-area-icon" };
    return (
        <>
            <SEO pageTitle='4 Columns' />
            <DarkRtl switchClass={switchClass} />
            <HeaderOne />
            <BreadCrumb title="4 Columns" innerTitle="Portfolio Grid" />
            <FourColumns />
            <FooterOne />            
        </>
    );
};

export default PortfolioFourColumns;
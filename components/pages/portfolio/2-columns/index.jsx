"use client"
import React from 'react';
import HeaderOne from '../../../layout/headers/header-one';
import FooterOne from '../../../layout/footers/footer-one';
import BreadCrumb from '../../common/breadcrumb';
import TwoColumns from './two-columns';
import SEO from '../../../seo';
import DarkRtl from '../../common/dark-light';

const PortfolioTwoColumns = () => {
    const switchClass = { class: "switch__tab-area-icon" };
    return (
        <>
            <SEO pageTitle='2 Columns' />
            <DarkRtl switchClass={switchClass} />
            <HeaderOne />
            <BreadCrumb title="2 Columns" innerTitle="Portfolio Grid" />
            <TwoColumns />
            <FooterOne />            
        </>
    );
};

export default PortfolioTwoColumns;
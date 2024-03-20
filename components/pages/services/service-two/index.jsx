"use client"
import React from 'react';
import HeaderOne from '../../../layout/headers/header-one';
import FooterOne from '../../../layout/footers/footer-one';
import ServicesMain from './service-two';
import BreadCrumb from '../../common/breadcrumb';
import SEO from '../../../seo';
import DarkRtl from '../../common/dark-light';

const ServiceTwoPage = () => {
    const switchClass = { class: "switch__tab-area-icon" };
    return (
        <>
        <SEO pageTitle='Services Two' />
        <DarkRtl switchClass={switchClass} />
        <HeaderOne />
        <BreadCrumb title='Services Two' innerTitle='Services Two' />
        <ServicesMain />
        <FooterOne />
        </>
    );
};

export default ServiceTwoPage;
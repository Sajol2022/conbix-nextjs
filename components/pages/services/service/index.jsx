"use client"
import React from 'react';
import HeaderOne from '../../../layout/headers/header-one';
import FooterOne from '../../../layout/footers/footer-one';
import ServicesMain from './services';
import BreadCrumb from '../../common/breadcrumb';
import SEO from '../../../seo';
import DarkRtl from '../../common/dark-light';

const ServicePage = () => {
  const switchClass = { class: "switch__tab-area-icon" };
    return (
      <>
        <SEO pageTitle="Our Services" />
        <DarkRtl switchClass={switchClass} />
        <HeaderOne />
        <BreadCrumb title="Our Services" innerTitle="Our Services" />
        <ServicesMain />
        <FooterOne />
      </>
    );
};

export default ServicePage;
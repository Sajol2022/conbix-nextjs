import SEO from '@/components/data/seo';
import HeaderOne from '@/components/layout/headers/header-one';
import React from 'react';
import BreadCrumb from '../common/breadcrumb';
import FooterTwo from '@/components/layout/footers/footer-two';
import RequestQuoteMain from './request-quote';
import ScrollToTop from '../common/scroll/scroll-to-top';

const RequestQuotePage = () => {
    return (
        <>
            <SEO pageTitle="Request Quote" />
            <HeaderOne />
            <BreadCrumb title="Request Quote" innerTitle="Request Quote" />
            <RequestQuoteMain />
            <div className='all-footer'>
                <FooterTwo />
            </div>
            <ScrollToTop />
        </>
    );
};

export default RequestQuotePage;
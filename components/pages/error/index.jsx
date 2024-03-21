"use client";
import SEO from '@/components/data/seo';
import HeaderOne from '@/components/layout/headers/header-one';
import BreadCrumb from '../common/breadcrumb';
import Error from './error';
import FooterTwo from '@/components/layout/footers/footer-two';
import ScrollToTop from '../common/scroll/scroll-to-top';

const ErrorPage = () => {
    return (
        <>
            <SEO pageTitle='Not Found' />
            <HeaderOne />
            <BreadCrumb title='Not Found' innerTitle='404' />
            <Error />
            <div className='all-footer'>
                <FooterTwo />
            </div>
            <ScrollToTop />
        </>
    );
};

export default ErrorPage;
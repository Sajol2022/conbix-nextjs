"use client";
import Link from 'next/link';
import logo1 from "../../../public/assets/img/logo-6.png";
import logo2 from "../../../public/assets/img/logo-7.png";
import MainMenu from './header-menu';
import Search from './search';
import { useState } from 'react';
import MobileMenuOne from './menu_sidebar/menu-one';

const HeaderThree = () => {
    const [menuSidebar, setMenuSidebar] = useState(false);
    const [search, setSearch] = useState(false);
    return (
        <>
        <div className="header__three">
            <div className="topbar__three">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 col-lg-6">
                            <div className="topbar__three-left lg-t-center">
                                <a href="#"><i className="fas fa-bell icon-animation"></i>We help take your small business the next level.</a>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-6">
                            <div className="topbar__three-right t-right lg-t-center">
                                <ul>
                                    <li><a href="tel:(+107)555-0133"><i className="fas fa-phone-alt"></i>(+107) 555-0133</a></li>
                                    <li><a href="mailto:conbix@gmail.com"><i className="fas fa-envelope"></i>conbix@gmail.com</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="header__area header__sticky">
                <div className="container">
                    <div className="header__area-menubar three">
                        <div className="header__area-menubar-left">
                            <div className="header__area-menubar-left-logo">
                                <Link href='/'>
                                    <img className='dark-n' src={logo1.src} alt='logo' />
                                    <img className="light-n" src={logo2.src} alt="logo" />
                                </Link>
                            </div>
                        </div>
                        <div className="header__area-menubar-center">
                            <div className="header__area-menubar-center-menu three menu-responsive">
                                <MainMenu />
                            </div>
                        </div>
                        <div className="header__area-menubar-right">
                            <div className="header__area-menubar-right-box">
                                <div className="header__area-menubar-right-box-search">
                                    <div className="search">	
                                        <span className="header__area-menubar-right-box-search-icon open" onClick={() => setSearch(true)}>
                                            <i className="fal fa-search"></i>
                                        </span>
                                    </div>
                                    <Search isOpen={search} setIsOpen={setSearch} />
                                </div>
                                <div className="header__area-menubar-right-box-btn">
                                    <Link className="btn-seven" href="/request-quote">Get Started<i className="far fa-chevron-double-right"></i></Link>
                                </div>
                                <div className="header__area-menubar-right-responsive-menu menu__bar">
                                    <i className="flaticon-menu" onClick={() => setMenuSidebar(true)}></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <MobileMenuOne isOpen={menuSidebar} setIsOpen={setMenuSidebar} />
        </>
    );
};

export default HeaderThree;
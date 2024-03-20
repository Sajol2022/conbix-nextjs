import blogData from '@/components/data/blog-data';
import Link from 'next/link';
import React, { useState } from 'react';

const Blog = () => {
    const portfolioItem = blogData.slice(0, 3);
    const [active, setActive] = useState(1);
    const handelActive = (index) => {
        setActive(index);
    };
    return (
        <>
            <div className="blog__three dark__image section-padding">
                <div className="container">
                    <div className="row align-items-end mb-45">
                        <div className="col-xl-12">
                            <div className="blog__three-title t-center">
                                <span className="subtitle-three">From the blog</span>
                                <h2>News & Articles</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {portfolioItem?.map((data, index) => (
                        <div className="col-xl-4 col-lg-6 mt-25" key={index}>
                            <div onMouseEnter={() => handelActive(index)}
                                className={`blog__three-item ${ active === index ? "blog__three-item-hover" : "" }`}>
                                <div className="blog__three-item-image">
                                    <Link href={`/blog/${data.id}`}><img src={data.image.src} alt="image" /></Link>
                                </div>
                                <div className="blog__three-item-content">
                                    <div className="blog__three-item-content-meta">
                                        <ul>
                                            <li><a href="#"><i className="far fa-user"></i>By-Admin</a></li>
                                            <li><a href="#"><i className="far fa-comment-dots"></i>Comments ({data.comment})</a></li>
                                        </ul>
                                    </div>
                                    <h4><Link href={`/blog/${data.id}`}>{data.title}</Link></h4>
                                    <div className="blog__three-item-content-btn">
                                        <Link className="simple-btn-1" href={`/blog/${data.id}`}>Read More<i className="far fa-chevron-double-right"></i></Link>							
                                    </div>
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>            
        </>
    );
};

export default Blog;
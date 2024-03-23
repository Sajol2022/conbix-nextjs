import React, { useState } from 'react';
import BlogSidebar from '../blog-sidebar/blog-sidebar';
import Pagination from '../blog/pagination';
import blogData from '../../../data/blog-data';
import Link from 'next/link';


const BlogStandardMain = () => {
    const blogItemShow = 3;
    const [currentPage, setCurrentPage] = useState(0);
    const totalPages = Math.ceil(blogData.length / blogItemShow);
    const startIndex = currentPage * blogItemShow;
    const endIndex = startIndex + blogItemShow;
    const currentBlogItems = blogData.slice(startIndex, endIndex);
    const handleNextPage = () => {
        if (currentPage < totalPages - 1) {
        setCurrentPage(currentPage + 1);
        }
    };
    const handlePrevPage = () => {
        if (currentPage > 0) {
        setCurrentPage(currentPage - 1);
        }
    };
    return (
        <div className="blog__standard section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-8 lg-mb-50">
                        <div className="blog__standard-left">
                            {currentBlogItems?.map((data, id) => (
                                <div className="news__standard-left-item mb-50" key={id}>
                                    <div className="news__standard-left-item-image">
                                        <Link href={`/blog/${data.id}`}><img src={data.image.src} alt="image" /></Link>
                                    </div>
                                    <div className="news__standard-left-item-content">
                                        <div className="news__standard-left-item-content-meta">
                                            <ul>
                                                <li><a href="#"><i className="fal fa-user"></i>Admin</a></li>
                                                <li><a href="#"><i className="fal fa-calendar-alt"></i>{data.date}, March 2024</a></li>
                                                <li><a href="#"><i className="fal fa-comment-dots"></i>{data.comment} Comment</a></li>
                                            </ul>
                                        </div>
                                        <h3 className="mb-10"><Link href={`/blog/${data.id}`}>{data.title}</Link></h3>
                                        <p>{data.des}. Look out into the Manhattan skyline from the open fully equipped kitchen.</p>                        
                                        <Link className="btn-one" href={`/blog/${data.id}`}>Read Details</Link>
                                    </div> 
                                </div>
                            ))}
                        </div>
                    <Pagination
                        currentPage={currentPage}
                        handlePrevPage={handlePrevPage}
                        totalPages={totalPages}
                        handleNextPage={handleNextPage}
                        setCurrentPage={setCurrentPage}
                    />
                    </div>
                    <div className="col-xl-4 col-lg-4">
                        <BlogSidebar />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogStandardMain;
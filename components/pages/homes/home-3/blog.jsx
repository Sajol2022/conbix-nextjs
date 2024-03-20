import React from 'react';
import blogData from '../../../data/blog-data';
import Link from 'next/link';

const Blog = () => {
    const blogIdsToDisplay = ['Olivia Hernandez', 'Robert Thompson', 'Rachel Johnson'];
    const blogItem = blogData.filter(blog => blogIdsToDisplay.includes(blog.author_name));
    const blogContent = {
        subtitle: 'Top Stories',
        title: 'Blog & Articles',
    }
    return (
        <div className="blog__three section-padding">
            <div className="container">
                <div className="row mb-30">
                    <div className="col-xl-12">
                        <div className="blog__three-title t-center">
                            <span className="subtitle-three">{blogContent.subtitle}</span>
                            <h2>{blogContent.title}</h2>                         
                        </div>
                    </div>
                </div>
                <div className="row">
                    {blogItem?.map((data, id) => (
                        <div className="col-xl-4 col-lg-6" key={id}>
                            <div className="blog__three-item" style={{backgroundImage: `url(${data.image.src})`}}>
                                <div className="blog__three-item-meta">
                                    <ul>
                                        <li><Link href={`/blog/${data.id}`}><i className="far fa-calendar-alt"></i>{data.date} {data.month}, {new Date().getFullYear()}</Link></li>
                                        <li><Link href={`/blog/${data.id}`}><i className="far fa-comment-dots"></i>Comments ({data.comment})</Link></li>									
                                    </ul>
                                </div>
                                <h4><Link href={`/blog/${data.id}`}>{data.title}</Link></h4>
                                <div className="blog__three-item-author">
                                    <img src={data.author_img} alt="avatar-image" />
                                    <h6>{data.author_name}</h6>
                                </div>
                                <div className="blog__three-item-btn">
                                    <Link href={`/blog/${data.id}`}>Read More<i className="far fa-long-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    ))}                  
                </div>
            </div>
        </div>
    );
};

export default Blog;
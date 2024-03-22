import blogData from '@/components/data/blog-data';
import Link from 'next/link';

const Blog = () => {
    const blogItem = blogData.slice(0, 3);
    const blogContent = {
        subtitle: 'From The Blog',
        title: 'Blog & Articles',
        btn_text: 'See more blog',
        btn_url: '/blog'
    }
    return (
        <div className="blog__two dark__image section-padding">
            <div className="container">
                <div className="row align-items-end mb-45">
                    <div className="col-xl-7 col-lg-8 lg-mb-30">
                        <div className="blog__two-title lg-t-center">
                            <span className="subtitle-two">{blogContent.subtitle}</span>
                            <h2>{blogContent.title}</h2>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-4 t-right lg-t-center">
                        <Link className="btn-six" href={blogContent.btn_url}>{blogContent.btn_text}<i className="far fa-chevron-double-right"></i></Link>
                    </div>
                </div>
                <div className="row">
                    {blogItem?.map((data, id) => (
                        <div className="col-xl-4 col-lg-6 mt-25" key={id}>
                            <div className="blog__two-item">
                                <div className="blog__two-item-image">
                                    <Link href={`/blog/${data.id}`}><img src={data.image.src} alt="image" /></Link>
                                    <div className="blog__two-item-image-date">
                                        <span className="text-three">{data.date}</span>
                                        <span className="text-five">Mar</span>
                                    </div>
                                </div>
                                <div className="blog__two-item-content">
                                    <div className="blog__two-item-content-meta">
                                        <ul>
                                            <li><a href="#"><i className="far fa-user"></i>By-Admin</a></li>
                                            <li><a href="#"><i className="far fa-comment-dots"></i>Comments ({data.comment})</a></li>
                                        </ul>
                                    </div>
                                    <h4><Link href={`/blog/${data.id}`}>{data.title}</Link></h4>
                                    <Link className="btn-six" href={`/blog/${data.id}`}>Read More<i className="far fa-chevron-double-right"></i></Link>
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
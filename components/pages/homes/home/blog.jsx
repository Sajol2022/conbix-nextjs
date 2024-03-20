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
        <div className="blog__one dark__image section-padding">
            <div className="container">
                <div className="row align-items-end mb-45">
                    <div className="col-xl-7 col-lg-8 lg-mb-30">
                        <div className="blog__one-title lg-t-center">
                            <span className="subtitle-one">{blogContent.subtitle}</span>
                            <h2>{blogContent.title}</h2>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-4 t-right lg-t-center">
                        <Link className="btn-two" href={blogContent.btn_url}>{blogContent.btn_text}<i className="far fa-chevron-double-right"></i></Link>
                    </div>
                </div>
                <div className="row">
                    {blogItem?.map((data, id) => (
                        <div className="col-xl-4 col-lg-6 mt-25" key={id}>
                            <div className="blog__one-item">
                                <div className="blog__one-item-image">
                                    <Link href={`/blog/${data.id}`}><img src={data.image.src} alt="blog" /></Link>
                                    <div className="blog__one-item-image-date">
                                        <span className="text-three">{data.date}</span>
                                        <span className="text-five">Apr</span>
                                    </div>
                                </div>
                                <div className="blog__one-item-content">
                                    <div className="blog__one-item-content-meta">
                                        <ul>
                                            <li><Link href="#"><i className="far fa-user"></i>By-Admin</Link></li>
                                            <li><Link href="#"><i className="far fa-comment-dots"></i>Comments ({data.comment})</Link></li>
                                        </ul>
                                    </div>
                                    <h4><Link href={`/blog/${data.id}`}>{data.title}</Link></h4>
                                    <p>{data.des}</p>
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
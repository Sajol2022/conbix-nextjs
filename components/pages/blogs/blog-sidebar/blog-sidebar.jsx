
import blogData from '@/components/data/blog-data';
import Link from 'next/link';

const BlogSidebar = () => {
    const blogPost = blogData.slice(0, 3);
    return (
        <div className="all__sidebar ml-25 xl-ml-0">
            <div className="all__sidebar-item">
                <h4>Search</h4>
                <div className="all__sidebar-item-search">
                    <form action="#">
                        <input type="text" placeholder="Search....." />
                        <button type="submit"><i className="fal fa-search"></i></button>
                    </form>
                </div>
            </div>
            <div className="all__sidebar-item">
                <h4>Recent Post</h4>
                <div className="all__sidebar-item-post">
                    {blogPost.map((data, id) => (
                        <div className="post__item" key={id}>
                            <div className="post__item-image">
                                <Link href={`/blog/${data.id}`}><img src={data.image.src} alt="" /></Link>
                            </div>
                            <div className="post__item-title">
                                <h6><Link href={`/blog/${data.id}`}>{data.title}</Link></h6>
                                <span><i className="far fa-calendar-alt"></i>Mar {data.date}, 2024</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="all__sidebar-item">
                <h4>Popular Tag</h4>
                <div className="all__sidebar-item-tag">
                    <ul>
                        {blogData.map((data, id) => (
                            <li key={id}><Link href={`/blog/${data.id}`}>{data.title.split(' ').slice(0, 1).join(' ')}</Link></li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default BlogSidebar;
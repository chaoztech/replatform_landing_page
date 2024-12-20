import Header from '../LandingPage/Header/Header';
import Footer from '../LandingPage/Footer/Footer';
import Blogs from '../LandingPage/Blogs/Blogs';

import "./BlogPage.scss";

const BlogPage = () => {

    return (
        <div className='blog-page'>    
            <Header />
            <div className='blog-section-container'>
                <Blogs />
            </div>
            <Footer />
        </div>
    )
}

export default BlogPage
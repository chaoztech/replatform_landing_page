import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';

import Cart from '../../../components/Cart/Cart';
import { loadMediumFeed } from "../../../utils/utils";
import "./Blogs.scss";

const Blogs = () => {
    const navigate = useNavigate();
    let location = useLocation()
    const isIncludeBlog = location.pathname.includes("/blogs"); 

    const [mediumPosts, setMediumPost] = useState([]);

    useEffect(() => {
        loadMediumFeed().then((resData) => {
            setMediumPost(resData);
        });
    }, []);

    return (
        <>
            {mediumPosts.length > 0 && 
                <section id="blog" className='blog-section'>
                    <div className="center">
                        <p className="service-chip">OUR BLOG</p>
                        <p className="section-heading">Stay Informed and Inspired!</p>
                    </div>
                    <div className="blog-cart-container">
                        {mediumPosts.map((blog, index) => {
                            if (!isIncludeBlog && index < 6) {
                                return( 
                                    <NavLink key={index} className='cart-wrapper-link' to={blog.link} target='_blank'>
                                        <Cart blog={blog} />
                                    </NavLink>
                                )
                            } else if(isIncludeBlog) {
                                return (
                                    <NavLink key={index} className='cart-wrapper-link' to={blog.link} target='_blank'>
                                        <Cart blog={blog} />
                                    </NavLink>
                                )
                            }
                        } )}
                        
                    </div>
                    {!isIncludeBlog &&
                        <div className='read-more-btn-container'>
                            <button className='button_32_secondary' onClick={()=> navigate("/blogs")}>
                                Read More...
                            </button>
                        </div>
                    }
                </section>
            }
        </>
    )
}

export default Blogs;
import React from 'react';

import DefaultImage from "../../assets/blogDefault.jpeg";
import "./Cart.scss";
import { getDate } from '../../utils/utils';

const Cart = ({ blog }) => {

    const parseHtmlContent = (htmlContent) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, "text/html");

    const contentObject = {
      p: Array.from(doc.querySelectorAll("p")).map((el) => el.innerText.trim()),
      img: Array.from(doc.querySelectorAll("img")).map((el) => ({
        src: el.src,
        alt: el.alt || "Image",
      })),
    };

    return contentObject;
  };

  
  const contentData = parseHtmlContent(blog.content);

  return (
    <div className='cart-wrapper'>
        <div className='blog-img'>
            <img src={DefaultImage} alt="blog_img" />
        </div>

        <p className='blog-date'>
            {getDate(blog.pubDate)}
        </p>
        <h2 className='blog-title'>
            {blog.title}
        </h2>

        <div className='blog-content'>
            <p>
                {contentData.p[0]}
            </p>
        </div>
    </div>
  );
};

export default Cart;

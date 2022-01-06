import React, { useEffect, useState } from 'react';
import { Card, Container, Row } from 'react-bootstrap';
import './Blogs.css';
import Jump from 'react-reveal/Jump';
import Blog from '../Blog/Blog';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('https://waterparkserver.herokuapp.com/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, []);
    return (
        <div className="my-5">
            <h6 className="text-info blog-title">Our blog</h6>
            <h2>LATEST BLOG & ARTICLES</h2>
            <p className="text-secondary">Our Latest Article For Our clients</p>
            <Container>
                <Jump>
                    <Row xs={1} md={2} className="g-4">
                        {
                            blogs.map(blog => <Blog
                                key={blog._id}
                                blog={blog}
                            ></Blog>
                            )
                        }
                    </Row>
                </Jump>
            </Container>
        </div >
    );
};

export default Blogs;
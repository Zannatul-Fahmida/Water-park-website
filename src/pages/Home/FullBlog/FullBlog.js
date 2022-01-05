import React, { useEffect, useState } from 'react';
import { Container, Image } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import NavTop from '../../Shared/NavTop/NavTop';

const FullBlog = () => {
    const { blogId } = useParams();
    const [blog, setBlog] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/blogs/${blogId}`)
            .then(res => res.json())
            .then(data => {
                setBlog(data)
            })
    }, [blogId]);
    return (
        <>
        <NavTop />
        <Navigation />
            <Container className="my-5">
                <Image fluid src={blog.image} />
                <h2>{blog.title}</h2>
                <h5>{blog.date}</h5>
                <p>{blog.description}</p>
            </Container>
            <Footer />
        </>
    );
};

export default FullBlog;
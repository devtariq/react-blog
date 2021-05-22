import React from 'react';
import {useState} from 'react';

const Home = () => {

    const [blogs, setBlogs] = useState([
        {title: 'My first react Article', body: 'lorem ipsum deaily content........', author: 'Rena Khan', id: 1},
        {title: 'We have 2nd Article', body: 'lorem ipsum deaily content', author: 'Auyub Khan', id: 2},
        {title: 'We are learning React', body: 'lorem ipsum deaily content', author: 'Rena Khan', id: 3},
        {title: 'First Step Article', body: 'lorem ipsum deaily content', author: 'Rena Khan', id: 4},
        {title: 'My first react Article', body: 'lorem ipsum deaily content', author: 'Rena Khan' ,id: 5},
    ]);

    return(
        <div className="home">
            {blogs.map( (blog) => (
                <div className="single-entry" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>{blog.body}</p>
                    <p>Written By: {blog.author}</p>
                </div>
            ))}
        </div>
    
    );
}

export  default Home;
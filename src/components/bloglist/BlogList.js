import React, { useState, useEffect } from 'react'
import BlogDataService from '../../services/blog.service'
import { Link } from 'react-router-dom'


const BlogList = () => {
    const [blogs, setBlogs] = useState([])
    const [currentBlog, setCurrentBlog] = useState(null)
    const [currentIndex, setCurrentIndex] = useState(-1)
    const [searchTitle, setSearchTitle] = useState('')

    useEffect(() => {
        retrieveBlogs();

    }, []);

    const onChangeSearchTitle = (e) => {
        const searchTitle = e.target.value;
        setSearchTitle(searchTitle);
    }

    const retrieveBlogs = () => {
        BlogDataService.getAll().then(response => {
            setBlogs(response.data);
            console.log(response.data);
        }).catch(e => {
            console.log(e);
        });
    };

    const refreshList = () => {
        retrieveBlogs();
        setCurrentBlog(null);
        setCurrentIndex(-1);
    }

    const setActiveBlog = (blog, index) => {
        setCurrentBlog(blog);
        setCurrentIndex(index);
    }

    const removeAllBlogs = () => {
        BlogDataService.removeAll().then(response => {
            console.log(response.data);
            refreshList();

        }).catch(e => {
            console.log(e);
        });
    }

    const findByTitle = () => {
        BlogDataService.findByTitle(searchTitle).then(response => {
            setBlogs(response.data);
            console.log(response.data);
        }).catch(e => {
            console.log(e);
        });
    }


  return (
    <div></div>
  )
}

export default BlogList
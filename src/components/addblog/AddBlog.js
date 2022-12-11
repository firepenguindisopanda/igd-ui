import React, { useState } from 'react';
import BlogDataService from '../../services/blog.service';
import './addblog.scss'

const AddBlog = () => {
    const initialBlogState = {
        id: null,
        title: "",
        description: "",
        url: "",
        published: false
    };
    const [blog, setBlog] = useState(initialBlogState);
    const [submitted, setSubmitted] = useState(false);
    const onChangeTitle = (e) => {
        const title = e.target.value;
        setBlog({ ...blog, title: title });
    }
    const onChangeDescription = (e) => {
        const description = e.target.value;
        setBlog({ ...blog, description: description });
    }
    const onChangeUrl = (e) => {
        const url = e.target.value;
        setBlog({ ...blog, url: url });
    }

    const saveBlog = async () => {
        let data = {
            title: blog.title,
            description: blog.description,
            url: blog.url
        };
        try {
            let response = await BlogDataService.create(data);
            console.log(response.data);
            setSubmitted(true);
        }catch (e) {
            console.log(e);
        }
        

    }
    const newBlog = () => {
        setBlog(initialBlogState);
        setSubmitted(false);
    }
    return (
        <div className='container submit-form'>
            {
                submitted ? (
                    <div className='row'>
                        <div className='col-md-12'>
                            <h4>You submitted successfully!</h4>
                            <button className='btn btn-primary btn-lg' onClick={newBlog}>
                                Add new blog
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className='form-group'>
                                <label htmlFor='title'>Title</label>
                                <input
                                    type='text'
                                    className='form-control'
                                    id='title'
                                    required
                                    value={blog.title}
                                    onChange={onChangeTitle}
                                    name='title'
                                />
                            </div>
                            <div className='form-group'>
                                <label htmlFor='description'>Description</label>
                                <input
                                    type='text'
                                    className='form-control'
                                    id='description'
                                    required
                                    value={blog.description}
                                    onChange={onChangeDescription}
                                    name="description"
                                />
                            </div>
                            <div className='form-group'>
                                <label htmlFor='url'>
                                    URL
                                </label>
                                <input
                                    type='text'
                                    className='form-control'
                                    id='url'
                                    required
                                    value={blog.url}
                                    onChange={onChangeUrl}
                                    name='url'
                                />
                            </div>
                            <button className='btn btn-primary btn-lg' onClick={saveBlog}>
                                Submit
                            </button>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default AddBlog
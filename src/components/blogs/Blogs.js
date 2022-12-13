import React, { useState, useEffect } from 'react'
import BlogDataService from '../../services/blog.service'
import './blogs.scss'
import { withRouter } from '../../common/with-router'

const Blogs = (props) => {

    const [currentBlog, setCurrentBlog] = useState({
        id: null,
        title: '',
        description: '',
        url: '',
        published: false
    });
    const [message, setMessage] = useState('')

    const onChangeTitle = (e) => {
        const title = e.target.value;
        setCurrentBlog({ ...currentBlog, title: title });
    }
    const onChangeDescription = (e) => {
        const description = e.target.value;
        setCurrentBlog({ ...currentBlog, description: description });
    }
    const onChangeUrl = (e) => {
        const url = e.target.value;
        setCurrentBlog({ ...currentBlog, url: url });
    }

    const getBlog = async (id) => {
        try {
            let response = await BlogDataService.get(id);
            setCurrentBlog(response.data);
            console.log(response.data);
        } catch (e) {
            console.log(e);
        }
    }

    const updatePublished = async (status) => {
        let data = {
            id: currentBlog.id,
            title: currentBlog.title,
            description: currentBlog.description,
            url: currentBlog.url,
            published: status
        };
        try {
            let response = await BlogDataService.update(currentBlog.id, data);
            setCurrentBlog({ ...currentBlog, published: status });
            console.log(response.data);
        } catch (e) {
            console.log(e);
        }
    }

    const updateBlog = async () => {
        let data = {
            title: currentBlog.title,
            description: currentBlog.description,
            url: currentBlog.url
        };
        try {
            let response = await BlogDataService.update(currentBlog.id, data);
            console.log(response.data);
            setMessage('The blog was updated successfully!');
        } catch (e) {
            console.log(e);
        }
    }

    const deleteBlog = async () => {
        try {
            let response = await BlogDataService.remove(currentBlog.id);
            console.log(response.data);
            props.router.navigate('/blogs');
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getBlog(props.router.params.id);
    }, [props.router.params.id]);
    return (
        <div className='container'>
            {
                currentBlog ? (
                    <div className='row'>
                        <div className='col-md-12'>
                            <h4>Blog</h4>
                            <form>
                                <div className='form-group'>
                                    <label htmlFor='title'>Title</label>
                                    <input
                                        type="text"
                                        className='form-control'
                                        id="title"
                                        value={currentBlog.title}
                                        onChange={onChangeTitle}
                                    />
                                </div>
                                <div className='form-group'>
                                    <label htmlFor='description'>Description: </label>
                                    <input
                                        type="text"
                                        className='form-control'
                                        id="title"
                                        value={currentBlog.description}
                                        onChange={onChangeDescription}
                                    />
                                </div>
                                <div className='form-control'>
                                    <label htmlFor="url">URL</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="url"
                                        value={currentBlog.url}
                                        onChange={onChangeUrl}
                                    />
                                </div>
                            </form>
                            <div className='row mt-2'>
                                <div className='col-md-4'>
                                    {
                                        currentBlog.published ? (
                                            <button
                                                className='btn btn-primary mr-2'
                                                onClick={() => updatePublished(false)}
                                            >
                                                Unpublish Blog
                                            </button>
                                        ) : (
                                            <button
                                                className='btn btn-secondary mr-2'
                                                onClick={() => updatePublished(true)}
                                            >
                                                Publish Blog
                                            </button>
                                        )
                                    }
                                </div>
                                <div className='col-md-4'>
                                    <button
                                        className='btn btn-primary mr-2'
                                        onClick={deleteBlog}
                                    >
                                        Delete Blog
                                    </button>
                                </div>
                                <div className='col-md-4'>
                                    <button
                                        type='submit'
                                        className='btn btn-primary mr-2'
                                        onClick={updateBlog}
                                    >
                                        Update Blog
                                    </button>
                                </div>
                            </div>
                            <div className='text-center text-secondary'>
                                {message}
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className='row'>
                        <div className='col-md-12'>
                            <span>Please Click on a Blog....</span>
                        </div>
                    </div>
                )
            }
        </div>
    );
}

export default withRouter(Blogs);
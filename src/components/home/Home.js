import React, { useState, useEffect } from 'react'
import UserService from '../../services/user.service'

const Home = () => {
    const [content, setContent] = useState('');
    useEffect(() => {
        UserService.getPublicConent().then(
            (response) => {
                setContent(response.data);
            },
            (error) => {
                const _content = (error.response && error.response.data) || error.message || error.toString();
                setContent(_content);
            }
        );
    }, []);

    return (
        <div className="jumbotron p-2 text-center">
            <h1 className="display-4">Welcome to Intergalactic Digital</h1>
            <p className="lead">Create Read Update Delete Blogs, Login and Logout. Users will have roles associated to them</p>
            <hr className="my-4" />
            <p>We are going to be able to login and see blogs and then improve as we develope more!</p>

            <button type="button" className="btn btn-primary btn-lg rounded-0">Learn more</button>
            <div className='row'>
                <div className='col-md-12'>
                    {content}
                </div>
            </div>
        </div>
    )
}

export default Home
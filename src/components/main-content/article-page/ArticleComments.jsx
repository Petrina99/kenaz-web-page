import React from 'react'

import './styles/articleComments.scss';

import profilePic from '../../../assets/comment-image.svg';

export const ArticleComments = () => {

    const authors = ['Matt Addams', 'John Toews', 'Andrew Enns'];

    const commentContent = 'Molestias ultricies, ante quam urna ut volutpat, egestas dolor dui, nec hac ultrices nulla non netus. Placerat vehicula donec non suscipit egestas, augue vel suspendisse. Et felis venenatis blandit sed est ultrices, adipiscing urna.'
    

    return (
        <section className='article-comments-container'>
            <div className='comments-heading'>
                <h3>Comments</h3>
            </div>
            <div className='comments-group'>
                {authors.map((item) => (
                    <div className='comments-group-item' key={item}>
                        <div className='comment-item-img'>
                            <img src={profilePic} />
                        </div>
                        <div className='comment-item-info'>
                            <h3>{item}</h3>
                            <p className='comment-item-date'>Jan 2nd, 2012 2:35 pm</p>
                            <p className='comment-item-reply'>Reply</p>
                            <p className='comment-item-content'>{commentContent}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className='add-comment-div'>
                <h3>Add Your Comment</h3>
                <p>
                    {commentContent}
                </p>
                <input type='text' placeholder='Name' name='name' />
                <input type='email' placeholder='Email Address' name='email' />
                <textarea type='text' placeholder='Comment' name='comm' />
                <button type='button'>Submit</button>
            </div>
        </section>
    )
}

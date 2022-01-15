import React from 'react';

const Createpost = () => {
    return (
        <div className='createPostPage'>
            <div className='cpContainer'>
                <h1>Create a Post</h1>
                <div className='inputGp'>
                    <label>
                        Title
                    </label>
                    <input placeholder='Title...'>
                    </input>
                </div>
                <div className='inputGp'>
                    <label>
                        Post
                    </label>
                    <textarea placeholder="Post..." />
                </div>
                <button>
                    Submit Post
                </button>
            </div>
        </div>
    );
}

export default Createpost;

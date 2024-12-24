'use client';

import React, { useState } from 'react';

export default function Page() {
    // Initial state for the form
    const initialState = {
        title: '',
        img: '',
        category: '',
        author: '',
        brief: '',
        validate: '',
    };

    // State management for form input
    const [text, setText] = useState(initialState);

    // Handle form input changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setText({ ...text, [name]: value });
    };

    return (
        <main id="main">
            <section className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-10">
                        <div className="row d-flex justify-content-center mt-5">
                            <div className="col-lg-12">
                                <div className="row">
                                    <div className="col-lg-12 text-center mb-5">
                                        <h1 className="page-title">Create New Post</h1>
                                    </div>
                                </div>
                                <form>
                                    <div className="row">
                                        <div className="col-lg-6 mb-3">
                                            <label htmlFor="title">Title</label>
                                            <input
                                                type="text"
                                                id="title"
                                                name="title"
                                                className="form-control"
                                                placeholder="Enter Title"
                                                value={text.title}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

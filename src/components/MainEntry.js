import React from 'react';

export default function MainEntry({ params }) {
    const { title, content, tags, date, username } = params;

    // Format the date
    const formattedDate = new Date(date).toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short'
    });

    return (
        <section className='hidden'>
            <div className="container">
                <div className="main-entry">
                    <div className="columns">
                        <div className='article'>
                            <h2 className="text-primary-400 fw-4 fs-heading ff-heading">
                                {title}
                            </h2>
                            <p className="fw-2 fs-body text-neutral-100 ff-body">
                                {content}<a href="https://www.najeebyusuf.com" className="read-more | text-primary-400">...read more</a>
                            </p>
                            <div className="date-user">
                                <p className="date | fw-6 text-neutral-100">{formattedDate}</p>
                                <p className="user | fw-3 text-neutral-100">@{username}</p>
                            </div>
                            <div className='tags'>
                                {tags && tags.map((value, index) => (
                                    <button className="button btn-inverse text-primary-400 fw-500" key={index}>
                                        {value}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

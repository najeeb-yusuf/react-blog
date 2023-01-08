import React from 'react';

export default function MainEntry(params) {
    return (
        <section className='hidden'>
            <div className="container">
                <div className="main-entry">
                    <div className="columns">
                        <div className='article'>
                            <h2 className="text-primary-400 fw-4 fs-heading ff-heading">
                                15 Disadvantages Of Freedom And How You Can Workaround It.
                            </h2>
                            <p className="fw-2 fs-body text-neutral-100 ff-body">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum <a className="read-more | text-primary-400">...read more</a>
                            </p>
                            <div className="date-user">
                                <p className="date | fw-6 text-neutral-100"> 27 May</p>
                                <p className="user | fw-3 text-neutral-100"> @notnajeeb</p>
                            </div>
                            <div className='tags'>
                                <button className="button btn-inverse text-primary-400 fw-500">
                                    #meditation
                                </button>
                                <button className="button btn-inverse text-primary-400 fw-500">
                                    #mentalpeace
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </section>
    )
}


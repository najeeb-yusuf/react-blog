import React from 'react';
import MainEntry from './MainEntry';

export default function Main() {
    return(
        <main>
            <div className="container">
                <h4 className='post-type | fw-heading text-primary'> Latest</h4>
                <MainEntry />
                <MainEntry />
                <MainEntry />
                <MainEntry />
                <MainEntry />
                <MainEntry />
            </div>
        </main>
    )
}
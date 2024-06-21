import React, { useEffect, useState } from 'react';
import MainEntry from './MainEntry';
import articlesData from './data/articles.json'; 




export default function Main() {
    const articles = articlesData;
    return (
        <main>
            <div className="container">
                <h4 className='post-type | fw-heading text-primary'>Latest</h4>
                {articles.map((article, index) => (
                    <MainEntry key={index} params={article} />
                ))}
            </div>
        </main>
    );
}

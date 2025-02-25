import React from 'react';
import { useLocation } from 'react-router-dom';

export default function VideoDetail() {
    const { 
        state: { video },
     } = useLocation();

     const { title, description } = video.snippet;

    return (
        <section>
            <article>
                <iframe
                    id='player'
                    type='text/html'
                    width='100%'
                    height='640'
                    src={`https://www.youtube.com/embed/${video.id}`}
                    frameBorder='0'
                    title={title}
                ></iframe>
                <div>
                    <h2>{title}</h2>
                    <pre>{description}</pre>
                </div>
            </article>
        </section>
    );
}

